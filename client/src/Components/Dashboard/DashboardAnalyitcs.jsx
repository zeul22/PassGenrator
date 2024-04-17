import React, { useState } from "react";
import { useAuth } from "../../store/auth";
import axios from "axios";

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
        <div className="w-full p-8 bg-gray-600 h-[780px]">
          <div className="flex ">
            <div className="bg-gray-800 p-2 items-center w-[720px] ">
              <div className="flex flex-col overflow-auto h-[720px]  items-center justify-center">
                <form className="bg-gray-900 p-12 " onSubmit={onSubmit}>
                  <div className="mt-6">
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
                  <div className="mt-6">
                    <label htmlFor="" className="p-2">
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
                  <div className="mt-6">
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
                  <div className="mt-6">
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
                  <div className="mt-6">
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
                  <div className="mt-6">
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
                  <div className="mt-6">
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
                  <div className="mt-6">
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

                  <div className="mt-6 flex items-center justify-center">
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

            <div className="w-[1000px]  bg-gray-800 mx-8 flex rounded-md justify-between items-start">
              <div className="text-sm flex justify-between p-2 m-2 rounded-md items-center bg-red-500 w-full">
                <div className=" flex flex-col  p-2 mx-2 ">Not Started</div>
                <div className=" flex flex-col  p-2 mx-2 ">Started</div>
                <div className=" flex flex-col  p-2 mx-2 ">Processing</div>
                <div className=" flex flex-col  p-2 mx-2 ">Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAnalyitcs;
