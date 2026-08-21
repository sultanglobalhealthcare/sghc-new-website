import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Organ & Bone Marrow Transplant Abroad | India & Türkiye | Sultan GHC',
  description:
    'Kidney, liver, heart, lung, bone marrow, and stem cell transplants at JCI-accredited hospitals in India and Türkiye — up to 96% less than U.S. costs. Sultan GHC coordinates full transplant journeys for American patients: donor workup, surgery, post-transplant monitoring, and follow-up.',
  keywords: [
    'organ transplant India cost',
    'kidney transplant India cost USA patients',
    'liver transplant India cost',
    'bone marrow transplant India',
    'stem cell transplant India cost',
    'heart transplant India cost',
    'organ transplant medical tourism',
    'affordable organ transplant Americans',
    'JCI accredited transplant hospital India',
    'NOTTO compliant transplant India',
    'bone marrow transplant cost comparison',
    'Sultan GHC transplant',
    'haploidentical transplant India',
    'allogeneic stem cell transplant India',
  ],
  openGraph: {
    title: 'Organ & Bone Marrow Transplant in India & Türkiye | Sultan GHC',
    description:
      'Kidney, liver, heart, bone marrow, and stem cell transplants at JCI-accredited centers — up to 96% less than U.S. costs. Full journey coordination by Sultan GHC.',
    url: 'https://www.sultanghc.com/treatments/organ-bone-marrow-transplant',
    siteName: 'Sultan Global Health Care',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organ & Bone Marrow Transplant Abroad | India & Türkiye | Sultan GHC',
    description: 'Kidney, liver, bone marrow, and stem cell transplants — up to 96% less than U.S. costs.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/organ-bone-marrow-transplant' }
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Organ & Bone Marrow Transplant', item: 'https://www.sultanghc.com/treatments/organ-bone-marrow-transplant' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Organ & Bone Marrow Transplant Abroad — India and Türkiye',
  description: 'Comprehensive organ and bone marrow transplant coordination for U.S. patients at JCI-accredited hospitals in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/organ-bone-marrow-transplant',
  about: {
    '@type': 'MedicalSpecialty',
    name: 'Transplant Surgery',
    alternateName: ['Organ Transplant', 'Bone Marrow Transplant', 'Stem Cell Transplant', 'Hematopoietic Stem Cell Transplantation'],
    relevantSpecialty: 'Transplant Medicine'
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a kidney transplant cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A kidney transplant in the U.S. costs $150,000–$400,000 for self-pay patients (FAIR Health, Milliman 2025). At JCI-accredited hospitals in India (Apollo, Fortis, Manipal), the same procedure costs $13,000–$22,000 — a saving of over 90%. India performs thousands of kidney transplants annually, primarily living donor. All partner programs are NOTTO-compliant. Sultan GHC covers the entire journey — donor workup, surgery, and 30-day post-transplant monitoring.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does a liver transplant cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A liver transplant in the U.S. costs $878,000–$1,017,000 (Milliman 2025 Actuarial Report). Living donor liver transplant (LDLT) at JCI-accredited Indian hospitals costs $20,000–$38,000, and deceased donor liver transplant costs $22,000–$40,000. India is globally recognized for LDLT expertise — Medanta performs 400+ liver transplants annually, India overall 2,500+ per year. Sultan GHC coordinates the full journey.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does a bone marrow transplant cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Allogeneic bone marrow transplant (matched sibling donor) in the U.S. costs $300,000–$900,000 (FAIR Health, ASBMT data). In India at JCI-accredited transplant centers, allogeneic BMT costs $25,000–$45,000. Autologous BMT costs $15,000–$30,000 in India vs $100,000–$300,000 in the U.S. Haploidentical transplant (half-matched donor) is increasingly available at Indian centers for patients without a fully matched donor.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can American patients get an organ transplant in India legally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Living donor transplants involving related donors (blood relatives or spouses) are legally available to foreign patients in India under the Transplantation of Human Organs and Tissues Act (THOTA). All donor evaluations go through state-mandated Authorization Committees. Sultan GHC works exclusively with NOTTO-compliant hospitals. Deceased donor transplants are generally not available to foreign nationals under Indian law. Sultan GHC provides full legal and ethical guidance before any transplant is planned.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does a bone marrow transplant patient need to stay in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bone marrow transplant requires 45–90 days in India: approximately 1–2 weeks for conditioning and transplant, then 30–60 days of engraftment monitoring, infection prophylaxis, and graft-versus-host disease (GvHD) assessment before flying clearance is granted. Sultan GHC arranges serviced apartments near the hospital for long-stay patients and their caregivers, with daily check-in coordination.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the survival rate for bone marrow transplant in India vs the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leading Indian transplant centers — AIIMS Delhi, Tata Memorial Mumbai, Apollo, Fortis — report 5-year overall survival rates for matched sibling allogeneic BMT that are broadly comparable to international benchmarks for standard-risk diseases. However, outcomes depend heavily on disease type, stage, donor match, and center volume. Sultan GHC facilitates an independent second opinion from the transplant team before any commitment is made.'
      }
    },
  ]
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const TRANSPLANT_TYPES = [
  { name: 'Kidney Transplant',                          icon: '🫘' },
  { name: 'Liver Transplant (Living & Deceased Donor)', icon: '🫀' },
  { name: 'Bone Marrow Transplant (Allogeneic)',        icon: '🦴' },
  { name: 'Autologous Stem Cell Transplant',            icon: '🧬' },
  { name: 'Haploidentical BMT (Half-Match)',            icon: '🔬' },
  { name: 'Heart Transplant',                           icon: '❤️'  },
  { name: 'Lung Transplant (Single & Double)',          icon: '🫁' },
  { name: 'Pancreas Transplant',                        icon: '💊' },
  { name: 'Simultaneous Kidney-Pancreas (SKP)',         icon: '⚕️'  },
  { name: 'Cord Blood Stem Cell Transplant',            icon: '🩸' },
  { name: 'Peripheral Blood Stem Cell Transplant',      icon: '💉' },
  { name: 'Matched Unrelated Donor (MUD) Transplant',  icon: '🤝' },
]

