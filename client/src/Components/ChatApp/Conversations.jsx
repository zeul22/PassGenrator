import React from "react";
import useGetConversations from "../../hooks/useGetConversations.js";
import Conversation from "./Conversation.jsx";
import useConversation from "../../zustand/useConversation.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("Conversation happening:", conversations);
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span>Loading...</span>
      ) : conversations.length > 0 ? (
        <ul>
          {conversations.map((conversation, idx) => (
            <Conversation
              key={conversation._id}
              lastIdx={idx === conversations.length - 1}
              conversation={conversation}
            />
          ))}
        </ul>
      ) : (
        <p>No conversations found.</p>
      )}
    </div>
  );
};

export default Conversations;
