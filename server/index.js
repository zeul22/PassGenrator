import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});
const port = process.env.PORT;
console.log(port)
const app = express();
app.use(cors());

app.get("/c",(req,res)=>{
    console.log("Working great")
    res.send("hello")
})

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
