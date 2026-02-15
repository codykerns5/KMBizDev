# KM Biz Dev — Portal & Login System Spec

## Overview

Transform the lead-capture flow into a full account-based system with upsell opportunities and integrated navigation.

---

## 1. Blueprint Page (`/blueprint`)

| Current | New |
|--------|-----|
| Photo (Cody) on left | **VSL Video** on left |
| Form on right | Form stays on right (unchanged) |
| → Submit → /thankyou | → Submit → /thankyou |

**VSL Video:**
- Title: "VLS FOR CODY"
- Source: Your Dropbox folder  
  *(We'll need the direct video file URL for embedding. Dropbox folder links need to be converted to a single video file link—I can guide you on getting this.)*
- Placement: Replace the current image area, same layout

**Form:** Same fields, same FormSubmit flow, same `/thankyou` redirect.

---

## 2. Thank You Page (`/thankyou`)

**Keep:**
- Download button
- Calendly scheduling
- Existing layout

**Change:**
- **"Download Blueprint" button** → No longer direct PDF download
- **New behavior:** Click "Download Blueprint" → Redirect to **"One Last Step"** page (`/create-account`)

---

## 3. One Last Step — Account Creation (`/create-account`)

**Purpose:** Prospect creates a Kerns Marketing account to access the Blueprint.

**Fields:**
- Username (or email)
- Password
- Confirm password
- Optional: prefill email from form if we pass it via URL/query

**Flow:**
- Submit → Create account → Log them in → Redirect to `/account`

---

## 4. Account Portal — Main Logged-In Area

**URL:** `/account` (or `/portal` — your choice)

**Behavior:**
- Protected route (login required)
- Landing page after first login and after "one last step"

**Initial view:**
- Primary: **Upsell popup** (modal)
- If closed: Normal dashboard view

---

## 5. Primary Upsell Popup (On Login)

Shows right after first visit to `/account` (or first login in a session):

**Content:**
1. **Instagram Growth Course** — $999 → **$99** (promotional offer)
2. **Free 30-Minute Brand Analysis Call** — with scheduling/booking option

**Actions:**
- CTA to purchase / schedule
- Close / dismiss button

**If dismissed:**
- User stays on `/account`
- Popup can be shown again (e.g., once per session or once per day) — we can tune this later.

---

## 6. Account Dashboard (When Popup Is Closed)

**Access:**
- **Download Blueprint** — PDF download (main value)
- **Core Programs** — links to main site programs
- **Press & Media** — links to Press & Media section
- **Full Service Menu** — link to main services
- **Additional Booking Options** — e.g., Calendly or other booking links

**Navigation:**
- Header with Kerns Marketing branding
- Links to `/` (home), `/account`, logout
- Optional sidebar for logged-in navigation

---

## 7. URL Structure

| URL | Who | Purpose |
|-----|-----|---------|
| `/blueprint` | Everyone | VSL + form, lead capture |
| `/thankyou` | Everyone | Post-form thank you, CTA to create account |
| `/create-account` | Everyone | Create username + password |
| `/login` | Everyone | Log in (returning users) |
| `/account` | Logged-in only | Main portal: blueprint download + navigation |
| `/` (home) | Everyone | Marketing menu, public site |

**Answer to your question:**  
Yes, the portal needs its own URL. `/account` (or `/portal`) is where logged-in users land and access everything.

---

## 8. End-to-End Flow

```
Cold traffic
    ↓
/blueprint (VSL + form)
    ↓
Submit form → /thankyou
    ↓
Click "Download Blueprint" → /create-account
    ↓
Create username + password → account created + auto-login
    ↓
Redirect to /account
    ↓
Upsell popup appears (Course $99 + Free Call)
    ↓
┌─ Accept → Purchase / Schedule
└─ Dismiss → Stay on /account
              ↓
         Dashboard: Download Blueprint, Core Programs,
                    Press & Media, Full Service Menu, Booking
```

---

## 9. Technical Needs

| Item | Approach |
|------|----------|
| User storage | Database (e.g., Supabase free tier) |
| Auth | NextAuth.js + credentials + database |
| Video embed | Dropbox direct link or hosted copy (Vimeo/YouTube) |
| PDF access | Stored in `/public` or behind auth; serve only when logged in |
| Upsell popup | React modal, shown on first load of `/account` |
| Calendly / scheduling | Embed or link on thank-you page and in popup |

---

## 10. Decisions to Confirm

1. **Portal URL:** `/account` or `/portal`?
2. **Video:** Can you grab the direct video file URL from Dropbox (or prefer we host it on Vimeo/YouTube for reliability)?
3. **Username:** Email as username, or separate username field?
4. **Upsell:** Do you already have payment/checkout and Calendly links for the $99 course and 30-min call?
5. **Database:** Are you okay using Supabase (free) for user accounts, or do you prefer another provider?

---

## 11. Implementation Order

1. Add VSL video to `/blueprint` (once we have the embed URL)
2. Update `/thankyou` so "Download Blueprint" → `/create-account`
3. Build `/create-account` page
4. Set up database (e.g., Supabase)
5. Implement auth (NextAuth + DB)
6. Build `/account` (protected)
7. Add upsell popup on `/account`
8. Add dashboard links (Blueprint, programs, media, services, booking)
9. Add `/login` for returning users
10. Deploy and test

---

Once you confirm these points (especially portal URL, video source, and database choice), we can move into implementation.
