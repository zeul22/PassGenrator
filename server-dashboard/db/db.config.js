import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dotenv.config({
  path: "./.env",
});

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/?dbname=${DB_NAME}`
    );
    console.log("Database :", connectionInstance.connection.host);
  } catch (error) {
    console.log("Connection failed");
    process.exit(1);
  }
};

export default connectDB;
