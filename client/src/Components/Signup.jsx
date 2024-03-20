import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Signup = () => {
  const default_data = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(default_data);
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("asdasd");

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleDataChange = (name) => (e) => {
    setData({
      ...data,
      [name]: e.target.value,
    });

    if (name === "username" || name === "password") {
      const fieldsFilled =
        data.username != "" &&
        data.password != "" &&
        data.fname != "" &&
        data.lname != "" &&
        data.email != "";
      setFieldsFilled(fieldsFilled);
    }
  };

  const SubmitContact = async (e) => {
    e.preventDefault();
    if (
      captchaValue &&
      data.username != "" &&
      data.password != "" &&
      data.fname != "" &&
      data.lname != "" &&
      data.email != ""
    ) {
      try {
        // console.log(data);

        const response = await axios.post(
          `${import.meta.env.VITE_APP_FETCH_URL}/users/signup`,
          // "http://localhost:8080/users/signup",
          data
        );
        console.log(response.data);
        if (response.data) {
          setData(default_data);
          alert("Signup Successful!");
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
      <div className="w-full max-w-2xl h-auto mx-auto my-12 bg-red-300 p-8 rounded-2xl ">
        <form
          onSubmit={SubmitContact}
          className="flex flex-col justify-center items-center"
        >
          <div className="flex justify-evenly">
            <input
              className="placeholder-gray-500 transition duration-200 px-3 py-2
             hover:bg-gray-300 focus:bg-gray-300 flex justify-center my-4 mx-1 rounded-lg border
              bg-transparent focus:outline-none focus:border-transparent"
              type="text"
              value={data.fname}
              onChange={handleDataChange("fname")}
              placeholder="first name"
            />
            <input
              className="placeholder-gray-500 transition duration-200 px-3 py-2
             hover:bg-gray-300 focus:bg-gray-300 flex justify-center my-4 mx-1 rounded-lg border
              bg-transparent focus:outline-none focus:border-transparent"
              type="text"
              value={data.lname}
              onChange={handleDataChange("lname")}
              placeholder="last name"
            />
          </div>
          <input
            value={data.email}
            onChange={handleDataChange("email")}
            className="placeholder-gray-500 transition duration-200 px-3 py-4
             hover:bg-gray-300 focus:bg-gray-300 flex justify-center my-4 rounded-lg border
              bg-transparent focus:outline-none focus:border-transparent"
            type="text"
            placeholder="Email"
          />
          <input
            className="placeholder-gray-500 transition duration-200 px-3 py-4
             hover:bg-gray-300 focus:bg-gray-300 flex justify-center my-4 rounded-lg border
              bg-transparent focus:outline-none focus:border-transparent"
            type="text"
            value={data.username}
            onChange={handleDataChange("username")}
            placeholder="Username"
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
          {/* <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={`${import.meta.env.VITE_APP_RECAPTCHA_URL}`}
              onChange={handleCaptchaChange}
            />
          </div> */}
          <button
            disabled={!fieldsFilled && !captchaValue}
            type="submit"
            className="px-12 py-4 flex justify-center my-4 bg-transparent 
          focus:outline-none border focus:border-transparent rounded-lg hover:bg-gray-500 transition duration-200 hover:text-white 
          hover:outline-non hover:border-transparent"
          >
            SignUp
          </button>
          <div className="text-gray-800">
            Already have an account?
            <Link
              className="mx-2 text-red-500 hover:text-red-700 transition duration-200"
              to={`/login`}
            >
              Login
            </Link>
          </div>
        </form>
        {/* Learn How to use Gppg;e Auith here */}
        <div className="flex flex-col justify-center items-center text-gray-800">
          Or Login from Here
          <div className="flex">
            <div className=" h-12 w-12 my-3 mx-2 bg-gray-600 rounded-3xl transition duration-200 hover:bg-gray-500 hover:cursor-pointer"></div>
            <div className=" h-12 w-12 my-3 mx-2 bg-gray-600 rounded-3xl transition duration-200 hover:bg-gray-500 hover:cursor-pointer"></div>
            <div className=" h-12 w-12 my-3 mx-2 bg-gray-600 rounded-3xl transition duration-200 hover:bg-gray-500 hover:cursor-pointer"></div>
            <div className=" h-12 w-12 my-3 mx-2 bg-gray-600 rounded-3xl transition duration-200 hover:bg-gray-500 hover:cursor-pointer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
