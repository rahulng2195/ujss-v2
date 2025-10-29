# Email Setup Instructions for UJSS Forms

All forms on the website now have email functionality. Emails will be sent **from** `rahul@crezvatic.com` to `rahul@crezvatic.com`.

## Quick Setup

### 1. Create Environment File

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

### 2. Configure SMTP Settings

Edit `.env.local` and add your email credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=rahul@crezvatic.com
SMTP_PASSWORD=your_app_password_here
```

## SMTP Configuration Options

### Option 1: Gmail (Recommended for Testing)

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Sign in with `rahul@crezvatic.com`
3. Create a new app password (select "Mail" and "Other")
4. Copy the 16-character password
5. Update `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=rahul@crezvatic.com
SMTP_PASSWORD=your_16_char_app_password
```

### Option 2: Microsoft 365 / Outlook

```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=rahul@crezvatic.com
SMTP_PASSWORD=your_email_password
```

### Option 3: Custom Domain SMTP (e.g., cPanel, Plesk)

Contact your hosting provider for SMTP details:

```env
SMTP_HOST=mail.crezvatic.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=rahul@crezvatic.com
SMTP_PASSWORD=your_email_password
```

### Option 4: SendGrid (Production Recommended)

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Configure:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
```

## Forms with Email Functionality

### 1. **Contact Form** (`/contact`)
- Fields: Name, Email, Phone, Subject, Message
- Email Template: Professional contact form submission
- API: `/api/contact`

### 2. **Inquiry Modal** (Service pages)
- Fields: Name, Email, Phone, Service Interest, Message
- Email Template: Service inquiry with selected service highlighted
- API: `/api/inquiry`

### 3. **Career Modal** (`/career`)
- Fields: Name, Email, Phone, Position, Experience, Company, Resume, Cover Letter
- Email Template: Job application with resume attachment
- API: `/api/career`
- **Note**: Resume files are attached to the email

## Email Templates

All emails include:
- Professional HTML formatting
- Company branding (purple gradient theme)
- Timestamp
- Reply-to address set to the form submitter's email
- Easy-to-read information layout

## Testing

### Test Email Sending

1. Start the development server:
```bash
npm run dev
```

2. Navigate to:
   - Contact page: `http://localhost:3000/contact`
   - Any service page and click "Get a Quote" for inquiry modal
   - Career page and click "Apply Now" for career modal

3. Fill out the form and submit

4. Check `rahul@crezvatic.com` inbox for the email

## Troubleshooting

### Issue: "Failed to send email"

**Solution:**
- Verify SMTP credentials in `.env.local`
- Check if less secure apps are enabled (for Gmail)
- Verify firewall allows outbound SMTP connections
- Check server console for detailed error messages

### Issue: Emails going to spam

**Solution:**
- Use a reputable SMTP service (SendGrid, Mailgun)
- Set up SPF and DKIM records for your domain
- Verify sender email domain

### Issue: File upload not working (Career form)

**Solution:**
- Check file size (max 5MB recommended)
- Verify file types (.pdf, .doc, .docx)
- Check server upload limits in hosting settings

## Security Notes

- **Never commit `.env.local` file** to version control
- Use app-specific passwords, not your main email password
- Consider using a dedicated email service for production (SendGrid, Mailgun, AWS SES)
- Rate limit form submissions to prevent spam

## Production Deployment

For production, consider:

1. **Use a professional email service** (SendGrid, Mailgun, AWS SES)
2. **Add rate limiting** to prevent spam
3. **Implement CAPTCHA** on forms
4. **Set up email delivery monitoring**
5. **Configure domain authentication** (SPF, DKIM, DMARC)

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_SECURE` | Use SSL (true for 465, false for 587) | `false` |
| `SMTP_USER` | Sender email address | `rahul@crezvatic.com` |
| `SMTP_PASSWORD` | Email password or app password | `abcd1234efgh5678` |

## Support

For issues or questions, contact the development team.
