import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users, ImageIcon,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Urology Treatment Abroad | India & Türkiye | Sultan GHC',
  description:
    'Access world-class urology care — kidney stone surgery, prostate cancer (RALP), kidney transplant, TURP, bladder cancer, PCNL, and ureteroscopy — in India and Türkiye at 70–92% lower cost than U.S. prices. Sultan GHC connects American patients with JCI-accredited urology centers and internationally trained urologists.',
  keywords: [
    'urology treatment abroad',
    'kidney stone surgery India cost',
    'prostate cancer surgery India Türkiye',
    'robot-assisted prostatectomy India cost',
    'RALP India cost',
    'kidney transplant India cost',
    'TURP India cost',
    'PCNL kidney stone India',
    'bladder cancer surgery India Türkiye',
    'affordable urology for Americans',
    'medical tourism urology',
    'JCI urology hospital India Türkiye',
    'Sultan GHC urology',
    'nephrectomy India cost',
  ],
  openGraph: {
    title: 'Urology in India & Türkiye — Affordable for U.S. Patients | Sultan GHC',
    description:
      'Kidney stone surgery, prostate cancer (RALP), kidney transplant, TURP, and bladder cancer surgery at JCI-accredited urology centers — 70–92% less than U.S. costs.',
    url: 'https://www.sultanghc.com/treatments/urology',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urology Abroad | Kidney & Prostate Treatment India & Türkiye | Sultan GHC',
    description: 'Kidney stones, prostate cancer (RALP), kidney transplant, TURP in India & Türkiye at 70–92% less than U.S. costs.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/urology' },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Urology',    item: 'https://www.sultanghc.com/treatments/urology' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Urology Treatment Abroad — India and Türkiye',
  description: 'Comprehensive urology services for U.S. patients at JCI-accredited hospitals in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/urology',
  about: {
    '@type': 'MedicalSpecialty',
    name: 'Urology',
    alternateName: ['Urological Surgery', 'Kidney Disease', 'Prostate Surgery'],
    relevantSpecialty: 'Urology',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does robot-assisted prostatectomy (RALP) cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robot-assisted radical prostatectomy (RALP) using the da Vinci Surgical System in the U.S. costs $15,000–$50,000 for self-pay patients. At JCI-accredited hospitals in India (Apollo, Fortis, Medanta), which operate da Vinci systems, the same procedure costs $5,000–$12,000 — a saving of 75–90%. Türkiye costs $7,000–$18,000. Sultan GHC provides a personalised cost estimate within 24 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does PCNL (kidney stone surgery) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Percutaneous nephrolithotomy (PCNL) for large kidney stones in the U.S. costs $15,000–$50,000 for self-pay patients (FAIR Health Consumer 2024). In India at a JCI-accredited hospital, PCNL costs $2,000–$5,000 — a saving of 85–90%. Mini-PCNL and ultra-mini PCNL (for smaller stones or pediatric cases) are also available at partner centers. Ureteroscopy with laser lithotripsy for smaller stones costs $1,500–$4,000 in India vs $8,000–$25,000 in the U.S.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a kidney transplant cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A kidney transplant in the U.S. costs $150,000–$400,000 including surgery, hospital stay, and post-transplant monitoring. At JCI-accredited hospitals in India, kidney transplant costs $13,000–$22,000 — a saving of over 90%. India performs thousands of kidney transplants annually, with living donor transplant being the primary modality. Sultan GHC works with NOTTO-compliant transplant programs. Post-transplant immunosuppressant medications are also significantly cheaper in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TURP (prostate surgery for BPH) available in India? How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TURP (Transurethral Resection of the Prostate) and its modern variants — HoLEP (Holmium Laser Enucleation of the Prostate) and GreenLight laser PVP — are fully available at JCI-accredited partner hospitals in India and Türkiye. TURP costs $10,000–$30,000 in the U.S. India costs $1,500–$4,000. HoLEP, which offers better outcomes for large prostate glands, is available at select centers for similar pricing. Türkiye costs $2,000–$6,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can prostate cancer patients travel to India for treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sultan GHC coordinates the full prostate cancer care pathway for U.S. patients — from PSA workup and mpMRI to biopsy, robotic prostatectomy (RALP), radiation therapy (EBRT, brachytherapy), and hormonal therapy. For localized prostate cancer, RALP outcomes in India are equivalent to leading U.S. programs. For advanced disease, medical oncology review and hormone therapy initiation are also available. A free second opinion from a urological oncologist can be arranged within 24–48 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to stay in India for kidney stone surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ureteroscopy with laser lithotripsy is often a same-day or overnight procedure — most patients need 3–5 days in India including pre-operative workup and recovery. PCNL for larger stones requires 5–8 days including 1–2 nights in hospital post-procedure. Robotic prostatectomy requires 7–10 days. Kidney transplant requires 21–30 days for surgery, monitoring, and stability before flying clearance.',
      },
    },
  ],
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const CONDITIONS = [
  { name: 'Kidney Stones (Nephrolithiasis)',         icon: '🪨' },
  { name: 'BPH (Enlarged Prostate)',                 icon: '🔷' },
  { name: 'Prostate Cancer',                         icon: '🎗️' },
  { name: 'Kidney Cancer (Renal Cell Carcinoma)',    icon: '🫘' },
  { name: 'Bladder Cancer',                          icon: '🔬' },
  { name: 'Testicular Cancer',                       icon: '🧬' },
  { name: 'Kidney Failure (ESRD)',                   icon: '💧' },
  { name: 'Urinary Incontinence & OAB',              icon: '⚠️' },
  { name: 'Urethral Stricture',                      icon: '🔗' },
  { name: 'Hydronephrosis',                          icon: '🫀' },
  { name: 'Male Infertility',                        icon: '🔭' },
  { name: 'Varicocele',                              icon: '🩸' },
]

