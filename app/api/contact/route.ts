import { NextRequest, NextResponse } from 'next/server';
import { createTransporter, emailTemplates } from '@/lib/emailConfig';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone_number || !data.message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    const smtpConfigured = process.env.SMTP_PASSWORD && process.env.SMTP_PASSWORD.length > 0;

    if (!smtpConfigured) {
      // Development mode: Log data instead of sending email
      console.log('=================================');
      console.log('CONTACT FORM SUBMISSION (Dev Mode)');
      console.log('=================================');
      console.log('Name:', data.name);
      console.log('Email:', data.email);
      console.log('Phone:', data.phone_number);
      console.log('Subject:', data.msg_subject);
      console.log('Message:', data.message);
      console.log('=================================');

      return NextResponse.json(
        {
          success: true,
          message: 'Message received! (Development mode - check server console)',
          devMode: true
        },
        { status: 200 }
      );
    }

    // Create email transporter
    const transporter = await createTransporter();

    // Send email
    const mailOptions = emailTemplates.contact(data);
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again.',
        error: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
      },
      { status: 500 }
    );
  }
}
