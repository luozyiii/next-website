import { NextRequest, NextResponse, userAgent } from 'next/server';

export const config = {
  matcher: ['/', '/about'],
};

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const viewport = device.type === 'mobile' ? 'h5' : 'desktop';
  request.nextUrl.searchParams.set('viewport', viewport);
  return NextResponse.rewrite(request.nextUrl);
}
