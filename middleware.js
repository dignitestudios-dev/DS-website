import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/flutter-gray.webp") {
    return NextResponse.redirect(
      new URL(
        "/Mobile-app-development-technology-Flutter-Icon-color.webp",
        request.url
      )
    );
  }
  return NextResponse.next();
}
