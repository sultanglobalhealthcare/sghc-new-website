import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users, ImageIcon,
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
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organ & Bone Marrow Transplant Abroad | India & Türkiye | Sultan GHC',
    description: 'Kidney, liver, bone marrow, and stem cell transplants — up to 96% less than U.S. costs.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/organ-bone-marrow-transplant' },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Organ & Bone Marrow Transplant', item: 'https://www.sultanghc.com/treatments/organ-bone-marrow-transplant' },
  ],
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
    relevantSpecialty: 'Transplant Medicine',
  },
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
        text: 'A kidney transplant in the U.S. costs $150,000–$400,000 for self-pay patients (FAIR Health, Milliman 2025). At JCI-accredited hospitals in India (Apollo, Fortis, Manipal), the same procedure costs $13,000–$22,000 — a saving of over 90%. India performs thousands of kidney transplants annually, primarily living donor. All partner programs are NOTTO-compliant. Sultan GHC covers the entire journey — donor workup, surgery, and 30-day post-transplant monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a liver transplant cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A liver transplant in the U.S. costs $878,000–$1,017,000 (Milliman 2025 Actuarial Report). Living donor liver transplant (LDLT) at JCI-accredited Indian hospitals costs $20,000–$38,000, and deceased donor liver transplant costs $22,000–$40,000. India is globally recognized for LDLT expertise — Medanta performs 400+ liver transplants annually, India overall 2,500+ per year. Sultan GHC coordinates the full journey.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a bone marrow transplant cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Allogeneic bone marrow transplant (matched sibling donor) in the U.S. costs $300,000–$900,000 (FAIR Health, ASBMT data). In India at JCI-accredited transplant centers, allogeneic BMT costs $25,000–$45,000. Autologous BMT costs $15,000–$30,000 in India vs $100,000–$300,000 in the U.S. Haploidentical transplant (half-matched donor) is increasingly available at Indian centers for patients without a fully matched donor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can American patients get an organ transplant in India legally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Living donor transplants involving related donors (blood relatives or spouses) are legally available to foreign patients in India under the Transplantation of Human Organs and Tissues Act (THOTA). All donor evaluations go through state-mandated Authorization Committees. Sultan GHC works exclusively with NOTTO-compliant hospitals. Deceased donor transplants are generally not available to foreign nationals under Indian law. Sultan GHC provides full legal and ethical guidance before any transplant is planned.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a bone marrow transplant patient need to stay in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bone marrow transplant requires 45–90 days in India: approximately 1–2 weeks for conditioning and transplant, then 30–60 days of engraftment monitoring, infection prophylaxis, and graft-versus-host disease (GvHD) assessment before flying clearance is granted. Sultan GHC arranges serviced apartments near the hospital for long-stay patients and their caregivers, with daily check-in coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the survival rate for bone marrow transplant in India vs the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leading Indian transplant centers — AIIMS Delhi, Tata Memorial Mumbai, Apollo, Fortis — report 5-year overall survival rates for matched sibling allogeneic BMT that are broadly comparable to international benchmarks for standard-risk diseases. However, outcomes depend heavily on disease type, stage, donor match, and center volume. Sultan GHC facilitates an independent second opinion from the transplant team before any commitment is made.',
      },
    },
  ],
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
    a: 'U.S. cost: $150,000–$400,000 (Milliman 2025). India: $13,000–$22,000 — saving over 90%. All programs are NOTTO-compliant. Sultan GHC covers the full journey including 30-day post-transplant monitoring.',
  },
  {
    q: 'How much does a liver transplant cost in India?',
    a: 'U.S. cost: $878,000–$1,017,000 (Milliman 2025). Living donor liver transplant (LDLT) in India: $20,000–$38,000. Medanta performs 400+ liver transplants annually. India is globally recognized for LDLT expertise.',
  },
  {
    q: 'How much does a bone marrow transplant cost in India?',
    a: 'Allogeneic BMT in the U.S.: $300,000–$900,000. In India: $25,000–$45,000. Autologous BMT India: $15,000–$30,000 vs $100,000–$300,000 U.S. Haploidentical BMT also available for patients without a fully matched donor.',
  },
  {
    q: 'Can American patients get an organ transplant in India legally?',
    a: 'Living donor transplants with related donors are legally available under THOTA. All donor evaluations go through state-mandated Authorization Committees. Deceased donor transplants are generally not available to foreign nationals. Sultan GHC provides full legal guidance.',
  },
  {
    q: 'How long does a BMT patient need to stay in India?',
    a: 'BMT requires 45–90 days: ~2 weeks for conditioning + transplant, then 30–60 days of monitoring before flying clearance. Sultan GHC arranges serviced apartments near the hospital for long-stay patients and caregivers.',
  },
  {
    q: 'What are survival rates for BMT in India?',
    a: 'Leading centers (AIIMS, Tata Memorial, Apollo, Fortis) report 5-year overall survival rates for matched sibling allogeneic BMT broadly comparable to international benchmarks for standard-risk diseases. Outcomes depend on disease type, stage, and donor match. Sultan GHC facilitates a second opinion before any commitment.',
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

export default function OrganBoneMarrowTransplantPage() {
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
            <span className="text-primary font-medium">Organ & Bone Marrow Transplant</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Transplant Medicine & Surgery
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Organ & Bone Marrow Transplant in{' '}
                <span className="text-primary">India & Türkiye</span> — Up to 96% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Kidney, liver, bone marrow, stem cell, heart, and lung transplants at NOTTO-compliant, JCI-accredited hospitals — coordinated end-to-end by Sultan GHC from donor workup through post-transplant monitoring.
              </p>
              {/* Savings callout */}
              <div className="bg-white border border-primary/20 rounded-2xl p-4 mb-8 inline-flex flex-col gap-1.5 shadow-sm">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Key cost comparison — Liver Transplant</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-red-500">
                    <img src="https://flagcdn.com/16x12/us.png" width={16} height={12} alt="USA" className="rounded-sm" />
                    USA: $878K–$1.02M
                  </div>
                  <span className="text-gray-300">→</span>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                    <img src="https://flagcdn.com/16x12/in.png" width={16} height={12} alt="India" className="rounded-sm" />
                    India: $22K–$40K
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">Save ~96%</span>
                </div>
                <p className="text-[10px] text-gray-400">Source: Milliman 2025 Actuarial Report (U.S.) · JCI partner hospital rates (India)</p>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: CheckCircle2, text: 'NOTTO-Compliant Transplant Programs' },
                  { icon: Shield,       text: 'JCI-Accredited Hospitals' },
                  { icon: Activity,     text: '400+ Liver Transplants/Year at Medanta' },
                  { icon: Users,        text: 'Full 30-Day Post-Transplant Coordination' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
                    <Icon size={15} className="text-primary shrink-0" /><span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
                  Request Free Transplant Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <MessageCircle size={16} className="text-green-500" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="organ-bone-marrow-transplant-india-turkey-us-patients.jpg"
                width={840} height={630} aspectRatio="4/3"
                label="Transplant surgery team at JCI-accredited hospital, India"
                aiPrompt="A transplant surgery team in a clean, modern operating room at a premier Indian hospital. Surgeons in scrubs working with precision. Warm, professional lighting. Photorealistic, 4K, no text overlays. Conveys expertise, trust, and safety."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transplant Types */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Transplant Types We Coordinate</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">Partner hospitals cover the full spectrum of solid organ and hematopoietic stem cell transplantation for adult and pediatric patients.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {TRANSPLANT_TYPES.map(({ name, icon }) => (
              <div key={name} className="flex items-center gap-3 bg-[#F4F8FF] border border-[#dce8ff] rounded-xl px-4 py-3">
                <span className="text-xl shrink-0" aria-hidden="true">{icon}</span>
                <span className="text-sm font-medium text-gray-800 leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Conditions Treated via Transplant</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">Our partner transplant centers manage these indications — among others. Share your diagnosis for a personalized assessment.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CONDITIONS.map(({ name }) => (
              <div key={name} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                <CheckCircle2 size={15} className="text-primary shrink-0" />
                <span className="text-sm text-gray-700 leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal / Ethics disclaimer */}
      <section className="bg-amber-50 border-y border-amber-200 py-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-start gap-4">
            <AlertCircle size={22} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-2">Transplant Candidacy & Legal Framework — Important Notice</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Transplant candidacy is determined solely by the hospital's multidisciplinary transplant team — not by Sultan GHC. In India, living donor transplants for foreign nationals are permitted under the{' '}
                <strong>Transplantation of Human Organs and Tissues Act (THOTA)</strong> when the donor is a blood relative or spouse, and all cases go through a state-mandated Authorization Committee. Deceased donor organs are generally not available to foreign nationals under Indian law. Sultan GHC provides complete legal and ethical guidance and works exclusively with NOTTO-compliant programs. We do not facilitate any commercial organ trade.
              </p>
              <p className="text-sm font-semibold text-amber-800 mb-2 mt-5">Türkiye — Transplant Legal Framework</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                In Türkiye, organ transplantation is governed by <strong>Organ Transplantation Law No. 2238</strong> (1979, as amended). Living donor transplants are permitted between first- and second-degree blood relatives or spouses, and all cases are reviewed by a hospital Ethics Committee under Turkish Ministry of Health oversight. Foreign nationals may access living donor transplant programs at JCI-accredited private hospitals in Istanbul, subject to Ethics Committee approval and full donor evaluation. Deceased donor organs are generally allocated to Turkish nationals first under the national waiting list system. Sultan GHC works with Ministry of Health-licensed transplant centers in Türkiye and provides complete legal guidance for each case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Transplant Cost Comparison: USA vs India vs Türkiye</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">U.S. figures from Milliman 2025 Actuarial Report, FAIR Health Consumer (2024), and ASBMT published data. India and Türkiye from JCI-accredited partner hospital published rates (2025).</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold rounded-tl-2xl">Transplant Type</th>
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
                  <th className="text-center px-6 py-4 font-semibold text-primary">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Türkiye" className="rounded-sm" /> Türkiye
                    </span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-green-400 rounded-tr-2xl">Save (India)</th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON.map((row, i) => (
                  <tr key={row.procedure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-800">{row.procedure}</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">{row.us}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.india}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.turkey}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">{row.save}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Figures are approximate self-pay estimates for complete episodes of care. Actual costs depend on disease complexity, donor workup, immunosuppressant duration, and complications.{' '}
            <Link href="/cost-savings/india" className="text-primary hover:underline">Full India cost savings →</Link>
          </p>
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
                  <h3 className="text-lg font-semibold text-gray-900">Transplant in India</h3>
                  <p className="text-sm text-gray-500">Medanta, Apollo, Fortis, Manipal, Global Hospitals</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Medanta Medicity (Gurugram) — 400+ liver transplants/year, India\'s highest-volume LDLT center',
                  'Apollo Hospitals Chennai — dedicated kidney and liver transplant program with 30-year track record',
                  'Global Hospitals Mumbai — recognized center for complex LDLT with auxiliary and split-liver techniques',
                  'AIIMS Delhi & Tata Memorial Mumbai — premier BMT programs for leukemia, lymphoma, MDS, aplastic anemia',
                  'Fortis Memorial Gurugram — haploidentical BMT program for patients without a fully matched donor',
                  'All NOTTO-compliant; state Authorization Committee donor review for every foreign patient case',
                  'India Medical e-Visa extendable to 6 months; serviced apartment coordination included for long stays',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/tr.png" width={40} height={30} alt="Türkiye" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Transplant in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem, Memorial, Koç University, Florence Nightingale</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Acibadem Transplant Centers — kidney and liver transplant with living donor program, multi-city network',
                  'Memorial Hospital Istanbul — dedicated BMT unit for allogeneic and autologous hematopoietic transplant',
                  'Koç University Hospital — academic transplant program, EFI/FACT-accredited bone marrow unit',
                  'Florence Nightingale — experienced renal transplant program with 24-hour nephrology ICU support',
                  'Türkiye performs 3,500+ kidney and 700+ liver transplants annually — among Europe\'s highest volumes',
                  'U.S. citizens are visa-free for Türkiye; Turkish Airlines nonstop from 7 U.S. cities',
                  'Post-transplant immunosuppressants (tacrolimus, mycophenolate) significantly cheaper than U.S. prices',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Ready to Explore Your Transplant Options?</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">Share your medical reports — biopsy, GFR, MELD score, bone marrow biopsy, or donor HLA typing. Our transplant coordinator connects you with the right center within 24–48 hours.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg">
              Upload Reports & Get Free Opinion <ArrowRight size={15} />
            </Link>
            <a href="tel:+16107870713" className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">
              <Phone size={15} /> Call +1-610-787-0713
            </a>
          </div>
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
              View All Treatment Specialties <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions — Transplant Abroad</h2>
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
            <Link href="/contact" className="text-primary font-semibold hover:underline">speak to a Patient Care Coordinator</Link>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Start Your Transplant Journey Today</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Share your diagnosis and medical records. Our team will review your case, clarify the legal and medical pathway, and connect you with the right transplant center — at no cost to you.</p>
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
