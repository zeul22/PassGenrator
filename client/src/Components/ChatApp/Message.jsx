import React from "react";

const Message = ({ incoming }) => {
  return (
    <>
      {incoming ? (
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-10 rounded-full p-2">
              <img src="../../../public/avatar.jpg" alt="Avatar" />
            </div>
            <div className="p-2 mt-3 rounded-r-md bg-gray-800 text-white">
              Hi, I am working on Chat Appilication
            </div>
          </div>
          <div className="opacity-50 text-sm flex flex-col gap-1 items-end">8:00</div>

        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex justify-end">
            <div className="p-2 mt-3 rounded-l-md bg-gray-800 text-white">
              Hi, I am working on Chat Appilication
            </div>
            <div className="w-10 rounded-full p-2">
              <img src="../../../public/avatar.jpg" alt="Avatar" />
            </div>
          </div>
          <div className="opacity-50 text-sm flex gap-1 items-center">8:00</div>
        </div>
      )}
    </>
  );
};

export default Message;