const CONDITIONS = [
  { name: 'Acute & Chronic Leukemia (ALL, AML, CML, CLL)' },
  { name: 'Lymphoma (Hodgkin & Non-Hodgkin)' },
  { name: 'Multiple Myeloma' },
  { name: 'Myelodysplastic Syndrome (MDS)' },
  { name: 'Aplastic Anemia' },
  { name: 'End-Stage Renal Disease (ESRD)' },
  { name: 'Liver Cirrhosis & Liver Failure' },
  { name: 'Hepatocellular Carcinoma (within Milan criteria)' },
  { name: 'Beta Thalassemia Major' },
  { name: 'Sickle Cell Disease' },
  { name: 'End-Stage Heart Failure (NYHA IV)' },
  { name: 'Pulmonary Fibrosis / COPD (lung transplant)' },
]

const COST_COMPARISON = [
  { procedure: 'Kidney Transplant (living donor)',      us: '$150,000–$400,000',   india: '$13,000–$22,000',  turkey: '$20,000–$35,000', save: '~92%' },
  { procedure: 'Liver Transplant (living donor LDLT)', us: '$600,000–$900,000',   india: '$20,000–$38,000',  turkey: '$30,000–$55,000', save: '~96%' },
  { procedure: 'Liver Transplant (deceased donor)',    us: '$878,000–$1,017,000', india: '$22,000–$40,000',  turkey: '$32,000–$60,000', save: '~96%' },
  { procedure: 'Allogeneic BMT (matched sibling)',     us: '$300,000–$900,000',   india: '$25,000–$45,000',  turkey: '$35,000–$65,000', save: '~93%' },
  { procedure: 'Autologous Stem Cell Transplant',      us: '$100,000–$300,000',   india: '$15,000–$30,000',  turkey: '$20,000–$40,000', save: '~88%' },
  { procedure: 'Haploidentical BMT',                   us: '$300,000–$800,000',   india: '$28,000–$50,000',  turkey: '$38,000–$70,000', save: '~92%' },
  { procedure: 'Heart Transplant',                     us: '$997,000–$1,382,400', india: '$55,000–$90,000',  turkey: 'N/A',             save: '~93%' },
  { procedure: 'Lung Transplant (single)',             us: '$400,000–$600,000',   india: '$40,000–$70,000',  turkey: 'N/A',             save: '~89%' },
  { procedure: 'Cord Blood Stem Cell Transplant',      us: '$200,000–$400,000',   india: '$20,000–$38,000',  turkey: '$28,000–$50,000', save: '~90%' },
]

const FAQS = [
  {
    q: 'How much does a kidney transplant cost in India?',
    a: 'U.S. cost: $150,000–$400,000 (Milliman 2025). India: $13,000–$22,000 — saving over 90%. All programs are NOTTO-compliant. Sultan GHC covers the full journey including 30-day post-transplant monitoring.'
  },
  {
    q: 'How much does a liver transplant cost in India?',
    a: 'U.S. cost: $878,000–$1,017,000 (Milliman 2025). Living donor liver transplant (LDLT) in India: $20,000–$38,000. Medanta performs 400+ liver transplants annually. India is globally recognized for LDLT expertise.'
  },
  {
    q: 'How much does a bone marrow transplant cost in India?',
    a: 'Allogeneic BMT in the U.S.: $300,000–$900,000. In India: $25,000–$45,000. Autologous BMT India: $15,000–$30,000 vs $100,000–$300,000 U.S. Haploidentical BMT also available for patients without a fully matched donor.'
  },
  {
    q: 'Can American patients get an organ transplant in India legally?',
    a: 'Living donor transplants with related donors are legally available under THOTA. All donor evaluations go through state-mandated Authorization Committees. Deceased donor transplants are generally not available to foreign nationals. Sultan GHC provides full legal guidance.'
  },
  {
    q: 'How long does a BMT patient need to stay in India?',
    a: 'BMT requires 45–90 days: ~2 weeks for conditioning + transplant, then 30–60 days of monitoring before flying clearance. Sultan GHC arranges serviced apartments near the hospital for long-stay patients and caregivers.'
  },
  {
    q: 'What are survival rates for BMT in India?',
    a: 'Leading centers (AIIMS, Tata Memorial, Apollo, Fortis) report 5-year overall survival rates for matched sibling allogeneic BMT broadly comparable to international benchmarks for standard-risk diseases. Outcomes depend on disease type, stage, and donor match. Sultan GHC facilitates a second opinion before any commitment.'
  },
]

const RELATED = [
  { name: 'Oncology & Cancer Care',            href: '/treatments/oncology',                    desc: 'Blood cancers, leukemia, lymphoma — chemotherapy and targeted therapy' },
  { name: 'Hepatology & Liver Care',           href: '/treatments/hepatology-liver-care',       desc: 'Liver disease, cirrhosis, and liver transplant candidacy evaluation' },
  { name: 'Urology',                           href: '/treatments/urology',                     desc: 'Kidney disease, ESRD, and kidney transplant coordination' },
  { name: 'Cardiology & Cardiac Surgery',      href: '/treatments/cardiology',                  desc: 'Heart failure evaluation and cardiac transplant workup' },
  { name: 'Pulmonology',                       href: '/treatments/pulmonology',                 desc: 'Pulmonary fibrosis, COPD, and lung transplant candidacy evaluation' },
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
