import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle, Mail,
  Clock, MapPin, Shield, Users, CheckCircle2,
} from 'lucide-react'

export const metadata = {
  title: 'Contact Sultan GHC | Speak to a Patient Care Coordinator',
  description:
    'Contact Sultan Global Health Care — call, WhatsApp, or email our patient coordinators. Free case review, cost estimates, and hospital matching for U.S. patients seeking treatment in India or Turkey.',
  keywords: [
    'contact Sultan GHC',
    'speak to patient coordinator medical tourism',
    'Sultan GHC phone number',
    'Sultan GHC WhatsApp',
    'medical tourism concierge contact USA',
    'contact medical tourism company India Turkey',
  ],
  openGraph: {
    title: 'Contact Sultan GHC | Patient Care Coordinator',
    description: 'Call, WhatsApp, or email our patient coordinators. Free case review and hospital matching for U.S. patients seeking treatment in India or Turkey.',
    url: 'https://www.sultanghc.com/contact',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Sultan GHC | Patient Care Coordinator',
    description: 'Call, WhatsApp, or email our patient coordinators for free case review and hospital matching.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/contact' },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Sultan Global Health Care',
  description: 'Contact Sultan GHC to speak with a patient coordinator about medical treatment in India or Turkey.',
  url: 'https://www.sultanghc.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'Sultan Global Health Care',
    telephone: '+1-610-787-0713',
    email: 'info@sultanghc.com',
    url: 'https://www.sultanghc.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-610-787-0713',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
  },
}

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1-610-787-0713',
    detail: 'Mon–Fri 9 am–6 pm ET · Urgent cases 24/7',
    href: 'tel:+16107870713',
    cta: 'Call Now',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    ctaColor: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+1-610-787-0713',
    detail: 'Fastest response — usually within 1 hour',
    href: 'https://wa.me/16107870713',
    cta: 'Open WhatsApp',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    ctaColor: 'bg-green-600 hover:bg-green-700 text-white',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@sultanghc.com',
    detail: 'Response within 24 hours',
    href: 'mailto:info@sultanghc.com',
    cta: 'Send Email',
    color: 'bg-primary/5 border-primary/20',
    iconColor: 'text-primary',
    ctaColor: 'bg-primary hover:bg-primary/90 text-white',
  },
]

const WHAT_HAPPENS = [
  { n: '01', title: 'Coordinator reviews your case', desc: 'Within 24–48 hours of your message, a dedicated patient coordinator reviews your condition, reports, and requirements.' },
  { n: '02', title: 'Hospital & specialist match', desc: 'We match you with the right JCI-accredited hospital and specialist based on your condition, budget, and preferred destination.' },
  { n: '03', title: 'You receive a complete plan', desc: 'Treatment options, specialist profiles, cost estimates, visa guidance, and travel logistics — all in one document.' },
]

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Contact Us</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              We are here to help
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
              Speak to a Patient Care Coordinator
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you have a question, need a second opinion, or are ready to start planning — our patient coordinators are available by phone, WhatsApp, or email. There is no cost and no obligation to speak with us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {CONTACT_METHODS.map(({ icon: Icon, label, value, detail, href, cta, color, iconColor, ctaColor, external }) => (
              <div key={label} className={`rounded-3xl border p-8 flex flex-col gap-5 ${color}`}>
                <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm`}>
                  <Icon size={22} className={iconColor} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-lg font-semibold text-gray-900 mb-1">{value}</p>
                  <p className="text-sm text-gray-500 leading-snug">{detail}</p>
                </div>
                <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors ${ctaColor}`}>
                  {cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* Availability */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2.5">
              <Clock size={18} className="text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Office Hours</p>
                <p className="text-xs text-gray-500">Monday–Friday · 9:00 am – 6:00 pm Eastern Time</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Shield size={18} className="text-green-600 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Urgent Cases</p>
                <p className="text-xs text-gray-500">WhatsApp available 7 days · urgent queries responded to same day</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin size={18} className="text-gray-400 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Based in the United States</p>
                <p className="text-xs text-gray-500">Serving patients across all 50 states</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">What Happens After You Contact Us</h2>
            <p className="text-gray-500 text-sm">No pressure, no sales pitch. Here is exactly what to expect.</p>
          </div>
          <div className="space-y-4">
            {WHAT_HAPPENS.map(({ n, title, desc }) => (
              <div key={n} className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <span className="text-2xl font-bold text-primary/30 shrink-0 leading-none">{n}</span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: 'Free — No Obligation', desc: 'Speaking with us or receiving a cost estimate costs nothing. You decide if and when to proceed.' },
              { icon: Users,  title: 'Dedicated Coordinator', desc: 'You speak with a real person — not a chatbot or intake form. One coordinator handles your case from start to finish.' },
              { icon: CheckCircle2, title: 'Confidential', desc: 'All medical information you share is handled with strict confidentiality in line with our Privacy Policy.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prefer a form? */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Prefer to Submit a Request Online?</h2>
          <p className="text-white/80 text-sm mb-7 leading-relaxed max-w-lg mx-auto">
            Use our enquiry form to share your medical reports, describe your condition, and tell us your destination preference. We respond within 24–48 hours with a full treatment plan and cost estimate.
          </p>
          <Link href="/enquiry"
            className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
            Submit an Enquiry <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
