import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Clock,
  DollarSign,
  Shield,
  Heart,
  HeartPulse,
  Activity,
  Users,

  ImageIcon,
  Stethoscope,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Cardiology & Cardiac Surgery Abroad | India & Turkey | Sultan GHC',
  description:
    'Access world-class heart surgery, bypass surgery, valve replacement, and advanced cardiology care in India and Turkey at 60–80% lower cost than the U.S. Sultan GHC connects American heart patients with JCI-accredited cardiac centers and top cardiologists.',
  keywords: [
    'heart surgery abroad',
    'cardiology treatment India',
    'heart bypass surgery Turkey',
    'affordable heart surgery USA patients',
    'cardiac surgery India cost',
    'valve replacement surgery India',
    'heart transplant India',
    'coronary artery bypass graft abroad',
    'medical tourism heart surgery',
    'best cardiac hospitals India',
    'heart surgery cost comparison',
    'Sultan GHC cardiology',
    'open heart surgery abroad for Americans',
    'angioplasty India Turkey',
  ],
  openGraph: {
    title: 'Heart Surgery & Cardiology Abroad — India & Turkey | Sultan GHC',
    description:
      'World-class cardiac surgery and cardiology care at 60–80% lower than U.S. prices. JCI-accredited heart centers in India and Turkey, matched to your condition.',
    url: 'https://www.sultanghc.com/treatments/cardiology',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: 'https://www.sultanghc.com/og/cardiology.jpg',
        width: 1200,
        height: 630,
        alt: 'Heart Surgery & Cardiology Treatment Abroad — Sultan GHC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heart Surgery & Cardiology Abroad | Sultan GHC',
    description:
      'World-class cardiac care at 60–80% lower than U.S. prices. JCI-accredited heart hospitals in India and Turkey.',
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/treatments/cardiology',
  },
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Cardiology & Heart Surgery', item: 'https://www.sultanghc.com/treatments/cardiology' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Cardiology and Heart Surgery Abroad — India and Turkey',
  description:
    'Comprehensive cardiology and cardiac surgery services for U.S. patients at JCI-accredited hospitals in India and Turkey, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/cardiology',
  about: {
    '@type': 'MedicalCondition',
    name: 'Cardiovascular Disease',
    alternateName: ['Heart disease', 'Coronary artery disease', 'Cardiac conditions'],
    possibleTreatment: [
      { '@type': 'MedicalTherapy', name: 'Coronary Artery Bypass Graft (CABG)' },
      { '@type': 'MedicalTherapy', name: 'Heart Valve Replacement' },
      { '@type': 'MedicalTherapy', name: 'Angioplasty & Stenting' },
      { '@type': 'MedicalTherapy', name: 'Heart Transplant' },
      { '@type': 'MedicalTherapy', name: 'TAVR — Transcatheter Aortic Valve Replacement' },
      { '@type': 'MedicalTherapy', name: 'Cardiac Electrophysiology & Ablation' },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does open heart surgery cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open heart surgery in the U.S. typically costs $80,000–$200,000. The same procedure at a JCI-accredited hospital in India costs $5,000–$12,000 — a saving of 85–95%. Turkey offers similar procedures for $7,000–$15,000. Sultan GHC provides a personalised cost estimate based on your specific case at no charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are cardiac surgeons in India and Turkey as qualified as U.S. surgeons?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many of our partner cardiac surgeons completed their fellowships and postgraduate training in the United States, United Kingdom, or Germany. They regularly operate on international patients and publish in peer-reviewed journals. Our hospitals perform thousands of cardiac surgeries annually with outcomes comparable to top U.S. centers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to travel for heart surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Safety depends on your current cardiac stability. Sultan GHC works with your U.S. cardiologist and our partner hospital to determine whether air travel is medically appropriate for your condition. For stable patients, travel is typically safe. For urgent cases, we can sometimes arrange air ambulance coordination. A pre-travel clearance review is included in our case management service.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long will I need to stay in India or Turkey after heart surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most cardiac surgery patients require 14–21 days in-country. This includes pre-operative evaluation (2–3 days), the surgery, ICU monitoring (2–4 days), general ward recovery (5–7 days), and a post-operative review before clearance to fly. Your Case Manager will plan your full itinerary and coordinate with your surgeon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Sultan GHC arrange companions or family members to travel with me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We help coordinate flights, hotel accommodation, and local transport for one or more companions. Most hospitals have dedicated international patient lounges and guest rooms near cardiac wards. Your companion will have full access throughout your stay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a second cardiology opinion before deciding on surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and we strongly encourage it. Sultan GHC arranges a complimentary first remote consultation from our network cardiologists within 24–48 hours. Submit your echocardiogram, angiography reports, and recent blood work, and our specialists will review them and recommend a treatment path. Your first consultation is at no cost and no obligation.',
      },
    },
  ],
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const CARDIAC_CONDITIONS = [
  { name: 'Coronary Artery Disease',      icon: '🫀' },
  { name: 'Heart Valve Disease',          icon: '⚙️' },
  { name: 'Heart Failure',                icon: '💓' },
  { name: 'Atrial Fibrillation (AFib)',   icon: '📡' },
  { name: 'Congenital Heart Defects',     icon: '🧬' },
  { name: 'Aortic Aneurysm',             icon: '🩸' },
  { name: 'Arrhythmias',                  icon: '📈' },
  { name: 'Cardiomyopathy',              icon: '🏥' },
  { name: 'Peripheral Artery Disease',   icon: '🦵' },
  { name: 'Pulmonary Hypertension',      icon: '🫁' },
  { name: 'Endocarditis',                icon: '🔬' },
  { name: 'Post-Heart Attack Recovery',  icon: '💊' },
]

