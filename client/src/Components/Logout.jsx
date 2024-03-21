import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const Logout = () => {
  const { logoutUser } = useAuth();
  useEffect(() => {
    logoutUser();
  }, [logoutUser]);

  return (
    <>
      <div className=" w-full max-w-sm h-auto mx-auto my-12 justify-center p-8 bg-red-100 rounded-lg">
        <div className="flex flex-col my-3 ">
          <div className="text-xl text-red-800 mx-auto">LogOut Successful!</div>
          <div className="text-sm   my-2 mx-auto">
            By mistake?
            <Link className=" mx-1 text-red-600" to={"/login"}>
              Login Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
