import React, { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Generator = () => {
  // Variables
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [pass, setPass] = useState("");
  const passwordRef = useRef(null);
  const { isloggedin } = useAuth();
  const navigate = useNavigate();

  //   Functions
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "1234567890";
    if (character) str += "!@$%^&*()_+~`{}[]|?><.,/";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, number, character, setPass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  //   Display output
  return (
    <>
      {isloggedin ? (
        <div
          className="px-4 mx-auto my-8 shadow-md rounded-2xl h-60 
        w-full max-w-md  bg-gray-800 overflow-hidden"
        >
          <h1 className="my-10 text-2xl text-center text-white">
            Generate your password
          </h1>
          <div className="flex shadow rounded-s-lg overflow-hidden mb-4">
            <input
              readOnly
              className="w-full outline-none py-1 px-3  bg-gray-500"
              value={pass}
              type="text"
              placeholder="Your Generated Pasword"
            />
            <button
              className="outline-none bg-gray-500 transition duration-200 hover:bg-gray-600  text-white
           py-1 px-3 rounded-e-lg"
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-3 text-white">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer gap-x-3"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1 text-white">
              <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />{" "}
              <label htmlFor="">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1 text-white">
              <input
                type="checkbox"
                defaultChecked={character}
                id="numberInput"
                onChange={() => {
                  setCharacter((prev) => !prev);
                }}
              />{" "}
              <label htmlFor="">Symbols</label>
            </div>
          </div>
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default Generator;
