import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, treatment, message } = data;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    // In production, send email via Resend / SendGrid / Nodemailer, or send WhatsApp webhook
    console.log("=== NEW APPOINTMENT INQUIRY RECEIVED ===", {
      name,
      phone,
      email: email || "N/A",
      treatment: treatment || "General Consultation",
      message: message || "No notes provided",
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your consultation request has been received. Our Ayurvedic physicians will contact you shortly.",
    });
  } catch (error) {
    console.error("Appointment submission error:", error);
    return NextResponse.json(
      { error: "An error occurred while submitting your request." },
      { status: 500 }
    );
  }
}
