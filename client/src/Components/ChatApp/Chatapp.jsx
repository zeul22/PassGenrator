import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth.jsx"; //can update & use Redux here
import Home from "./Home.jsx";

const Chatapp = () => {
  const { isloggedin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isloggedin){
      navigate("/login")
    }
  }, [isloggedin]);

  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center bg-black">
        <div className="flex flex-col">
          <h1 className="text-white text-3xl mb-2 p-2">CHAT APPLICATION</h1>
        </div>
        <Home />
    </div>
  );
};

export default Chatapp;


