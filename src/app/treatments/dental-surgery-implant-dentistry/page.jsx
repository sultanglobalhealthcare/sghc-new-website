import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  Shield,
  Star,
  Smile,
  Stethoscope,
  Users,
  Sparkles
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Dental Implants & Smile Makeover Abroad | India & Türkiye | Sultan GHC',
  description:
    'Affordable dental implants, All-on-4, veneers, full mouth rehabilitation, and smile makeovers in India and Türkiye — 60–80% less than U.S. costs. Sultan GHC connects American patients with internationally accredited dental surgeons and clinics.',
  keywords: [
    'dental implants abroad',
    'dental implants India cost',
    'dental implants Türkiye cost',
    'All-on-4 dental implants abroad',
    'smile makeover India',
    'veneers Türkiye cost',
    'full mouth rehabilitation abroad',
    'affordable dental treatment USA patients',
    'dental tourism India',
    'dental tourism Türkiye',
    'teeth implants India price',
    'All-on-6 Türkiye',
    'dental crowns abroad',
    'Sultan GHC dental',
    'dental surgery medical tourism',
  ],
  openGraph: {
    title: 'Dental Implants & Smile Makeover Abroad — India & Türkiye | Sultan GHC',
    description:
      'World-class dental implants, veneers, and full mouth rehabilitation at 60–80% lower than U.S. prices. Internationally accredited dental clinics in India and Türkiye.',
    url: 'https://www.sultanghc.com/treatments/dental-surgery-implant-dentistry',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: 'https://www.sultanghc.com/api/og?title=Dental+Surgery+%26+Implants+Abroad&desc=Dental+implants%2C+full-arch+restoration%2C+veneers+in+India+%26+Türkiye.+Save+60-80%25.&cat=Dental+Surgery',
        width: 1200,
        height: 630,
        alt: 'Dental Implants & Smile Makeover Abroad — Sultan GHC'
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Implants & Smile Makeover Abroad | Sultan GHC',
    description:
      'World-class dental care at 60–80% lower than U.S. prices. Internationally accredited dental clinics in India and Türkiye.'
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/treatments/dental-surgery-implant-dentistry'
  }
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Dental Surgery & Implant Dentistry', item: 'https://www.sultanghc.com/treatments/dental-surgery-implant-dentistry' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Dental Surgery and Implant Dentistry Abroad — India and Türkiye',
  description:
    'Comprehensive dental surgery and implant dentistry services for U.S. patients at internationally accredited dental clinics in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/dental-surgery-implant-dentistry',
  about: {
    '@type': 'MedicalCondition',
    name: 'Dental and Oral Health Conditions',
    alternateName: ['Tooth loss', 'Dental decay', 'Gum disease', 'Malocclusion'],
    possibleTreatment: [
      { '@type': 'MedicalTherapy', name: 'Dental Implants' },
      { '@type': 'MedicalTherapy', name: 'All-on-4 Dental Implants' },
      { '@type': 'MedicalTherapy', name: 'All-on-6 Dental Implants' },
      { '@type': 'MedicalTherapy', name: 'Porcelain Veneers' },
      { '@type': 'MedicalTherapy', name: 'Full Mouth Rehabilitation' },
      { '@type': 'MedicalTherapy', name: 'Dental Crowns and Bridges' },
    ]
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do dental implants cost in India and Türkiye compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single dental implant in the U.S. typically costs $3,000–$6,000. The same procedure at an internationally accredited clinic in India costs $500–$1,000, and in Türkiye $600–$1,200 — savings of 70–85%. For full-mouth restorations like All-on-4 or All-on-6, U.S. costs of $20,000–$50,000 compare to $4,000–$9,000 abroad. Sultan GHC provides a personalised cost estimate at no charge.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are dental clinics in India and Türkiye safe and accredited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our partner dental clinics use internationally certified equipment, sterilisation protocols meeting ISO and JCI standards, and materials sourced from globally recognised brands including Straumann, Nobel Biocare, and Osstem. Many of our partner dentists completed postgraduate training in Europe or the United States.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long do I need to stay for dental implants abroad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a single implant with immediate loading, a stay of 5–7 days is typically sufficient. For All-on-4 or All-on-6 full-arch restorations, 7–10 days is recommended. Complex full mouth rehabilitation may require two visits — an initial treatment trip and a follow-up 3–6 months later for final crowns. Your Sultan GHC Case Manager plans the full treatment timeline before your arrival.'
      }
    },
    {
      '@type': 'Question',
      name: 'What implant brands are used at your partner clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our partner clinics use internationally recognised implant systems including Straumann (Switzerland), Nobel Biocare (Sweden), Osstem (South Korea), and Zimmer Biomet (U.S.). All systems are CE-certified and carry international quality guarantees. You can specify your preferred brand when requesting a cost estimate.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between All-on-4 and All-on-6 dental implants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All-on-4 uses four implants to support a full arch of teeth (upper or lower), while All-on-6 uses six implants for additional stability and load distribution — particularly recommended for patients with more bone loss. Both provide a fixed, permanent set of teeth on the same day as surgery in most cases. Your partner dentist will recommend the appropriate option based on your bone density scans.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I combine dental treatment with a holiday?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely — and many patients do. Türkiye is one of the world\'s top dental tourism destinations, with cities like Istanbul and Antalya offering world-class clinics alongside exceptional cultural experiences. India\'s dental hubs in Delhi, Mumbai, and Chennai are equally well-suited for combining treatment with travel. Sultan GHC can help arrange accommodation, transport, and sightseeing around your appointment schedule.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Sultan GHC offer a free first consultation for dental cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Share your dental X-rays, OPG (panoramic scan), and any existing reports, and our partner dental specialist will review your case and provide a recommended treatment plan with a personalised cost estimate — completely free, with no obligation.'
      }
    },
  ]
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const DENTAL_CONDITIONS = [
  { name: 'Missing Teeth (Single or Multiple)', icon: '🦷' },
  { name: 'Edentulous (Fully Toothless)',       icon: '😶' },
  { name: 'Severely Decayed Teeth',             icon: '🔴' },
  { name: 'Gum Disease (Periodontitis)',         icon: '🩺' },
  { name: 'Chipped or Broken Teeth',            icon: '⚡' },
  { name: 'Discoloured or Stained Teeth',       icon: '✨' },
  { name: 'Misaligned Bite (Malocclusion)',     icon: '⚙️' },
  { name: 'Root Canal Infections',              icon: '🔬' },
  { name: 'Jaw Pain (TMJ Disorders)',           icon: '🦴' },
  { name: 'Failed Previous Implants',           icon: '🔧' },
  { name: 'Worn Teeth from Grinding',           icon: '💊' },
  { name: 'Smile Aesthetic Concerns',           icon: '😊' },
]

