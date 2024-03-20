import React, { useEffect, useState } from "react";
import axios from "axios";
// import ReCaptcha from "./ReCaptcha";
import ReCAPTCHA from "react-google-recaptcha";
const Contact = () => {
  const defaultContactFormData = {
    email: "",
    subject: "",
    message: "",
  };

  const [data, setData] = useState(defaultContactFormData);
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  // const [token, setToken] = useState("");
  // const [submit, setSubmit] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // useEffect(() => {
  //   if (token.length) {
  //     setSubmit(true);
  //   }
  // }, []);

  const handleDataChange = (name) => (e) => {
    setData({
      ...data,
      [name]: e.target.value,
    });

    if (name === "email" || name === "subject" || name === "message") {
      const fieldsFilled =
        data.email != "" && data.subject != "" && data.message != "";
      setFieldsFilled(fieldsFilled);
    }
  };

  const SubmitContact = async (e) => {
    e.preventDefault();
    if (
      captchaValue &&
      data.name != "" &&
      data.email != "" &&
      data.message != ""
    ) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_APP_FETCH_URL}/contact/submit`,
          data
        );
        console.log(response.data);
        if (response.data) {
          setData(defaultContactFormData);
          alert("Thank you for reaching out!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please complete the whole procedure");
    }
  };

  // const handleToken = (toekn) => {
  //   setToken(token);
  // };

  return (
    <>
      <div className="p-8 w-full h-auto mx-auto my-12 bg-gray-500 max-w-xl rounded-2xl justify-center ">
        <h1 className="w-full my-10 flex justify-center mx-auto">
          CONTACT FORM
        </h1>
        <form onSubmit={SubmitContact}>
          <div className="px-2 py-3 flex justify-center">
            <input
              onChange={handleDataChange("email")}
              value={data.email}
              className="focus:outline-none rounded-sm bg-gray-700 px-4 py-3 text-white"
              type="text"
              placeholder="Enter your Email Id"
            />
          </div>
          <div className="px-2 py-3 flex justify-center ">
            <input
              onChange={handleDataChange("subject")}
              value={data.subject}
              className="focus:outline-none rounded-sm bg-gray-700 px-4 py-3 text-white"
              type="text"
              placeholder="Enter the subject"
            />
          </div>
          <div className="px-2 py-3 flex justify-center relative">
            <textarea
              onChange={handleDataChange("message")}
              value={data.message}
              className="block resize-none focus:outline-none rounded-lg w-full max-w-sm bg-gray-700 px-4 py-2 h-40 text-white"
              type="text"
              placeholder="Enter the message"
            />
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={`${import.meta.env.VITE_APP_RECAPTCHA_URL}`}
              onChange={handleCaptchaChange}
            />
          </div>
          <div className="flex justify-center ">
            <button
              type="submit"
              disabled={!fieldsFilled && !captchaValue}
              className={`bg-gray-100 px-6 py-4 my-4 rounded-lg transition duration-200
           cursor-pointer hover:bg-gray-300
            hover:text-white ${
              captchaValue && fieldsFilled
                ? "bg-gray-600 hover:bg-gray-700"
                : "cursor-not-allowed bg-gray-100"
            }`}
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
