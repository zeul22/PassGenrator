import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("is there any message: ", message);
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full flex gap-3">
        <input
          className="outline-none border-none text-sm rounded-lg w-full p-2.5 bg-gray-70 transition-all duration-300 bg-gray-800 text-white "
          type="text"
          placeholder="Enter your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className=" bg-red-500 p-3  rounded-full hover:bg-red-900 duration-200 transition-all inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? <h1>Loading ...</h1> : <BsSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
