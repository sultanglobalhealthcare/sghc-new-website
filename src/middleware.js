import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, search } = request.nextUrl

  // Redirect uppercase/mixed-case paths to lowercase
  const lower = pathname.toLowerCase()
  if (lower !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = lower
    return NextResponse.redirect(url, { status: 308 })
  }

  return NextResponse.next()
}

export const config = {
  // Run on all paths except static assets, API routes and Next.js internals
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|favicon\\.png|manifest\\.json|api/).*)',
  ],
}
