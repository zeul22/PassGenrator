import mongoose from "mongoose";
import { Contact } from "../models/Contact.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { EMAIL, PASSWORD, SERVICE, USERID } from "../constants.js";
const service = SERVICE;
const pass = PASSWORD;
const emailid = EMAIL;
const userid = USERID;

dotenv.config({
  path: "../.env",
});

const transporter = nodemailer.createTransport({
  service: service,
  auth: {
    user: userid,
    pass: pass,
  },
});

const sendEmailNotification = async (email, subject, message) => {
  const mailOptions = {
    from: emailid,
    to: emailid,
    subject: subject,
    // text: `Email: ${email} Message: ${message}`,
    text: `${email} : ${message}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email notification sent for new contact form submission");
  } catch (error) {
    console.error("Error sending email notification:", error);
  }
};

const contactpageRegistration = asyncHandler(async (req, res) => {
  const { email, subject, message } = req.body;
  if ([email, subject, message].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const users = await Contact.create({
    email,
    subject,
    message,
  });
  console.log(users);
  try {
    sendEmailNotification(email, subject, message);
  } catch (error) {
    throw new ApiError(400, "Problem in sending the mail");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, users, "User registered Successfully"));
});

const getallContacts = asyncHandler(async (req, res) => {
  const users = await Contact.find({ sentNotification: false });
  //   console.log(users);
  return res
    .status(200)
    .json(new ApiResponse(200, users, "All details recieved successfully"));
});

const updateNoti = async (req, res) => {
  try {
    const updatedSubmissions = await Contact.aggregate([
      {
        $match: { sentNotification: false },
      },
      {
        $set: { sentNotification: true },
      },
    ]);
    console.log(updatedSubmissions);

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedSubmissions,
          "All details recieved successfully"
        )
      );
  } catch (error) {
    console.error("Error checking and sending email notifications:", error);
  }
};

export { contactpageRegistration, getallContacts, updateNoti };
