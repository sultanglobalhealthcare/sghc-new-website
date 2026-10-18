/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.6'],

  async redirects() {
    return [
      // ── Broken CTA links ────────────────────────────────────────────────────
      { source: '/free-consultation', destination: '/enquiry',         permanent: true },
      { source: '/visa-guide',        destination: '/visa-guide/india', permanent: false },

      // ── Old treatment slugs (homepage cards used wrong URLs) ────────────────
      { source: '/treatments/organ-transplants',        destination: '/treatments/organ-bone-marrow-transplant',             permanent: true },
      { source: '/treatments/cosmetic-plastic-surgery', destination: '/treatments/cosmetic-hair-transplant-plastic-surgery', permanent: true },
      { source: '/treatments/ivf-fertility',            destination: '/treatments/fertility-ivf',                            permanent: true },
      { source: '/treatments/dental-care',              destination: '/treatments/dental-surgery-implant-dentistry',         permanent: true },
      { source: '/treatments/wellness',                 destination: '/treatments/wellness-ayurveda',                        permanent: true },

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