const PROCEDURES = [
  {
    title: 'PCNL — Percutaneous Nephrolithotomy',
    desc: 'Minimally invasive keyhole surgery for large (>2 cm), staghorn, or complex kidney stones — performed under fluoroscopic and ultrasound guidance. Mini-PCNL and ultra-mini PCNL techniques available at partner centers for smaller stones or cases requiring reduced nephron trauma.',
  },
  {
    title: 'URS — Ureteroscopy with Laser Lithotripsy',
    desc: 'Flexible ureteroscopy (FURS) with Holmium laser or Thulium fiber laser (TFL) lithotripsy for ureteric and renal stones — same-day or overnight procedure with no incision. RIRS (Retrograde Intrarenal Surgery) for stones within the kidney collecting system.',
  },
  {
    title: 'RALP — Robot-Assisted Radical Prostatectomy',
    desc: 'da Vinci robot-assisted radical prostatectomy for localized and locally advanced prostate cancer — performed at Apollo, Fortis, and Medanta hospitals operating full da Vinci Si and Xi systems. Nerve-sparing technique available for eligible patients. Outcomes data equivalent to leading U.S. robotic programs.',
  },
  {
    title: 'TURP, HoLEP & GreenLight PVP (BPH)',
    desc: 'Transurethral resection of the prostate (TURP), Holmium laser enucleation (HoLEP), and GreenLight photoselective vaporization of the prostate (PVP) for benign prostatic hyperplasia — chosen based on prostate volume, surgeon expertise, and patient anatomy.',
  },
  {
    title: 'Kidney Transplant (Living & Deceased Donor)',
    desc: 'Full kidney transplant program for end-stage renal disease (ESRD). In India, living donor kidney transplant is the primary modality; partner hospitals are NOTTO-compliant with full ethics committee oversight, structured donor workup, and 30-day post-transplant monitoring included. In Türkiye, kidney transplant is available at JCI-accredited hospitals in Istanbul under the supervision of the Turkish Ministry of Health; living donor transplants are permitted between relatives or spouses with Ethics Committee approval.',
import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
  },
  {
    title: 'Laparoscopic & Robotic Nephrectomy',
    desc: 'Laparoscopic or robot-assisted partial nephrectomy (nephron-sparing) and radical nephrectomy for renal cell carcinoma — performed with 3D laparoscopic or da Vinci robotic systems. Retroperitoneal approach available for select cases.',
  },
  {
    title: 'TURBT & Bladder Cancer Management',
    desc: 'Transurethral resection of bladder tumor (TURBT) for diagnosis and initial treatment of bladder cancer — with en-bloc resection technique available at select centers. Cystoscopy, BCG intravesical therapy, and radical cystectomy (robotic or open) for muscle-invasive bladder cancer.',
  },
  {
    title: 'Cystoscopy & Bladder Diagnostic Procedures',
    desc: 'Flexible and rigid cystoscopy for hematuria evaluation, bladder tumor surveillance, stricture assessment, and urethral pathology. Narrow-band imaging (NBI) cystoscopy for enhanced flat lesion detection available at select partner hospitals.',
  },
  {
    title: 'Male Infertility — Surgical & Medical',
    desc: 'Microsurgical varicocelectomy, testicular sperm extraction (TESE/microTESE) for azoospermia, vasectomy reversal (vasovasostomy), and sperm retrieval for IVF — performed by andrology-trained urologists. See also our Fertility & IVF page.',
  },
  {
    title: 'Urethral Stricture Repair',
    desc: 'Urethroplasty (buccal mucosal graft, end-to-end anastomosis) and optical urethrotomy for urethral stricture disease — with penile rehabilitation and uroflowmetry follow-up. Reconstructive urology expertise available at select Apollo and Fortis centers.',
  },
]

