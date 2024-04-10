import React, { useEffect, useRef } from "react";
import Message from "./Message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import MessageLoading from "./MessageLoading.jsx";
import useListenMessages from "../../hooks/useListenMessage.js";

const Messages = () => {
  useListenMessages();
  const { messages, loading } = useGetMessages();
  // console.log(messages);
  const lastMessage = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && <MessageLoading />}

      {!loading && messages.length === 0 && (
        <p className="flex text-sm justify-center text-center text-gray-400 items-center">
          Send a message to network with peers!
        </p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