const TREATMENTS = [
  {
    title: 'Single & Multiple Dental Implants',
    desc: 'Titanium root implants fused to the jawbone — the gold standard for replacing missing teeth. Permanent, natural-looking, and designed to last a lifetime.'
  },
  {
    title: 'All-on-4 Dental Implants',
    desc: 'Full arch of fixed teeth supported by just four strategically placed implants. Same-day teeth possible. Ideal for patients with significant tooth loss or failing teeth.'
  },
  {
    title: 'All-on-6 Dental Implants',
    desc: 'Six-implant full-arch restoration offering greater stability and load distribution. Recommended for patients with lower bone density or requiring a stronger bite.'
  },
  {
    title: 'Porcelain Veneers & Smile Design',
    desc: 'Ultra-thin porcelain shells bonded to the front surface of teeth — transforming colour, shape, and alignment for a complete smile makeover in as few as 5 days.'
  },
  {
    title: 'Full Mouth Rehabilitation',
    desc: 'Comprehensive restoration combining implants, crowns, bridges, and veneers to rebuild an entire smile. Treatment-planned by a specialist team over one or two visits.'
  },
  {
    title: 'Dental Crowns & Bridges',
    desc: 'Zirconia and porcelain-fused-to-metal crowns for damaged teeth, and fixed bridges replacing missing teeth — manufactured to precise shade-matching standards.'
  },
  {
    title: 'Root Canal Treatment',
    desc: 'Expert endodontic treatment saving infected teeth from extraction. Same-day root canal procedures available with digital X-ray and rotary instrumentation.'
  },
  {
    title: 'Orthodontics & Clear Aligners',
    desc: 'Traditional braces and invisible aligner systems (Invisalign-compatible) for correcting bite, crowding, and spacing — with remote monitoring options for returning patients.'
  },
]

