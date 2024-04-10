import { useState } from "react";
import useConversation from "../zustand/useConversation";
import { useAuth } from "../store/auth";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { token } = useAuth();
  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_APP_FETCH_URL}/messages/send/${
          selectedConversation._id
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ message }),
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};
export default useSendMessage;
