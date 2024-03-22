import React from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <>
      <div className="bg-gray-300 w-full mx-auto max-w-lg  rounded items-center h-auto">
        <div className="flex justify-evenly">
          <div className="hover:cursor-pointer hover:text-red-400 transition duration-200">
            <Link to={"/dashboard/"}>Home</Link>
          </div>
          <div className="hover:cursor-pointer hover:text-red-400 transition duration-200">
            <Link to={"/dashboard/analytics"}>Analytics</Link>
          </div>
          <div className="hover:cursor-pointer hover:text-red-400 transition duration-200">
            <Link to={"/dashboard/market"}>Market</Link>
          </div>
          <div className="hover:cursor-pointer hover:text-red-400 transition duration-200">
            <Link to={"/dashboard/kpis"}>KPIs</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
