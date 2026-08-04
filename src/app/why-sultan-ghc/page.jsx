import Link from 'next/link'
import {
  ChevronRight,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  XCircle,
  Shield,
  Users,
  Clock,
  FileText,
  Plane,
  HeartPulse,
  Star,
  BadgeCheck,
  TrendingDown,
  Globe,
  Handshake,
  Plus,
  Minus,
  BarChart3,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Why Choose Sultan GHC | Trusted Medical Tourism Concierge for U.S. Patients',
  description:
    'Discover why U.S. patients trust Sultan GHC for medical treatment in India and Turkey. JCI-accredited hospitals, 60–80% cost savings, dedicated case managers, and end-to-end care. No booking platform — a real concierge.',
  keywords: [
    'why choose Sultan GHC',
    'medical tourism concierge USA',
    'best medical tourism company for Americans',
    'affordable healthcare abroad from USA',
    'medical tourism India Turkey',
    'JCI accredited hospitals India',
    'international patient services',
    'healthcare facilitation USA',
    'Sultan GHC review',
    'medical travel company United States',
  ],
  openGraph: {
    title: 'Why Choose Sultan GHC | U.S. Medical Tourism Concierge',
    description:
      'JCI-accredited hospitals. 60–80% savings. A dedicated Case Manager from Day 1. Discover why Sultan GHC is the most trusted medical tourism concierge for American patients.',
    url: 'https://www.sultanghc.com/why-sultan-ghc',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: 'https://www.sultanghc.com/sghc-new-logo.png',
        width: 1200,
        height: 630,
        alt: 'Why Choose Sultan GHC — Medical Tourism Concierge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Sultan GHC | U.S. Medical Tourism Concierge',
    description:
      'JCI-accredited hospitals, 60–80% savings, and a dedicated Case Manager. The most trusted medical tourism concierge for Americans.',
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/why-sultan-ghc',
  },
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    id: 'case-management',
    number: '01',
    icon: Users,
    label: 'Dedicated Case Management',
    headline: 'One Person. Every Step. Zero Confusion.',
    body: 'From the moment you reach out, you are assigned a dedicated Case Manager — a real human who knows your name, your condition, your timeline, and your concerns. This person is your single point of contact for every question, every update, and every decision throughout your journey.',
    detail:
      'Unlike booking platforms where you fill a form and wait, Sultan GHC assigns a personal advocate immediately. Your Case Manager coordinates your clinical review, hospital selection, visa process, travel arrangements, and post-treatment follow-up — all while keeping your family informed at every stage.',
    highlights: [
      'Dedicated Case Manager assigned within hours of enquiry',
      'Single point of contact — no call centers, no departments',
      'Your family kept in the loop via WhatsApp group',
      'Available in your time zone — morning, evening, and urgently',
    ],
    stat: { value: '1', label: 'Case Manager. Yours alone.' },
    color: 'blue',
  },
  {
    id: 'accredited-network',
    number: '02',
    icon: BadgeCheck,
    label: 'Clinically Vetted Hospital Network',
    headline: 'Not Every Hospital. Only the Right Ones.',
    body: 'Every hospital in the Sultan GHC network has been personally vetted — not just checked for accreditation on a website, but evaluated for specialist quality, international patient protocols, outcome data, nursing ratios, and real patient feedback.',
    detail:
      'We only partner with JCI (Joint Commission International) and NABH-accredited hospitals in India, and JCI-accredited institutions in Turkey. JCI is the same independent body that accredits leading U.S. hospitals. When your surgeon trained at Harvard or Johns Hopkins and operates in a facility with ISO-certified ORs and 24/7 intensivists, you are not compromising — you are choosing differently.',
    highlights: [
      'JCI and NABH-accredited hospitals only',
      'Same accreditation standards as top U.S. hospitals',
      'Personally vetted by our clinical advisors',
      'Specialist outcome data reviewed before partnership',
    ],
    stat: { value: '50+', label: 'Vetted hospital partners' },
    color: 'violet',
  },
  {
    id: 'transparent-pricing',
    number: '03',
    icon: TrendingDown,
    label: 'Transparent, No-Surprise Pricing',
    headline: 'Know Exactly What You\'ll Pay. Before You Commit.',
    body: 'Before you book a single flight or sign anything, you receive a complete, itemised cost estimate covering your procedure, hospital stay, surgeon\'s fee, medication, accommodation, and transfers. Everything — in writing.',
    detail:
      'The U.S. healthcare system is infamous for opaque billing. Medical tourism should be the opposite. Sultan GHC provides full cost transparency so you can make an informed decision. Patients routinely save 60–80% versus U.S. prices — including the cost of flights and accommodation. There are no hidden fees added later, no insurance negotiation games, and no surprise billing.',
    highlights: [
      'Full itemised cost estimate before commitment',
      'Zero hidden fees — everything in writing',
      'Savings of 60–80% vs. comparable U.S. procedures',
      'Costs include procedure, stay, transfers, and support',
    ],
    stat: { value: '80%', label: 'Average savings vs. U.S. pricing' },
    color: 'emerald',
  },
  {
    id: 'complete-logistics',
    number: '04',
    icon: Plane,
    label: 'End-to-End Travel & Logistics',
    headline: 'You Focus on Getting Better. We Handle Everything Else.',
    body: 'Medical visa. Flight coordination. Airport pickup. Hospital admission. Accommodation. Local transport. Interpreter services. Prescription documentation for re-entry. Every logistical element of your international journey is planned, coordinated, and managed by our team.',
    detail:
      'Navigating a foreign healthcare system while managing a medical condition is genuinely hard. Language barriers, unfamiliar bureaucracy, unfamiliar cities — it adds anxiety at exactly the moment you can least afford it. Sultan GHC eliminates this completely. Our on-ground teams in India and Turkey are embedded in the cities where your hospitals are located. They know every corridor, every process, and every shortcut.',
    highlights: [
      'Medical visa assistance — official invitation letter included',
      'Accommodation near the hospital arranged to your budget',
      'Airport meet-and-greet with private vehicle transfer',
      'Certified interpreter available throughout your stay',
    ],
    stat: { value: '100%', label: 'Logistics handled by us' },
    color: 'amber',
  },
  {
    id: 'on-ground-support',
    number: '05',
    icon: Clock,
    label: '24/7 On-Ground Human Support',
    headline: 'Someone Is Always There. Night, Day, or Emergency.',
    body: 'Being in a foreign country for medical treatment is a deeply personal experience. Having a trusted person physically present — not just a chatbot or a helpline number — changes everything. Our on-ground coordinators visit you daily during your hospital stay and are reachable around the clock.',
    detail:
      'From the moment you land to the moment you board your return flight, our teams in India and Turkey are physically present. They accompany you to consultations, help you understand medical instructions, liaise with nursing staff on your behalf, and ensure you always have everything you need. A WhatsApp group keeps your family updated in real time, wherever they are.',
    highlights: [
      'Daily welfare visits from our on-ground coordinator',
      '24/7 WhatsApp support — real people, not bots',
      'Coordinator accompanies you to consultations',
      'Your family kept informed through a shared group',
    ],
    stat: { value: '24/7', label: 'Support throughout your stay' },
    color: 'rose',
  },
  {
    id: 'continuity-of-care',
    number: '06',
    icon: HeartPulse,
    label: 'Post-Treatment Continuity of Care',
    headline: 'Our Job Doesn\'t End When You Board Your Flight Home.',
    body: 'Recovery does not stop at the airport. Sultan GHC stays in your corner after you return to the United States — facilitating follow-up video consultations with your treating physician, connecting you with local practitioners if needed, and being available for any concern.',
    detail:
      'Before discharge, your doctor provides a comprehensive medical summary, procedure report, imaging data, and a tailored recovery plan. We ensure you have everything you need for re-entry and for any follow-up care with a U.S.-based physician. Our relationship with patients is built to last — not just until the flight home.',
    highlights: [
      'Comprehensive discharge summary and records provided',
      'Remote follow-up video calls with your treating doctor',
      'Fit to Fly certificate arranged before departure',
      'Medication documentation for U.S. customs and re-entry',
    ],
    stat: { value: '∞', label: 'Our care does not expire' },
    color: 'teal',
  },
]

