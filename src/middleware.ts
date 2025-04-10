import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone(); // Clone to ensure immutability
  const hostname = url.hostname;
  // Skip redirection for localhost
  if (hostname === "localhost") {
    return NextResponse.next(); // Continue without redirecting
  }

  // Redirect if the hostname is "fcsc.co.in"
  if (hostname === "fcsc.co.in") {
    // Update hostname to include "www"
    url.hostname = "www.fcsc.co.in";

    // Redirect permanently with 301
    return NextResponse.redirect(url, 301);
  }

  // Continue processing for all other hostnames
  return NextResponse.next();
}

// Apply middleware to all paths
export const config = {
  matcher: "/:path*", // Ensures middleware is applied to all routes
};

