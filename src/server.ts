// connect database here
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    app.listen(5000, () => {
      console.log("server is running at port 5000");
    });
  })
  .catch((error: Error) => {
    console.log("database not running as expected");
    process.exit(1);
  });
