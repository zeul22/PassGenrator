import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-black h-screen">
        <div
          className=" w-full max-w-md h-auto mx-auto py-12
       flex flex-col justify-center items-center"
        >
          <div className="w-full justify-center flex bg-pink-600 text-white mb-3">
            ALL THE FOLLOWINGS ARE TO BE MADE
          </div>
          <div className="flex flex-col mx-2 ">
            <div
              className="bg-red-300 p-4 rounded-2xl hover:text-white my-2
               hover:bg-red-400 transition duration-200 hover:cursor-pointer"
            >
              <Link to={"/dashboard"}>Dashboard</Link>
            </div>
            <div
              className="bg-red-300 p-4 rounded-2xl hover:text-white my-2
               hover:bg-red-400 transition duration-200 hover:cursor-pointer"
            >
              <Link to={"/platform"}>Trading Platform</Link>
            </div>
            <div
              className="bg-red-300 p-4 rounded-2xl hover:text-white my-2
               hover:bg-red-400 transition duration-200 hover:cursor-pointer"
            >
              <Link to={"/chatapp"}>Chat Application</Link>
            </div>
            <div
              className="bg-red-300 p-4 rounded-2xl hover:text-white my-2
               hover:bg-red-400 transition duration-200 hover:cursor-pointer"
            >
              <Link to={"/"}>3D Website</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