const COST_COMPARISON = [
  { procedure: 'PCNL (kidney stone — large)',              us: '$15,000–$50,000',  india: '$2,000–$5,000',   turkey: '$3,000–$7,000' },
  { procedure: 'Ureteroscopy + Laser Lithotripsy (URS)',   us: '$8,000–$25,000',   india: '$1,500–$4,000',   turkey: '$2,000–$6,000' },
  { procedure: 'RALP — Robotic Prostatectomy (da Vinci)', us: '$15,000–$50,000',  india: '$5,000–$12,000',  turkey: '$7,000–$18,000' },
  { procedure: 'TURP / HoLEP (BPH)',                      us: '$10,000–$30,000',  india: '$1,500–$4,000',   turkey: '$2,000–$6,000' },
  { procedure: 'Kidney Transplant (living donor)',         us: '$150,000–$400,000',india: '$13,000–$22,000', turkey: '$20,000–$35,000' },
  { procedure: 'Nephrectomy (partial / radical)',          us: '$20,000–$60,000',  india: '$4,000–$10,000',  turkey: '$6,000–$14,000' },
  { procedure: 'Cystoscopy (diagnostic)',                  us: '$3,000–$8,000',    india: '$200–$600',       turkey: '$300–$900' },
  { procedure: 'TURBT (bladder tumor resection)',          us: '$10,000–$30,000',  india: '$2,000–$5,000',   turkey: '$3,000–$7,000' },
  { procedure: 'Radical Cystectomy (bladder cancer)',      us: '$30,000–$80,000',  india: '$6,000–$14,000',  turkey: '$9,000–$20,000' },
  { procedure: 'MicroTESE (sperm retrieval)',              us: '$5,000–$15,000',   india: '$1,000–$3,000',   turkey: '$1,500–$4,500' },
]

const FAQS = [
  {
    q: 'How much does robot-assisted prostatectomy (RALP) cost in India?',
    a: 'RALP using da Vinci in the U.S. costs $15,000–$50,000 for self-pay patients. At JCI-accredited hospitals in India with da Vinci systems (Apollo, Fortis, Medanta): $5,000–$12,000 — a saving of 75–90%. Türkiye: $7,000–$18,000.',
  },
  {
    q: 'How much does PCNL (kidney stone surgery) cost in India?',
    a: 'PCNL in the U.S. costs $15,000–$50,000 (FAIR Health 2024). In India at a JCI hospital: $2,000–$5,000 — a saving of 85–90%. Ureteroscopy with laser lithotripsy for smaller stones: $1,500–$4,000 India vs $8,000–$25,000 U.S.',
  },
  {
    q: 'How much does a kidney transplant cost in India?',
    a: 'Kidney transplant in the U.S. costs $150,000–$400,000. In India: $13,000–$22,000 — a saving of over 90%. India performs thousands of kidney transplants annually. Partner programs are NOTTO-compliant with full donor workup and 30-day post-transplant monitoring.',
  },
  {
    q: 'Is TURP or HoLEP for BPH available in India?',
    a: 'Yes. TURP, HoLEP, and GreenLight PVP are all available at JCI partner hospitals. TURP costs $1,500–$4,000 India vs $10,000–$30,000 U.S. HoLEP (better for large prostates) is similarly priced.',
  },
  {
    q: 'Can prostate cancer patients travel to India for treatment?',
    a: 'Yes. Sultan GHC coordinates the full prostate cancer pathway — PSA workup, mpMRI, biopsy, RALP, radiation therapy, and hormonal therapy. A free second opinion from a urological oncologist can be arranged within 24–48 hours.',
  },
  {
    q: 'How long do I need to stay in India for kidney stone surgery?',
    a: 'Ureteroscopy (URS) is often same-day or overnight — 3–5 days total in India. PCNL requires 5–8 days. Robotic prostatectomy 7–10 days. Kidney transplant 21–30 days for surgery, monitoring, and flying clearance.',
  },
]

