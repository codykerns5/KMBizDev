# KMBIZDEV.com - Deployment Instructions

## What's Included

This is the complete source code for **kmbizdev.com** including:

- `/` - Main homepage (marketing menu)
- `/blueprint` - Lead capture form for Instagram Blueprint download
- `/thankyou` - Thank you page after form submission (for tracking)
- `/comments` - Comments page

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Click "Upload" and drag this entire folder
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"
6. Once deployed, go to Settings → Domains and add `kmbizdev.com`

### Option 2: Deploy via CLI

1. Install Vercel CLI: `npm i -g vercel`
2. Open terminal in this folder
3. Run: `vercel`
4. Follow prompts to link to your Vercel account
5. Run: `vercel --prod` to deploy to production

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Important Files

- `app/layout.tsx` - Contains Meta Pixel code (ID: 708920604521252)
- `app/blueprint/page.tsx` - Lead capture form
- `app/thankyou/page.tsx` - Thank you page with download + Calendly
- `public/instagram-blueprint.pdf` - The PDF that gets downloaded
- `public/cody-kerns.png` - Your profile image

## Form Submissions

Lead form submissions go to: **support@kmbizdev.com** via FormSubmit.co

To change the email:
1. Open `app/blueprint/page.tsx`
2. Find `formsubmit.co/support@kmbizdev.com`
3. Replace with your email
4. First submission will require email confirmation

## Meta Pixel Tracking

- PageView fires on every page load
- Lead event fires when /thankyou page loads (after form submission)

To change the pixel ID:
1. Open `app/layout.tsx`
2. Find `fbq('init', '708920604521252')`
3. Replace with your pixel ID

## Calendly

The Calendly embed uses: `https://calendly.com/kmbizdev`

To change:
1. Open `app/thankyou/page.tsx`
2. Find the iframe src and update the Calendly URL

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS
- TypeScript
- Lucide Icons

---

Questions? Contact support@kmbizdev.com
