import React from "react";

const Contact = () => {
  return (
    <>
      <div className="p-8 w-full h-auto mx-auto my-12 bg-gray-500 max-w-xl rounded-2xl justify-center ">
      <h1 className="w-full my-10 flex justify-center mx-auto">CONTACT FORM</h1>
        <form action="">
          <div className="px-2 py-3 flex justify-center">
            <input
              className="focus:outline-none rounded-sm bg-gray-700 px-4 py-3 text-white"
              type="text"
              placeholder="Enter your Email Id"
            />
          </div>
          <div className="px-2 py-3 flex justify-center ">
            <input
              className="focus:outline-none rounded-sm bg-gray-700 px-4 py-3 text-white"
              type="text"
              placeholder="Enter the subject"
            />
          </div>
          <div className="px-2 py-3 flex justify-center relative">
            <textarea
              className="block resize-none focus:outline-none rounded-lg w-full max-w-sm bg-gray-700 px-4 py-2 h-40 text-white"
              type="text"
              placeholder="Enter the message"
            />
          </div>
          <div className="flex justify-center ">
            <button
              className=" bg-gray-600 px-6 py-4 my-4 rounded-lg transition duration-200
           cursor-pointer hover:bg-gray-800 hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      s
    </>
  );
};

export default Contact;
