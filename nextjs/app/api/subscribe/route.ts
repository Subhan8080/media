import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage (replace with database in production)
let emails: string[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check for duplicates
    if (emails.includes(email)) {
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Add email
    emails.push(email);

    console.log(`New subscriber: ${email} (Total: ${emails.length})`);

    // TODO: In production, save to database and send confirmation email
    // const result = await saveEmailToDatabase(email);
    // await sendConfirmationEmail(email);

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to our newsletter',
        email 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { total_subscribers: emails.length },
    { status: 200 }
  );
}
