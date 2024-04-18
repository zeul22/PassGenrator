import React, { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../store/auth";
import { useTable, useSortBy, usePagination } from "react-table";
import useGetDashboardData from "../../hooks/useGetDashboardData.js";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DragDrop = () => {
  const [numPages, setNumPages] = useState(0);
  const [datarender, setDatarender] = useState([]);
  const { loading, dashboardData } = useGetDashboardData();
  const [searchValue, setSearchValue] = useState("");
  const { authDetails } = useAuth();
  const user = JSON.parse(authDetails);
  function convertToDateString(text) {
    try {
      const dateObj = typeof text === "string" ? new Date(text) : text;

      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
      const day = String(dateObj.getDate()).padStart(2, "0");

      return `${day}/${month}/${year}`;
    } catch (error) {
      console.error("Error converting date:", error);
      return "Invalid Date";
    }
  }
  const columns = useMemo(() => {
    const baseColumns = [
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Amount (Rs)",
        accessor: "amount",
      },
      {
        Header: "Type of Work",
        accessor: "typeofwork",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Created at",
        accessor: (row) => {
          return row.createdAt ? convertToDateString(row.createdAt) : "No Data";
        },
      },
      {
        Header: "Work Status",
        accessor: "workStatus",
      },
    ];

    if (user.user.isAdmin) {
      baseColumns.push({
        Header: "Edit",
        accessor: (row) => {
          // Edit the Work Status
          console.log(row._id);

          return (
            <>
              <button className="bg-red-600 p-2 rounded-md">Change</button>
            </>
          );
        },
      });
    }

    return baseColumns;
  }, [user.user.isAdmin]);

  const data = useMemo(
    () => (loading ? [] : dashboardData),
    [loading, dashboardData]
  );
  const filteredData = useMemo(() => {
    if (!searchValue) return data;
    return data.filter((item) =>
      item.company.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [data, searchValue]);

  const tableInstance = useTable(
    { columns, data: filteredData, initialState: { pageSize: 10 } },
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

  const handleExportToPDF = async () => {
    const pdf = new jsPDF({ orientation: "landscape" });
    const tableToExport = document.querySelector("#table-to-export");
    const tableData = [];
    if (pageCount == 1) {
      if (!user.user.isAdmin) {
        let rows = tableToExport.querySelectorAll("tr");
        rows.forEach((row, rowIndex) => {
          const rowData = [];
          rowData.push(rowIndex);

          const cells = row.querySelectorAll("td");
          console.log(cells);
          cells.forEach((cell, cellIndex) => {
            const cellText = cell.textContent.trim() || "";
            rowData.push(cellText);
          });
          tableData.push(rowData);
        });
      } else {
        let rows = tableToExport.querySelectorAll("tr");
        let numColumns = 7;
        for (let i = 0; i < rows.length; i++) {
          const rowData = [];
          rowData.push(i);

          const cells = rows[i].querySelectorAll("td");
          console.log(cells);
          for (let j = 0; j < numColumns; j++) {
            const cellText =
              j < cells.length ? cells[j].textContent.trim() || "" : ""; // Ensure cellText is not undefined if there are fewer cells in the row
            rowData.push(cellText);
          }
          tableData.push(rowData);
        }
      }
    }
    let count = 1;
    while (count < pageCount) {
      await nextPage();
      if (!user.user.isAdmin) {
        const currentPageRows = tableInstance.rows;
        currentPageRows.forEach((row, rowIndex) => {
          const rowData = [];

          rowData.push(rowIndex + 1); // Update index for next pages
          rowIndex++;
          row.cells.forEach((cell) => {
            const cellText = cell.value || "";
            rowData.push(cellText);
          });
          tableData.push(rowData);
        });
      } else {
        const currentPageRows = tableInstance.rows;
        for (let rowIndex = 0; rowIndex < currentPageRows.length; rowIndex++) {
          const row = currentPageRows[rowIndex];
          const rowData = [];

          rowData.push(rowIndex + 1); // Update index for next pages
          for (let cellIndex = 0; cellIndex < row.cells.length; cellIndex++) {
            const cell = row.cells[cellIndex];
            const cellText = cell.value || "";
            rowData.push(cellText);
          }
          tableData.push(rowData);
        }
      }
      count++;
    }
    const headersToPrint = user.user.isAdmin
      ? columns.slice(0, 7).map((column) => column.Header)
      : columns.map((column) => column.Header);
    pdf.autoTable({
      head: [["#", ...headersToPrint]],
      body: tableData,
      startY: 10,
      margin: { top: 20, left: 10, right: 10, bottom: 10 }, // Adjust margins
      styles: {
        cellPadding: 0.5,
        fontSize: 12,
      },
      columnStyles: { 0: { cellWidth: 10 }, 1: { cellWidth: 50 } },
    });
    pdf.save(`workReport.pdf`);
    gotoPage(0);
  };

  return (
    <div>
      <div className="bg-gray-600 rounded-md text-white items-center flex justify-center">
        {loading ? (
          <span>Loading ...</span>
        ) : (
          <div className="w-full flex flex-col">
            <div className=" m-2 flex justify-center">
              <input
                type="text"
                placeholder="Search by Company Name"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="p-2 mb-6 bg-gray-400 rounded-xl text-black border-none outline-none"
              />
            </div>

            <table
              {...getTableProps()}
              // ref={tableRef}
              className="w-full flex flex-col"
              id="table-to-export"
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
      <div className="flex items-center justify-center bg-gray-800 p-2">
        <button
          className="bg-green-600 text-white p-2 mx-3 rounded-md"
          onClick={handleExportToPDF}
        >
          Export to PDF
        </button>
      </div>
    </div>
  );
};

export default DragDrop;