const TREATMENTS = [
  {
    title: 'Coronary Artery Bypass (CABG)',
    desc: 'Open heart bypass surgery restoring blood flow to the heart muscle — performed by internationally trained cardiac surgeons using the same protocols as leading U.S. hospitals.',
  },
  {
    title: 'Heart Valve Replacement & Repair',
    desc: 'Mechanical and biological valve replacements including minimally invasive options — for aortic, mitral, tricuspid, and pulmonary valve disease.',
  },
  {
    title: 'Angioplasty & Coronary Stenting',
    desc: 'Catheter-based procedures to open blocked coronary arteries, often without the need for open surgery — shorter recovery, lower cost.',
  },
  {
    title: 'TAVR (Transcatheter Aortic Valve Replacement)',
    desc: 'Minimally invasive aortic valve replacement without open heart surgery — available at select partner centers for high-surgical-risk patients.',
  },
  {
    title: 'Cardiac Electrophysiology & Ablation',
    desc: 'Diagnosis and treatment of heart rhythm disorders (AFib, SVT, ventricular tachycardia) using catheter ablation, pacemaker implantation, and ICD placement.',
  },
  {
    title: 'Heart Transplant',
    desc: 'End-stage heart failure patients can access heart transplant programs at our partner hospitals with internationally trained transplant teams and post-operative support.',
  },
  {
    title: 'Aortic Aneurysm Repair (EVAR / Open)',
    desc: 'Both endovascular (EVAR) and open surgical repair of aortic aneurysms — performed in dedicated vascular surgery units with cardiac ICU backup.',
  },
  {
    title: 'Cardiac Rehabilitation',
    desc: 'Structured post-cardiac event recovery programs including physiotherapy, nutrition counseling, and monitored exercise — ideal for post-surgery or post-MI patients.',
  },
]

const COST_COMPARISON = [
  { procedure: 'Open Heart Bypass (CABG)',         us: '$80,000–$200,000',   india: '$5,000–$12,000',   turkey: '$7,000–$15,000' },
  { procedure: 'Heart Valve Replacement',          us: '$80,000–$150,000',   india: '$6,000–$14,000',   turkey: '$8,000–$18,000' },
  { procedure: 'Angioplasty with Stent',           us: '$30,000–$70,000',    india: '$3,000–$7,000',    turkey: '$4,000–$9,000' },
  { procedure: 'TAVR (Valve Replacement)',         us: '$50,000–$100,000',   india: '$12,000–$22,000',  turkey: '$15,000–$28,000' },
  { procedure: 'Pacemaker / ICD Implantation',     us: '$25,000–$60,000',    india: '$4,000–$8,000',    turkey: '$5,000–$10,000' },
  { procedure: 'Cardiac Catheterization / Echo',   us: '$5,000–$15,000',     india: '$400–$1,200',      turkey: '$600–$1,800' },
]

