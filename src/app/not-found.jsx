import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle, Home, Search } from 'lucide-react'

export const metadata = {
  title: 'Page Not Found | Sultan GHC',
  description: 'The page you are looking for could not be found. Browse Sultan GHC treatments, destinations, or contact our patient coordinators.',
}

const POPULAR_LINKS = [
  { label: 'All Treatments',        href: '/treatments',           desc: '19 medical specialties in India & Turkey' },
  { label: 'How It Works',          href: '/how-it-works',         desc: 'Your end-to-end medical journey' },
  { label: 'Cost Savings — India',  href: '/cost-savings/india',   desc: 'Compare India vs U.S. treatment costs' },
  { label: 'Cost Savings — Turkey', href: '/cost-savings/turkey',  desc: 'Compare Turkey vs U.S. treatment costs' },
  { label: 'Request an Enquiry',    href: '/enquiry',              desc: 'Free case review and cost estimate' },
  { label: 'Frequently Asked Questions', href: '/faq',             desc: 'Common questions about medical tourism' },
]

const QUICK_TREATMENTS = [
  { label: 'Cardiology',        href: '/treatments/cardiology' },
  { label: 'Oncology',          href: '/treatments/oncology' },
  { label: 'Orthopaedics',      href: '/treatments/orthopedics' },
  { label: 'IVF & Fertility',   href: '/treatments/fertility-ivf' },
  { label: 'Bariatric Surgery', href: '/treatments/bariatric-metabolic-surgery' },
  { label: 'Robotic Surgery',   href: '/treatments/robotic-minimally-invasive' },
  { label: 'Dental Surgery',    href: '/treatments/dental-surgery-implant-dentistry' },
  { label: 'Ophthalmology',     href: '/treatments/ophthalmology' },
]

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col items-center justify-center py-20 px-6">
      {/* Error code */}
      <div className="text-center mb-10">
        <p className="text-[120px] sm:text-[160px] font-bold text-primary/10 leading-none select-none">404</p>
        <div className="-mt-8 relative z-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Page not found</h1>
          <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            The page you are looking for may have been moved, renamed, or may never have existed. Let us help you find what you need.
          </p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
        <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
          <Home size={15} /> Go to Homepage
        </Link>
        <Link href="/treatments" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
          <Search size={15} /> Browse Treatments
        </Link>
        <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-100 transition-colors">
          <MessageCircle size={15} /> WhatsApp Us
        </a>
      </div>

      {/* Popular pages */}
      <div className="w-full max-w-3xl mb-12">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center mb-5">Popular Pages</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {POPULAR_LINKS.map(({ label, href, desc }) => (
            <Link key={href} href={href}
              className="flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-primary/30 hover:bg-primary/5 transition-all group">
              <div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors">{label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
              </div>
              <ArrowRight size={14} className="text-gray-300 group-hover:text-primary shrink-0 transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      {/* Quick treatments */}
      <div className="w-full max-w-3xl mb-12">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center mb-4">Browse by Specialty</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {QUICK_TREATMENTS.map(({ label, href }) => (
            <Link key={href} href={href}
              className="text-sm px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
              {label}
            </Link>
          ))}
          <Link href="/treatments"
            className="text-sm px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium hover:bg-primary/20 transition-all">
            All 19 Specialties →
          </Link>
        </div>
      </div>

      {/* Help CTA */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center max-w-md shadow-sm">
        <p className="text-sm font-semibold text-gray-900 mb-1">Still can not find what you need?</p>
        <p className="text-xs text-gray-500 mb-4">Our patient coordinators can help you directly.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="tel:+16107870713" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            <Phone size={14} /> +1-610-787-0713
          </a>
          <span className="text-gray-300">·</span>
          <a href="mailto:info@sultanghc.com" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            info@sultanghc.com
          </a>
        </div>
      </div>
    </div>
  )
}
