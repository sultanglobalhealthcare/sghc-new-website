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
  ImageIcon,
  Stethoscope,
  Zap,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Spine Surgery & Sports Injury Treatment Abroad | India & Turkey | Sultan GHC',
  description:
    'Affordable spine surgery and sports injury treatment in India and Turkey — disc replacement, spinal fusion, microdiscectomy, ACL reconstruction, and more at 70–85% less than U.S. costs. Sultan GHC connects American patients with internationally accredited spine surgeons and sports medicine specialists.',
  keywords: [
    'spine surgery abroad',
    'spinal disc replacement India cost',
    'spinal fusion surgery Turkey',
    'microdiscectomy India',
    'scoliosis surgery abroad',
    'ACL reconstruction India cost',
    'sports injury surgery Turkey',
    'affordable spine surgery USA patients',
    'minimally invasive spine surgery India',
    'sciatica surgery abroad',
    'herniated disc treatment India Turkey',
    'spinal stenosis surgery abroad',
    'Sultan GHC spine surgery',
    'medical tourism spine',
    'sports medicine surgery India',
  ],
  openGraph: {
    title: 'Spine Surgery & Sports Injury Treatment Abroad — India & Turkey | Sultan GHC',
    description:
      'World-class spine surgery and sports injury treatment at 70–85% lower than U.S. prices. Internationally accredited spine centers in India and Turkey.',
    url: 'https://www.sultanghc.com/treatments/spine-sports-injury',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: 'https://www.sultanghc.com/api/og?title=Spine+%26+Sports+Injury+Surgery+Abroad&desc=Disc+replacement%2C+TLIF%2C+spinal+fusion+in+India+%26+Turkey.+Save+75-85%25+vs+U.S.&cat=Spine+Surgery',
        width: 1200,
        height: 630,
        alt: 'Spine Surgery & Sports Injury Treatment Abroad — Sultan GHC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spine Surgery & Sports Injury Treatment Abroad | Sultan GHC',
    description:
      'World-class spine and sports injury care at 70–85% lower than U.S. prices. Internationally accredited centers in India and Turkey.',
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/treatments/spine-sports-injury',
  },
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Spine & Sports Injury Surgery', item: 'https://www.sultanghc.com/treatments/spine-sports-injury' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Spine Surgery and Sports Injury Treatment Abroad — India and Turkey',
  description:
    'Comprehensive spine surgery and sports injury treatment for U.S. patients at internationally accredited hospitals in India and Turkey, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/spine-sports-injury',
  about: {
    '@type': 'MedicalCondition',
    name: 'Spinal and Musculoskeletal Disorders',
    alternateName: ['Disc herniation', 'Spinal stenosis', 'Sports injuries', 'Scoliosis'],
    possibleTreatment: [
      { '@type': 'MedicalTherapy', name: 'Spinal Disc Replacement' },
      { '@type': 'MedicalTherapy', name: 'Spinal Fusion Surgery' },
      { '@type': 'MedicalTherapy', name: 'Microdiscectomy' },
      { '@type': 'MedicalTherapy', name: 'Laminectomy' },
      { '@type': 'MedicalTherapy', name: 'Scoliosis Correction' },
      { '@type': 'MedicalTherapy', name: 'ACL Reconstruction' },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does spinal fusion surgery cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spinal fusion surgery in the U.S. typically costs $50,000–$100,000 or more. The same procedure at an internationally accredited hospital in India costs $7,000–$12,000 — a saving of 80–90%. Turkey offers similar procedures for $9,000–$15,000. Sultan GHC provides a personalised cost estimate based on your MRI reports and diagnosis at no charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are spine surgeons in India and Turkey as qualified as U.S. surgeons?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many of our partner spine surgeons completed fellowships in the United States, United Kingdom, Germany, or South Korea. They perform hundreds of complex spinal procedures annually using the same implant systems, navigation technology, and surgical protocols as leading U.S. spine centers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long will I need to stay after spine surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recovery timelines vary by procedure. For minimally invasive procedures like microdiscectomy, patients typically stay 7–10 days in-country. For spinal fusion or disc replacement, 14–21 days is recommended, including pre-operative evaluation, surgery, hospital recovery, and physiotherapy before flying clearance. Your Case Manager coordinates the full itinerary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is minimally invasive spine surgery available in India and Turkey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our partner hospitals offer the full range of minimally invasive spine techniques including tubular retractor discectomy, percutaneous pedicle screw fixation, endoscopic spine surgery, and robotic-assisted spinal navigation. These approaches mean smaller incisions, less blood loss, shorter hospital stays, and faster recovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Sultan GHC help with sports injury surgery like ACL reconstruction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our partner hospitals have dedicated sports medicine and arthroscopy units staffed by orthopaedic surgeons with sports medicine fellowships. Procedures available include ACL and PCL reconstruction, rotator cuff repair, meniscus repair, shoulder labrum stabilisation, and Achilles tendon repair — all performed arthroscopically where possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What spinal implants are used in India and Turkey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our partner spine centers use internationally certified implant systems from Medtronic, DePuy Synthes, Stryker, NuVasive, and Globus Medical — the same systems used in leading U.S. spine centers. All implants carry CE and international quality certifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Sultan GHC offer a free first consultation for spine cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Share your MRI scans, X-rays, and current diagnosis, and our partner spine specialist will review your case and provide a recommended treatment plan with a personalised cost estimate — completely free, no obligation. Most spine case reviews are completed within 24–48 hours.',
      },
    },
  ],
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const SPINE_CONDITIONS = [
  { name: 'Herniated / Slipped Disc',        icon: '🔴' },
  { name: 'Spinal Stenosis',                 icon: '⚡' },
  { name: 'Degenerative Disc Disease',       icon: '🦴' },
  { name: 'Sciatica',                        icon: '🩺' },
  { name: 'Spondylolisthesis',               icon: '🔧' },
  { name: 'Scoliosis',                       icon: '🩻' },
  { name: 'Spinal Fractures',                icon: '💊' },
  { name: 'Spinal Tumors',                   icon: '🔬' },
  { name: 'ACL / PCL Ligament Tears',        icon: '🦵' },
  { name: 'Rotator Cuff Injuries',           icon: '💪' },
  { name: 'Meniscus Tears',                  icon: '⚙️' },
  { name: 'Shoulder Labrum Tears',           icon: '🏃' },
]

