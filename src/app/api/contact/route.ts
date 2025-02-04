// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { query } from "@/app/lib/db";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
  const CONTACT_SYSTEM_USER_ID = process.env.CONTACT_SYSTEM_USER_ID;

  try {
    const { name, email, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Format the message to include contact details
    const formattedDescription = `
Name: ${name}
Email: ${email}
Message: ${message}
    `.trim();

    // Insert into user_feedback using the system user ID
    await query(
      `INSERT INTO user_feedback 
       (feedback_id, user_id, feedback_type, description)
       VALUES ($1, $2, $3, $4)`,
      [uuidv4(), CONTACT_SYSTEM_USER_ID, 'contact', formattedDescription]
    );

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon.'
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}