import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const default_data = {
    username: "",
    password: "",
  };
  const [data, setData] = useState(default_data);
  const [fieldsFilled, setFieldsFilled] = useState(false);

  const handleDataChange = (name) => (e) => {
    setData({
      ...data,
      [name]: e.target.value,
    });

    if (name === "username" || name === "password") {
      const fieldsFilled = data.username != "" && data.password != "";
      setFieldsFilled(fieldsFilled);
    }
  };

  const SubmitContact = async (e) => {
    e.preventDefault();
    if (data.username != "" && data.password != "") {
      try {
        console.log(data.username, data.password);

        const response = await axios.post(
          `${import.meta.env.VITE_APP_FETCH_URL}/users/login`,
          data
        );
        console.log(response.data);
        if (response.data) {
          setData(default_data);
          alert("Login Successful!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please complete the whole procedure");
    }
  };

  return (
    <>
      <div className="w-full max-w-sm h-auto mx-auto my-12 bg-red-300 p-8 rounded-2xl ">
        <form
          onSubmit={SubmitContact}
          className="flex flex-col justify-center items-center"
        >
          <input
            className="placeholder-gray-500 transition duration-200 px-3 py-4
             hover:bg-gray-300 focus:bg-gray-300 flex justify-center my-4 rounded-lg border
              bg-transparent focus:outline-none focus:border-transparent"
            type="text"
            value={data.username}
            onChange={handleDataChange("username")}
            placeholder="Username / Email"
          />
          <input
            value={data.password}
            onChange={handleDataChange("password")}
            className="placeholder-gray-500 transition duration-200 px-3 py-4
             hover:bg-gray-300 focus:bg-gray-300 flex justify-center my-4 rounded-lg border
              bg-transparent focus:outline-none focus:border-transparent"
            type="password"
            placeholder="Password"
          />
          <button
            disabled={!fieldsFilled}
            type="submit"
            className="px-12 py-4 flex justify-center my-4 bg-transparent 
          focus:outline-none border focus:border-transparent rounded-lg hover:bg-gray-500 transition duration-200 hover:text-white 
          hover:outline-non hover:border-transparent"
          >
            Log In
          </button>
          <div className="text-gray-800">
            Dont't have an account?
            <Link
              className="mx-2 text-red-500 hover:text-red-700 transition duration-200"
              to={`/signup`}
            >
              Signup
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
