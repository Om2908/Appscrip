import { NextResponse } from 'next/server';

// Ensure Node.js runtime for Vercel
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('url');

    if (!imageUrl) {
      return new NextResponse('Missing image URL', { status: 400 });
    }

    // Decode the URL
    const decodedUrl = decodeURIComponent(imageUrl);
    
    // Validate URL
    let url;
    try {
      url = new URL(decodedUrl);
    } catch (e) {
      return new NextResponse('Invalid URL', { status: 400 });
    }
    
    // Only allow fakestoreapi.com and placeholder.com for security
    const allowedDomains = ['fakestoreapi.com', 'via.placeholder.com'];
    if (!allowedDomains.some(domain => url.hostname.includes(domain))) {
      return new NextResponse('Domain not allowed', { status: 403 });
    }

    // Fetch the image with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const response = await fetch(decodedUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'image/*',
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        return new NextResponse('Failed to fetch image', { status: response.status });
      }

      const imageBuffer = await response.arrayBuffer();
      const contentType = response.headers.get('content-type') || 'image/jpeg';

      // Return the image with proper headers
      return new NextResponse(imageBuffer, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
        },
      });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        return new NextResponse('Request timeout', { status: 504 });
      }
      throw fetchError;
    }
  } catch (error) {
    console.error('Image proxy error:', error);
    return new NextResponse(`Error fetching image: ${error.message}`, { status: 500 });
  }
}
