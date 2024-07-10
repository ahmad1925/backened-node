import mongoose, { Schema } from "mongoose";

const subscriptionSchema = Schema(
  {
    subscriber: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    channel: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timeStamps: true,
  }
);

export const subscription = mongoose.model("subscription", subscriptionSchema);
