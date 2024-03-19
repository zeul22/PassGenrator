import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="text-gray-50 bg-black py-6 flex ">
        <div className="w-3/4 mx-4 flex justify-end">
          Password Generator
        </div>
        <div className="w-2/3 flex justify-end">
          <div className="bg-red-400 px-2 mx-3 rounded-3xl ">
            <Link to="/" >
            Home
            </Link>
          </div>
          <div className="bg-red-400 px-2 mx-3 rounded-3xl  ">
          <Link to="/gen" >
            Working
            </Link>
          </div>
          <div className="bg-red-400 px-2 mx-3  rounded-3xl  ">
          <Link to="/a" >
            About
            </Link>
          </div>
          <div className="bg-red-400 px-2 mx-3  rounded-3xl  ">
          <Link to="/c" >
            Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
