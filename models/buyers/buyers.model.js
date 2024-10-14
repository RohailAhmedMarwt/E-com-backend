import mongoose from "mongoose";

const buyerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cellNumber:{
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

export const buyer = mongoose.model("buyer", buyerSchema);
