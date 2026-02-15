import { NextRequest, NextResponse } from 'next/server';

const GHL_WEBHOOK_URL =
  process.env.GHL_BLUEPRINT_WEBHOOK_URL ||
  'https://services.leadconnectorhq.com/hooks/eGskqUSHmRV0h5nzaJBI/webhook-trigger/8b71f1b7-5c96-4d01-a138-73f145cfe31d';

const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || 'eGskqUSHmRV0h5nzaJBI';
const GHL_API_TOKEN = process.env.GHL_API_TOKEN;

/** GET /api/blueprint - Diagnostic */
export async function GET() {
  return NextResponse.json({
    webhookConfigured: !!GHL_WEBHOOK_URL,
    contactsApiConfigured: !!GHL_API_TOKEN,
    locationId: GHL_LOCATION_ID,
    message: GHL_API_TOKEN
      ? 'Using GHL Contacts API + webhook (both).'
      : 'Using webhook only. Add GHL_API_TOKEN for direct API creation.',
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('[Blueprint API] Request received, email:', body?.email ?? '(none)');

    const firstName = String(body?.firstName ?? '').trim();
    const lastName = String(body?.lastName ?? '').trim();
    const name = `${firstName} ${lastName}`.trim() || firstName || lastName;

    // Email: clean value only (no "email" prefix)
    let email = String(body?.email ?? '').trim();
    if (email.toLowerCase().startsWith('email') && email.length > 5 && email.includes('@')) {
      email = email.replace(/^email/i, '').trim();
    }
    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: true });
    }

    const rawPhone = body?.phone != null ? String(body.phone).replace(/\D/g, '') : '';
    const digits = rawPhone.length === 11 && rawPhone.startsWith('1') ? rawPhone.slice(1) : rawPhone;
    const phone = digits ? `+1${digits}` : undefined;

    const source = 'Blueprint - kmbizdev.com';

    // Build payload with only defined values (GHL rejects undefined)
    const baseContact: Record<string, string> = {
      locationId: GHL_LOCATION_ID,
      firstName: firstName || 'Unknown',
      lastName: lastName || 'Unknown',
      name,
      email,
      source,
    };
    if (phone) baseContact.phone = phone;

    // 1. GHL Contacts API (upsert) - creates/updates contact directly
    if (GHL_API_TOKEN) {
      const apiHeaders = new Headers();
      apiHeaders.set('Authorization', `Bearer ${GHL_API_TOKEN}`);
      apiHeaders.set('Content-Type', 'application/json');
      apiHeaders.set('Version', '2021-07-28');

      try {
        const apiRes = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
          method: 'POST',
          headers: apiHeaders,
          body: JSON.stringify(baseContact),
          signal: AbortSignal.timeout(15000),
        });

        const apiText = await apiRes.text();
        if (apiRes.ok) {
          console.log('[Blueprint API] GHL Contacts API success:', apiRes.status);
        } else {
          console.error('[Blueprint API] GHL Contacts API error:', apiRes.status, apiText);
        }
      } catch (apiErr) {
        console.error('[Blueprint API] GHL Contacts API fetch error:', apiErr);
      }
    }

    // 2. Inbound Webhook (backup - triggers workflow)
    const ghlPayload = {
      ...baseContact,
      countryCode: '1',
      instagram: body?.instagram ? String(body.instagram) : undefined,
      industry: body?.industry ? String(body.industry) : undefined,
      dateAdded: new Date().toISOString(),
      submitted_at: new Date().toISOString(),
    };

    try {
      const ghlRes = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ghlPayload),
        signal: AbortSignal.timeout(15000),
      });

      const ghlText = await ghlRes.text();
      if (!ghlRes.ok) {
        console.error('[Blueprint API] GHL webhook error:', ghlRes.status, ghlText);
      } else {
        console.log('[Blueprint API] GHL webhook success:', ghlRes.status);
      }
    } catch (webhookErr) {
      console.error('[Blueprint API] GHL webhook fetch error:', webhookErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[Blueprint API] Error:', err);
    return NextResponse.json({ ok: true });
  }
}
