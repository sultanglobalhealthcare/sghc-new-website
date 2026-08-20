import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users, ImageIcon, TrendingDown,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Hepatology & Liver Care Abroad | India & Türkiye | Sultan GHC',
  description:
    'Access world-class liver care — liver transplant, liver cancer treatment (TACE, RFA), cirrhosis management, hepatitis B & C, and fatty liver disease — in India and Türkiye at up to 96% lower cost than U.S. prices. Sultan GHC connects American patients with JCI-accredited liver centers and internationally trained hepatologists.',
  keywords: [
    'liver transplant cost India vs USA',
    'hepatology treatment abroad',
    'liver cancer treatment India Türkiye',
    'TACE liver cancer India cost',
    'RFA liver tumor India',
    'cirrhosis treatment India',
    'hepatitis C treatment India cost',
    'liver transplant India cost',
    'affordable liver care for Americans',
    'NASH treatment India Türkiye',
    'liver disease specialist India',
    'medical tourism liver transplant',
    'Sultan GHC hepatology',
    'HCC treatment India Türkiye',
  ],
  openGraph: {
    title: 'Liver Transplant & Hepatology in India & Türkiye — Up to 96% Savings | Sultan GHC',
    description:
      'Liver transplant, TACE, RFA, cirrhosis management, and hepatitis C treatment at JCI-accredited liver centers in India and Türkiye. Real cost data. Free consultation.',
    url: 'https://www.sultanghc.com/treatments/hepatology-liver-care',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hepatology & Liver Care Abroad | Sultan GHC',
    description:
      'Liver transplant in India costs $22K–$40K vs $878K–$1M in the U.S. TACE, RFA, cirrhosis, HCV treatment at JCI hospitals.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/hepatology-liver-care' },
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                   item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments',             item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Hepatology & Liver Care',item: 'https://www.sultanghc.com/treatments/hepatology-liver-care' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Hepatology and Liver Care Abroad — India and Türkiye',
  description:
    'Comprehensive hepatology and liver disease services for U.S. patients at JCI-accredited hospitals in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/hepatology-liver-care',
  about: {
    '@type': 'MedicalSpecialty',
    name: 'Hepatology',
    alternateName: ['Liver Medicine', 'Transplant Hepatology', 'Liver Disease'],
    relevantSpecialty: 'Gastroenterology',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a liver transplant cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A liver transplant in the U.S. costs $878,000–$1,017,000 on average (source: Milliman 2025 actuarial report — total billed before insurance). At a JCI-accredited liver transplant center in India, the same procedure — deceased donor or living donor — costs $22,000–$40,000 including surgery, organ procurement, ICU, and 30 days of post-transplant monitoring. That represents a saving of 95–97%. Sultan GHC works with NABH- and NABL-accredited transplant programs with internationally trained hepatobiliary surgeons.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is TACE and how much does it cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TACE (Trans-Arterial Chemoembolization) is an image-guided interventional radiology procedure used to treat hepatocellular carcinoma (HCC / liver cancer) by delivering chemotherapy directly into the tumor\'s blood supply while blocking it. TACE in the U.S. costs $10,000–$30,000 per session. At partner hospitals in India, TACE costs $1,500–$5,000 per session — a saving of 83–90%. Türkiye costs $2,000–$7,000. Multiple sessions may be required depending on tumor response.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get living donor liver transplant in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Living donor liver transplant (LDLT) is well-established in India and is in fact performed more frequently there than deceased donor transplant due to organ availability constraints. India\'s top liver transplant centers (Medanta Gurugram, Global Hospitals Mumbai, Fortis, Apollo) perform 300–500 living donor liver transplants per year each. The donor (usually a blood-related family member with compatible blood type) can accompany the patient. Donor surgery, recipient surgery, and post-transplant care are all included in the package quoted by Sultan GHC partner hospitals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does hepatitis C treatment cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hepatitis C direct-acting antiviral (DAA) treatment in the U.S. costs $20,000–$84,000 at list price for a 12-week course. Generic DAA regimens in India — sofosbuvir/velpatasvir (pan-genotypic) or sofosbuvir/daclatasvir — cost $400–$1,500 for a full 12-week course, achieving SVR12 (cure) rates of 95–99% equivalent to brand-name products. These are not counterfeit medications — they are generic equivalents produced under Indian patent law with CDSCO approval, the same active molecules as Harvoni and Epclusa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are liver transplant surgeons in India as qualified as U.S. transplant surgeons?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several of India\'s leading liver transplant surgeons trained at top U.S. and UK programs including Mayo Clinic, University of Pittsburgh Medical Center (UPMC), King\'s College London, and Cambridge. India performs more than 2,500 liver transplants annually — among the highest volumes globally. Volume matters in transplant outcomes: high-volume centers consistently demonstrate lower mortality and higher graft survival rates. Sultan GHC partners with India\'s highest-volume, JCI-accredited liver transplant programs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long will I need to stay in India after a liver transplant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Liver transplant patients typically require 45–60 days in India: 5–7 days pre-transplant evaluation, 1–2 days for donor assessment (if living donor), transplant surgery, 10–14 days ICU, 10–14 days general ward, and 14–21 days of outpatient monitoring before flying clearance. Your Sultan GHC Case Manager coordinates accommodation for patients and family, hospital-to-hotel transport, interpreter support, and follow-up scheduling.',
      },
    },
  ],
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const CONDITIONS = [
  { name: 'Cirrhosis (all causes)',                    icon: '🔬' },
  { name: 'Hepatocellular Carcinoma (HCC / Liver Cancer)', icon: '🎗️' },
  { name: 'Liver Failure (Acute & Chronic)',           icon: '⚠️' },
  { name: 'Hepatitis B (chronic)',                     icon: '🦠' },
  { name: 'Hepatitis C',                               icon: '🧬' },
  { name: 'NAFLD / NASH',                              icon: '🏥' },
  { name: 'Autoimmune Hepatitis',                      icon: '🛡️' },
  { name: 'Primary Biliary Cholangitis (PBC)',         icon: '🩸' },
  { name: 'Primary Sclerosing Cholangitis (PSC)',      icon: '🔗' },
  { name: 'Portal Hypertension & Varices',             icon: '💧' },
  { name: 'Budd-Chiari Syndrome',                      icon: '🫀' },
  { name: 'Wilson\'s Disease & Hemochromatosis',       icon: '⚗️' },
]

