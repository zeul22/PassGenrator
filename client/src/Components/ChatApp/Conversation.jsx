import React from "react";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  console.log(isSelected);
  return (
    <>
      <div
        className={`flex gap-2 items-center 
    hover:bg-blue-100  transition-all 
    duration-300 rounded 
    p-2 py-1 cursor-pointer
    ${isSelected ? "bg-blue-300" : ""}
    `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div>
          <div className="w-12 rounded-full p-2 bg-gray-900">
            <img src="../../../public/avatar.jpg" alt="Avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-500 text-xl hover:text-white">
              {conversation.lname} {conversation.fname}
            </p>
            <span className="text-xl"></span>
          </div>
        </div>
      </div>
      {!lastIdx && <hr className="w-full mt-2 bg-gray-800 text-red-200" />}
    </>
  );
};

export default Conversation;
