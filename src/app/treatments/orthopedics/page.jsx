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
  Activity,
  Bone,
  Stethoscope,
  Users
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Knee & Hip Replacement Surgery Abroad | India & Türkiye | Sultan GHC',
  description:
    'Affordable knee replacement, hip replacement, shoulder surgery, and joint care in India and Türkiye — 70–80% less than U.S. costs. Sultan GHC connects American patients with JCI-accredited orthopedic hospitals and specialist surgeons abroad.',
  keywords: [
    'knee replacement surgery abroad',
    'hip replacement India cost',
    'orthopedic surgery Türkiye',
    'affordable joint replacement USA patients',
    'knee replacement surgery India',
    'hip replacement surgery Türkiye',
    'orthopedic surgery medical tourism',
    'joint replacement cost comparison',
    'shoulder replacement abroad',
    'ACL reconstruction India',
    'best orthopedic hospitals India',
    'joint surgery abroad for Americans',
    'Sultan GHC orthopedics',
    'medical tourism knee replacement',
  ],
  openGraph: {
    title: 'Knee & Hip Replacement Surgery Abroad — India & Türkiye | Sultan GHC',
    description:
      'World-class orthopedic surgery at 70–80% lower than U.S. prices. JCI-accredited joint replacement centers in India and Türkiye, matched to your condition.',
    url: 'https://www.sultanghc.com/treatments/orthopedics',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: 'https://www.sultanghc.com/api/og?title=Orthopaedics+%26+Joint+Replacement+Abroad&desc=Knee+%26+hip+replacement%2C+spine+surgery+in+India+%26+Türkiye.+Save+80-85%25+vs+U.S.&cat=Orthopaedics',
        width: 1200,
        height: 630,
        alt: 'Knee & Hip Replacement Surgery Abroad — Sultan GHC'
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knee & Hip Replacement Surgery Abroad | Sultan GHC',
    description:
      'World-class joint replacement at 70–80% lower than U.S. prices. JCI-accredited orthopedic hospitals in India and Türkiye.'
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/treatments/orthopedics'
  }
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Orthopedics & Joint Surgery', item: 'https://www.sultanghc.com/treatments/orthopedics' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Orthopedics and Joint Replacement Surgery Abroad — India and Türkiye',
  description:
    'Comprehensive orthopedic and joint replacement surgery for U.S. patients at JCI-accredited hospitals in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/orthopedics',
  about: {
    '@type': 'MedicalCondition',
    name: 'Musculoskeletal Disorders',
    alternateName: ['Arthritis', 'Joint degeneration', 'Orthopedic conditions'],
    possibleTreatment: [
      { '@type': 'MedicalTherapy', name: 'Total Knee Replacement' },
      { '@type': 'MedicalTherapy', name: 'Total Hip Replacement' },
      { '@type': 'MedicalTherapy', name: 'Shoulder Replacement' },
      { '@type': 'MedicalTherapy', name: 'ACL Reconstruction' },
      { '@type': 'MedicalTherapy', name: 'Hip Resurfacing' },
      { '@type': 'MedicalTherapy', name: 'Arthroscopy' },
    ]
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does knee replacement surgery cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Knee replacement surgery in the U.S. typically costs $30,000–$70,000. The same procedure at a JCI-accredited hospital in India costs $5,000–$8,000 — a saving of 75–85%. Türkiye offers similar procedures for $6,000–$10,000. Sultan GHC provides a personalised cost estimate based on your specific case at no charge.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are orthopedic surgeons in India and Türkiye as qualified as U.S. surgeons?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many of our partner orthopedic surgeons completed fellowships and postgraduate training in the United States, United Kingdom, Germany, or Australia. They perform thousands of joint replacements annually, with outcomes and infection rates comparable to leading U.S. orthopedic centers.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long will I need to stay in India or Türkiye after joint replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most knee and hip replacement patients require 14–21 days in-country. This includes pre-operative evaluation (2–3 days), surgery and hospital stay (5–7 days), and an in-country physiotherapy and recovery period before clearance to fly. Your Case Manager plans the full itinerary.'
      }
    },
    {
      '@type': 'Question',
      name: 'What implants are used for joint replacement abroad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our partner hospitals use internationally recognized implant brands including Zimmer Biomet, Stryker, DePuy Synthes, and Smith+Nephew — the same brands used in U.S. hospitals. All implants carry CE and international quality certifications.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I get physiotherapy after my joint replacement abroad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Physiotherapy begins on the day after surgery at all our partner hospitals. Your in-country recovery program is structured and supervised by certified physiotherapists. Sultan GHC also helps you arrange follow-up physiotherapy with a provider near your home in the U.S. after you return.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to fly after knee or hip replacement surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flying too early after joint replacement carries a small risk of deep vein thrombosis (DVT). Sultan GHC works with your surgical team to ensure you are medically cleared for the return journey — typically after 10–14 days. Blood thinners and compression stockings are prescribed for the flight. Your Case Manager coordinates all pre-departure health checks.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Sultan GHC offer a free first consultation for orthopedic cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your first consultation with a specialist from our orthopedic network is completely free. Share your X-rays, MRI reports, and current diagnosis, and our partner surgeon will review your case and provide a recommended treatment plan and cost estimate — with no obligation.'
      }
    },
  ]
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const ORTHO_CONDITIONS = [
  { name: 'Osteoarthritis (Knee & Hip)',       icon: '🦴' },
  { name: 'Rheumatoid Arthritis',              icon: '🔴' },
  { name: 'Avascular Necrosis (AVN)',          icon: '🩻' },
  { name: 'ACL / Ligament Tears',              icon: '🦵' },
  { name: 'Meniscus Tears',                    icon: '⚙️' },
  { name: 'Rotator Cuff Tears',                icon: '💪' },
  { name: 'Hip Dysplasia',                     icon: '🔧' },
  { name: 'Fracture & Trauma',                 icon: '🏥' },
  { name: 'Bone Tumors',                       icon: '🔬' },
  { name: 'Cartilage Damage',                  icon: '🧬' },
  { name: 'Frozen Shoulder',                   icon: '❄️' },
  { name: 'Osteonecrosis',                     icon: '💊' },
]

