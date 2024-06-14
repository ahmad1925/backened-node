import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDatabase = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URL}/${DB_NAME}`
    );
    console.log(
      `connection successfull database connected !! DB host is ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("connection failed", error);
    process.exit(1);
  }
};

export default connectionDatabase;
