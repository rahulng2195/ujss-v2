// Email configuration
export const emailConfig = {
  from: 'rahul@crezvatic.com',
  to: 'rahul@crezvatic.com',
  // SMTP configuration - Update these with your email server details
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com', // e.g., smtp.gmail.com
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'rahul@crezvatic.com',
      pass: process.env.SMTP_PASSWORD || '', // Your email password or app password
    },
  },
};

// Create transporter
export const createTransporter = async () => {
  const nodemailer = (await import('nodemailer')).default;

  if (!nodemailer || typeof nodemailer.createTransport !== 'function') {
    throw new Error('Nodemailer module not loaded correctly');
  }

  return nodemailer.createTransport(emailConfig.smtp);
};

// Email templates
export const emailTemplates = {
  contact: (data: any) => ({
    from: emailConfig.from,
    to: emailConfig.to,
    replyTo: data.email,
    subject: `New Contact Form Submission - ${data.msg_subject || 'No Subject'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #667eea; margin-bottom: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Name:</strong>
            <p style="margin: 5px 0; color: #666;">${data.name}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Email:</strong>
            <p style="margin: 5px 0; color: #666;"><a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a></p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Phone:</strong>
            <p style="margin: 5px 0; color: #666;">${data.phone_number}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Subject:</strong>
            <p style="margin: 5px 0; color: #666;">${data.msg_subject}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Message:</strong>
            <div style="margin: 10px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #667eea; color: #666;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999; font-size: 12px;">
            <p>This email was sent from UJSS Contact Form</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `,
  }),

  inquiry: (data: any) => ({
    from: emailConfig.from,
    to: emailConfig.to,
    replyTo: data.email,
    subject: `New Inquiry - ${data.service || 'General Inquiry'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #667eea; margin-bottom: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            New Service Inquiry
          </h2>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Name:</strong>
            <p style="margin: 5px 0; color: #666;">${data.name}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Email:</strong>
            <p style="margin: 5px 0; color: #666;"><a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a></p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Phone:</strong>
            <p style="margin: 5px 0; color: #666;">${data.phone}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Service Interest:</strong>
            <p style="margin: 5px 0; padding: 8px 12px; background-color: #667eea; color: #fff; border-radius: 5px; display: inline-block;">
              ${data.service}
            </p>
          </div>

          ${data.message ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Message:</strong>
            <div style="margin: 10px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #667eea; color: #666;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999; font-size: 12px;">
            <p>This email was sent from UJSS Inquiry Form</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `,
  }),

  career: (data: any) => ({
    from: emailConfig.from,
    to: emailConfig.to,
    replyTo: data.email,
    subject: `New Job Application - ${data.position}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #667eea; margin-bottom: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            New Job Application Received
          </h2>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Position Applied For:</strong>
            <p style="margin: 5px 0; padding: 8px 12px; background-color: #667eea; color: #fff; border-radius: 5px; display: inline-block; font-weight: 600;">
              ${data.position}
            </p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Name:</strong>
            <p style="margin: 5px 0; color: #666;">${data.name}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Email:</strong>
            <p style="margin: 5px 0; color: #666;"><a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a></p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Phone:</strong>
            <p style="margin: 5px 0; color: #666;">${data.phone}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Total Experience:</strong>
            <p style="margin: 5px 0; color: #666;">${data.experience}</p>
          </div>

          ${data.currentCompany ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Current Company:</strong>
            <p style="margin: 5px 0; color: #666;">${data.currentCompany}</p>
          </div>
          ` : ''}

          ${data.coverLetter ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Cover Letter:</strong>
            <div style="margin: 10px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #667eea; color: #666;">
              ${data.coverLetter.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 15px; background-color: #fff3cd; border-radius: 5px; border-left: 4px solid #ffc107;">
            <strong style="color: #856404;">📎 Resume Attached</strong>
            <p style="margin: 5px 0; color: #856404; font-size: 14px;">Please check the attachment for the candidate's resume.</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999; font-size: 12px;">
            <p>This email was sent from UJSS Career Portal</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `,
  }),
};
