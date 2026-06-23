import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const secret = process.env.JWT_SECRET;

  if (!token || !secret) {
    return NextResponse.redirect(new URL("/login?next=/vip", request.url));
  }

  try {
    jwt.verify(token, secret);
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/login?next=/vip", request.url));
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: ["/vip/:path*", "/profile/:path*"],
};