const COST_COMPARISON = [
  { procedure: 'Single Dental Implant',           us: '$3,000–$6,000',    india: '$500–$1,000',    turkey: '$600–$1,200' },
  { procedure: 'All-on-4 (Full Arch)',             us: '$20,000–$40,000',  india: '$4,000–$7,000',  turkey: '$5,000–$9,000' },
  { procedure: 'All-on-6 (Full Arch)',             us: '$25,000–$50,000',  india: '$5,000–$9,000',  turkey: '$6,000–$11,000' },
  { procedure: 'Porcelain Veneer (per tooth)',     us: '$1,000–$2,500',    india: '$150–$300',      turkey: '$200–$400' },
  { procedure: 'Zirconia Crown (per tooth)',       us: '$1,000–$3,500',    india: '$150–$400',      turkey: '$200–$500' },
  { procedure: 'Full Mouth Rehabilitation',        us: '$30,000–$70,000',  india: '$4,000–$10,000', turkey: '$5,000–$12,000' },
  { procedure: 'Root Canal Treatment',             us: '$1,000–$2,500',    india: '$80–$200',       turkey: '$100–$250' },
  { procedure: 'Smile Makeover (10 veneers)',      us: '$10,000–$25,000',  india: '$1,500–$3,000',  turkey: '$2,000–$4,000' },
]

const FAQS = [
  {
    q: 'How much do dental implants cost in India and Türkiye compared to the U.S.?',
    a: 'A single dental implant in the U.S. typically costs $3,000–$6,000. The same procedure at an internationally accredited clinic in India costs $500–$1,000, and in Türkiye $600–$1,200 — savings of 70–85%. For All-on-4 or All-on-6, U.S. costs of $20,000–$50,000 compare to $4,000–$9,000 abroad. Sultan GHC provides a personalised estimate at no charge.'
  },
  {
    q: 'Are dental clinics in India and Türkiye safe and accredited?',
    a: 'Yes. Our partner clinics use internationally certified equipment, ISO and JCI-standard sterilisation protocols, and materials from globally recognised brands including Straumann, Nobel Biocare, and Osstem. Many partner dentists completed postgraduate training in Europe or the U.S.'
  },
  {
    q: 'How long do I need to stay for dental implants abroad?',
    a: 'For a single implant with immediate loading, 5–7 days is typically sufficient. For All-on-4 or All-on-6, 7–10 days is recommended. Complex full mouth rehabilitation may require two visits 3–6 months apart. Your Case Manager plans the full timeline before your arrival.'
  },
  {
    q: 'What implant brands are used at your partner clinics?',
    a: 'Our partner clinics use Straumann (Switzerland), Nobel Biocare (Sweden), Osstem (South Korea), and Zimmer Biomet (U.S.) — all CE-certified with international quality guarantees. You can specify your preferred brand when requesting a cost estimate.'
  },
  {
    q: 'What is the difference between All-on-4 and All-on-6?',
    a: 'All-on-4 uses four implants to support a full arch; All-on-6 uses six for added stability — particularly recommended for patients with more bone loss. Both provide fixed, permanent teeth. Your dentist will recommend the right option based on your bone density scans.'
  },
  {
    q: 'Can I combine dental treatment with a holiday?',
    a: "Many patients do. Türkiye's Istanbul and Antalya, and India's Delhi, Mumbai, and Chennai are world-class dental tourism destinations. Sultan GHC helps arrange accommodation, transport, and sightseeing around your appointment schedule."
  },
  {
    q: 'Does Sultan GHC offer a free first consultation for dental cases?',
    a: 'Yes. Share your dental X-rays and OPG scan, and our partner dental specialist will review your case and provide a recommended treatment plan with a personalised cost estimate — free, no obligation.'
  },
]

// ─── Image Placeholder ────────────────────────────────────────────────────────