const FAQS = [
  {
    q: 'How much does open heart surgery cost in India compared to the U.S.?',
    a: 'Open heart surgery in the U.S. typically costs $80,000–$200,000. The same procedure at a JCI-accredited hospital in India costs $5,000–$12,000 — a saving of 85–95%. Turkey offers similar procedures for $7,000–$15,000. Sultan GHC provides a personalised cost estimate based on your specific case at no charge.',
  },
  {
    q: 'Are cardiac surgeons in India and Turkey as qualified as U.S. surgeons?',
    a: 'Yes. Many of our partner cardiac surgeons completed fellowships and postgraduate training in the United States, United Kingdom, or Germany. They regularly operate on international patients and publish in peer-reviewed journals. Our hospitals perform thousands of cardiac surgeries annually with outcomes comparable to top U.S. centers.',
  },
  {
    q: 'Is it safe to travel for heart surgery?',
    a: 'Safety depends on your current cardiac stability. Sultan GHC works with your U.S. cardiologist and our partner hospital to determine whether air travel is medically appropriate. For stable patients, travel is typically safe. A pre-travel clearance review is included in our case management service.',
  },
  {
    q: 'How long will I need to stay after heart surgery?',
    a: 'Most cardiac surgery patients require 14–21 days in-country — pre-op evaluation (2–3 days), surgery, ICU monitoring (2–4 days), general ward recovery (5–7 days), and a post-op review before flying clearance. Your Case Manager coordinates the full itinerary.',
  },
  {
    q: 'Does Sultan GHC help with companions traveling with me?',
    a: 'Absolutely. We coordinate flights, hotels, and local transport for one or more companions. Most hospitals have international patient lounges and guest rooms near cardiac wards, so your companion can be by your side throughout your stay.',
  },
  {
    q: 'Can I get a second cardiology opinion before deciding on surgery?',
    a: 'Yes — and we strongly encourage it. Sultan GHC arranges a complimentary first remote consultation from our network cardiologists within 24–48 hours. Submit your echocardiogram, angiography reports, and recent labs. Our specialists review your case and recommend a treatment path. Your first review is at no cost, no obligation.',
  },
]

// ─── Reusable Components ──────────────────────────────────────────────────────

