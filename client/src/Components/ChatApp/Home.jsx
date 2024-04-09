import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";

const Home = () => {
  return (
    <div 
    className="flex sm:h-[450px] 
    md:h-[550px] rounded-2xl overflow-hidden
     bg-gray-700 text-white p-2">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
