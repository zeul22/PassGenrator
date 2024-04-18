import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import useGetDashboardData from "../../hooks/useGetDashboardData.js";

const Associations = () => {
  const columns = useMemo(
    () => [
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
    ],
    []
  );
  const [datarender, setDatarender] = useState([]);
  const { loading, dashboardData } = useGetDashboardData();

  useEffect(() => {
    if (!loading) {
      setDatarender(dashboardData);
    }
  }, [loading, dashboardData]);

  const data = useMemo(
    () => (loading ? [] : dashboardData),
    [loading, dashboardData]
  );

  const tableInstance = useTable(
    { columns, data, initialState: { pageSize: 5 } },
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

export default Associations;