const TREATMENTS = [
  {
    title: 'Total Knee Replacement',
    desc: 'Complete resurfacing of the knee joint using internationally certified implants (Zimmer, Stryker, DePuy). Computer-assisted and robotic-arm-assisted options available at select centers.'
  },
  {
    title: 'Total Hip Replacement',
    desc: 'Damaged hip joint replaced with a prosthetic implant — restoring mobility and eliminating chronic pain. Both cemented and cementless techniques available.'
  },
  {
    title: 'Partial Knee Replacement',
    desc: 'Unicompartmental knee replacement targeting only the damaged compartment — shorter recovery and more natural feel for appropriate candidates.'
  },
  {
    title: 'Hip Resurfacing',
    desc: 'Bone-conserving alternative to total hip replacement — ideal for younger, active patients where preserving bone stock is a priority.'
  },
  {
    title: 'Shoulder Replacement',
    desc: 'Total and reverse shoulder replacement for advanced arthritis, rotator cuff arthropathy, and complex fractures — restoring full arm function.'
  },
  {
    title: 'ACL & Ligament Reconstruction',
    desc: 'Arthroscopic ACL reconstruction using autograft or allograft — minimally invasive, with a structured post-operative physiotherapy program from day one.'
  },
  {
    title: 'Arthroscopy (Knee, Hip, Shoulder)',
    desc: 'Minimally invasive camera-guided surgery for meniscus tears, labral repairs, cartilage damage, and loose body removal — day surgery with rapid recovery.'
  },
  {
    title: 'Cartilage Restoration',
    desc: 'Advanced techniques including microfracture, OATS (osteochondral autograft), and ACI (autologous chondrocyte implantation) for cartilage repair in younger patients.'
  },
]

const COST_COMPARISON = [
  { procedure: 'Total Knee Replacement',       us: '$30,000–$70,000',   india: '$5,000–$8,000',   turkey: '$6,000–$10,000' },
  { procedure: 'Total Hip Replacement',        us: '$30,000–$60,000',   india: '$5,000–$8,000',   turkey: '$6,000–$10,000' },
  { procedure: 'Partial Knee Replacement',     us: '$20,000–$45,000',   india: '$4,000–$7,000',   turkey: '$5,000–$8,000' },
  { procedure: 'Hip Resurfacing',              us: '$25,000–$55,000',   india: '$5,000–$8,000',   turkey: '$6,000–$9,000' },
  { procedure: 'Shoulder Replacement',         us: '$20,000–$40,000',   india: '$4,000–$7,000',   turkey: '$5,000–$8,000' },
  { procedure: 'ACL Reconstruction',           us: '$20,000–$50,000',   india: '$3,000–$5,500',   turkey: '$4,000–$7,000' },
  { procedure: 'Knee / Hip Arthroscopy',       us: '$10,000–$30,000',   india: '$2,000–$4,500',   turkey: '$2,500–$6,000' },
]