const TREATMENTS = [
  {
    title: 'Liver Transplant — Living Donor & Deceased Donor',
    desc: 'Full liver transplant program for end-stage liver disease and hepatocellular carcinoma within Milan criteria. Living donor liver transplant (LDLT) is extensively performed at India\'s partner centers — 300–500 cases per year at each major center. Includes donor workup, recipient surgery, ICU, and 30-day post-transplant monitoring.',
  },
  {
    title: 'TACE — Trans-Arterial Chemoembolization',
    desc: 'Interventional radiology-guided delivery of chemotherapy (doxorubicin, cisplatin) directly into hepatic artery branches supplying liver tumors, followed by embolization to cut off blood supply. First-line non-surgical treatment for unresectable HCC (BCLC Stage B). Drug-eluting bead TACE (DEB-TACE) is available at select partner centers.',
  },
  {
    title: 'RFA — Radiofrequency Ablation of Liver Tumors',
    desc: 'Image-guided thermal ablation of liver tumors ≤5 cm using radiofrequency energy — a curative intent procedure for small HCC and colorectal liver metastases. Performed percutaneously or laparoscopically. Microwave ablation (MWA) is also available and may be preferred for larger lesions.',
  },
  {
    title: 'TIPS — Transjugular Intrahepatic Portosystemic Shunt',
    desc: 'Interventional radiology procedure creating a channel between portal and hepatic veins to reduce portal hypertension — used for refractory ascites, variceal bleeding, and hepatic hydrothorax. Covered stent TIPS (e-PTFE) performed at partner centers.',
  },
  {
    title: 'Variceal Banding & Sclerotherapy',
    desc: 'Endoscopic band ligation (EBL) and sclerotherapy for esophageal and gastric varices — for both active variceal bleeding and secondary prevention. Performed in dedicated endoscopy units with ICU backup in high-risk patients.',
  },
  {
    title: 'Hepatitis C — Direct-Acting Antiviral (DAA) Treatment',
    desc: 'Curative hepatitis C treatment with pan-genotypic direct-acting antivirals (sofosbuvir/velpatasvir or sofosbuvir/daclatasvir) at 95–99% SVR12 rates. Generic equivalent regimens in India cost $400–$1,500 for a full 12-week course — the same molecules as U.S. brand-name Epclusa and Harvoni, produced under CDSCO approval.',
  },
  {
    title: 'Hepatitis B — Antiviral Suppression & Monitoring',
    desc: 'Long-term hepatitis B management with tenofovir alafenamide (TAF) or entecavir — with structured viral load monitoring, HBsAg quantification, and HCC surveillance via 6-monthly ultrasound and AFP. Hepatologists monitor for fibrosis progression using FibroScan (transient elastography).',
  },
  {
    title: 'FibroScan & Liver Biopsy',
    desc: 'Non-invasive liver fibrosis assessment using transient elastography (FibroScan) — to stage cirrhosis without a biopsy in most cases. When a biopsy is required (autoimmune hepatitis, NASH staging, post-transplant rejection), image-guided percutaneous liver biopsy is performed with same-day histopathology.',
  },
  {
    title: 'Ascites Management & Paracentesis',
    desc: 'Medical management of ascites (diuretics, dietary sodium restriction, albumin infusion) and large-volume paracentesis for tense or refractory ascites — with comprehensive renal and electrolyte monitoring. TIPS evaluation for recurrent cases.',
  },
  {
    title: 'Liver Cancer MDT & Surgical Resection',
    desc: 'Multidisciplinary team (MDT) review of all liver cancer cases — hepatologist, hepatobiliary surgeon, interventional radiologist, and medical oncologist — to determine resectability, transplant eligibility, or locoregional therapy. Liver resection (hepatectomy) performed at partner centers with hepatobiliary surgical expertise.',
  },
]

