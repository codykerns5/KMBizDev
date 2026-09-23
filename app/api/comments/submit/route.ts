import { NextResponse } from 'next/server';

const UPSTREAM =
  'https://marketplace-api.edst.com/api/common/sendkmbizdevcommentpost';

export async function POST(request: Request) {
  try {
    const { postLink } = await request.json();
    if (!postLink || typeof postLink !== 'string') {
      return NextResponse.json({ error: 'Post link is required' }, { status: 400 });
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const response = await fetch(UPSTREAM, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        clientId: 20446,
        categoryId: 107,
        productId: 499,
        packageName: 'Kmbizdev Comment Widget Order Link',
        remainingCustomCount: 'Unlimited',
        type: 'KmbizdevComment',
        postLink,
      }),
    }).finally(() => clearTimeout(timer));

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to submit post link' }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: 'Post link submitted successfully' });
  } catch {
    return NextResponse.json({ error: 'Failed to submit post link' }, { status: 504 });
  }
}
