import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../store/auth";
import { useTable } from "react-table";
import useGetDashboardData from "../../hooks/useGetDashboardData.js";

const DragDrop = () => {
  const columns = [
    {
      Header: "Company",
      accessor: "company",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Type of Work",
      accessor: "type of work",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "State",
      accessor: "state",
    },
  ];

  const { loading, dashboardData } = useGetDashboardData();
  // const tableInstance = useMemo(
  //   () => useTable({ columns, data: loading ? [] : dashboardData }),
  //   [columns, loading, dashboardData] // Only recreate on changes to these values
  // );

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   tableInstance;

  return (
    <div className="bg-gray-800 h-screen text-white items-center flex justify-center">
      {loading ? (
        <span>Loading ...</span>
      ) : (
        <table>
          <thead>
            {/* {headerGroups.map((header) => (
              <tr {...header.getHeaderGroupProps()}>
                {header.headers.map((head) => (
                  <th {...header.getHeaderProps}>{head.render("Header")}</th>
                ))}
              </tr>
            ))} */}

            <tr>
              <th>Company</th>
              <th>Amount {"(Rs)"}</th>
              <th>Work</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.length > 0 && (
              <>
                {dashboardData.map((data) => (
                  <tr key={data._id}>
                    <td>{data.company}</td>
                    <td>{data.amount}</td>
                    <td>{data.typeofwork}</td>
                    <td>{data.city}</td>
                    <td>{data.state}</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DragDrop;