const COST_COMPARISON = [
  { procedure: 'Liver Transplant (deceased donor)',        us: '$878,000–$1,017,000', india: '$22,000–$40,000',  turkey: '$25,000–$45,000',  saving: '96' },
  { procedure: 'Liver Transplant (living donor)',          us: '$600,000–$900,000',   india: '$20,000–$38,000',  turkey: '$22,000–$42,000',  saving: '96' },
  { procedure: 'TACE (per session)',                       us: '$10,000–$30,000',     india: '$1,500–$5,000',    turkey: '$2,000–$7,000',    saving: '85' },
  { procedure: 'RFA / MWA (liver tumor)',                  us: '$8,000–$25,000',      india: '$1,500–$4,000',    turkey: '$2,000–$6,000',    saving: '84' },
  { procedure: 'TIPS Procedure',                           us: '$15,000–$40,000',     india: '$3,000–$8,000',    turkey: '$4,000–$10,000',   saving: '80' },
  { procedure: 'Hepatitis C DAA Course (12 weeks)',        us: '$20,000–$84,000',     india: '$400–$1,500',      turkey: '$800–$3,000',      saving: '97' },
  { procedure: 'FibroScan (transient elastography)',       us: '$500–$2,000',         india: '$40–$150',         turkey: '$60–$250',         saving: '92' },
  { procedure: 'Liver Biopsy (percutaneous)',              us: '$3,000–$8,000',       india: '$200–$600',        turkey: '$300–$800',        saving: '93' },
  { procedure: 'Large-Volume Paracentesis',                us: '$1,500–$5,000',       india: '$100–$400',        turkey: '$150–$600',        saving: '93' },
  { procedure: 'Hepatobiliary Surgery (liver resection)',  us: '$60,000–$150,000',    india: '$8,000–$18,000',   turkey: '$12,000–$25,000',  saving: '87' },
]

