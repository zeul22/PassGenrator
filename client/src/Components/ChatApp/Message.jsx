import React from "react";
import { useAuth } from "../../store/auth";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/formatTime";

const Message = ({ message }) => {
  const { authUser } = useAuth();
  const self_ = message.senderId === authUser;
  const formattedTime = extractTime(message.createdAt);
  // console.log("are those values same? :", self_);
  // console.log("Sending to: ", message.senderId);
  // console.log("Loggied in id: ", authUser);
  // console.log(message.createdAt);
  return (
    <>
      {!self_ ? (
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-10 rounded-full p-2">
              <img src="../../../public/avatar.jpg" alt="Avatar" />
            </div>
            <div className="p-2 mt-3 rounded-r-md bg-gray-800 text-white">
              {message.message}
            </div>
          </div>
          <div className="opacity-50 text-sm flex flex-col gap-1 items-start justify-start ml-12 pb-1">
            {message.createdAt ? formattedTime : ""}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex justify-end">
            <div className="p-2 mt-3 rounded-l-md bg-gray-400 text-white">
              {message.message}
            </div>
            <div className="w-10 rounded-full p-2">
              <img src="../../../public/avatar.jpg" alt="Avatar" />
            </div>
          </div>
          <div className="opacity-50 text-sm flex gap-1 items-end justify-end mr-12 pb-1">
            {message.createdAt ? formattedTime : ""}
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
