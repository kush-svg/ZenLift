import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, businessName, service, message } = body;

    // Configure your SMTP settings here or use environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "your-email@gmail.com",
        pass: process.env.SMTP_PASS || "your-app-password",
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || "your-email@gmail.com",
      to: process.env.CONTACT_EMAIL || "your-email@gmail.com", // Your agency email
      subject: `New Lead: ${businessName} - ${service}`,
      text: `
        Name: ${name}
        Business Name: ${businessName}
        Service Needed: ${service}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Uncomment this line to actually send the email when configured:
    // await transporter.sendMail(mailOptions);
    
    // Simulating delay for demonstration
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
