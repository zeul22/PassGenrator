import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const useGetConversations =  () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_FETCH_URL}/messages/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(res);
        const data = await res.json();
        // console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
