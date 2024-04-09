import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const nochatSelected = true;
  return (
    <div className="md:min-w-[500px] flex flex-col">
      {nochatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-6 rounded-r-lg mb-2">
            <span className="text-white font-bold">Rahul Anand</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Rahul Anand</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
