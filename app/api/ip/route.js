// app/api/ip/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : request.ip || "IP not found";

  return NextResponse.json({ ip }); // Return the IP address as a JSON response
}
