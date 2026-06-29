import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, complaint_type, details, order_id } = body;

    // Validation
    if (!name || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json({ message: "Name must be between 2 and 100 characters." }, { status: 400 });
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }
    if (phone && phone.trim() !== "") {
      const digitsOnly = phone.replace(/[^\d]/g, "");
      if (digitsOnly.length !== 10) {
        return NextResponse.json({ message: "Phone number must be a valid 10-digit Indian number." }, { status: 400 });
      }
    }
    if (!subject || subject.trim().length < 5 || subject.trim().length > 200) {
      return NextResponse.json({ message: "Subject must be between 5 and 200 characters." }, { status: 400 });
    }
    if (!complaint_type) {
      return NextResponse.json({ message: "Complaint type is required." }, { status: 400 });
    }
    if (!details || details.trim().length < 50 || details.trim().length > 2000) {
      return NextResponse.json({ message: "Details must be between 50 and 2000 characters." }, { status: 400 });
    }

    // Generate random reference ID: GRV-XXXXXX
    const randomId = Math.floor(100000 + Math.random() * 900000);
    const reference = `GRV-${randomId}`;

    return NextResponse.json({
      success: true,
      reference,
      message: `Your grievance has been submitted successfully. A reference number has been sent to ${email}. You will receive an acknowledgement within 48 hours.`
    });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong. Please try again or email us directly at grievance@karosimple.in.", error: error.message }, { status: 500 });
  }
}
