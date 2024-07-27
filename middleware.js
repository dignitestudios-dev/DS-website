import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Define an array of paths that should be redirected
  const pathsToRedirect = [
    '/flutter-gray.webp',
    '/flutter-color.webp'
  ];

  // Check if the requested path matches any of the paths to redirect
  if (pathsToRedirect.includes(pathname)) {
    // Redirect to the home page (or any other URL)
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow other requests to proceed as normal
  return NextResponse.next();
}