const PILLAR_COLORS = {
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-100',   icon: 'bg-blue-100 text-blue-600',   stat: 'text-blue-600',   pill: 'bg-blue-100 text-blue-700' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-100', icon: 'bg-violet-100 text-violet-600', stat: 'text-violet-600', pill: 'bg-violet-100 text-violet-700' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100',icon: 'bg-emerald-100 text-emerald-600',stat: 'text-emerald-600',pill: 'bg-emerald-100 text-emerald-700' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-100',  icon: 'bg-amber-100 text-amber-600',  stat: 'text-amber-600',  pill: 'bg-amber-100 text-amber-700' },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-100',   icon: 'bg-rose-100 text-rose-600',    stat: 'text-rose-600',   pill: 'bg-rose-100 text-rose-700' },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-100',   icon: 'bg-teal-100 text-teal-600',    stat: 'text-teal-600',   pill: 'bg-teal-100 text-teal-700' },
}

const COMPARISON_FEATURES = [
  'Dedicated Case Manager',
  'Clinically Vetted Hospitals',
  'Transparent Cost Estimate Upfront',
  'Visa & Documentation Support',
  'Airport & Local Transport',
  'In-Hospital Daily Support',
  'Certified Interpreter Services',
  'Post-Treatment Follow-up',
  'Family Communication Updates',
]

