import { NextRequest, NextResponse } from 'next/server';

const GHL_WEBHOOK_URL = process.env.GHL_BLUEPRINT_WEBHOOK_URL;

// Receives FormSubmit webhook, forwards to GoHighLevel
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const formData = body?.form_data ?? {};
    const name = String(formData.name ?? '').trim();
    const email = String(formData.email ?? '').trim();
    const phone = String(formData.phone ?? '').trim();
    const instagram = String(formData.instagram ?? '').trim();
    const industry = String(formData.industry ?? '').trim();

    if (!name || !email || !phone || !instagram || !industry || !GHL_WEBHOOK_URL) {
      return NextResponse.json({ ok: true });
    }

    const nameParts = name.split(/\s+/);
    const firstName = nameParts[0] ?? name;
    const lastName = nameParts.slice(1).join(' ') || '';
    const ghlPayload = {
      name,
      firstName,
      lastName,
      email,
      phone,
      instagram,
      industry,
      source: 'Blueprint - kmbizdev.com',
      submitted_at: new Date().toISOString(),
    };

    await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ghlPayload),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