const FAQS = [
  {
    q: 'How much does knee replacement surgery cost in India compared to the U.S.?',
    a: 'Knee replacement surgery in the U.S. typically costs $30,000–$70,000. The same procedure at a JCI-accredited hospital in India costs $5,000–$8,000 — a saving of 75–85%. Türkiye offers similar procedures for $6,000–$10,000. Sultan GHC provides a personalised cost estimate at no charge.'
  },
  {
    q: 'Are orthopedic surgeons in India and Türkiye as qualified as U.S. surgeons?',
    a: 'Yes. Many of our partner orthopedic surgeons completed fellowships in the United States, UK, Germany, or Australia. They perform thousands of joint replacements annually with outcomes comparable to leading U.S. orthopedic centers.'
  },
  {
    q: 'How long will I need to stay after joint replacement?',
    a: 'Most knee and hip replacement patients require 14–21 days in-country — pre-op evaluation (2–3 days), surgery and hospital stay (5–7 days), and supervised physiotherapy before flying clearance. Your Case Manager coordinates the full itinerary.'
  },
  {
    q: 'What implants are used for joint replacement abroad?',
    a: 'Our partner hospitals use internationally recognized implant brands including Zimmer Biomet, Stryker, DePuy Synthes, and Smith+Nephew — the same brands used in U.S. hospitals. All implants carry CE and international quality certifications.'
  },
  {
    q: 'Can I get physiotherapy after joint replacement abroad?',
    a: 'Yes. Physiotherapy begins the day after surgery. Your in-country recovery is supervised by certified physiotherapists. Sultan GHC also helps arrange follow-up physiotherapy near your home in the U.S. after you return.'
  },
  {
    q: 'Is it safe to fly after knee or hip replacement?',
    a: 'Flying too early carries a small DVT risk. Sultan GHC ensures you are medically cleared before travel — typically after 10–14 days. Blood thinners and compression stockings are prescribed for the flight. Your Case Manager coordinates all pre-departure health checks.'
  },
  {
    q: 'Does Sultan GHC offer a free first consultation for orthopedic cases?',
    a: 'Yes. Your first consultation with a specialist from our network is free. Share your X-rays and MRI reports, and our partner surgeon will review your case and provide a recommended treatment plan and cost estimate — no obligation.'
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

export default function OrthopedicsPage() {
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
            <span className="text-primary font-medium">Orthopaedics & Joint Replacement</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left */}
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Orthopaedics & Joint Replacement
</span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Knee & Hip Replacement in{' '}
                <span className="text-primary">India & Türkiye</span> — 75–85% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-xl">
                Americans pay up to $70,000 for a knee replacement. At our JCI-accredited partner hospitals
                in India and Türkiye, the same procedure — with the same implant brands — costs a fraction
                of that, with no waitlists and a dedicated Case Manager handling every detail.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  'JCI-Accredited Orthopedic Centers',
                  'Free First Orthopedic Opinion',
                  'Same Implant Brands as U.S.',
                  'No Waiting Lists',
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
                  Get Your Free First Orthopedic Consultation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <MessageCircle size={16} />
                  WhatsApp an Orthopedic Specialist
                </a>
              </div>
            </div>

            {/* Right — Hero image */}
            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="knee-hip-replacement-surgery-india-orthopedic-hospital-sultan-ghc.jpg"
                width={1200}
                height={900}
                label="Orthopedic surgeon reviewing knee X-ray with patient at a JCI-accredited hospital — Sultan GHC"
                aiPrompt="Professional medical photography: An experienced orthopedic surgeon in blue surgical scrubs reviewing a knee X-ray on a lightbox with an international patient at a modern, bright orthopedic clinic in India. Clean clinical environment, warm patient interaction, natural light. Shot on Canon R5, 50mm f/1.8. Photorealistic, not illustrated."
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
              { value: '75–85%', label: 'Cost savings vs. U.S. joint replacement', icon: DollarSign },
              { value: '24–48hrs', label: 'Free first orthopedic opinion turnaround', icon: Clock },
              { value: 'JCI', label: 'Accredited orthopedic centers only', icon: Shield },
              { value: '10,000+', label: 'Joint replacements performed annually', icon: Activity },
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

      {/* ── Why Seek Orthopedic Care Abroad ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="flex-1 w-full max-w-lg">
            <ImagePlaceholder
              filename="american-patient-orthopedic-consultation-joint-replacement-medical-tourism-india.jpg"
              width={1200}
              height={900}
              label="American patient consulting with an orthopedic surgeon for joint replacement in India — Sultan GHC"
              aiPrompt="Professional medical photography: A middle-aged American patient (50s, casual attire) in a consultation room with a confident Indian orthopedic surgeon pointing to a knee X-ray on a tablet. Modern hospital setting, clean background, warm lighting. Patient appears relieved and engaged. Photorealistic, Canon R5, natural colors."
              aspectRatio="4/3"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              The Reality for U.S. Joint Patients
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              54 Million Americans Have Arthritis. Most Cannot Afford the Surgery.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              According to the CDC, arthritis is the leading cause of disability in the United States.
              Yet for the millions of Americans who are uninsured, underinsured, or facing long waitlists,
              joint replacement can feel out of reach — even as the pain becomes unbearable.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our partner orthopedic hospitals in India and Türkiye use the same implant brands as U.S.
              hospitals — Zimmer Biomet, Stryker, DePuy Synthes — at 75–85% lower cost, with no
              waitlists, English-speaking surgical teams, and internationally accredited facilities.
            </p>

            <div className="space-y-3">
              {[
                'Same implant brands as leading U.S. orthopedic hospitals (Zimmer, Stryker, DePuy)',
                'Orthopedic surgeons fellowship-trained in the U.S., UK, Germany, and Australia',
                'Computer-assisted and robotic-arm-assisted joint replacement options',
                'Physiotherapy begins the day after surgery — supervised in-hospital',
                'No insurance pre-authorization, no claim denials, transparent pricing',
                'International patient coordinators fluent in English — available 24/7',
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
              Orthopedic Conditions Treated at Our Network
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our partner orthopedic hospitals cover the full spectrum of joint, bone, and musculoskeletal conditions.
              If your diagnosis is not listed, submit your case — most are evaluated within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {ORTHO_CONDITIONS.map(({ name, icon }) => (
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
              Submit your case for a free orthopedic review →
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
            Joint Replacement & Orthopedic Procedures Available Abroad
          </h2>
          <p className="text-gray-500 leading-relaxed">
            From total joint replacements to minimally invasive arthroscopy — our partner centers
            offer the complete spectrum of modern orthopedic care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TREATMENTS.map(({ title, desc }) => (
            <div key={title} className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mb-4">
                <Stethoscope size={16} className="text-white" />
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
              What Does Orthopedic Surgery Cost in India & Türkiye vs. the U.S.?
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Prices below are indicative ranges. Sultan GHC provides a personalised estimate
              based on your specific diagnosis, imaging, and surgeon recommendation — at no charge.
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
            All costs are estimates in USD and may vary based on diagnosis, implant selection, hospital tier, and surgeon.
            Travel, accommodation, and Sultan GHC facilitation fees are separate.
          </p>

          <div className="text-center mt-8">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get Your Personalised Orthopedic Cost Estimate — Free
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── India Section ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Orthopedics in India
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              India — The World Leader in Affordable Joint Replacement
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              India performs more than 300,000 joint replacements every year — making it one of the
              highest-volume markets for orthopedic surgery globally. This volume translates directly
              into surgical expertise, lower costs, and well-established post-operative care protocols.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our partner orthopedic hospitals in cities like Delhi, Mumbai, Chennai, Hyderabad, and
              Bangalore hold JCI accreditation and offer robotic-assisted joint replacement, computer-navigated
              surgery, and internationally certified physiotherapy programs — all at a fraction of U.S. prices.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'JCI-accredited orthopedic hospitals with international patient departments',
                'Robotic-arm-assisted and computer-navigated joint replacement available',
                'Zimmer Biomet, Stryker, DePuy, and Smith+Nephew implants used throughout',
                'Physiotherapy and rehabilitation programs supervised by certified specialists',
                'English-speaking surgical and nursing teams at all partner centers',
                'Medanta — The Medicity, Gurugram — Newsweek Top 250 World\'s Best Hospitals; 800+ multi-disciplinary specialists',
                'Rela Institute, Chennai — NABH-accredited 450-bed multi-specialty hospital; MOU partner of Sultan GHC',
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
                Plan My Orthopedic Journey to India
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
              filename="orthopedic-hospital-india-knee-replacement-jci-accredited-sultan-ghc.jpg"
              width={1200}
              height={900}
              label="JCI-accredited orthopedic hospital operation theater in India — Sultan GHC"
              aiPrompt="Professional medical photography: A state-of-the-art orthopedic operation theater in a modern Indian hospital. Surgical team in blue sterile gowns and masks preparing for a knee replacement procedure. Advanced imaging monitors, clean LED lighting, modern equipment. No blood or graphic content. Shot on Sony A7R IV, clinical and professional. Photorealistic."
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* ── Türkiye Section ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Orthopedics in Türkiye
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
                Türkiye — European-Standard Orthopedic Care at Exceptional Value
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Türkiye has become one of Europe's leading medical tourism destinations, attracting
                hundreds of thousands of international patients every year. Turkish orthopedic hospitals
                — many located in Istanbul, Ankara, and Antalya — operate under JCI accreditation and
                meet European Union healthcare standards.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                For U.S. patients, Türkiye offers a unique combination: European-quality orthopedic
                care, internationally trained surgeons, modern facilities, and costs 70–80% lower
                than U.S. prices — combined with the opportunity to recover in one of the world's
                most culturally rich and welcoming destinations.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'JCI-accredited hospitals meeting European healthcare standards',
                  'Orthopedic surgeons trained in Germany, UK, and the United States',
                  'Istanbul hospitals within easy international flight reach from the U.S.',
                  'Dedicated international patient coordinators at all partner hospitals',
                  'Full recovery and rehabilitation support before return travel',
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
                  Plan My Orthopedic Journey to Türkiye
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
                filename="orthopedic-hospital-turkey-joint-replacement-istanbul-sultan-ghc.jpg"
                width={1200}
                height={900}
                label="Modern orthopedic hospital in Istanbul, Türkiye — Sultan GHC"
                aiPrompt="Professional architectural and medical photography: The sleek, modern lobby and patient reception of a JCI-accredited hospital in Istanbul, Türkiye. Light marble floors, modern signage in English and Turkish, well-dressed hospital staff at reception. Large windows with natural light. Looks European, premium, and welcoming. Shot on Nikon Z9, wide angle, photorealistic."
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
            Your Orthopedic Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            How Your Joint Replacement Journey Works with Sultan GHC
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We manage everything — so you can focus on your recovery, not the logistics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Share Your Case',
              desc: 'Upload your X-rays, MRI reports, and diagnosis. Our team reviews your case and connects you with a matched orthopedic specialist within 24 hours.'
            },
            {
              step: '02',
              title: 'Free First Consultation',
              desc: 'Receive a detailed surgical recommendation, implant selection guidance, and a personalised cost estimate — at no charge, with no obligation.'
            },
            {
              step: '03',
              title: 'Travel & Surgery',
              desc: 'Sultan GHC handles airport pickup, hospital admission, pre-operative tests, and surgery coordination. Your Case Manager is reachable 24/7.'
            },
            {
              step: '04',
              title: 'Recovery & Return',
              desc: 'In-hospital physiotherapy begins the day after surgery. When you are cleared to fly, we coordinate your return journey and follow-up care back home.'
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary hover:shadow-md transition-all">
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

      {/* ── Internal Links — Related Treatments ── */}
      <section className="bg-[#EEF4FF] border-y border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Explore Related Treatments
            </h2>
            <p className="text-sm text-gray-500">Many orthopedic patients also ask about these treatment areas.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                href: '/treatments/spine-sports-injury',
                title: 'Spine & Sports Injury Surgery',
                desc: 'Disc replacement, spinal fusion, and minimally invasive spine procedures in India and Türkiye.'
              },
              {
                href: '/treatments/cardiology',
                title: 'Cardiology',
                desc: 'Heart bypass surgery, valve replacement, and advanced cardiac care at JCI-accredited centers.'
              },
              {
                href: '/treatments/oncology',
                title: 'Oncology',
                desc: 'Cancer diagnosis, chemotherapy, targeted therapy, and surgical oncology abroad.'
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

      <PartnerHospitalsSection title="Internationally Accredited Orthopaedic Centers" />

      {/* ── FAQs ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Common Questions About Orthopedic Surgery Abroad
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
            Start Your Journey Today
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold mb-6 leading-tight">
            Don't Live With Joint Pain.<br />
            <span className="text-primary">World-Class Care Is Within Reach.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Share your X-rays and diagnosis today. Sultan GHC will connect you with a top orthopedic
            specialist for a free first review — and a personalised cost estimate — within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get My Free First Orthopedic Consultation
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
