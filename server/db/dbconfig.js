import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// desired level of consistency, durability, and acknowledgment from the database server.

const options = {
  writeConcern: {
    w: "majority",
    j: true,
    wtimeout: 1000,
  },
};

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}?dbname=${DB_NAME}`,
      options
    );
    console.log(
      `\n MongoDB connected, DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection failed ", error);
    process.exit(1);
  }
};

export default connectDB;
