import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { postLink } = await request.json();

    if (!postLink) {
      return NextResponse.json(
        { error: 'Post link is required' },
        { status: 400 }
      );
    }

    // TODO: Implement your backend integration here
    // Example: Save to database, send to webhook, etc.
    console.log('Received post link:', postLink);

    // For now, just return success
    return NextResponse.json(
      { 
        success: true,
        message: 'Post link submitted successfully',
        postLink 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting post link:', error);
    return NextResponse.json(
      { error: 'Failed to submit post link' },
      { status: 500 }
    );
  }
}
