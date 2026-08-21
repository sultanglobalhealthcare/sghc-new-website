import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users
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
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urology Abroad | Kidney & Prostate Treatment India & Türkiye | Sultan GHC',
    description: 'Kidney stones, prostate cancer (RALP), kidney transplant, TURP in India & Türkiye at 70–92% less than U.S. costs.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/urology' }
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Urology',    item: 'https://www.sultanghc.com/treatments/urology' },
  ]
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
    relevantSpecialty: 'Urology'
  }
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
        text: 'Robot-assisted radical prostatectomy (RALP) using the da Vinci Surgical System in the U.S. costs $15,000–$50,000 for self-pay patients. At JCI-accredited hospitals in India (Apollo, Fortis, Medanta), which operate da Vinci systems, the same procedure costs $5,000–$12,000 — a saving of 75–90%. Türkiye costs $7,000–$18,000. Sultan GHC provides a personalised cost estimate within 24 hours.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does PCNL (kidney stone surgery) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Percutaneous nephrolithotomy (PCNL) for large kidney stones in the U.S. costs $15,000–$50,000 for self-pay patients (FAIR Health Consumer 2024). In India at a JCI-accredited hospital, PCNL costs $2,000–$5,000 — a saving of 85–90%. Mini-PCNL and ultra-mini PCNL (for smaller stones or pediatric cases) are also available at partner centers. Ureteroscopy with laser lithotripsy for smaller stones costs $1,500–$4,000 in India vs $8,000–$25,000 in the U.S.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does a kidney transplant cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A kidney transplant in the U.S. costs $150,000–$400,000 including surgery, hospital stay, and post-transplant monitoring. At JCI-accredited hospitals in India, kidney transplant costs $13,000–$22,000 — a saving of over 90%. India performs thousands of kidney transplants annually, with living donor transplant being the primary modality. Sultan GHC works with NOTTO-compliant transplant programs. Post-transplant immunosuppressant medications are also significantly cheaper in India.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is TURP (prostate surgery for BPH) available in India? How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TURP (Transurethral Resection of the Prostate) and its modern variants — HoLEP (Holmium Laser Enucleation of the Prostate) and GreenLight laser PVP — are fully available at JCI-accredited partner hospitals in India and Türkiye. TURP costs $10,000–$30,000 in the U.S. India costs $1,500–$4,000. HoLEP, which offers better outcomes for large prostate glands, is available at select centers for similar pricing. Türkiye costs $2,000–$6,000.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can prostate cancer patients travel to India for treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sultan GHC coordinates the full prostate cancer care pathway for U.S. patients — from PSA workup and mpMRI to biopsy, robotic prostatectomy (RALP), radiation therapy (EBRT, brachytherapy), and hormonal therapy. For localized prostate cancer, RALP outcomes in India are equivalent to leading U.S. programs. For advanced disease, medical oncology review and hormone therapy initiation are also available. A free second opinion from a urological oncologist can be arranged within 24–48 hours.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long do I need to stay in India for kidney stone surgery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ureteroscopy with laser lithotripsy is often a same-day or overnight procedure — most patients need 3–5 days in India including pre-operative workup and recovery. PCNL for larger stones requires 5–8 days including 1–2 nights in hospital post-procedure. Robotic prostatectomy requires 7–10 days. Kidney transplant requires 21–30 days for surgery, monitoring, and stability before flying clearance.'
      }
    },
  ]
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
    desc: 'Minimally invasive keyhole surgery for large (>2 cm), staghorn, or complex kidney stones — performed under fluoroscopic and ultrasound guidance. Mini-PCNL and ultra-mini PCNL techniques available at partner centers for smaller stones or cases requiring reduced nephron trauma.'
  },
  {
    title: 'URS — Ureteroscopy with Laser Lithotripsy',
    desc: 'Flexible ureteroscopy (FURS) with Holmium laser or Thulium fiber laser (TFL) lithotripsy for ureteric and renal stones — same-day or overnight procedure with no incision. RIRS (Retrograde Intrarenal Surgery) for stones within the kidney collecting system.'
  },
  {
    title: 'RALP — Robot-Assisted Radical Prostatectomy',
    desc: 'da Vinci robot-assisted radical prostatectomy for localized and locally advanced prostate cancer — performed at Apollo, Fortis, and Medanta hospitals operating full da Vinci Si and Xi systems. Nerve-sparing technique available for eligible patients. Outcomes data equivalent to leading U.S. robotic programs.'
  },
  {
    title: 'TURP, HoLEP & GreenLight PVP (BPH)',
    desc: 'Transurethral resection of the prostate (TURP), Holmium laser enucleation (HoLEP), and GreenLight photoselective vaporization of the prostate (PVP) for benign prostatic hyperplasia — chosen based on prostate volume, surgeon expertise, and patient anatomy.'
  },
  {
    title: 'Kidney Transplant (Living & Deceased Donor)',
    desc: 'Full kidney transplant program for end-stage renal disease (ESRD). In India, living donor kidney transplant is the primary modality; partner hospitals are NOTTO-compliant with full ethics committee oversight, structured donor workup, and 30-day post-transplant monitoring included. In Türkiye, kidney transplant is available at JCI-accredited hospitals in Istanbul under the supervision of the Turkish Ministry of Health; living donor transplants are permitted between relatives or spouses with Ethics Committee approval.'
  },
  {
    title: 'Laparoscopic & Robotic Nephrectomy',
    desc: 'Laparoscopic or robot-assisted partial nephrectomy (nephron-sparing) and radical nephrectomy for renal cell carcinoma — performed with 3D laparoscopic or da Vinci robotic systems. Retroperitoneal approach available for select cases.'
  },
  {
    title: 'TURBT & Bladder Cancer Management',
    desc: 'Transurethral resection of bladder tumor (TURBT) for diagnosis and initial treatment of bladder cancer — with en-bloc resection technique available at select centers. Cystoscopy, BCG intravesical therapy, and radical cystectomy (robotic or open) for muscle-invasive bladder cancer.'
  },
  {
    title: 'Cystoscopy & Bladder Diagnostic Procedures',
    desc: 'Flexible and rigid cystoscopy for hematuria evaluation, bladder tumor surveillance, stricture assessment, and urethral pathology. Narrow-band imaging (NBI) cystoscopy for enhanced flat lesion detection available at select partner hospitals.'
  },
  {
    title: 'Male Infertility — Surgical & Medical',
    desc: 'Microsurgical varicocelectomy, testicular sperm extraction (TESE/microTESE) for azoospermia, vasectomy reversal (vasovasostomy), and sperm retrieval for IVF — performed by andrology-trained urologists. See also our Fertility & IVF page.'
  },
  {
    title: 'Urethral Stricture Repair',
    desc: 'Urethroplasty (buccal mucosal graft, end-to-end anastomosis) and optical urethrotomy for urethral stricture disease — with penile rehabilitation and uroflowmetry follow-up. Reconstructive urology expertise available at select Apollo and Fortis centers.'
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
    a: 'RALP using da Vinci in the U.S. costs $15,000–$50,000 for self-pay patients. At JCI-accredited hospitals in India with da Vinci systems (Apollo, Fortis, Medanta): $5,000–$12,000 — a saving of 75–90%. Türkiye: $7,000–$18,000.'
  },
  {
    q: 'How much does PCNL (kidney stone surgery) cost in India?',
    a: 'PCNL in the U.S. costs $15,000–$50,000 (FAIR Health 2024). In India at a JCI hospital: $2,000–$5,000 — a saving of 85–90%. Ureteroscopy with laser lithotripsy for smaller stones: $1,500–$4,000 India vs $8,000–$25,000 U.S.'
  },
  {
    q: 'How much does a kidney transplant cost in India?',
    a: 'Kidney transplant in the U.S. costs $150,000–$400,000. In India: $13,000–$22,000 — a saving of over 90%. India performs thousands of kidney transplants annually. Partner programs are NOTTO-compliant with full donor workup and 30-day post-transplant monitoring.'
  },
  {
    q: 'Is TURP or HoLEP for BPH available in India?',
    a: 'Yes. TURP, HoLEP, and GreenLight PVP are all available at JCI partner hospitals. TURP costs $1,500–$4,000 India vs $10,000–$30,000 U.S. HoLEP (better for large prostates) is similarly priced.'
  },
  {
    q: 'Can prostate cancer patients travel to India for treatment?',
    a: 'Yes. Sultan GHC coordinates the full prostate cancer pathway — PSA workup, mpMRI, biopsy, RALP, radiation therapy, and hormonal therapy. A free second opinion from a urological oncologist can be arranged within 24–48 hours.'
  },
  {
    q: 'How long do I need to stay in India for kidney stone surgery?',
    a: 'Ureteroscopy (URS) is often same-day or overnight — 3–5 days total in India. PCNL requires 5–8 days. Robotic prostatectomy 7–10 days. Kidney transplant 21–30 days for surgery, monitoring, and flying clearance.'
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
