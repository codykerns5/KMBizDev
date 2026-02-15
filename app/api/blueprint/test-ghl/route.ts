import { NextResponse } from 'next/server';

/**
 * GET /api/blueprint/test-ghl
 * Test GHL Contacts API - creates a test contact to verify token/locationId.
 * Delete the test contact from GHL after verifying.
 */
export async function GET() {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID || 'eGskqUSHmRV0h5nzaJBI';

  if (!token) {
    return NextResponse.json({
      ok: false,
      error: 'GHL_API_TOKEN not set in Vercel Environment Variables',
    });
  }

  const testContact = {
    locationId,
    firstName: 'Test',
    lastName: 'Blueprint',
    email: `test-${Date.now()}@kmbizdev.com`,
    phone: '+15551234567',
    source: 'Blueprint API Test',
  };

  try {
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);
    headers.set('Content-Type', 'application/json');
    headers.set('Version', '2021-07-28');

    const res = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
      method: 'POST',
      headers,
      body: JSON.stringify(testContact),
    });

    const text = await res.text();
    let body: unknown;
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }

    if (res.ok) {
      return NextResponse.json({
        ok: true,
        message: 'GHL API test passed! Contact created. Check GHL Contacts and delete the test.',
        status: res.status,
        response: body,
      });
    }

    return NextResponse.json({
      ok: false,
      error: `GHL API returned ${res.status}`,
      status: res.status,
      response: body,
    });
  } catch (err) {
    return NextResponse.json({
      ok: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    });
  }
}
