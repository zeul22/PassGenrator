import mongoose, { Schema } from "mongoose";

const dashboardData = Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    company: {
      type: String,
      required: true,
    },
    typeofwork: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    workStatus: {
      type: String,
      enum: [
        "Not Started",
        "Started",
        "Processing",
        "Completed",
        "Payment Done",
      ],
      default: "Not Started",
    },
    remarks: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    managedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    salesBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const DashboardData = mongoose.model("DashboardData", dashboardData);
