// api/sendEmail.ts
import { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_TO,
    subject: `Nova mensagem de ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "E-mail enviado com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Falha ao enviar e-mail" });
  }
};
