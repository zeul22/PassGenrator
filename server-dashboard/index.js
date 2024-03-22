import dotenv from "dotenv";
import connectDB from "./db/db.config.js";
import { app } from "./app";

dotenv.config({
  path: "./.env",
});

port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port || 8000, () => {
      Console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Conncetion Failed : ${err}`);
  });
