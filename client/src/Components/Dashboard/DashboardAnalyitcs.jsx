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
              <form
                className="bg-gray-900 w-[600px] rounded-xl p-6 "
                onSubmit={onSubmit}
              >
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
                  <select
                    onChange={handleDataChange("state")}
                    value={data.state}
                    className="rounded-md mt-2 h-[30px] w-[270px] items-center bg-gray-600  border-none outline-none"
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                  </select>
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
                  <select
                    onChange={handleDataChange("workStatus")}
                    value={data.workStatus}
                    className="rounded-md mt-2 h-[30px]  items-center bg-gray-600 w-[220px] border-none outline-none"
                  >
                    <option value="">Select Work Status</option>
                    <option value="Not Started">Not Started</option>
                    <option value="Started">Started</option>
                    <option value="Processing">Processing</option>
                    <option value="Payment Done">Payment Done</option>
                  </select>
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
