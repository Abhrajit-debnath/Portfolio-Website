// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 3000;  


// app.use(cors());
// app.use(express.json());
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });
// app.post("/send-mail", async (req, res) => {
//   console.log("Received request:", req.body);

//   const { firstName, lastName, email, mobileNumber, message } = req.body;
//   if (!firstName || !lastName || !email || !mobileNumber || !message) {
//     return res.status(400).json({ error: "All Fields Required" });
//   }

//   const mailoptions = {
//     from: process.env.EMAIL_USER,
//     replyTo: email,
//     to: process.env.EMAIL_USER,
//     subject: `New Enquiry from ${firstName} ${lastName}`,
//     text: `📩 Sender Email : ${email}\n📞 Phone: ${mobileNumber}\n\n💬 Message:${message}`,
//   };

//   try {
//     const info = await transporter.sendMail(mailoptions);
//     console.log("Email sent successfully:", info.response);
//     res.json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to send email", details: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log("server is listening at port", PORT);
// });

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;  

// ✅ Allow requests from your frontend domain
app.use(cors({
  origin: "https://abhrajit-debnath-m1qs880ut-abhrajit-debnaths-projects.vercel.app/",  // Change this to your frontend domain
  methods: "GET,POST",
  allowedHeaders: "Content-Type"
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-mail", async (req, res) => {
  console.log("Received request:", req.body);

  const { firstName, lastName, email, mobileNumber, message } = req.body;
  if (!firstName || !lastName || !email || !mobileNumber || !message) {
    return res.status(400).json({ error: "All Fields Required" });
  }

  const mailoptions = {
    from: process.env.EMAIL_USER,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `New Enquiry from ${firstName} ${lastName}`,
    text: `📩 Sender Email : ${email}\n📞 Phone: ${mobileNumber}\n\n💬 Message:${message}`,
  };

  try {
    const info = await transporter.sendMail(mailoptions);
    console.log("Email sent successfully:", info.response);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log("server is listening at port", PORT);
});
