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
    <div className="p-4 h-screen flex items-center justify-center">
        <Home />
    </div>
  );
};

export default Chatapp;


