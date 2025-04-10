"use server";

import nodemailer from "nodemailer";
import { CVRequest } from "@/interface/query.interface";

// Create a transporter object using SMTP transport.
const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  port: 465, // You may need to change this to 587 depending on your SMTP server configuration.
  host: "smtp.gmail.com",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_USER_PASSWORD,
  },
  secure: true,
});

const sendCV = async (subject: string, text: string, base64String: string) => {
  if (!process.env.MAIL_RECEIVER_CV) {
    throw new Error("MAIL_RECEIVER environment variable must be set");
  }

  const mailData = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_RECEIVER_CV,
    subject,
    text,
    attachments: [
      {
        filename: "cv.pdf",
        content: base64String.split("base64,")[1],
        encoding: "base64",
      },
    ],
  };

  try {
    const info = await mailTransporter.sendMail(mailData);
    console.log(info);
    return "Wo Hoo! CV Uploaded Successfully";
  } catch (error) {
    console.error("Error sending email:", error);
    return "Error sending CV. Please try again later.";
  }
};

export default sendCV;
