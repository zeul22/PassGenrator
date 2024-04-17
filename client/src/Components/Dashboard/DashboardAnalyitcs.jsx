import React, { useState } from "react";
import { useAuth } from "../../store/auth";
import axios from "axios";
import DragDrop from "./DragDrop";

const DashboardAnalyitcs = () => {
  const defaultContactFormData = {
    company: "",
    typeofwork: "",
    city: "",
    state: "",
    pincode: "",
    workStatus: "",
    remarks: "",
    amount: "",
  };
  const [data, setData] = useState(defaultContactFormData);
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const { token } = useAuth();

  const handleDataChange = (name) => (e) => {
    setData({
      ...data,
      [name]: e.target.value,
    });

    if (
      name === "company" ||
      name === "typeofwork" ||
      name === "city" ||
      name === "state" ||
      name === "pincode" ||
      name === "workStatus" ||
      name === "remarks" ||
      name === "amount"
    ) {
      const fieldsFilled =
        data.company != "" &&
        data.typeofwork != "" &&
        data.city != "" &&
        data.state != "" &&
        data.pincode != "" &&
        data.workStatus != "" &&
        data.remarks != "" &&
        data.amount != "";
      setFieldsFilled(fieldsFilled);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (data.name != "" && data.email != "" && data.message != "") {
      try {
        const config = {
          method: "post",
          url: `${import.meta.env.VITE_APP_FETCH_URL}/dashboard/analytics`,
          data: data,
          headers: {
            "Content-Type": "application/json", // Adjust if needed
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios(config);
        console.log(response.data);
        if (response.data) {
          setData(defaultContactFormData);
          alert("Thank you for Adding the work!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please complete the whole procedure");
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-800 text-white">
        <div className="p-12"></div>
        <div className="w-full p-8 bg-gray-600 h-[800px]">
          <div className="flex justify-center ">
              <div className="flex flex-col overflow-auto h-[760px]  items-center justify-between">
                <form className="bg-gray-900 w-[600px] rounded-xl p-6 " onSubmit={onSubmit}>
                  <h2 className="flex justify-center text-xl">LOG NEW WORK</h2>
                  <div className="mt-2 flex justify-between w-[450px]">
                    <label htmlFor="" className="p-2">
                      Company's Name
                    </label>
                    <input
                      onChange={handleDataChange("company")}
                      value={data.company}
                      className="rounded-md mt-2 h-[30px] items-center bg-gray-600 p-2 border-none outline-none "
                      type="text"
                      placeholder="Company's Name"
                    />
                  </div>
                  <div className="mt-6 flex justify-between w-[450px]">
                    <label htmlFor="" className="p-2" >
                      Work Type{" "}
                    </label>
                    <input
                      onChange={handleDataChange("typeofwork")}
                      value={data.typeofwork}
                      className="rounded-md mt-2 h-[30px] items-center bg-gray-600 p-2 border-none outline-none "
                      type="text"
                      placeholder="Consultancy, Services etc."
                    />
                  </div>
                  <div className="mt-6 flex justify-between w-[450px]">
                    <label htmlFor="" className="p-2">
                      Amount
                    </label>
                    <input
                      onChange={handleDataChange("amount")}
                      value={data.amount}
                      className="rounded-md mt-2 h-[30px] items-center bg-gray-600 p-2 border-none outline-none "
                      type="text"
                      placeholder="Only Enter digits"
                    />
                  </div>
                  <div className="mt-6 flex justify-between w-[450px]">
                    <label htmlFor="" className="p-2">
                      City
                    </label>
                    <input
                      onChange={handleDataChange("city")}
                      value={data.city}
                      className="rounded-md mt-2 h-[30px] items-center bg-gray-600 p-2 border-none outline-none "
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="mt-6 flex justify-between w-[450px]">
                    <label htmlFor="" className="p-2">
                      State{" "}
                    </label>
                    <input
                      onChange={handleDataChange("state")}
                      value={data.state}
                      className="rounded-md mt-2 h-[30px] items-center bg-gray-600 p-2 border-none outline-none "
                      type="text"
                      placeholder="State"
                    />
                  </div>
                  <div className="mt-6 flex justify-between w-[450px]">
                    <label htmlFor="" className="p-2">
                      Pincode{" "}
                    </label>
                    <input
                      onChange={handleDataChange("pincode")}
                      value={data.pincode}
                      className="rounded-md mt-2 h-[30px] items-center bg-gray-600 p-2 border-none outline-none "
                      type="text"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="mt-6 flex justify-between w-[450px]">
                    <label htmlFor="" className="p-2">
                      Work Status{" "}
                    </label>
                    <input
                      onChange={handleDataChange("workStatus")}
                      value={data.workStatus}
                      className="rounded-md mt-2 h-[30px] items-center bg-gray-600 p-2 border-none outline-none "
                      type="text"
                      placeholder="WorkStatus"
                    />
                  </div>
                  <div className="mt-6 flex justify-between w-[450px]">
                    <label htmlFor="" className="p-2">
                      Remarks{" "}
                    </label>
                    <textarea
                      onChange={handleDataChange("remarks")}
                      value={data.remarks}
                      className="block resize-none focus:outline-none rounded-md mt-2 h-[120px] w-[320px]   bg-gray-600 p-2 border-none outline-none "
                      type="text"
                      placeholder="Enter your Remarks, if any"
                    />
                  </div>

                  <div className="mt-6 flex items-center justify-center w-[450px]">
                    <button
                      type="submit"
                      className={`p-2 h-[40px] w-[140px] rounded-lg justify-center ${
                        fieldsFilled
                          ? "bg-red-600"
                          : "cursor-not-allowed bg-gray-800"
                      }`}
                      disabled={!fieldsFilled}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
          </div>
        </div>
          
      </div>
    </>
  );
};

export default DashboardAnalyitcs;
