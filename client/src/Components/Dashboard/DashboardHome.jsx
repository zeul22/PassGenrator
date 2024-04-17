import React, { useEffect, useState } from "react";
import ApiError from "../../../../server-dashboard/utils/ApiError";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";
import { Colors } from "chart.js";

ChartJS.register(Colors);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const DashboardHome = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      // const response = await fetch(`http://localhost:8080/`);
      // const jsondata = await response.json();
      // console.log(jsondata);
      // setData(jsondata.message);
      console.log("At Dashboard Home");
    } catch (error) {
      throw new ApiError("Error Fetching data: ,", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-gray-800 text-white">
        <div className="p-12"></div>
        <div className="w-full p-8 bg-gray-600 h-[780px]">
          <div className="flex">
            <div className="flex-col flex w-1/2">
              <div className="flex">
                <div className="flex w-full max-w-[220px] bg-gray-800 h-[250px] mb-6 rounded-lg justify-center ">
                  <div className="flex flex-col items-center  justify-center">
                    <div className="bg-red-600 p-2 rounded-full  h-[80px] w-[80px]">
                      <img src="" alt="profile picture" />
                    </div>
                    <div className="mt-2">PROFILE NAME</div>
                    <div className="mt-2 text-sm">DESIGNATION</div>
                  </div>
                </div>
                <div className="flex  w-[500px]max-w-full bg-gray-800 h-[250px] mb-6 mx-3 rounded-lg sm:justify-center md:justify-cneter lg:justify-start  ">
                  <div className="flex flex-col justify-around md:items-left md:mx-3">
                    <div className="mt-2 sm:text-sm lg:text-lg bg-red-600 p-2 rounded-2xl">
                      USER DETAILS INFO.
                    </div>
                    <div className="mt-2 sm:text-sm lg:text-lg bg-red-600 p-2 rounded-2xl ">
                      REQUEST FOR LEAVE
                    </div>
                    <div className="mt-2 sm:text-sm lg:text-lg bg-red-600 p-2 rounded-2xl">
                      CONTACT SUPERVISOR
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 w-[500px]">
                <div className="bg-gray-300 text-black p-1 mb-3 rounded-md">
                  SALES
                </div>
                <div className="flex items-center justify-evenly">
                  <div className="flex flex-col items-center mx-3 bg-gray-800 p-4 rounded-md w-[120px]">
                    <div className="text-sm">Title</div>
                    <div className="text-[13px]">Number %</div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center mx-3 bg-gray-800 p-4 rounded-md w-[120px]">
                      <div className="text-sm">Title</div>
                      <div className="text-[13px]">Number %</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center mx-3 bg-gray-800 p-4 rounded-md w-[120px]">
                      <div className="text-sm">Title</div>
                      <div className="text-[13px]">Number %</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 w-[500px]">
                <div className="bg-gray-300 text-black p-1 mb-3 rounded-md">
                  MANAGEMENT
                </div>
                <div className="flex items-center justify-evenly">
                  <div className="flex flex-col items-center mx-3 bg-gray-800 p-4 rounded-md w-[120px]">
                    <div className="text-sm">Title</div>
                    <div className="text-[13px]">Number %</div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center mx-3 bg-gray-800 p-4 rounded-md w-[120px]">
                      <div className="text-sm">Title</div>
                      <div className="text-[13px]">Number %</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center mx-3 bg-gray-800 p-4 rounded-md w-[120px]">
                      <div className="text-sm">Title</div>
                      <div className="text-[13px]">Number %</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 w-[500px]">
                <div className="bg-gray-300 text-black p-1 mb-3 rounded-md">
                  WORK
                </div>
                <div className="flex items-center justify-evenly">
                  <div className="flex flex-col items-center mx-3 bg-gray-800 p-4 rounded-md w-[120px]">
                    <div className="text-sm">Title</div>
                    <div className="text-[13px]">Number %</div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center mx-3 bg-gray-800 p-4 rounded-md w-[120px]">
                      <div className="text-sm">Title</div>
                      <div className="text-[13px]">Number %</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col items-center mx-3 bg-gray-800 p-4 rounded-md w-[120px]">
                      <div className="text-sm">Title</div>
                      <div className="text-[13px]">Number %</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-800 mx-8 flex flex-col rounded-md">
              <div className="flex rounded-md p-2 m-2 bg-gray-300 h-[300px] ">
                <Bar
                  data={{
                    labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
                    datasets: [
                      {
                        label: "Revenue",
                        data: [200, 300, 400, 50, 61, 415, 891, 456],
                      },
                      {
                        label: "Loss",
                        data: [20, 30, 40, 123, 45, 120, 123, 144],
                      },
                    ],
                  }}
                  className="w-full"
                />
              </div>
              <div className="flex  m-2 h-[300px] justify-evenly">
                <div className="p-2  bg-red-200 flex rounded-md m-2 w-[350px]">
                  <Line
                    data={{
                      labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
                      datasets: [
                        {
                          label: "Revenue",
                          data: [200, 300, 400, 50, 61, 415, 891, 456],
                        },
                        {
                          label: "Loss",
                          data: [20, 30, 40, 123, 45, 120, 123, 144],
                        },
                      ],
                    }}
                  />
                </div>
                <div className="p-2 mx-2 bg-red-200  flex rounded-md m-2 w-[350px]">
                  <Doughnut
                    data={{
                      labels: ["A", "B", "C"],
                      datasets: [
                        {
                          label: "Revenue",
                          data: [200, 300, 400],
                        },
                      ],
                    }}
                  />
                </div>
                <div className="p-2 mx-2 bg-red-200  flex rounded-md m-2 w-[350px]">
                  <Scatter
                    options={{
                      scales: {
                        x: {
                          title: "X-axis Label", // Optional: Set X-axis label
                        },
                        y: {
                          title: "Y-axis Label", // Optional: Set Y-axis label
                        },
                      },
                    }}
                    data={{
                      datasets: [
                        {
                          label: "My Dataset",
                          data: [
                            { x: 10, y: 5 },
                            { x: 15, y: 30 },
                            { x: 20, y: 5 },
                            { x: 12, y: 51 },
                            { x: 16, y: 10 },
                            { x: 25, y: 47 },
                            { x: 79, y: 61 },
                            { x: 17, y: 7 },
                            { x: 29, y: 41 },
                          ],
                          backgroundColor: "rgba(255, 99, 132, 0.2)", // Optional: Set background color
                          borderColor: "rgba(255, 99, 132, 1)", // Optional: Set border color
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {data}
      </div>
    </>
  );
};

export default DashboardHome;