const COMPARISON_COLS = [
  {
    name: 'Sultan GHC',
    sub: 'Healthcare Concierge',
    values: [true, true, true, true, true, true, true, true, true],
    highlight: true,
  },
  {
    name: 'Booking Platform',
    sub: 'Hospital Listings Only',
    values: [false, false, false, false, false, false, false, false, false],
    highlight: false,
  },
  {
    name: 'Going Alone',
    sub: 'Self-Managed Travel',
    values: [false, false, false, false, false, false, false, false, false],
    highlight: false,
  },
]

const COST_PROCEDURES = [
  { name: 'Knee Replacement', usa: '$35,000–$55,000', india: '$6,000–$9,000', turkey: '$7,000–$12,000', savings: 'Up to 83%' },
  { name: 'Hip Replacement', usa: '$40,000–$60,000', india: '$7,000–$10,000', turkey: '$8,000–$12,000', savings: 'Up to 82%' },
  { name: 'Cardiac Bypass (CABG)', usa: '$80,000–$150,000', india: '$12,000–$18,000', turkey: '$15,000–$22,000', savings: 'Up to 85%' },
  { name: 'Spinal Fusion Surgery', usa: '$100,000–$150,000', india: '$8,000–$12,000', turkey: '$10,000–$16,000', savings: 'Up to 92%' },
  { name: 'IVF (per cycle)', usa: '$15,000–$25,000', india: '$2,500–$4,500', turkey: '$3,000–$5,500', savings: 'Up to 82%' },
  { name: 'Dental Implant (per tooth)', usa: '$3,000–$6,000', india: '$500–$900', turkey: '$600–$1,200', savings: 'Up to 90%' },
]

const STATS = [
  { value: '500+', label: 'U.S. Patients Helped', icon: Users },
  { value: '60–80%', label: 'Average Cost Savings', icon: TrendingDown },
  { value: '50+', label: 'Accredited Hospital Partners', icon: BadgeCheck },
  { value: '24/7', label: 'Patient Support, Always', icon: Clock },
]