const FAQS = [
  {
    q: 'How much does a liver transplant cost in India compared to the U.S.?',
    a: 'A liver transplant in the U.S. costs $878,000–$1,017,000 (Milliman 2025 actuarial report — total billed before insurance). At a JCI-accredited liver transplant center in India, the same procedure costs $22,000–$40,000 including surgery, ICU, and 30 days post-transplant monitoring — a saving of 95–97%.',
  },
  {
    q: 'What is TACE and how much does it cost in India?',
    a: 'TACE (Trans-Arterial Chemoembolization) delivers chemotherapy directly into liver tumor blood supply while blocking it — first-line non-surgical treatment for unresectable HCC. U.S. cost: $10,000–$30,000 per session. India: $1,500–$5,000. Türkiye: $2,000–$7,000. Multiple sessions may be needed based on tumor response.',
  },
  {
    q: 'Can I get a living donor liver transplant in India?',
    a: 'Yes. Living donor liver transplant (LDLT) is extensively performed in India — 300–500 cases per year at each major partner center. The donor (blood-related family member with compatible blood type) can accompany the patient. Donor surgery, recipient surgery, and post-transplant care are all included in the quoted package.',
  },
  {
    q: 'How much does hepatitis C treatment cost in India?',
    a: 'Hepatitis C DAA treatment in the U.S. costs $20,000–$84,000 at list price. Generic DAAs in India (sofosbuvir/velpatasvir) cost $400–$1,500 for a full 12-week course — achieving SVR12 cure rates of 95–99%, equivalent to brand-name products. These are CDSCO-approved generics of the same active molecules as Harvoni and Epclusa.',
  },
  {
    q: 'Are liver transplant surgeons in India as qualified as U.S. transplant surgeons?',
    a: 'Several of India\'s leading liver transplant surgeons trained at Mayo Clinic, UPMC, King\'s College London, and Cambridge. India performs 2,500+ liver transplants annually — among the highest volumes globally. High-volume centers consistently demonstrate lower mortality and higher graft survival. Sultan GHC partners with India\'s highest-volume JCI-accredited transplant programs.',
  },
  {
    q: 'How long will I need to stay in India after a liver transplant?',
    a: 'Liver transplant patients typically need 45–60 days in India: 5–7 days pre-transplant evaluation, transplant surgery, 10–14 days ICU, 10–14 days general ward, and 14–21 days outpatient monitoring before flying clearance. Sultan GHC coordinates accommodation, hospital transport, interpreter support, and follow-up scheduling for you and your family.',
  },
]