function ImagePlaceholder({ filename, width, height, label, aiPrompt, aspectRatio, className = '' }) {
  const ratio = aspectRatio || `${width}/${height}`
  return (
    <div
      className={`relative bg-gradient-to-br from-blue-50 to-slate-100 border-2 border-dashed border-blue-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
      aria-label={label}
      role="img"
    >
      {/* Header row */}
      <div className="flex items-center gap-2 w-full shrink-0">
        <ImageIcon size={16} className="text-blue-400 shrink-0" />
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Image Placeholder</span>
      </div>

      {/* Filename */}
      <div className="bg-white/70 rounded-lg px-3 py-1.5 w-full shrink-0">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">SEO Filename</p>
        <p className="text-[10px] font-bold text-blue-600 break-all leading-snug">📁 {filename}</p>
      </div>

      {/* Size */}
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Size:</span>
        <span className="text-[10px] font-bold text-gray-600">{width} × {height} px</span>
      </div>

      {/* Label */}
      <p className="text-[10px] font-semibold text-blue-500 leading-snug shrink-0">{label}</p>

      {/* AI Prompt */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-2 w-full overflow-y-auto flex-1">
        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CardiologyPage() {
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
            <span className="text-primary font-medium">Cardiology & Cardiac Surgery</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left */}
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Cardiology & Cardiac Surgery
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                World-Class Heart Care in{' '}
                <span className="text-primary">India & Turkey</span> — at a Fraction of U.S. Costs
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-xl">
                Americans pay up to $200,000 for heart surgery. At our JCI-accredited partner hospitals
                in India and Turkey, the same procedures cost 80–90% less — with no waitlists,
                no insurance gatekeepers, and a dedicated Case Manager by your side.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  'JCI-Accredited Cardiac Centers',
                  'Free First Cardiology Opinion',
                  'Dedicated Heart Care Coordinator',
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
                  Get Your Free First Cardiology Consultation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <MessageCircle size={16} />
                  WhatsApp a Heart Specialist
                </a>
              </div>
            </div>

            {/* Right — Hero image */}
            <div className="flex-1 w-full max-w-lg">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/cardiology/heart-surgery-consultation-cardiologist-india-patient-sultan-ghc.png"
                  alt="Cardiac surgeon consulting with a patient at a JCI-accredited hospital in India — Sultan GHC"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-gray-100" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '80–90%', label: 'Cost savings vs. U.S. heart surgery', icon: DollarSign },
              { value: '24–48hrs', label: 'Free first cardiac opinion turnaround', icon: Clock },
              { value: 'JCI', label: 'Accredited cardiac centers only', icon: Shield },
              { value: '5,000+', label: 'Cardiac surgeries performed annually', icon: HeartPulse },
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

      {/* ── Why Seek Heart Care Abroad ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/cardiology/american-patient-cardiologist-consultation-medical-tourism-india.png"
                alt="American patient consulting with a cardiologist for medical tourism treatment in India — Sultan GHC"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              The Reality for U.S. Heart Patients
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              Heart Disease is America's #1 Killer. Heart Surgery Costs Are Breaking Families.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              According to the CDC, heart disease is the leading cause of death in the United States.
              Yet for the millions of Americans without adequate insurance — or facing high deductibles
              and surprise bills — accessing cardiac care can mean bankruptcy.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our partner hospitals in India and Turkey deliver internationally accredited cardiac surgery
              and cardiology care using the same implants, devices, and surgical protocols as U.S. hospitals —
              at 80–90% lower cost, with zero waitlists and English-speaking care teams.
            </p>

            <div className="space-y-3">
              {[
                'Same surgical techniques and implant brands as leading U.S. cardiac centers',
                'Cardiac surgeons fellowship-trained in the U.S., UK, and Germany',
                'On-site cardiac ICU, cath labs, and hybrid operating rooms',
                'No insurance pre-authorization or claim denials',
                'Internationally certified pathology, imaging, and cardiac diagnostics',
                'Full English-language support throughout your stay',
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

      {/* ── Cardiac Conditions Treated ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Conditions We Treat
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Cardiac Conditions Treated at Our Network
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our partner cardiac hospitals cover the full spectrum of heart conditions.
              If your diagnosis is not listed, submit your case — most conditions are evaluated within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CARDIAC_CONDITIONS.map(({ name, icon }) => (
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
              Submit your case for a free cardiac review →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Treatment Options ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Available Treatments
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Advanced Cardiac Surgery & Cardiology Procedures
          </h2>
          <p className="text-gray-500 leading-relaxed">
            From life-saving bypass surgery to minimally invasive valve procedures — our partner
            centers offer the complete spectrum of modern cardiac care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TREATMENTS.map(({ title, desc }) => (
            <div key={title} className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mb-4">
                <HeartPulse size={16} className="text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Before & After Visual ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Content */}
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                What to Expect
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
                Modern Cardiac Facilities — No Compromise on Safety or Quality
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our partner cardiac centers are equipped with the latest catheterization laboratories,
                hybrid operating rooms, advanced imaging suites, and dedicated cardiac ICUs. Many of
                these hospitals are listed among Asia's top cardiac centers by international healthcare
                ranking bodies.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Cardiac Catheterization Labs', desc: 'State-of-the-art cath labs for diagnostic and interventional procedures' },
                  { label: 'Hybrid Operating Rooms', desc: 'Combining surgical and imaging capabilities for complex cardiac cases' },
                  { label: 'Cardiac ICU', desc: 'Dedicated cardiac intensive care with 24/7 specialist monitoring' },
                  { label: 'Non-Invasive Diagnostics', desc: '3D Echo, CT Angiography, MRI, Nuclear Cardiology on-site' },
                ].map(({ label, desc }) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Activity size={14} className="text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">{label}</p>
                    <p className="text-[11px] text-gray-500 leading-snug">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="cardiac-catheterization-lab-jci-accredited-hospital-india-heart-surgery.jpg"
                width={900}
                height={675}
                label="State-of-the-Art Cardiac Catheterization Lab"
                aiPrompt="Professional wide-angle architectural/editorial photography of a state-of-the-art cardiac catheterization laboratory (cath lab) inside a modern JCI-accredited hospital. The room features: a large flat-panel biplane X-ray C-arm imaging system, adjustable radiolucent operating table, multiple high-resolution monitors displaying cardiac imaging and hemodynamic data, a glass-partitioned control room visible in background. Two or three medical professionals in blue surgical scrubs are visible — calibrating equipment or reviewing monitors (no active patient). Ceiling-mounted bright LED surgical lighting. Spotlessly clean, white-and-grey color scheme. High-tech equipment fills the frame. Wide shot showing the full room layout. Conveys precision, technological excellence, and world-class standards equal to or exceeding U.S. hospitals. 4:3 format, 900×675px."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── India vs Turkey ── */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Choose Your Destination
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-4">
              Heart Surgery in India or Turkey?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Both are globally recognized destinations for cardiac care. Here is how they compare for U.S. patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* India */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Cardiac Care in India</h3>
                  <p className="text-sm text-gray-400">The world's most affordable cardiac surgery destination</p>
                </div>
              </div>

              <div className="mb-6 relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '16/7' }}>
                <Image
                  src="/cardiology/best-heart-hospital-india-cardiac-surgery-jci-accredited.png"
                  alt="Best cardiac surgery hospital in India — JCI-accredited heart center for U.S. patients"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <ul className="space-y-3">
                {[
                  'Home to some of Asia\'s highest-volume cardiac surgery programs',
                  'Lowest cost for CABG, valve replacement, and heart transplant globally',
                  'Fortis Escorts, Apollo, Medanta — among the world\'s top heart hospitals',
                  'U.S.-trained cardiac surgeons performing 10,000+ cases annually',
                  'Most affordable TAVR and complex congenital repairs globally',
                  'Ayurvedic cardiac rehabilitation programs available',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                href="/destinations/india"
                className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:underline font-medium"
              >
                Explore India for Heart Treatment <ArrowRight size={14} />
              </Link>
            </div>

            {/* Turkey */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/tr.png" width={40} height={30} alt="Turkey" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Cardiac Care in Turkey</h3>
                  <p className="text-sm text-gray-400">Europe-standard care, closer to the U.S. East Coast</p>
                </div>
              </div>

              <div className="mb-6 relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '16/7' }}>
                <Image
                  src="/cardiology/heart-hospital-istanbul-turkey-cardiac-surgery-jci-accredited.png"
                  alt="Modern JCI-accredited cardiac hospital in Istanbul, Turkey — heart surgery for U.S. patients"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <ul className="space-y-3">
                {[
                  'EU-protocol cardiac surgery with shorter travel time from East Coast',
                  'Strong in minimally invasive cardiac surgery and robotic procedures',
                  'Acibadem and Memorial — accredited by JCI and European cardiac bodies',
                  'Growing expertise in TAVR, hybrid cardiac procedures, and EP labs',
                  'Excellent private recovery hotels adjacent to cardiac centers',
                  'Visa-on-arrival for U.S. passport holders — simpler logistics',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                href="/destinations/turkey"
                className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:underline font-medium"
              >
                Explore Turkey for Heart Treatment <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost Comparison Table ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Cost Comparison
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Heart Surgery Cost: U.S. vs. India vs. Turkey
          </h2>
          <p className="text-gray-500 leading-relaxed">
            All estimates are approximate and vary by hospital, complexity, and individual case.
            Your Case Manager will provide a precise, itemised quote based on your reports.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-950 text-white">
                <th className="text-left px-6 py-4 font-semibold">Procedure</th>
                <th className="text-center px-6 py-4 font-semibold"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" />USA</span></th>
                <th className="text-center px-6 py-4 font-semibold text-primary"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" />India</span></th>
                <th className="text-center px-6 py-4 font-semibold text-primary"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Turkey" className="rounded-sm" />Turkey</span></th>
              </tr>
            </thead>
            <tbody>
              {COST_COMPARISON.map((row, i) => (
                <tr key={row.procedure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-medium text-gray-800">{row.procedure}</td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">{row.us}</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">{row.india}</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">{row.turkey}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-start gap-2.5 mt-4">
          <AlertCircle size={14} className="text-gray-400 mt-0.5 shrink-0" />
          <p className="text-xs text-gray-400 leading-relaxed">
            Prices are approximate estimates for educational purposes only. Actual costs depend on procedure type,
            hospital selection, patient condition, and required implants. Sultan GHC does not charge a fee for
            providing cost estimates.
          </p>
        </div>
      </section>


      {/* ── Patient Journey ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Your Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              How Your Heart Surgery Journey Works
            </h2>
            <p className="text-gray-500 leading-relaxed">
              From your first enquiry to returning home recovered — Sultan GHC manages every step
              of your cardiac care journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Submit Your Cardiac Reports',
                body: 'Share your echocardiogram, angiography, ECG, and medical history through our secure portal. No obligation — this is simply to evaluate your case.',
              },
              {
                step: '02',
                title: 'Free First Cardiologist Opinion',
                body: 'Our network cardiologists review your case within 24–48 hours and provide a complimentary first opinion, treatment recommendation, and hospital options best suited to your condition.',
              },
              {
                step: '03',
                title: 'Transparent Cost Estimate',
                body: 'Receive a detailed, itemised cost breakdown including surgery, ICU, hospital stay, anesthesia, implants, and post-op care. No hidden fees. No surprises.',
              },
              {
                step: '04',
                title: 'Medical Visa & Travel Support',
                body: 'We issue your medical visa invitation letter and guide you through the complete visa application. We also assist with flight bookings and airport-to-hospital transfer.',
              },
              {
                step: '05',
                title: 'In-Hospital Care & Coordination',
                body: 'Our on-ground team is with you from arrival through discharge — accompanying you to pre-op consultations, surgery day, ICU, ward recovery, and final surgeon review.',
              },
              {
                step: '06',
                title: 'Follow-Up After You Return Home',
                body: 'Your cardiac surgeon continues remote consultations via video after you return home. We coordinate with your local cardiologist to share records and ensure continuity of care.',
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-md transition-all overflow-hidden"
              >
                <span className="absolute -bottom-3 -right-1 text-[80px] font-bold text-gray-100 leading-none select-none pointer-events-none">
                  {step}
                </span>
                <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-2">Step {step}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-2 relative z-10">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed relative z-10">{body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
            >
              Read the full patient journey guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Heart Surgery Abroad — FAQs
            </h2>
            <p className="text-gray-500">
              Common questions from U.S. patients considering cardiac care in India or Turkey.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-800 leading-snug">{faq.q}</span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 group-open:border-primary group-open:text-primary transition-colors text-lg font-light leading-none">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/[0.02]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-semibold text-blue-100 uppercase tracking-widest mb-4">
              Start Your Heart Care Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-4 leading-tight">
              Get Your Free First Cardiac Opinion Within 48 Hours
            </h2>
            <p className="text-blue-100 leading-relaxed mb-8">
              Upload your echocardiogram, angiography, or cardiology reports and receive a personalised
              review from an internationally accredited cardiac specialist — your first review is at no cost, no commitment.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 bg-white text-primary text-sm font-bold px-7 py-3.5 rounded-full shadow-xl hover:scale-[1.02] transition-all"
              >
                Upload Reports & Get Free First Opinion
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+16107870713"
                className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
              >
                <Phone size={16} />
                +1-610-787-0713
              </a>
            </div>

            {/* What you get */}
            <div className="bg-white/10 rounded-2xl px-6 py-5 text-left inline-block min-w-[260px]">
              <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">What you receive — free:</p>
              <div className="space-y-2">
                {[
                  'Expert cardiac case review (24–48 hrs)',
                  'Personalised hospital & surgeon recommendations',
                  'Transparent treatment cost estimate',
                  'Medical visa & travel guidance',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle2 size={13} className="text-white shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-blue-200 text-xs mt-6">
              * Sultan GHC does not provide medical advice, diagnosis, or treatment.
              We are a healthcare facilitation company.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
