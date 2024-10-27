import mongoose from "mongoose";

const cropLivestockSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    plantingDate: {
      type: String,
      required: true,
    },
    harvestDate: {
      type: String,
      required: true,
    },
    profit: {
      type: Number,
      required: true,
    },
    netGross: {
      type: Number,
      required: true,
    },
    loss: {
      type: Number,
    },
    address: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("cropLivestock", cropLivestockSchema);
