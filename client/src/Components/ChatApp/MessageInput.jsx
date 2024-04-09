import React from "react";
import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full flex gap-3">
        <input
          className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 hover:border-gray-600 transition-all duration-300 border-gray-400 text-white "
          type="text"
          placeholder="Enter your Message"
        />
        <button
          type="submit"
          className=" bg-red-500 p-3 rounded-full hover:bg-red-900 duration-200 transition-all inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
