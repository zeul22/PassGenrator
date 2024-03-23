import dotenv from "dotenv";
import connectDB from "./db/db.config.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT;
// console.log(port);

connectDB()
  .then(() => {
    app.listen(port || 8000, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Conncetion Failed : ${err}`);
  });

app.get("/", (req, res) => {
  res.send({ message: "Hello Sir" });
});
