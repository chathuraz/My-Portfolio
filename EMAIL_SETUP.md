# Contact Form Email Setup Guide

## Option 1: Web3Forms (Recommended - Free & Easy)

Web3Forms is a free service that doesn't require a backend server.

### Steps:

1. **Go to Web3Forms**: Visit https://web3forms.com/

2. **Get Your Access Key**:
   - Enter your email: `sajeewachathura2001@gmail.com`
   - Click "Create Access Key"
   - Copy the access key you receive

3. **Update the Contact Component**:
   - Open: `src/components/Contact.tsx`
   - Find the line: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
   
   Example:
   ```typescript
   access_key: 'abc123-def456-ghi789', // Your actual key
   ```

4. **Test It**: Fill out the contact form on your portfolio and check your email!

### Features:
- ✅ Free (1000 submissions/month)
- ✅ No backend needed
- ✅ Spam protection
- ✅ Email notifications
- ✅ Works with static sites

---

## Option 2: EmailJS (Alternative)

Another free option with similar features.

1. Visit: https://www.emailjs.com/
2. Sign up with your email
3. Get your Service ID, Template ID, and Public Key
4. Update the contact form code

---

## Option 3: Formspree (Alternative)

1. Visit: https://formspree.io/
2. Sign up and create a form
3. Get your form endpoint
4. Update the contact form

---

## Current Implementation

The contact form is already set up to send emails to: **sajeewachathura2001@gmail.com**

You just need to:
1. Get a Web3Forms access key (takes 1 minute)
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in the code
3. That's it!

---

## Testing

After adding your access key:
1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check your Gmail inbox
4. You should receive an email with:
   - Sender's name
   - Sender's email
   - Their message
   - Subject: "New Portfolio Contact from [Name]"

---

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify the access key is correct
- Make sure your email is correct in Web3Forms
- Check browser console for errors

**Form not submitting?**
- Check internet connection
- Open browser console (F12) to see error messages
- Make sure all required fields are filled