const TREATMENTS = [
  {
    title: 'Spinal Disc Replacement',
    desc: 'Artificial disc replacement (ADR) for the cervical and lumbar spine — preserving motion and eliminating the drawbacks of fusion for appropriate candidates.',
  },
  {
    title: 'Spinal Fusion (TLIF / PLIF / ALIF)',
    desc: 'Single and multi-level spinal fusion using internationally certified pedicle screw and rod systems — stabilising the spine and eliminating instability-related pain.',
  },
  {
    title: 'Microdiscectomy',
    desc: 'Minimally invasive removal of herniated disc material compressing spinal nerves — typically returning patients to mobility within days, with a short hospital stay.',
  },
  {
    title: 'Laminectomy & Laminoplasty',
    desc: 'Surgical decompression of the spinal canal for stenosis — relieving pressure on the spinal cord and nerves, reducing pain and restoring function.',
  },
  {
    title: 'Endoscopic Spine Surgery',
    desc: 'Ultra-minimally invasive endoscopic approach to discectomy and foraminal decompression — smaller than a 1 cm incision, local anaesthesia option, same-day discharge possible.',
  },
  {
    title: 'Scoliosis Correction',
    desc: 'Corrective surgery for adolescent and adult scoliosis using modern spinal instrumentation — including minimally invasive and robotic-assisted techniques at select centers.',
  },
  {
    title: 'ACL & Sports Ligament Reconstruction',
    desc: 'Arthroscopic ACL, PCL, and multi-ligament reconstruction for active patients — performed by sports medicine fellowship-trained orthopedic surgeons.',
  },
  {
    title: 'Rotator Cuff & Shoulder Repair',
    desc: 'Arthroscopic rotator cuff repair, SLAP labrum repair, and shoulder stabilisation surgery — minimally invasive techniques with structured sports rehabilitation from day one.',
  },
]

const COST_COMPARISON = [
  { procedure: 'Spinal Disc Replacement (ADR)',   us: '$40,000–$80,000',   india: '$6,000–$10,000',  turkey: '$8,000–$14,000' },
  { procedure: 'Spinal Fusion (1–2 levels)',       us: '$50,000–$100,000',  india: '$7,000–$12,000',  turkey: '$9,000–$15,000' },
  { procedure: 'Microdiscectomy',                  us: '$20,000–$50,000',   india: '$3,000–$6,000',   turkey: '$4,000–$8,000' },
  { procedure: 'Laminectomy',                      us: '$25,000–$60,000',   india: '$4,000–$7,000',   turkey: '$5,000–$9,000' },
  { procedure: 'Vertebroplasty / Kyphoplasty',     us: '$15,000–$40,000',   india: '$3,000–$5,500',   turkey: '$4,000–$7,000' },
  { procedure: 'Scoliosis Correction',             us: '$60,000–$150,000',  india: '$8,000–$15,000',  turkey: '$10,000–$18,000' },
  { procedure: 'ACL Reconstruction',               us: '$20,000–$50,000',   india: '$3,000–$5,500',   turkey: '$4,000–$7,000' },
  { procedure: 'Rotator Cuff Repair',              us: '$15,000–$40,000',   india: '$2,500–$5,000',   turkey: '$3,500–$6,500' },
]

