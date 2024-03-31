import { app } from "./app.js";
import connectDB from "./db/dbconfig.js";
const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port || 8002, () => {
      console.log(`Server is running on ${port}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDb Failed to connect: ${error}`);
  });
