import React from "react";

const MessageLoading = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="w-10 rounded-full p-3 ml-2">
            <img src="" className="p-6 bg-gray-800" />
          </div>
          <div className="p-2 mt-3 rounded-r-md bg-gray-800 w-2/4 text-white"> </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-end">
          <div className="p-2 mt-3 rounded-l-md bg-gray-800 w-1/4 text-white"></div>
          <div className="w-10 rounded-full p-3">
            <img className="bg-gray-800 p-6" />
          </div>
        </div>        
      </div>

      <div className="flex flex-col">
        <div className="flex">
          <div className="w-10 rounded-full p-3 ml-2">
            <img src="" className="p-6 bg-gray-800" />
          </div>
          <div className="p-2 mt-3 rounded-r-md bg-gray-800 w-2/4 text-white"> </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-end">
          <div className="p-2 mt-3 rounded-l-md bg-gray-800 w-1/4 text-white"></div>
          <div className="w-10 rounded-full p-3">
            <img className="bg-gray-800 p-6" />
          </div>
        </div>        
      </div>
      
    </div>
  );
};

export default MessageLoading;
