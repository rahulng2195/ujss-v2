import { NextRequest, NextResponse } from 'next/server';
import { createTransporter, emailTemplates } from '@/lib/emailConfig';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      position: formData.get('position') as string,
      experience: formData.get('experience') as string,
      currentCompany: formData.get('currentCompany') as string,
      coverLetter: formData.get('coverLetter') as string,
    };

    // Get resume file
    const resumeFile = formData.get('resume') as File;

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.position || !resumeFile) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    const smtpConfigured = process.env.SMTP_PASSWORD && process.env.SMTP_PASSWORD.length > 0;

    if (!smtpConfigured) {
      // Development mode: Log data instead of sending email
      console.log('=================================');
      console.log('CAREER APPLICATION (Dev Mode)');
      console.log('=================================');
      console.log('Name:', data.name);
      console.log('Email:', data.email);
      console.log('Phone:', data.phone);
      console.log('Position:', data.position);
      console.log('Experience:', data.experience);
      console.log('Current Company:', data.currentCompany);
      console.log('Resume File:', resumeFile.name);
      console.log('Cover Letter:', data.coverLetter);
      console.log('=================================');

      return NextResponse.json(
        {
          success: true,
          message: 'Application received! (Development mode - check server console)',
          devMode: true
        },
        { status: 200 }
      );
    }

    // Convert file to buffer for attachment
    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());

    // Create email transporter
    const transporter = await createTransporter();

    // Prepare email options with attachment
    const mailOptions = {
      ...emailTemplates.career(data),
      attachments: [
        {
          filename: resumeFile.name,
          content: resumeBuffer,
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Career form error:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit application. Please try again.',
        error: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
      },
      { status: 500 }
    );
  }
}
