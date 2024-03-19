import mongoose, { Schema } from "mongoose";
import nodemailer from "nodemailer";

const contactSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sent_at: {
    type: Date,
    default: Date.now,
  },
  sentNotification: {
    type: Boolean,
    default: false,
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
