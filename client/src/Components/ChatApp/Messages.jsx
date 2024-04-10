import React from "react";
import Message from "./Message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import MessageLoading from "./MessageLoading.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  // console.log(messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && <MessageLoading />}

      {!loading && messages.length === 0 && (
        <p className="flex text-sm justify-center text-center text-gray-400 items-center">
          Send a message to network with peers!
        </p>
      )}
      {!loading && messages.length > 0 &&
        messages.map((message) => (
          // console.log(message._id, message.message);
          <Message key={message._id} message={message} />
        ))
     }
    </div>
  );
};

export default Messages;
