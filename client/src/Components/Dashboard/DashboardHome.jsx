import React, { useEffect, useState } from "react";
import ApiError from "../../../../server-dashboard/utils/ApiError";

const DashboardHome = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/`);
      const jsondata = await response.json();
      console.log(jsondata);
      setData(jsondata.message);
    } catch (error) {
      throw new ApiError("Error Fetching data: ,", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>DashboardHome</div>
      {data}
    </>
  );
};

export default DashboardHome;
