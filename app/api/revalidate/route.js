import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { secret, slug } = body;

    // Check for secret to confirm this is a valid request
    // We use a fallback secret for local development/testing if env var is missing
    const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || 'dignite-secret-2026';
    
    if (secret !== REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Revalidate the main blog page
    revalidatePath('/blog');
    revalidatePath('/blog', 'page');
    
    // If a slug is provided, revalidate that specific blog post
    if (slug) {
      revalidatePath(`/blog/${slug}`);
      revalidatePath(`/blog/${slug}`, 'page');
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error('Error revalidating:', err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
