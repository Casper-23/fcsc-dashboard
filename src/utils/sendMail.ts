"use server";

import nodemailer from "nodemailer";
import type UserQuery from "@/interface/query.interface";

// Configure the mail transporter
const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_USER_PASSWORD,
  },
  secure: true,
});

// Function to send an email
const sendMail = async ({ email, message, query, name }: UserQuery) => {
  if (!process.env.MAIL_RECEIVER_QUERY) {
    throw new Error("MAIL_RECEIVER environment variable must be set");
  }

  const mailData = {
    from: process.env.MAIL_USER,
    to: [email, process.env.MAIL_RECEIVER_QUERY],
    subject: query,
    text: `${name} <${email}>\n\n${message}`,
    html: `<p>Name: ${name} </p><p>Email: ${email}</p></br><p> ${message}</p>`,
  };

  // Return a promise for sending the mail
  try {
    const info = await mailTransporter.sendMail(mailData);
    console.log("Email sent successfully:", info);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendMail;
