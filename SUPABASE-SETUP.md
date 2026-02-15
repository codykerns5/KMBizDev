# Supabase Setup for Account Portal

The login/account system uses Supabase Auth. Follow these steps to enable it.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **New Project**
3. Name it (e.g. `kmbizdev`)
4. Set a database password (save it securely)
5. Choose a region close to your users
6. Click **Create project**

## 2. Get Your API Keys

1. In the Supabase dashboard, go to **Settings** → **API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 3. Add to .env.local

Open `kmbizdev-export/.env.local` and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

## 4. Disable Email Confirmation (Important)

For users to access the Blueprint immediately after signup (without verifying email):

1. In Supabase dashboard: **Authentication** → **Providers** → **Email**
2. Turn **OFF** "Confirm email"
3. Save

If you leave it on, users must click a confirmation link before they can log in.

## 5. Add Environment Variables to Vercel

For production deployment:

1. Vercel project → **Settings** → **Environment Variables**
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your anon key
3. Redeploy the project

## Done

Once configured, the flow works:

- `/create-account` → Create account → Auto-login → `/account`
- `/login` → Sign in → `/account`
- `/account` → Protected; shows Blueprint download + upsell popup