const FAQS = [
  {
    q: 'How much does spinal fusion surgery cost in India compared to the U.S.?',
    a: 'Spinal fusion in the U.S. typically costs $50,000–$100,000. The same procedure at an accredited hospital in India costs $7,000–$12,000 — a saving of 80–90%. Turkey offers $9,000–$15,000. Sultan GHC provides a personalised estimate based on your MRI at no charge.',
  },
  {
    q: 'Are spine surgeons in India and Turkey as qualified as U.S. surgeons?',
    a: 'Yes. Many of our partner spine surgeons completed fellowships in the U.S., UK, Germany, or South Korea. They perform hundreds of complex procedures annually using the same implant systems and navigation technology as leading U.S. spine centers.',
  },
  {
    q: 'How long will I need to stay after spine surgery?',
    a: 'For microdiscectomy, 7–10 days in-country is typical. For spinal fusion or disc replacement, 14–21 days is recommended — including pre-op evaluation, surgery, hospital recovery, and physiotherapy before flying clearance. Your Case Manager coordinates the full itinerary.',
  },
  {
    q: 'Is minimally invasive spine surgery available in India and Turkey?',
    a: 'Yes. Our partner hospitals offer tubular retractor discectomy, percutaneous pedicle screw fixation, endoscopic spine surgery, and robotic-assisted navigation — resulting in smaller incisions, less blood loss, shorter stays, and faster recovery.',
  },
  {
    q: 'Can Sultan GHC help with sports injury surgery like ACL reconstruction?',
    a: 'Yes. Our partner hospitals have dedicated sports medicine and arthroscopy units. Procedures include ACL/PCL reconstruction, rotator cuff repair, meniscus repair, shoulder labrum stabilisation, and Achilles tendon repair — all arthroscopic where possible.',
  },
  {
    q: 'What spinal implants are used in India and Turkey?',
    a: 'Our partner spine centers use internationally certified systems from Medtronic, DePuy Synthes, Stryker, NuVasive, and Globus Medical — the same brands used in leading U.S. spine centers. All implants carry CE and international quality certifications.',
  },
  {
    q: 'Does Sultan GHC offer a free first consultation for spine cases?',
    a: 'Yes. Share your MRI scans, X-rays, and diagnosis, and our partner spine specialist will review your case and provide a recommended treatment plan and cost estimate — free, no obligation. Most spine reviews are completed within 24–48 hours.',
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
        <ImageIcon size={16} className="text-blue-400 shrink-0" />
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

export default function SpineSportsInjuryPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Spine & Sports Injury Surgery</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Spine & Sports Injury Surgery
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Spine Surgery & Sports Injury Treatment in{' '}
                <span className="text-primary">India & Turkey</span> — 80–90% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-xl">
                Americans pay up to $100,000 for spinal fusion. At our internationally accredited partner
                hospitals in India and Turkey, the same procedure — with the same implant systems —
                costs a fraction of that, with no waitlists, no insurance denials, and a dedicated
                Case Manager by your side from first contact to full recovery.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  'Internationally Accredited Spine Centers',
                  'Free First Spine Opinion',
                  'Minimally Invasive Options',
                  'Robotic-Assisted Surgery Available',
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
                  Get Your Free First Spine Consultation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <MessageCircle size={16} />
                  WhatsApp a Spine Specialist
                </a>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="spine-surgery-sports-injury-india-turkey-hospital-sultan-ghc.jpg"
                width={1200}
                height={900}
                label="Spine surgeon reviewing MRI scans with a patient at an internationally accredited hospital — Sultan GHC"
                aiPrompt="Professional medical photography: An experienced spine surgeon in surgical scrubs reviewing detailed MRI spinal scans on a large diagnostic screen with an international patient at a modern hospital in India. Clean clinical environment, advanced imaging technology visible, warm patient interaction. Photorealistic, Canon R5, 50mm f/1.8, natural light, not illustrated."
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
              { value: '80–90%', label: 'Cost savings vs. U.S. spine surgery',      icon: DollarSign },
              { value: '24–48hrs', label: 'Free first spine opinion turnaround',     icon: Clock },
              { value: 'JCI',     label: 'Accredited spine centers in our network',  icon: Shield },
              { value: '15,000+', label: 'Spine procedures performed annually',      icon: Activity },
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

      {/* ── Why Seek Spine Care Abroad ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 w-full max-w-lg">
            <ImagePlaceholder
              filename="american-patient-spine-consultation-surgery-abroad-sultan-ghc.jpg"
              width={1200}
              height={900}
              label="American patient consulting with a spine surgeon for treatment abroad — Sultan GHC"
              aiPrompt="Professional medical photography: A middle-aged American patient (50s, sitting upright, casual attire) in a consultation room with a confident Indian spine surgeon pointing to a lumbar MRI scan on a backlit viewer. The patient looks hopeful and attentive. Modern hospital setting, clean background. Photorealistic, Canon R5, natural light."
              aspectRatio="4/3"
            />
          </div>

          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              The Reality for U.S. Spine Patients
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              Back Pain is the #1 Cause of Disability in the U.S. The Surgery Costs Are Staggering.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              More than 80% of Americans will experience debilitating back pain at some point in their
              lives. For those who need surgical intervention — a herniated disc, spinal stenosis,
              or scoliosis — the cost of care in the U.S. can reach $100,000 or more, with months-long
              waitlists and no guarantee of insurance coverage.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our partner hospitals in India and Turkey offer the same spine surgical techniques,
              navigation systems, and implant brands as leading U.S. spine centers — at 80–90% lower
              cost, with internationally trained surgeons, English-speaking teams, and a dedicated
              Case Manager coordinating every step of your journey.
            </p>

            <div className="space-y-3">
              {[
                'Spine implants from Medtronic, DePuy Synthes, Stryker, NuVasive, and Globus Medical',
                'Spine surgeons with fellowships from the U.S., UK, Germany, and South Korea',
                'Intraoperative neuromonitoring (IONM) at all major spine centers',
                'O-arm, C-arm, and robotic navigation for precision-guided procedures',
                'Dedicated sports medicine units with arthroscopy theaters for injury repair',
                'In-hospital physiotherapy and rehabilitation from the first post-operative day',
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
              Spine & Sports Conditions Treated at Our Network
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our partner hospitals cover the full spectrum of spinal disorders and sports-related
              musculoskeletal injuries. Submit your MRI or imaging for a review within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SPINE_CONDITIONS.map(({ name, icon }) => (
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
              Submit your case for a free spine review →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Procedures ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Available Procedures
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Spine Surgery & Sports Injury Procedures Available Abroad
          </h2>
          <p className="text-gray-500 leading-relaxed">
            From minimally invasive microdiscectomy to complex scoliosis correction and sports
            ligament reconstruction — our partner centers cover the full surgical spectrum.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TREATMENTS.map(({ title, desc }) => (
            <div key={title} className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mb-4">
                <Zap size={16} className="text-white" />
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
              What Does Spine Surgery Cost in India & Turkey vs. the U.S.?
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Prices below are indicative ranges. Sultan GHC provides a personalised estimate based
              on your MRI, surgical plan, and implant requirements — at no charge.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Procedure</th>
                  <th className="text-center px-6 py-4 font-semibold"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" />United States</span></th>
                  <th className="text-center px-6 py-4 font-semibold text-green-300"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" />India</span></th>
                  <th className="text-center px-6 py-4 font-semibold text-blue-300"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Turkey" className="rounded-sm" />Turkey</span></th>
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
            All costs are estimates in USD and vary based on diagnosis, number of spinal levels, implant selection, and hospital tier.
            Travel, accommodation, and Sultan GHC facilitation fees are separate.
          </p>

          <div className="text-center mt-8">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get Your Personalised Spine Surgery Cost Estimate — Free
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
              Spine Surgery in India
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              India — A Global Hub for Complex Spine Surgery
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              India's leading hospitals have established internationally recognized spine surgery
              programs that attract patients from the United States, Europe, Africa, and the Middle
              East. Cities like Delhi, Mumbai, Chennai, Bengaluru, and Hyderabad are home to
              neurosurgeons and orthopedic spine specialists performing thousands of complex
              procedures annually.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our partner centers in India are equipped with intraoperative neuromonitoring (IONM),
              O-arm and C-arm fluoroscopy, robotic spinal navigation, and dedicated spine ICUs —
              alongside a cost structure that makes even multi-level fusion accessible to U.S. patients
              without insurance coverage.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Robotic-assisted spinal navigation at select centers (Mazor X, Globus Excelsius GPS)',
                'Intraoperative neuromonitoring (IONM) for all complex spine cases',
                'Dedicated spine ICUs with 24/7 neurocritical care teams',
                'Medtronic, DePuy Synthes, Stryker, and NuVasive implant systems throughout',
                'Sports medicine arthroscopy units at all major partner hospitals',
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
                Plan My Spine Journey to India
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
              filename="spine-surgery-india-hospital-operation-theater-sultan-ghc.jpg"
              width={1200}
              height={900}
              label="Spine surgery operation theater at a JCI-accredited hospital in India — Sultan GHC"
              aiPrompt="Professional medical photography: A state-of-the-art spine surgery operation theater in a modern Indian hospital. Surgical team in sterile blue gowns performing a minimally invasive spine procedure. Advanced O-arm imaging equipment visible, LED surgical lights overhead, clean environment. No graphic content. Shot on Sony A7R IV, clinical and professional. Photorealistic."
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* ── Turkey Section ── */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Spine Surgery in Turkey
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
                Turkey — European-Standard Spine Care for International Patients
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Turkey's neurosurgery and orthopedic spine departments have grown rapidly into
                internationally recognized centers of excellence. Turkish spine surgeons are trained
                to European standards — many with fellowships in Germany, France, and the United
                Kingdom — and operate in JCI-accredited facilities in Istanbul, Ankara, and Izmir.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                For U.S. patients seeking spine surgery at European quality, Turkey offers an
                exceptional combination of surgical expertise, modern infrastructure, and cost
                savings of 80–85% compared to U.S. prices — all within a 10–11 hour direct
                flight from the East Coast.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'JCI-accredited hospitals with dedicated neurosurgery and spine units',
                  'European-trained spine surgeons with international fellowship credentials',
                  'Endoscopic and minimally invasive spine surgery at all partner centers',
                  'Sports medicine departments treating ACL, rotator cuff, and meniscus injuries',
                  'English-speaking patient coordinators and international patient departments',
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
                  Plan My Spine Journey to Turkey
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/destinations/turkey"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  Explore Turkey as a Destination
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="spine-surgery-turkey-istanbul-hospital-international-patient-sultan-ghc.jpg"
                width={1200}
                height={900}
                label="Modern spine surgery center in Istanbul, Turkey — Sultan GHC"
                aiPrompt="Professional architectural and medical photography: The modern, premium neurosurgery and spine department of a JCI-accredited hospital in Istanbul, Turkey. Clean hallway with advanced diagnostic equipment visible through glass walls, hospital staff in professional attire, English and Turkish signage. Premium European aesthetic, natural light. Shot on Nikon Z9, wide angle, photorealistic."
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
            Your Spine Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            How Your Spine Surgery Journey Works with Sultan GHC
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Every step is managed — from your first MRI upload to your return flight home.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Share Your MRI',
              desc: 'Upload your MRI scans, X-rays, and any surgical reports. Our partner spine specialist reviews your case and responds with a recommended surgical plan within 24–48 hours.',
            },
            {
              step: '02',
              title: 'Free First Consultation',
              desc: 'Receive a detailed surgical recommendation, implant options, recovery timeline, and a personalised cost estimate — completely free, no obligation.',
            },
            {
              step: '03',
              title: 'Travel & Surgery',
              desc: 'Sultan GHC coordinates airport pickup, hotel, hospital admission, and pre-operative scans. Your Case Manager is reachable 24/7 throughout your stay.',
            },
            {
              step: '04',
              title: 'Rehabilitation & Return',
              desc: 'In-hospital physiotherapy begins post-surgery. When medically cleared to fly, we coordinate your return journey and assist with follow-up physiotherapy back home.',
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
            <p className="text-sm text-gray-500">Spine and sports injury patients often ask about these specialties too.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                href: '/treatments/orthopedics',
                title: 'Orthopaedics & Joint Replacement',
                desc: 'Knee replacement, hip replacement, shoulder surgery, and joint care at 75–85% less than U.S. costs.',
              },
              {
                href: '/treatments/neurosurgery',
                title: 'Neurosurgery',
                desc: 'Brain tumor surgery, complex spinal cord procedures, and advanced neurosurgical care abroad.',
              },
              {
                href: '/treatments/robotic-minimally-invasive',
                title: 'Robotic & Minimally Invasive Surgery',
                desc: 'Robotic-assisted procedures available across spine, orthopedics, and other specialties at our partner hospitals.',
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

      {/* ── FAQs ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Common Questions About Spine Surgery & Sports Injury Treatment Abroad
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
            Back Pain Shouldn't Define Your Life.<br />
            <span className="text-primary">Expert Spine Care Is Within Reach.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Share your MRI scans today. Sultan GHC will connect you with a leading spine specialist
            for a free first review — and a personalised cost estimate — within 24–48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get My Free First Spine Consultation
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
