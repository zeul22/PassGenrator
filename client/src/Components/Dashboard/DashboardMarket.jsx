import React from "react";
import DragDrop from "./DragDrop.jsx";
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Colors } from "chart.js";
import Associations from "./Associations.jsx";

ChartJS.register(Colors);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const DashboardMarket = () => {
  return (
    <>
      <div className="h-screen bg-gray-800 p-6">
        <div className="mt-6">
          <DragDrop />
        </div>
      </div>
      <div className="h-auto bg-gray-800">
        <div className="flex justify-center text-3xl p-2 bg-gray-300 ">
          METRICS
        </div>

        <div>
          <div className="flex mt-6 p-6 bg-gray-500 h-[365px] justify-evenly">
            <div className=" gap-6  flex w-[520px]] mx-2">
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
              />
            </div>
            <div className=" gap-6  flex w-[520px] mx-2">
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
                className="w-1/3"
              />
            </div>
            <div className=" gap-6 flex w-[520px] mx-2">
              <Doughnut
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
          </div>
        </div>
        <div className="flex  justify-center text-3xl p-2 bg-gray-300 mt-6">
          TOP/WORST ASSOCIATIONS
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 bg-gray-500 mx-2 mt-6 p-2 rounded-md text-xl">
          Top Associations
          <Associations />
          </div>

          <div className="w-1/2 bg-gray-500 mx-2 mt-6 p-2 rounded-md text-xl">
            Worst Associations
          <Associations />
          </div>
        </div>

        <div className="flex justify-center text-3xl p-2 bg-gray-300 mt-6">
          WORK METRICS
        </div>

        <div className="flex justify-evenly text-white pb-6">
          <div className="h-[200px] w-[200px] bg-gray-500 mx-2 mt-6 p-2 rounded-full text-xl">
          Total Work
          </div>
          <div className="h-[200px] w-[200px] bg-gray-500 mx-2 mt-6 p-2 rounded-full text-xl">
          Completion Rate %
          </div>
          <div className="h-[200px] w-[200px] bg-gray-500 mx-2 mt-6 p-2 rounded-full text-xl">
          Type of Work Distribution
          </div>
          <div className="h-[200px] w-[200px] bg-gray-500 mx-2 mt-6 p-2 rounded-full text-xl">
          Total Workforce
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMarket;
