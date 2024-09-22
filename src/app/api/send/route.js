import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log("Email is being sent to jazilhashmi2017@gmail.com");  // Log the email address
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['jazilhashmi2017@gmail.com'],  // Always send to this email
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted by: {email}</p>  {/* Include the sender's email */}
          <p>Message:</p>
          <p>{message}</p>
        </>
      ),
    });
    console.log("Email sent successfully to jazilhashmi2017@gmail.com");  // Log when email is sent
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}
