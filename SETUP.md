# Contact Form Setup Guide

Your contact form is now configured to send actual emails! Follow these steps to complete the setup:

## EmailJS Setup (Required for Contact Form)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account (200 emails/month free)
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Connect your Gmail account (Pranavs22638@gmail.com)
5. Note the **Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: {{subject}}

New message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Phone: {{to_phone}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. Click **Save** and note the **Template ID**

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (starts with letters/numbers)
3. Copy it

### Step 5: Configure Environment Variables
1. In your project root, create a `.env` file
2. Add your credentials:

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials
4. **NEVER** commit the `.env` file to GitHub (it's already in .gitignore)

### Step 6: Restart Development Server
```bash
npm start
```

## Profile Photo Setup

### Add Your Headshot:
1. Prepare a square photo (800x800px recommended)
2. Save it as `profile.jpg` or `profile.png`
3. Place it in: `/public/images/`

The photo will automatically appear on your About page!

### Photo Specifications:
- **Format**: JPG or PNG
- **Size**: Square, minimum 400x400px
- **File size**: Under 500KB
- **Type**: Professional headshot or head-and-shoulders

## Testing the Contact Form

1. Make sure your `.env` file has the correct EmailJS credentials
2. Start the dev server: `npm start`
3. Go to the Contact page
4. Fill out and submit the form
5. Check Pranavs22638@gmail.com for the message

## SMS Notifications (Optional)

EmailJS doesn't directly send SMS, but your template includes the phone number (8583064080). To get SMS notifications:

### Option 1: Email-to-SMS Gateway
Configure your email template to also send to: `8583064080@txt.att.net` (for AT&T) or your carrier's email-to-SMS gateway

### Option 2: Zapier Integration (Recommended)
1. Create a free Zapier account
2. Set up a Zap: Gmail → SMS
3. Trigger: New email from EmailJS
4. Action: Send SMS via Twilio/other service

### Option 3: IFTTT
1. Create IFTTT account  
2. Set up: Gmail trigger → SMS action
3. Filter for emails from EmailJS

## Security Notes

- Never commit your `.env` file
- Keep your EmailJS keys private
- The `.env.example` file is safe to commit (it has placeholders)
- EmailJS free tier: 200 emails/month
- Consider adding reCAPTCHA to prevent spam (future enhancement)

## ❓ Troubleshooting

### Form shows "Failed to send"
- Check that `.env` file exists with correct values
- Verify EmailJS credentials are correct
- Check browser console for errors
- Ensure dev server was restarted after creating `.env`

### Emails not arriving
- Check spam folder
- Verify Gmail is connected in EmailJS
- Test email template in EmailJS dashboard
- Check EmailJS usage limits

### Profile photo not showing
- Ensure file is named exactly `profile.jpg` or `profile.png`
- Check file is in `/public/images/` folder
- Hard refresh browser (Ctrl+Shift+R)
- Check browser console for 404 errors

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [React Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

---

Need help? The contact form falls back to your email if EmailJS isn't configured yet!
