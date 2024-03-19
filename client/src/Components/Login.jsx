import React from "react";

const Login = () => {
  return (
    <>
      <div className="w-full max-w-sm h-auto mx-auto my-12 bg-red-300 p-8 rounded-2xl ">
        <form className="flex flex-col justify-center items-center">
          <input
            className="placeholder-gray-500 transition duration-200 px-3 py-4
             hover:bg-gray-300 focus:bg-gray-300 flex justify-center my-4 rounded-lg border
              bg-transparent focus:outline-none focus:border-transparent"
            type="text"
            placeholder="Username"
          />
          <input
            className="placeholder-gray-500 transition duration-200 px-3 py-4
             hover:bg-gray-300 focus:bg-gray-300 flex justify-center my-4 rounded-lg border
              bg-transparent focus:outline-none focus:border-transparent"
            type="password"
            placeholder="Password"
          />
          <button
            className="px-12 py-4 flex justify-center my-4 bg-transparent 
          focus:outline-none border focus:border-transparent rounded-lg hover:bg-gray-500 transition duration-200 hover:text-white 
          hover:outline-non hover:border-transparent"
          >
            Log In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
