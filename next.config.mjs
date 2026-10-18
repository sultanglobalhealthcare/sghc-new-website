/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.6'],

  async redirects() {
    return [
      // ── Broken CTA links ────────────────────────────────────────────────────
      { source: '/free-consultation', destination: '/enquiry',         permanent: true },
      { source: '/visa-guide',        destination: '/visa-guide/india', permanent: false },

      // ── Planned pages (redirect to nearest live equivalent) ─────────────────
      { source: '/blog',                              destination: '/faq',                    permanent: false },
      { source: '/resources/medical-tourism-guide',  destination: '/how-it-works',           permanent: false },
      { source: '/resources/cost-comparison',        destination: '/cost-savings/india',     permanent: false },
      { source: '/resources/:path*',                 destination: '/',                       permanent: false },
      { source: '/accessibility',                    destination: '/about',                  permanent: false },

      // ── Legacy domain alias (if old domain ever redirects here) ─────────────
      // { source: '/:path*', has: [{ type: 'host', value: 'sultanglobalhealthcare.com' }], destination: 'https://www.sultanghc.com/:path*', permanent: true },
    ]
  },
}

export default nextConfig
