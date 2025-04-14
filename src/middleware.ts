import { NextResponse, NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const auth = true;
  if (!auth) {
    if (request.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json(
        { status: 401, body: "auth failed" },
        { status: 401 }
      );
    }else{
        return NextResponse.redirect(`${request.nextUrl.origin}/login`)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*", "/order/:path*"],
};