const RELATED_TREATMENTS = [
  { name: 'Gastroenterology',                            href: '/treatments/gastroenterology',                 desc: 'ERCP, colonoscopy, IBD management, and digestive disease care' },
  { name: 'Oncology & Cancer Care',                      href: '/treatments/oncology',                         desc: 'HCC / liver cancer systemic therapy, immunotherapy, and radiation' },
  { name: 'Organ & Bone Marrow Transplantation',         href: '/treatments/organ-bone-marrow-transplant',     desc: 'Full organ transplant coordination — liver, kidney, heart, and bone marrow' },
  { name: 'Robotic & Minimally Invasive Surgery',        href: '/treatments/robotic-minimally-invasive',       desc: 'Robotic hepatectomy and minimally invasive liver resection' },
  { name: 'Cardiology & Cardiac Surgery',                href: '/treatments/cardiology',                       desc: 'Cardiac assessment for liver transplant candidacy evaluation' },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

export default function HepatologyPage() {
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
            <span className="text-primary font-medium">Hepatology & Liver Care</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Hepatology & Liver Care
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Liver Transplant & Advanced Liver Care in{' '}
                <span className="text-primary">India & Türkiye</span> — Save Up to 96%
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Liver disease is life-changing. A liver transplant in the U.S. averages $878,000–$1,017,000. The same procedure at a JCI-accredited center in India costs $22,000–$40,000. Sultan GHC connects U.S. patients with internationally trained hepatologists and transplant surgeons — the same standard of care at a fraction of American costs.
              </p>

              {/* Headline saving callout */}
              <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-2xl px-5 py-3 mb-7">
                <TrendingDown size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Liver Transplant — Verified Savings</p>
                  <p className="text-sm font-semibold text-gray-900">
                    USA: <span className="text-red-600">$878K–$1.02M</span>
                    {' '}→{' '}
                    India: <span className="text-primary">$22K–$40K</span>
                    {' '}· Source: Milliman 2025 Actuarial Report
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: CheckCircle2, text: 'JCI-Accredited Transplant Centers' },
                  { icon: Shield,       text: '300–500 Liver Transplants / Year Per Center' },
                  { icon: Activity,     text: 'Mayo & UPMC-Trained Hepatologists' },
                  { icon: Users,        text: '45–60 Day In-Country Coordination' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
                    <Icon size={15} className="text-primary shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md"
                >
                  Request Free Liver Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm"
                >
                  <MessageCircle size={16} className="text-green-500" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="hepatology-liver-transplant-india-turkey-us-patients.jpg"
                width={840}
                height={630}
                aspectRatio="4/3"
                label="Liver transplant team at a JCI-accredited partner hospital — India"
                aiPrompt="A hepatobiliary surgical team in a state-of-the-art operating theatre performing a liver procedure. Clean surgical field, advanced laparoscopic monitors, warm overhead lighting. Professional, precise, reassuring atmosphere. Photorealistic, 4K quality, no text overlays."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Gastroenterology link ── */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Digestive tract conditions?</strong> Hepatology covers liver, bile duct, and pancreas disease. For colonoscopy, ERCP, IBD (Crohn&apos;s / ulcerative colitis), and GI endoscopy, see our{' '}
import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
              <Link href="/treatments/gastroenterology" className="text-primary font-semibold hover:underline">
                Gastroenterology page →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Conditions ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Liver & Hepatobiliary Conditions We Coordinate Care For
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              From hepatitis C cure to liver transplantation — our partner hospitals manage the full spectrum of liver disease with multidisciplinary hepatology teams.
            </p>
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

      {/* ── Treatments ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Hepatology & Liver Treatments Available
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              From non-invasive HCV cure to complex liver transplantation — partner hospitals provide a complete, multidisciplinary liver disease program.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {TREATMENTS.map((t) => (
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
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Submit Your Case for Free Hepatology Review <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cost Comparison ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Liver Care Cost Comparison: USA vs India vs Türkiye
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              U.S. liver transplant figures from Milliman 2025 actuarial report (total billed before insurance). HCV treatment from GoodRx and CMS list price data. Procedural costs from FAIR Health Consumer 2024. India and Türkiye from JCI-accredited partner hospital published rates.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold rounded-tl-2xl">Procedure</th>
                  <th className="text-center px-6 py-4 font-semibold">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" />
                      USA — Self-Pay
                    </span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-primary">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" />
                      India
                    </span>
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-primary rounded-tr-2xl">
                    <span className="inline-flex items-center justify-center gap-1.5">
                      <img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Türkiye" className="rounded-sm" />
                      Türkiye
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON.map((row, i) => (
                  <tr key={row.procedure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-800">
                      <span>{row.procedure}</span>
                      {row.saving && (
                        <span className="ml-2 text-[10px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                          Save ~{row.saving}%
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">{row.us}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.india}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">{row.turkey}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Liver transplant figures are total billed costs before insurance. Individual quotes vary by donor type, organ status, and hospital.{' '}
            <Link href="/cost-savings/india" className="text-primary hover:underline">Full India cost savings →</Link>
            {' '}·{' '}
            <Link href="/cost-savings/turkey" className="text-primary hover:underline">Türkiye cost savings →</Link>
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Liver Transplant Saving',  value: '95–97%', sub: 'India vs U.S. (Milliman 2025)' },
              { label: 'HCV Cure Cost in India',   value: '$400–$1,500', sub: 'vs $20K–$84K in the U.S.' },
              { label: 'Free Medical Opinion',     value: '24–48 hrs', sub: 'hepatologist review of your case' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="text-center bg-primary/5 border border-primary/15 rounded-2xl py-6 px-4">
                <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{value}</p>
                <p className="text-sm font-semibold text-gray-800 mb-1">{label}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why India / Türkiye ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Liver Care in India</h3>
                  <p className="text-sm text-gray-500">Medanta, Rela Institute, Global Hospitals, Apollo, Fortis</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Medanta — The Medicity (Gurugram) performs 400+ liver transplants annually — one of Asia\'s highest volumes',
                  'Rela Institute & Medical Centre Chennai — Asia\'s largest liver transplant program by volume; founded by world-renowned HPB surgeon Dr. Mohamed Rela; Sultan GHC MOU partner',
                  'Global Hospitals Mumbai specializes in living donor liver transplant with 95%+ graft survival',
                  'Drug-eluting bead TACE (DEB-TACE) and Y-90 radioembolization available for HCC',
                  'India performs 2,500+ liver transplants per year — comparable to top U.S. transplant programs in volume',
                  'Generic HCV DAAs (sofosbuvir/velpatasvir) at $400–$1,500 — CDSCO-approved, WHO-prequalified quality',
                  'Hepatologists with training from Mayo Clinic, UPMC, King\'s College London, and Cambridge',
                  'India Medical e-Visa in 3–5 business days — extended up to 6 months for transplant patients',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    {pt}
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
                  <h3 className="text-lg font-semibold text-gray-900">Liver Care in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem, Memorial, Koc University Hospital</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Acibadem Organ Transplant Center performs liver, kidney, and multiorgan transplants to European standards',
                  'Memorial Hospital Istanbul — hepatobiliary surgery unit with robotic liver resection capability',
                  'TACE, RFA, microwave ablation, and SIRT (Y-90 radioembolization) all available for HCC',
                  'Hepatitis C treatment with direct-acting antivirals — hepatologist supervised and monitored',
                  'MDT liver tumor board (hepatology, hepatobiliary surgery, oncology, radiology) meets weekly',
                  'U.S. citizens visa-free for Türkiye — no pre-approval required (effective January 2024)',
                  'Istanbul hospitals accessible on Turkish Airlines nonstop from 7 U.S. cities',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    {pt}
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

      {/* ── Transplant disclaimer ── */}
      <section className="bg-white py-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-amber-900 mb-1">Important Note on Liver Transplantation</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Liver transplantation requires thorough pre-transplant evaluation including cardiopulmonary assessment, psychological screening, and transplant committee review. Not all patients are eligible for transplant and medical candidacy is determined by the receiving hospital&apos;s multidisciplinary transplant team — not by Sultan GHC. Our role is to facilitate access to evaluation, help you understand your options, and coordinate your complete journey. We do not guarantee transplant eligibility or outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Get a Free Hepatology Second Opinion
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Upload your liver function tests, imaging (CT/MRI), biopsy reports, or transplant evaluation documents. A senior hepatologist from our network reviews your case within 24–48 hours — at no cost, no obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg"
            >
              Upload Reports & Get Free Opinion <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+16107870713"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <Phone size={15} />
              Call +1-610-787-0713
            </a>
          </div>
          <p className="text-white/60 text-xs mt-6">
            <Link href="/how-it-works" className="underline hover:text-white">See how our process works →</Link>
          </p>
        </div>
      </section>

      {/* ── Related Treatments ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Treatment Specialties</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED_TREATMENTS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 rounded-2xl p-5 transition-all"
              >
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

      <PartnerHospitalsSection title="Internationally Accredited Liver & Hepatology Centers" />

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Frequently Asked Questions — Liver Care Abroad
            </h2>
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
            <Link href="/faq" className="text-primary font-semibold hover:underline">Visit our full FAQ →</Link>
            {' '}or{' '}
            <Link href="/contact" className="text-primary font-semibold hover:underline">contact our Patient Care team</Link>.
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Start Your Liver Care Journey
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Upload your liver function tests, imaging (CT/MRI abdomen), biopsy results, or transplant evaluation summary. Our medical team connects you with a senior hepatologist within 24–48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Request Free Medical Opinion <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/16107870713"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-100 transition-colors"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
