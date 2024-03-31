import React from "react";

const Chatapp = () => {
  return (
    <div className="flex flex-col mx-auto items-center h-60 p-6 ">
      <div>Chat Application</div>
      {/* Main Part */}
      <section className="flex bg-gray-400 h-[600px] w-[720px] border-red-500 border-2">
        <div className="flex flex-col p-4 rounded-l-2xl w-[40%] overflow-scroll overflow-x-hidden ">
          <h1 className="font-bold text-2xl">Contacts</h1>
          <div className="mt-6">
            {/* All the contacts of the logged in person */}
            <div className="flex flex-col border-t mb-4">
              <h3 className="text-lg font-bold mt-2">Clickable Friend 1</h3>
              <p className="text-sm">
                Can we Print a part of the message here?
              </p>
            </div>
            <div className="flex flex-col border-t mb-4">
              <h3 className="text-lg font-bold mt-2">Clickable Friend 1</h3>
              <p className="text-sm">
                Can we Print a part of the message here?
              </p>
            </div>
            <div className="flex flex-col border-t mb-4">
              <h3 className="text-lg font-bold mt-2">Clickable Friend 1</h3>
              <p className="text-sm">
                Can we Print a part of the message here?
              </p>
            </div>
            <div className="flex flex-col border-t mb-4">
              <h3 className="text-lg font-bold mt-2">Clickable Friend 1</h3>
              <p className="text-sm">
                Can we Print a part of the message here?
              </p>
            </div>
            <div className="flex flex-col border-t mb-4">
              <h3 className="text-lg font-bold mt-2">Clickable Friend 1</h3>
              <p className="text-sm">
                Can we Print a part of the message here?
              </p>
            </div>
            <div className="flex flex-col border-t mb-4">
              <h3 className="text-lg font-bold mt-2">Clickable Friend 1</h3>
              <p className="text-sm">
                Can we Print a part of the message here?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 rounded-r-2xl w-[70%]">
          <h1 className="font-bold text-2xl p-2 flex">
            <div className="rounded-full h-10 w-10 mr-2 bg-gray-800"></div>
            Your Contact Name
            </h1>
          <div className="h-full bg-gray-600 p-6 flex flex-col overflow-scroll overflow-x-hidden">

            {/* Conversation */}

            <div className="flex justify-left mb-8">
              {/* Photo of the friend */}
              <div className="flex rounded-full h-10 w-10 bg-red-600">
                <img src="" alt="Logo" className="object-contain" />
              </div>
              {/* Message */}
              <div className="w-auto ml-2 bg-red-400 rounded-2xl p-2 h-auto">
                Consider that he has written something here
              </div>
            </div>
            <div className="flex justify-end mb-8">
              {/* Message */}
              <div className="w-auto bg-red-400 rounded-2xl p-2 h-auto">
                Consider that he has written something here
              </div>
            </div>

             {/* Conversation */}

             <div className="flex justify-left mb-8">
              {/* Photo of the friend */}
              <div className="flex rounded-full h-10 w-10 bg-red-600">
                <img src="" alt="Logo" className="object-contain" />
              </div>
              {/* Message */}
              <div className="w-auto ml-2 bg-red-400 rounded-2xl p-2 h-auto">
                Consider that he has written something here
              </div>
            </div>
            <div className="flex justify-end mb-8">
              {/* Message */}
              <div className="w-auto bg-red-400 rounded-2xl p-2 h-auto">
                Consider that he has written something here
              </div>
            </div>

             {/* Conversation */}

             <div className="flex justify-left mb-8">
              {/* Photo of the friend */}
              <div className="flex rounded-full h-10 w-10 bg-red-600">
                <img src="" alt="Logo" className="object-contain" />
              </div>
              {/* Message */}
              <div className="w-auto ml-2 bg-red-400 rounded-2xl p-2 h-auto">
                Consider that he has written something here
              </div>
            </div>
            <div className="flex justify-end mb-8">
              {/* Message */}
              <div className="w-auto bg-red-400 rounded-2xl p-2 h-auto">
                Consider that he has written something here
              </div>
            </div>

             {/* Conversation */}

             <div className="flex justify-left mb-8">
              {/* Photo of the friend */}
              <div className="flex rounded-full h-10 w-10 bg-red-600">
                <img src="" alt="Logo" className="object-contain" />
              </div>
              {/* Message */}
              <div className="w-auto ml-2 bg-red-400 rounded-2xl p-2 h-auto">
                Consider that he has written something here
              </div>
            </div>
            <div className="flex justify-end mb-8">
              {/* Message */}
              <div className="w-auto bg-red-400 rounded-2xl p-2 h-auto">
                Consider that he has written something here
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chatapp;
