// Next.js App Router robots — auto-served at /robots.txt

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.sultanghc.com/sitemap.xml',
    host: 'https://www.sultanghc.com',
  }
}
