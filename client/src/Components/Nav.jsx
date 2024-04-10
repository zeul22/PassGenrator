import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
const Nav = () => {
  const { isloggedin, setToken, setauthUser } = useAuth();
  // console.log("value :",isloggedin);

  return (
    <>
      <div className="text-gray-50 bg-black py-6 flex ">
        <div className="w-3/4 mx-4 flex justify-end">Web Templates</div>
        <div className="w-2/3 flex justify-end">
          <div className="bg-red-400 px-2 mx-3 rounded-3xl ">
            <Link to="/">Home</Link>
          </div>
          <div className="bg-red-400 px-2 mx-3 rounded-3xl  ">
            <Link to="/gen">Working</Link>
          </div>
          <div className="bg-red-400 px-2 mx-3  rounded-3xl  ">
            <Link to="/a">About</Link>
          </div>
          <div className="bg-red-400 px-2 mx-3  rounded-3xl  ">
            <Link to="/c">Contact</Link>
          </div>

          {!isloggedin ? (
            <div className="bg-red-400 px-2 mx-3  rounded-3xl  ">
              <Link to="/login">Login</Link>
            </div>
          ) : (
            <div className="bg-red-400 px-2 mx-3  rounded-3xl  ">
              <Link to="/logout">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setToken(null);
                    setauthUser(null);
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("authUser");
                  }}
                >
                  Logout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
