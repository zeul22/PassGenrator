import React, { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../store/auth";
import { useTable, useSortBy, usePagination } from "react-table";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import useGetUsersData from "../../hooks/useGetUsersData.js";

const UsersTable = () => {
  const [numPages, setNumPages] = useState(0);
  function convertToDateString(text) {
    try {
      // Parse the ISO 8601 formatted string
      const dateObj = new Date(text);

      // Format the date object into DD/MM/YYYY format
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
      const day = String(dateObj.getDate()).padStart(2, "0");

      return `${day}/${month}/${year}`;
    } catch (error) {
      console.error("Error converting date:", error);
      // Handle potential errors (e.g., invalid format)
      return "Invalid Date"; // Or return a custom error message
    }
  }
  const columns = useMemo(
    () => [
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "First Name",
        accessor: "lname",
      },
      {
        Header: "Last Name",
        accessor: "fname",
      },
      {
        Header: "Joined at",
        accessor: (row) => {
          return row.createdAt ? convertToDateString(row.createdAt) : "No Data";
        },
      },
      {
        Header: "Admin State ",
        accessor: (row) => {
          return row.isAdmin ? "Yes" : "No";
        },
      },
    ],
    []
  );
  const [datarender, setDatarender] = useState([]);
  const { loading, usersData } = useGetUsersData();

  useEffect(() => {
    if (!loading) {
      setDatarender(usersData);
    }
  }, [loading, usersData]);

  const data = useMemo(() => (loading ? [] : usersData), [loading, usersData]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageSize: 15 } },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    canPreviousPage,
    canNextPage,
    previousPage,
    state: { pageIndex },
    pageCount,
    gotoPage,
  } = tableInstance;

  // const tableRef = useRef(null);

  // const handleExportToPDF = () => {
  //   html2canvas(tableRef.current).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     const ratio = canvas.width / canvas.height;
  //     const width = pdf.internal.pageSize.getWidth();
  //     const height = width / ratio;
  //     const numPagesToPrint = numPages
  //       ? Math.min(numPages, pageCount)
  //       : pageCount;
  //     for (let i = 0; i < numPagesToPrint; i++) {
  //       if (i > 0) {
  //         pdf.addPage();
  //       }
  //       pdf.addImage(imgData, "PNG", 0, 0, width, height);
  //     }
  //     pdf.save(`data_1_${numPages}.pdf`);
  //   });
  // };
  return (
    <div>
      <div className="bg-gray-600 rounded-md text-white items-center flex justify-center">
        {loading ? (
          <span>Loading ...</span>
        ) : (
          <div className="w-full flex flex-col">
            <table
              {...getTableProps()}
              // ref={tableRef}
              className="w-full flex flex-col"
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr
                    className="bg-red-600  flex justify-evenly"
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {headerGroup.headers.map((column) => (
                      <th
                        className="flex p-2 text-black sm:text-sm md:text-md lg:text-xl rounded-md w-full items-center"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        {column.isSorted && (
                          <span className="mx-2">
                            {column.isSortedDesc ? (
                              <FaArrowAltCircleDown />
                            ) : (
                              <FaArrowAltCircleUp />
                            )}
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="w-full flex flex-col" {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      className="hover:bg-gray-300 transition-all duration-200 hover:text-black flex justify-between"
                      {...row.getRowProps()}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td
                            className=" p-2  rounded-md w-full items-center"
                            {...cell.getCellProps()}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-center p-2 w-full">
              <button
                className="bg-gray-600 text-white rounded-md mx-3 p-2"
                disabled={pageIndex == 0 ? true : false}
                onClick={() => gotoPage(0)}
              >
                First
              </button>
              <button
                disabled={!canPreviousPage}
                className="bg-gray-600 text-white rounded-md mx-3 p-2"
                onClick={previousPage}
              >
                Previous
              </button>
              <span className="p-2 mx-2">
                {pageIndex + 1} of {pageCount}
              </span>
              <button
                disabled={!canNextPage}
                className="bg-gray-600 text-white rounded-md mx-3 p-2"
                onClick={nextPage}
              >
                Next
              </button>
              <button
                className="bg-gray-600 text-white rounded-md mx-3 p-2"
                disabled={pageIndex == pageCount - 1 ? true : false}
                onClick={() => gotoPage(pageCount - 1)}
              >
                last
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Export the data */}
      {/* <div className="flex items-center justify-center bg-gray-800 p-2">
        <div>
          <input
            type="number"
            placeholder="Number of Pages"
            className="p-2 bg-gray-600 rounded-md text-white border-none outline-none  w-[80px]"
            min={0}
            max={pageCount}
            value={numPages}
            onChange={(e) => setNumPages(e.target.value)}
          />
        </div>
        <button
          className="bg-green-600 text-white p-2 mx-3 rounded-md"
          onClick={handleExportToPDF}
        >
          Export to PDF
        </button>
      </div> */}
    </div>
  );
};

export default UsersTable;
