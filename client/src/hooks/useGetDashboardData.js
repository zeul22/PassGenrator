import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const useGetDashboardData = () => {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setdashboardData] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_FETCH_URL}/dashboard/analytics/data`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(res);
        const data = await res.json();
        console.log(data.data);
        if (data.error) {
          throw new Error(data.error);
        }
        setdashboardData(data.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { loading, dashboardData };
};
export default useGetDashboardData;