function ImagePlaceholder({ filename, width, height, label, aiPrompt, aspectRatio, className = '' }) {
  const ratio = aspectRatio || `${width}/${height}`
  return (
    <div
      className={`relative bg-gradient-to-br from-blue-50 to-slate-100 border-2 border-dashed border-blue-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
      aria-label={label}
      role="img"
    >
      <div className="flex items-center gap-2 w-full shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 shrink-0"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Image Placeholder</span>
      </div>
      <div className="bg-white/70 rounded-lg px-3 py-1.5 w-full shrink-0">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">SEO Filename</p>
        <p className="text-[10px] font-bold text-blue-600 break-all leading-snug">📁 {filename}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Size:</span>
        <span className="text-[10px] font-bold text-gray-600">{width} × {height} px</span>
      </div>
      <p className="text-[10px] font-semibold text-blue-500 leading-snug shrink-0">{label}</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-2 w-full overflow-y-auto flex-1">
        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}


// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DentalSurgeryPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Dental Surgery & Implant Dentistry</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left */}
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Dental Surgery & Implant Dentistry
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Dental Implants & Smile Makeovers in{' '}
                <span className="text-primary">India & Türkiye</span> — Up to 80% Less Than U.S. Prices
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-xl">
                Americans pay $3,000–$6,000 per implant at home. At our internationally accredited partner
                clinics in India and Türkiye, you get the same premium implant brands — Straumann, Nobel
                Biocare — at a fraction of the cost, with no insurance battles and a dedicated Case Manager
                handling every step.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  'Internationally Accredited Clinics',
                  'Free First Dental Opinion',
                  'Premium Implant Brands',
                  'Same-Day Teeth Available',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-blue-100 text-gray-600 px-3 py-1.5 rounded-full shadow-sm"
                  >
                    <CheckCircle2 size={12} className="text-primary" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  Get Your Free First Dental Consultation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <MessageCircle size={16} />
                  WhatsApp a Dental Specialist
                </a>
              </div>
            </div>

            {/* Right — Hero image */}
            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="dental-implants-smile-makeover-india-turkey-sultan-ghc.jpg"
                width={1200}
                height={900}
                label="Patient smiling after dental implant procedure at an internationally accredited clinic — Sultan GHC"
                aiPrompt="Professional dental clinic photography: A happy, confident patient (40s, American appearance) smiling brightly after a successful dental implant procedure at a modern dental clinic. Clean white clinic environment, warm lighting, the patient is relaxed and pleased. Dentist in background reviewing results on a tablet. Shot on Canon R5, 50mm, photorealistic, not illustrated."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-gray-100" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '70–80%', label: 'Cost savings vs. U.S. dental implants', icon: DollarSign },
              { value: '5–10 days', label: 'Typical stay for implants or veneers', icon: Clock },
              { value: '5–Star', label: 'Rated dental clinics in our network', icon: Star },
              { value: '24hrs', label: 'Free first dental opinion turnaround', icon: Shield },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{value}</p>
                  <p className="text-xs text-gray-500 leading-snug mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Seek Dental Care Abroad ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="flex-1 w-full max-w-lg">
            <ImagePlaceholder
              filename="american-patient-dental-consultation-implant-dentistry-abroad-sultan-ghc.jpg"
              width={1200}
              height={900}
              label="American patient consulting with a dental specialist for implant dentistry abroad — Sultan GHC"
              aiPrompt="Professional dental photography: A middle-aged American patient (50s, casual clothes) sitting in a dental chair consulting with a confident dental specialist in white coat at a modern, bright dental clinic in India or Türkiye. The dentist is reviewing a dental X-ray on a large screen. Clean, premium clinic environment. Patient appears relieved and hopeful. Photorealistic, Canon R5, natural light."
              aspectRatio="4/3"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              The Reality for U.S. Dental Patients
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              74 Million Americans Have No Dental Insurance. Implants Cost as Much as a Car.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              According to the CDC, nearly 26% of U.S. adults have untreated tooth decay, and millions
              cannot afford the dental care they need. A single implant can cost $6,000. A full mouth
              restoration can exceed $70,000. Many Americans simply go without — tolerating pain,
              embarrassment, and deteriorating oral health.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our partner dental clinics in India and Türkiye deliver the same premium implant systems,
              the same digital imaging technology, and the same internationally trained specialists —
              at 70–80% lower cost. No insurance required, no waiting lists, and no hidden fees.
            </p>

            <div className="space-y-3">
              {[
                'Premium implant brands: Straumann, Nobel Biocare, Osstem, Zimmer Biomet',
                'Digital dentistry: 3D CBCT scans, CAD/CAM crowns, digital smile design',
                'Dentists with postgraduate training in Europe, USA, and Australia',
                'Internationally certified sterilisation and infection control protocols',
                'Same-day teeth available for qualifying All-on-4 and All-on-6 patients',
                'English-speaking dental teams with dedicated international patient coordinators',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Conditions Treated ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Conditions We Treat
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Dental Conditions Treated at Our Network
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our partner dental clinics cover the full spectrum of dental, oral, and cosmetic conditions.
              If your situation is not listed, submit your case — most are reviewed within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {DENTAL_CONDITIONS.map(({ name, icon }) => (
              <div
                key={name}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-2xl mb-3 block">{icon}</span>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors leading-snug">
                  {name}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Don't see your condition?{' '}
            <Link href="/enquiry" className="text-primary hover:underline font-medium">
              Submit your dental case for a free review →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Treatment Options ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Available Procedures
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Dental Surgery & Cosmetic Dentistry Procedures Available Abroad
          </h2>
          <p className="text-gray-500 leading-relaxed">
            From single implants to complete smile transformations — our partner clinics offer the
            full spectrum of modern dental care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TREATMENTS.map(({ title, desc }) => (
            <div key={title} className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mb-4">
                <Smile size={16} className="text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cost Comparison ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Cost Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              What Does Dental Treatment Cost in India & Türkiye vs. the U.S.?
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Prices below are indicative ranges in USD. Sultan GHC provides a personalised estimate
              based on your X-rays, treatment plan, and preferred implant brand — at no charge.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Procedure</th>
                  <th className="text-center px-6 py-4 font-semibold"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" />United States</span></th>
                  <th className="text-center px-6 py-4 font-semibold text-green-300"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" />India</span></th>
                  <th className="text-center px-6 py-4 font-semibold text-blue-300"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Türkiye" className="rounded-sm" />Türkiye</span></th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON.map(({ procedure, us, india, turkey }, i) => (
                  <tr key={procedure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-800">{procedure}</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">{us}</td>
                    <td className="px-6 py-4 text-center text-green-700 font-bold">{india}</td>
                    <td className="px-6 py-4 text-center text-blue-700 font-bold">{turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            All costs are estimates in USD and vary based on number of teeth, implant brand, clinic tier, and complexity.
            Travel, accommodation, and Sultan GHC facilitation fees are separate.
          </p>

          <div className="text-center mt-8">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get Your Personalised Dental Cost Estimate — Free
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Türkiye Section ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Dental Care in Türkiye
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              Türkiye — Europe's #1 Dental Tourism Destination
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Türkiye receives more dental tourists than any other country in Europe — over 150,000
              international patients every year. Istanbul, Antalya, and Izmir are home to world-class
              dental clinics equipped with the latest digital dentistry technology, CAD/CAM milling
              machines, and 3D CBCT imaging.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Turkish dental specialists are trained to European standards, and many hold postgraduate
              qualifications from Germany, the Netherlands, and the UK. For U.S. patients, Türkiye offers
              an unbeatable combination: European-quality dentistry, extraordinary savings, and an
              unforgettable travel experience — all in one trip.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Istanbul, Antalya, and Izmir — world-class dental hubs with dedicated patient services',
                'Digital smile design with same-day CAD/CAM crowns and veneers at select clinics',
                'All-on-4 and All-on-6 specialists performing hundreds of cases annually',
                'Straumann and Nobel Biocare implants widely available at all partner clinics',
                'English-speaking dental coordinators guiding you from arrival to departure',
                'Medicana International, Istanbul — JCI-accredited since 2010; full international patient support program',
                'Koç University Hospital, Istanbul — JCI-accredited academic hospital; 240+ specialists; transplant led by Prof. Kalayoğlu (UW-Madison)',
              ].map((pt) => (
                <div key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                  {pt}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-all"
              >
                Plan My Dental Journey to Türkiye
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/destinations/turkey"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
              >
                Explore Türkiye as a Destination
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <ImagePlaceholder
              filename="dental-clinic-turkey-istanbul-implant-dentistry-sultan-ghc.jpg"
              width={1200}
              height={900}
              label="Premium dental clinic in Istanbul, Türkiye — Sultan GHC"
              aiPrompt="Professional dental clinic photography: The modern, sleek interior of a premium dental clinic in Istanbul, Türkiye. Bright white treatment room with a state-of-the-art dental chair, digital X-ray equipment, and large screens for imaging. A confident Turkish dentist in white coat standing beside the chair. Clean, minimalist, European-quality aesthetic. Shot on Sony A7R IV, wide angle, photorealistic."
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* ── India Section ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Dental Care in India
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
                India — World-Class Dental Care at Unrivalled Value
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                India's dental sector has grown rapidly into one of the world's most sophisticated —
                with internationally trained specialists, digital dentistry infrastructure, and pricing
                that makes even complex full-mouth treatment accessible for U.S. patients.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our partner dental clinics in Delhi, Mumbai, Chennai, Bengaluru, and Hyderabad combine
                premium technology with highly experienced dental surgeons — many with international
                fellowships — at costs that are 70–80% lower than U.S. equivalents.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Dental clinics in major Indian cities with international patient services',
                  'CBCT 3D scanning, digital impressions, and same-day milling available',
                  'Osstem, Straumann, Nobel Biocare, and Zimmer Biomet implant systems',
                  'Oral and maxillofacial surgeons for complex extractions and jaw surgery',
                  'Orthodontists with Invisalign certification for clear aligner treatment',
                'Medanta — The Medicity, Gurugram — Newsweek Top 250 World\'s Best Hospitals; 800+ multi-disciplinary specialists',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                    {pt}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-all"
                >
                  Plan My Dental Journey to India
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/destinations/india"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  Explore India as a Destination
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="dental-clinic-india-implant-dentistry-smile-makeover-sultan-ghc.jpg"
                width={1200}
                height={900}
                label="Modern dental clinic in India — Sultan GHC"
                aiPrompt="Professional dental clinic photography: A bright, modern dental clinic in India with a smiling Indian dental specialist in white coat and gloves examining a patient. State-of-the-art dental chair, digital X-ray viewer on a large screen showing dental scans. Clean clinical environment, warm but professional. Patient appears comfortable. Shot on Nikon Z9, photorealistic."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Patient Journey ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Your Dental Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            How Your Dental Journey Works with Sultan GHC
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We handle every detail — so you arrive knowing exactly what to expect, at every step.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Share Your X-Rays',
              desc: 'Upload your dental X-rays or OPG panoramic scan. Our partner dental specialist reviews your case and responds with a recommended treatment plan within 24 hours.'
            },
            {
              step: '02',
              title: 'Free First Consultation',
              desc: 'Receive a detailed treatment recommendation, implant brand options, estimated timeline, and personalised cost estimate — completely free, no obligation.'
            },
            {
              step: '03',
              title: 'Travel & Treatment',
              desc: 'Sultan GHC coordinates your airport pickup, hotel, clinic appointments, and any additional scans needed on arrival. Your Case Manager is reachable throughout.'
            },
            {
              step: '04',
              title: 'Smile & Return Home',
              desc: 'Leave with your new smile, detailed treatment records, and a follow-up care plan. Sultan GHC helps arrange any local dental follow-ups you need back in the U.S.'
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary hover:shadow-md transition-all">
              <div className="text-4xl font-bold text-primary/10 mb-3">{step}</div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
          >
            View the complete Sultan GHC patient journey →
          </Link>
        </div>
      </section>

      {/* ── Related Treatments ── */}
      <section className="bg-[#EEF4FF] border-y border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Explore Related Treatments
            </h2>
            <p className="text-sm text-gray-500">Many dental patients also enquire about these treatment areas.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                href: '/treatments/cosmetic-hair-transplant-plastic-surgery',
                title: 'Cosmetic & Reconstructive Surgery',
                desc: 'Rhinoplasty, facelifts, hair transplants, and full reconstructive plastic surgery abroad.'
              },
              {
                href: '/treatments/ophthalmology',
                title: 'Ophthalmology & Eye Surgery',
                desc: 'LASIK, cataract surgery, glaucoma treatment, and retinal procedures in India and Türkiye.'
              },
              {
                href: '/treatments/bariatric-metabolic-surgery',
                title: 'Bariatric & Metabolic Surgery',
                desc: 'Gastric sleeve, bypass, and metabolic surgery for sustainable weight loss abroad.'
              },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white rounded-2xl p-6 border border-blue-100 hover:border-primary hover:shadow-md transition-all"
              >
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                  {title} →
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PartnerHospitalsSection title="Internationally Accredited Dental & Surgical Centers" />

      {/* ── FAQs ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Common Questions About Dental Treatment Abroad
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <span className="text-sm font-semibold text-gray-800 group-open:text-primary transition-colors">
                  {q}
                </span>
                <ChevronRight
                  size={16}
                  className="text-gray-400 shrink-0 transition-transform group-open:rotate-90"
                />
              </summary>
              <div className="px-6 pb-5">
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-6">
            Start Your Smile Journey Today
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold mb-6 leading-tight">
            The Smile You Deserve<br />
            <span className="text-primary">Shouldn't Cost a Fortune.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Share your dental X-rays today. Sultan GHC will connect you with an internationally
            trained dental specialist for a free first review — and a personalised cost estimate —
            within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get My Free First Dental Consultation
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/16107870713"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              <Phone size={16} />
              +1-610-787-0713
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