const FAQS = [
  {
    q: 'Is Sultan GHC a hospital or a healthcare provider?',
    a: 'No. Sultan GHC is a U.S.-based healthcare facilitation and concierge company. We do not provide medical advice, diagnosis, or treatment. Our role is to connect you with the right hospital and specialist, and to manage every logistical and administrative aspect of your international medical journey — before, during, and after treatment.',
  },
  {
    q: 'How does Sultan GHC make money if the first consultation is free?',
    a: 'Sultan GHC operates on a facilitation model. We are compensated by our partner hospitals for the coordination and facilitation services we provide. This compensation does not increase the cost you pay as a patient — in fact, your treatment cost is the same as or lower than booking directly, because of our established relationships and volume agreements with partner institutions.',
  },
  {
    q: 'How do I know the hospitals you recommend are safe?',
    a: 'Every hospital in our network holds JCI (Joint Commission International) accreditation in India and Turkey, and/or NABH certification in India. JCI is the same body that accredits leading U.S. hospitals internationally. Additionally, our clinical advisors have personally reviewed each facility for specialist quality, international patient protocols, and track record before any partnership is established.',
  },
  {
    q: 'What is the difference between Sultan GHC and a medical tourism booking website?',
    a: 'A booking website lists hospitals and lets you contact them directly — after that, you are on your own. Sultan GHC is a full-service concierge. We assign you a dedicated Case Manager, review your case clinically, provide a transparent cost estimate, handle your visa and travel, accompany you during your stay with on-ground support, and follow up after you return home. We are your advocate throughout — not just a directory.',
  },
  {
    q: 'Can I choose my own doctor or hospital?',
    a: 'Absolutely. While we recommend specific specialists based on your condition and clinical requirements, you retain full choice. We present you with options — matched specialists, hospital profiles, and cost estimates — and you make the final decision. Our role is to inform and support, never to pressure.',
  },
  {
    q: 'What if something goes wrong during treatment?',
    a: 'Patient safety is our top priority. Our on-ground coordinators are physically present during your stay and maintain direct lines of communication with hospital management. In the event of any complication, we act as your immediate advocate — liaising with the clinical team, keeping your family informed, and escalating to senior hospital leadership if needed. All partner hospitals also have structured international patient complaint and resolution protocols.',
  },
  {
    q: 'Do I need travel or medical insurance?',
    a: 'We strongly recommend that all patients obtain comprehensive international travel insurance before travel, and where available, a medical tourism-specific policy covering the procedure type and duration of stay. We can guide you on what to look for in a suitable policy — including coverage for trip cancellation due to medical reasons, emergency evacuation, and post-procedure complications.',
  },
  {
    q: 'How long does the entire process take?',
    a: 'Most patients complete the full process — from enquiry to arriving at hospital — within 3–5 weeks. This includes the medical review (24–48 hours), treatment plan approval, visa application (approximately 1–2 weeks), and travel arrangements. In urgent cases, we can often expedite the process significantly.',
  },
]

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Why Choose Sultan GHC',
  description:
    'Why U.S. patients trust Sultan GHC for medical tourism in India and Turkey — dedicated case management, JCI-accredited hospitals, 60–80% cost savings, and end-to-end patient support.',
  url: 'https://www.sultanghc.com/why-sultan-ghc',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sultanghc.com/' },
      { '@type': 'ListItem', position: 2, name: 'Why Sultan GHC', item: 'https://www.sultanghc.com/why-sultan-ghc' },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function PillarSection({ pillar, index }) {
  const Icon = pillar.icon
  const isEven = index % 2 === 1
  const c = PILLAR_COLORS[pillar.color]

  return (
    <section
      id={pillar.id}
      aria-labelledby={`pillar-${pillar.id}`}
      className="scroll-mt-24"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>

        {/* Text side */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon}`}>
              <Icon size={18} />
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${c.pill}`}>
              {pillar.label}
            </span>
          </div>

          <h2
            id={`pillar-${pillar.id}`}
            className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-5"
          >
            {pillar.headline}
          </h2>

          <p className="text-base text-gray-500 leading-relaxed mb-4">
            {pillar.body}
          </p>
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            {pillar.detail}
          </p>

          <ul className="space-y-2.5">
            {pillar.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual card side */}
        <div className="w-full lg:w-5/12 flex-shrink-0">
          <div className={`rounded-3xl border ${c.border} ${c.bg} p-10 relative overflow-hidden`}>
            {/* Watermark number */}
            <span className="absolute -right-3 -bottom-6 text-[8rem] font-black text-gray-900/[0.04] leading-none select-none pointer-events-none">
              {pillar.number}
            </span>

            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${c.icon}`}>
              <Icon size={28} />
            </div>

            {/* Stat */}
            <p className={`text-5xl font-black mb-1 ${c.stat}`}>{pillar.stat.value}</p>
            <p className="text-sm text-gray-500 mb-8 font-medium">{pillar.stat.label}</p>

            {/* Checklist */}
            <div className="space-y-3 relative z-10">
              {pillar.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-xs text-gray-600 leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WhySultanGHCPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff] relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/20 -translate-y-1/3 translate-x-1/3 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-violet-200/20 translate-y-1/2 -translate-x-1/4 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Why Sultan GHC</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

            {/* Left: copy */}
            <div className="flex-1 max-w-2xl">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-5">
                Why Choose Sultan GHC
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                World-Class Treatment Abroad —{' '}
                <span className="text-primary">with Someone Truly in Your Corner</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Sultan GHC is not a listing website. We are a U.S.-based healthcare concierge — a team
                of dedicated patient advocates who manage every aspect of your international medical
                journey, from the first call to full recovery back home.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-primary/30 hover:bg-blue-600 hover:-translate-y-0.5 transition-all"
                >
                  Get My Free First Medical Opinion
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-700 text-sm font-medium px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: mini trust cards */}
            <div className="w-full lg:w-auto grid grid-cols-2 gap-3 lg:max-w-xs">
              {[
                { icon: BadgeCheck, label: 'JCI-Accredited Hospitals', sub: 'India & Turkey' },
                { icon: TrendingDown, label: 'Save 60–80%', sub: 'vs. U.S. costs' },
                { icon: Users, label: 'Dedicated Case Manager', sub: 'Assigned Day 1' },
                { icon: HeartPulse, label: 'Post-Treatment Care', sub: 'Even back home' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-white rounded-2xl border border-blue-100 p-4 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <Icon size={15} />
                  </div>
                  <p className="text-xs font-bold text-gray-900 leading-snug">{label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-primary" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/20">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center lg:px-8 gap-1">
                <p className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{value}</p>
                <p className="text-sm font-medium text-blue-100">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem We Solve ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-5">
                The Problem We Solve
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                U.S. Healthcare Is World-Class — But Not Always Accessible
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-5">
                The United States has some of the finest medical professionals in the world. But access
                to that care is complicated by cost, insurance coverage gaps, long wait times, and an
                increasingly complex system that leaves many patients without viable options.
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-5">
                Internationally accredited hospitals in India and Turkey offer the same quality of
                specialist care — at 10–20% of U.S. prices. Many of these hospitals were built
                specifically to serve international patients, with English-speaking staff, international
                patient departments, and outcomes data that matches or exceeds Western benchmarks.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                The barrier is not quality — it is navigation. Knowing which hospital, which surgeon,
                how to get a visa, how to plan travel, and what happens if something goes wrong. That is
                exactly the barrier Sultan GHC removes.
              </p>
            </div>

            {/* Cards grid */}
            <div className="w-full lg:w-5/12 flex-shrink-0 grid grid-cols-1 gap-4">
              {[
                { icon: '💸', title: 'Prohibitive U.S. Costs', body: 'Average knee replacement in the U.S.: $40,000–$55,000. In India: $6,500. Including flights and accommodation.' },
                { icon: '⏳', title: 'Long Wait Times', body: 'Many U.S. surgical procedures carry waits of 3–12 months. Our partner hospitals in India and Turkey typically schedule within 2–4 weeks.' },
                { icon: '📋', title: 'Insurance Gaps', body: 'Over 26 million Americans are uninsured or underinsured. Many more face high deductibles that make U.S. procedures effectively unaffordable.' },
                { icon: '🌐', title: 'The Navigation Gap', body: 'International healthcare is confusing — not because the care is inferior, but because the logistics are unfamiliar. Sultan GHC bridges that gap completely.' },
              ].map(({ icon, title, body }) => (
                <div key={title} className="flex gap-4 bg-[#F5F7FA] rounded-2xl p-5 border border-gray-100">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Six Pillars ── */}
      <section className="py-14 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Six Reasons to Choose Sultan GHC
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              What Sets Us Apart — In Detail
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We are not just a directory or a booking tool. Here is exactly how we serve you — six
              concrete commitments that make the difference between a stressful experience and a
              life-changing one.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {PILLARS.map((pillar, i) => (
              <PillarSection key={pillar.id} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="comparison-heading">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              How We Compare
            </span>
            <h2 id="comparison-heading" className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sultan GHC vs. Your Other Options
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Not all medical tourism services are the same. Here is how a dedicated concierge
              compares to a booking platform or going it alone.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="p-5 col-span-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Feature</span>
              </div>
              {COMPARISON_COLS.map((col) => (
                <div
                  key={col.name}
                  className={`p-5 text-center border-l border-gray-200 ${col.highlight ? 'bg-primary' : ''}`}
                >
                  <p className={`text-sm font-bold ${col.highlight ? 'text-white' : 'text-gray-900'}`}>{col.name}</p>
                  <p className={`text-xs mt-0.5 ${col.highlight ? 'text-blue-100' : 'text-gray-400'}`}>{col.sub}</p>
                </div>
              ))}
            </div>

            {/* Rows */}
            {COMPARISON_FEATURES.map((feature, fi) => (
              <div
                key={feature}
                className={`grid grid-cols-4 border-b border-gray-100 last:border-0 ${fi % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
              >
                <div className="p-4 lg:p-5 col-span-1 flex items-center">
                  <span className="text-sm text-gray-700 font-medium leading-snug">{feature}</span>
                </div>
                {COMPARISON_COLS.map((col, ci) => (
                  <div
                    key={`${feature}-${ci}`}
                    className={`p-4 lg:p-5 flex items-center justify-center border-l border-gray-100 ${col.highlight ? 'bg-blue-50' : ''}`}
                  >
                    {col.values[fi] ? (
                      <CheckCircle2 size={18} className="text-primary" />
                    ) : (
                      <XCircle size={18} className="text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            * Booking platform and self-managed comparisons are generalised and may vary by provider.
          </p>
        </div>
      </section>

      {/* ── Cost Savings Table ── */}
      <section className="py-14 lg:py-20 bg-[#F5F7FA]" aria-labelledby="cost-heading">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Real Cost Savings
            </span>
            <h2 id="cost-heading" className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              See How Much You Could Save
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              These figures represent typical U.S. list prices compared to all-inclusive treatment
              packages at our partner hospitals in India and Turkey — including hospital stay,
              surgeon fees, and post-operative care.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-sm bg-white">
            {/* Table header */}
            <div className="grid grid-cols-5 bg-gray-900 text-white">
              <div className="p-4 lg:p-5 col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Procedure</span>
              </div>
              <div className="p-4 lg:p-5 text-center border-l border-gray-700">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">USA</span>
              </div>
              <div className="p-4 lg:p-5 text-center border-l border-gray-700">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">India</span>
              </div>
              <div className="p-4 lg:p-5 text-center border-l border-gray-700">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Turkey</span>
              </div>
            </div>

            {COST_PROCEDURES.map((proc, i) => (
              <div
                key={proc.name}
                className={`grid grid-cols-5 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
              >
                <div className="p-4 lg:p-5 col-span-2 flex items-center gap-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{proc.name}</p>
                    <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Save {proc.savings}
                    </span>
                  </div>
                </div>
                <div className="p-4 lg:p-5 border-l border-gray-100 flex items-center justify-center">
                  <span className="text-sm font-semibold text-rose-500">{proc.usa}</span>
                </div>
                <div className="p-4 lg:p-5 border-l border-gray-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{proc.india}</span>
                </div>
                <div className="p-4 lg:p-5 border-l border-gray-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{proc.turkey}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-4 max-w-2xl mx-auto">
            Costs are indicative estimates based on typical package pricing at our partner hospitals. Final costs
            are confirmed in writing before any commitment. Travel and accommodation are additional and vary by choice.
          </p>

          <div className="text-center mt-8">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/20 hover:bg-blue-600 hover:-translate-y-0.5 transition-all"
            >
              Get a Free Cost Estimate for Your Procedure
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust & Promise ── */}
      <section className="py-14 lg:py-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-semibold text-blue-400 uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full mb-4">
              Our Promise to You
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-4">
              What We Commit to Every Patient
            </h2>
            <p className="text-gray-400 leading-relaxed">
              These are not marketing promises. They are the operational commitments we make to every
              patient we accept — and the standard we are held to every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Handshake, title: 'Honesty Over Sales', body: 'We will never recommend a treatment, hospital, or destination that does not genuinely suit your medical need and personal situation. Our goal is the right outcome for you — not a commission.' },
              { icon: Shield, title: 'Only Accredited Partners', body: 'We will never refer you to a hospital that has not been personally vetted by our clinical team and independently accredited by an internationally recognised body.' },
              { icon: Globe, title: 'No Hidden Charges', body: 'The cost estimate you receive from us before you commit is the cost you pay. There are no administrative fees, markups, or surprise invoices at any point in the process.' },
              { icon: Users, title: 'A Real Person, Always', body: 'You will always be able to reach a real human being who knows your case. No chatbots, no generic helplines. Your Case Manager is your direct contact from Day 1.' },
              { icon: HeartPulse, title: 'Your Safety Comes First', body: 'If at any point during your journey our team identifies a safety concern, we will raise it immediately — with the hospital, with you, and with your family — regardless of any commercial consideration.' },
              { icon: Star, title: 'Respect for Your Dignity', body: 'You are seeking care, not a transaction. Every member of our team is trained to treat each patient with the dignity, compassion, and respect that every person deserves at a vulnerable time.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 lg:py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Answers to the questions patients ask us most before taking the first step.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-800 leading-snug">{faq.q}</span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 group-open:border-primary group-open:text-primary transition-colors">
                    <Plus size={13} className="group-open:hidden" />
                    <Minus size={13} className="hidden group-open:block" />
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Have a question not answered here?{' '}
              <Link href="/enquiry" className="text-primary font-semibold hover:underline">
                Ask us directly →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-14 lg:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 rounded-3xl p-10 sm:p-14 lg:p-16 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

              {/* Copy */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block text-[11px] font-semibold text-blue-100 uppercase tracking-widest mb-4">
                  Take the First Step
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-5">
                  Ready to Explore Your Options?<br className="hidden sm:block" /> Let&apos;s Talk — Free.
                </h2>
                <p className="text-blue-100 text-base leading-relaxed mb-6 max-w-xl">
                  Share your medical reports and receive a free expert opinion, hospital recommendations,
                  and a transparent cost estimate — all within 24–48 hours. No obligation. No pressure.
                  Just honest guidance from a team that genuinely cares.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    href="/enquiry"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-sm px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
                  >
                    Request Your Free First Medical Opinion
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+16107870713"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/10 transition-all"
                  >
                    <Phone size={16} />
                    +1-610-787-0713
                  </a>
                </div>
              </div>

              {/* Quick-start checklist */}
              <div className="w-full lg:w-72 flex-shrink-0 bg-white/10 border border-white/20 rounded-2xl p-7 backdrop-blur-sm">
                <h3 className="text-white font-bold text-base mb-5">What you get — free:</h3>
                <div className="space-y-3">
                  {[
                    'Expert medical case review',
                    'Hospital & specialist match',
                    'Transparent cost estimate',
                    'Treatment timeline overview',
                    'A dedicated Case Manager',
                    'Zero obligation to proceed',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="text-blue-200 shrink-0" />
                      <span className="text-sm text-blue-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="relative z-10 text-center lg:text-left text-blue-200 text-xs mt-8">
              * Sultan GHC does not provide medical advice, diagnosis, or treatment. We are a healthcare facilitation company.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
