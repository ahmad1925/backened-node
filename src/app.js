import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

//configration
app.use(
  cors({
    origin: process.env.ORIGIN_CHOICE,
    Credential: true,
  })
);

app.use(
  express.json({
    limit: "19kb",
  })
);

app.use(
  express.urlencoded({
    limit: "16kb",
    extended: true,
  })
);

app.use(cookieParser());

app.use(express.static("public"));

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export default app;