const RELATED = [
  { name: 'Oncology & Cancer Care',               href: '/treatments/oncology',                       desc: 'Prostate, kidney, bladder, and testicular cancer — systemic therapy and radiation' },
  { name: 'Robotic & Minimally Invasive Surgery', href: '/treatments/robotic-minimally-invasive',     desc: 'da Vinci robotic prostatectomy, robotic nephrectomy, and robotic cystectomy' },
  { name: 'Fertility & IVF',                      href: '/treatments/fertility-ivf',                  desc: 'Male infertility investigation, microTESE, and IVF coordination' },
  { name: 'Organ & Bone Marrow Transplantation',  href: '/treatments/organ-bone-marrow-transplant',  desc: 'Kidney transplant — full organ transplant coordination' },
  { name: 'Cardiology & Cardiac Surgery',         href: '/treatments/cardiology',                     desc: 'Cardiac workup for kidney transplant candidacy evaluation' },
]

function ImagePlaceholder({ filename, width, height, label, aiPrompt, aspectRatio, className = '' }) {
  return (
    <div
      className={`relative bg-gradient-to-br from-blue-50 to-slate-100 border-2 border-dashed border-blue-200 rounded-2xl flex flex-col items-start justify-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }}
      aria-label={label} role="img"
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

export default function UrologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Urology</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Urology & Urological Surgery
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                World-Class Urology in{' '}
                <span className="text-primary">India & Türkiye</span> — at 70–92% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                From kidney stone removal and robotic prostatectomy to kidney transplant and bladder cancer surgery — Sultan GHC connects U.S. patients with fellowship-trained urologists at JCI-accredited hospitals operating da Vinci robotic systems, Holmium lasers, and full urodynamic suites.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: CheckCircle2, text: 'da Vinci Robotic Systems at Partner Hospitals' },
                  { icon: Shield,       text: 'JCI-Accredited Urology Centers' },
                  { icon: Activity,     text: 'Holmium & TFL Laser Lithotripsy' },
                  { icon: Users,        text: 'NOTTO-Compliant Transplant Programs' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
                    <Icon size={15} className="text-primary shrink-0" /><span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
                  Request Free Urology Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <MessageCircle size={16} className="text-green-500" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="urology-kidney-prostate-surgery-india-turkey-us-patients.jpg"
                width={840} height={630} aspectRatio="4/3"
                label="Robotic urology suite — da Vinci system at JCI partner hospital, India"
                aiPrompt="A urologist operating a da Vinci robotic surgical system in a modern, brightly lit operating room. Clean, precise environment with robotic arms over surgical table. Professional and reassuring atmosphere. Photorealistic, 4K quality, no text overlays."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Urological Conditions We Coordinate Care For</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">From kidney stones and BPH to prostate cancer and kidney transplant — partner hospitals manage the complete spectrum of urological conditions.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CONDITIONS.map(({ name, icon }) => (
              <div key={name} className="flex items-center gap-3 bg-[#F4F8FF] border border-[#dce8ff] rounded-xl px-4 py-3">
                <span className="text-xl shrink-0" aria-hidden="true">{icon}</span>
                <span className="text-sm font-medium text-gray-800 leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Urology Procedures Available</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">Minimally invasive, robotic, and open urological procedures performed with international-standard equipment at JCI-accredited hospitals.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROCEDURES.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity size={15} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">{t.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pl-11">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Submit Your Case for Free Review <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Urology Cost Comparison: USA vs India vs Türkiye</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">U.S. figures from FAIR Health Consumer (2024), CMS Hospital Price Transparency, and CostHelper. India and Türkiye from JCI-accredited partner hospital published rates (2025).</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold rounded-tl-2xl">Procedure</th>
                  <th className="text-center px-6 py-4 font-semibold">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" /> USA — Self-Pay
                    </span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-primary">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" /> India
                    </span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-primary rounded-tr-2xl">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Türkiye" className="rounded-sm" /> Türkiye
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON.map((row, i) => (
                  <tr key={row.procedure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-800">{row.procedure}</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">{row.us}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.india}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Figures are approximate self-pay estimates. Actual costs vary by complexity, implant choice, and hospital.{' '}
            <Link href="/cost-savings/india" className="text-primary hover:underline">Full India cost savings →</Link>{' '}·{' '}
            <Link href="/cost-savings/turkey" className="text-primary hover:underline">Türkiye cost savings →</Link>
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Average Saving in India',  value: '80–92%', sub: 'vs U.S. self-pay urology' },
              { label: 'Average Saving in Türkiye', value: '70–87%', sub: 'vs U.S. self-pay urology' },
              { label: 'Free First Opinion',       value: '24–48 hrs', sub: 'remote urologist review' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="text-center bg-primary/5 border border-primary/15 rounded-2xl py-6 px-4">
                <p className="text-3xl font-bold text-primary mb-1">{value}</p>
                <p className="text-sm font-semibold text-gray-800 mb-1">{label}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why India / Türkiye */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Urology in India</h3>
                  <p className="text-sm text-gray-500">Apollo, Fortis, Medanta, Manipal Hospitals</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Apollo Hospitals Chennai is one of Asia\'s highest-volume robotic urology centers (da Vinci Si / Xi)',
                  'Holmium laser enucleation (HoLEP) and Thulium fiber laser (TFL) lithotripsy at Medanta and Fortis',
                  'Mini-PCNL and ultra-mini PCNL for pediatric and complex renal stone cases',
                  'NOTTO-compliant kidney transplant programs with full donor ethics board oversight',
                  'Reconstructive urology — urethroplasty and buccal mucosal graft — at select centers',
                  'Urologists trained at Cleveland Clinic, Mayo Clinic, AIIMS, and UK Royal College of Surgeons',
                  'India Medical e-Visa in 3–5 business days — extendable to 6 months for transplant patients',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100 flex gap-3 flex-wrap">
                <Link href="/visa-guide/india" className="text-xs text-primary font-semibold hover:underline">India Medical Visa →</Link>
                <Link href="/cost-savings/india" className="text-xs text-primary font-semibold hover:underline">Cost Savings →</Link>
                <Link href="/destinations/india" className="text-xs text-primary font-semibold hover:underline">Destination Guide →</Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/tr.png" width={40} height={30} alt="Türkiye" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Urology in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem, Memorial, Koc University Hospital</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Acibadem urology centers perform da Vinci robotic prostatectomy, cystectomy, and nephrectomy',
                  'Memorial Hospital Istanbul — dedicated stone disease center with same-day PCNL and URS',
                  'Koc University Hospital — academic urology with high-volume robotic oncology program',
                  'Endourology expertise: PCNL, flexible URS, and retroperitoneal laparoscopic surgery',
                  'NBI cystoscopy for enhanced bladder cancer surveillance and restaging',
                  'U.S. citizens visa-free for Türkiye — no pre-approval required (effective January 2024)',
                  'Turkish Airlines nonstop from 7 U.S. cities — direct access to Istanbul urology centers',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100 flex gap-3 flex-wrap">
                <Link href="/visa-guide/turkey" className="text-xs text-primary font-semibold hover:underline">Türkiye Entry Guide →</Link>
                <Link href="/cost-savings/turkey" className="text-xs text-primary font-semibold hover:underline">Cost Savings →</Link>
                <Link href="/destinations/turkey" className="text-xs text-primary font-semibold hover:underline">Destination Guide →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Ready to Explore Urology Care Abroad?</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">Upload your CT KUB, PSA report, cystoscopy findings, or referral letter. Our urology specialist team reviews your case and connects you with the right expert within 24–48 hours — at no cost, no obligation.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
              Upload Reports & Get Free Opinion <ArrowRight size={15} />
            </Link>
            <a href="tel:+16107870713" className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">
              <Phone size={15} /> Call +1-610-787-0713
            </a>
          </div>
          <p className="text-white/60 text-xs mt-6">
            <Link href="/how-it-works" className="underline hover:text-white">See how our process works →</Link>
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Treatment Specialties</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED.map((t) => (
              <Link key={t.href} href={t.href} className="group bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-2xl p-5 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">{t.name}</h3>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-primary transition-colors shrink-0" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/treatments" className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline">
              View All 19 Treatment Specialties <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <PartnerHospitalsSection title="Internationally Accredited Urology Centers" />

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions — Urology Abroad</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            More questions?{' '}
            <Link href="/faq" className="text-primary font-semibold hover:underline">Visit our full FAQ →</Link>{' '}or{' '}
            <Link href="/contact" className="text-primary font-semibold hover:underline">contact our Patient Care team</Link>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Get a Free Urology Second Opinion</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Share your CT KUB, PSA results, biopsy reports, or referral letter. Our team connects you with a senior urologist within 24–48 hours.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
              Request Free Medical Opinion <ArrowRight size={15} />
            </Link>
            <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-100 transition-colors">
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
