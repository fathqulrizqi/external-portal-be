
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendVerificationEmail = async (from,toEmail,subject ,html ) => {
  const mailOptions = {
    from: `"${from}" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: subject,
    html: html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email berhasil dikirim:", info.response);
  } catch (err) {
    console.error("Gagal kirim email:", err);
  }
};
export default {
  sendVerificationEmail
};