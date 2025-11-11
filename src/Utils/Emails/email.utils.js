import nodemailer from "nodemailer";

// Create a test account or replace with real credentials.f
export async function sendEmail({
  to = "",
  from = "",
  subject = "",
  text = "",
  html = "",
  attachments = [],
  cc = "",
  bcc = "",
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "a7medanwer11@gmail.com",
      pass: "ytwc axvh imuj rrqg",
    },
  });

  const info = await transporter.sendMail({
    from: '"Ahmed Anwer ✌️😁" <a7medanwer11@gmail.com>',
    to,
    subject,
    text, // plain‑text body
    html, // HTML body
    attachments,
    cc,
    bcc,
  });

  console.log("Message sent:", info.messageId);
}

export const emailSubject = {
  confirmEmail: "Confirm Your Email",
  resetPassword: "Reset Your Password",
  welcome: "Welcome to Anwer working",
};
