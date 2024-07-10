import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      new ApiError(401, "unauthorized user");
    }

    const decodToken = jwt.verify(token, ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      new ApiError(401, "invalid access token");
    }
    req.user = user;
    next();
  } catch (error) {
    new ApiError(400, "verifyJWT error check in middlewere");
  }
});
