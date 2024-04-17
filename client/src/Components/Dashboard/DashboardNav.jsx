import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth.jsx"; //can update & use Redux here

const DashboardNav = () => {
  const { isloggedin, authDetails } = useAuth();
  const navigate = useNavigate();
  const user = JSON.parse(authDetails);
  const isadmin = user.user.isAdmin;

  useEffect(() => {
    if (!isloggedin) {
      navigate("/login");
    }
  }, [isloggedin]);

  return (
    <>
      <div className="bg-gray-400 w-full  max-w-2xl   rounded items-center absolute justify-center  left-1  md:left-12 lg:left-1/3  ">
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
            <Link to={"/dashboard/kpis"}>Sales</Link>
          </div>
          {isadmin && (
            <div className="hover:cursor-pointer hover:text-red-400 transition duration-200">
              <Link to={"/dashboard/kpis"}>Admin</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
