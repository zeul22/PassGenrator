import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useAuth } from "../store/auth";

const Login = () => {
  const default_data = {
    username: "",
    password: "",
  };
  const { storeToken } = useAuth();
  const [data, setData] = useState(default_data);
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const navigate = useNavigate();
  const [isClick, setClick] = useState(false);

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
  const handleGoogleLogin = async () => {
    window.location.href = "/auth/google"; // Redirect to Google OAuth authentication
    const response = await fetch(
      `${import.meta.env.VITE_APP_FETCH_URL}/users/login`,
      {
        method: "GET",
        headers: "application/json",
      }
    );
  };

  const handleLinkedInLogin = async () => {
    window.location.href = "/auth/linkedin"; // Redirect to LinkedIn OAuth authentication
  };

  const handleGitHubLogin = async () => {
    window.location.href = "/auth/github"; // Redirect to GitHub OAuth authentication
  };

  const SubmitContact = async (e) => {
    const fetchOptions = {
      method: "POST", // Specify the HTTP method as 'POST'
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string
    };

    e.preventDefault();
    if (data.username != "" && data.password != "") {
      // try {
      //   console.log(data.username, data.password);

      //   const response = await axios.post(
      //     `${import.meta.env.VITE_APP_FETCH_URL}/users/login`,
      //     data
      //   );

      //   console.log(response.data);
      //   console.log(response.ok);
      //   if (response.data) {
      //     const res_data = await response.json();
      //     console.log(res_data);
      //     setData(default_data);
      //     alert("Login Successful!");
      //     navigate("/gen");
      //   }
      // } catch (error) {
      //   alert("User does not exist!");
      //   console.log(error);
      // }

      fetch(`${import.meta.env.VITE_APP_FETCH_URL}/users/login`, fetchOptions)
        .then((response) => {
          if (!response.ok) {
            setClick((isClick) => !isClick);
            throw new Error("Wrong Password");
          }
          return response.json();
        })
        .then((data) => {
          // console.log(data.data);
          // console.log(data.data.accessToken);
          storeToken(data.data.accessToken);
          setData(default_data);
          navigate("/");
        })
        .catch((error) => {
          console.error("Fetching Error: ", error);
        });
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
          <div>
            {isClick ? (
              <span className="text-red-600 text-sm">
                User / Password not correct
              </span>
            ) : (
              <span></span>
            )}
          </div>
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
        <div className=" w-full flex justify-center items-center mx-1 p-3">
          <hr className="h-1/2 w-full bg-black" />
          <div className="p-3 text-white">Or</div>
          <hr className="h-1/2 w-full bg-black" />
        </div>
        <div className="flex justify-evenly">
          <button
            type="submit"
            onClick={handleGoogleLogin}
            className="bg-gray-100 hover:bg-gray-300 transition duration-200 p-6 mr-2 rounded-full"
          >
            G
          </button>
          <button
            type="submit"
            onClick={handleGitHubLogin}
            className="bg-gray-100 hover:bg-gray-300 transition duration-200 p-6 mr-2 rounded-full"
          >
            G
          </button>
          <button
            type="submit"
            onClick={handleLinkedInLogin}
            className="bg-gray-100 hover:bg-gray-300 transition duration-200 p-6 rounded-full"
          >
            L
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
