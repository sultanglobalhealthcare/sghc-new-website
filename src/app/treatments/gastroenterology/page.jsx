import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Gastroenterology Treatment Abroad | India & Türkiye | Sultan GHC',
  description:
    'Access world-class gastroenterology care — colonoscopy, ERCP, endoscopy, IBD management, Crohn\'s disease treatment, and advanced GI procedures — in India and Türkiye at 70–90% lower cost than U.S. prices. Sultan GHC connects American patients with JCI-accredited GI centers and internationally trained gastroenterologists.',
  keywords: [
    'gastroenterology treatment abroad',
    'colonoscopy cost India vs USA',
    'ERCP India cost',
    'Crohn\'s disease treatment India Türkiye',
    'IBD treatment abroad',
    'endoscopy cost India',
    'gastroenterology India vs USA cost',
    'affordable GI treatment for Americans',
    'capsule endoscopy India cost',
    'endoscopic ultrasound India Türkiye',
    'medical tourism gastroenterology',
    'JCI gastroenterology hospital India Türkiye',
    'Sultan GHC gastroenterology',
    'hepatitis C treatment India cost',
  ],
  openGraph: {
    title: 'Gastroenterology in India & Türkiye — Affordable for U.S. Patients | Sultan GHC',
    description:
      'Colonoscopy, ERCP, endoscopy, IBD biologics, and advanced GI procedures at 70–90% less than U.S. prices. JCI-accredited gastroenterology hospitals in India and Türkiye.',
    url: 'https://www.sultanghc.com/treatments/gastroenterology',
    siteName: 'Sultan Global Health Care',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gastroenterology Abroad | India & Türkiye | Sultan GHC',
    description:
      'Colonoscopy, ERCP, IBD treatment, Crohn\'s disease care in India & Türkiye at 70–90% less than U.S. costs.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/gastroenterology' }
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',              item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments',        item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Gastroenterology',  item: 'https://www.sultanghc.com/treatments/gastroenterology' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Gastroenterology Treatment Abroad — India and Türkiye',
  description:
    'Comprehensive gastroenterology and digestive disease services for U.S. patients at JCI-accredited hospitals in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/gastroenterology',
  about: {
    '@type': 'MedicalSpecialty',
    name: 'Gastroenterology',
    alternateName: ['Digestive Disease Medicine', 'GI Medicine', 'Gastrointestinal Endoscopy'],
    relevantSpecialty: 'Gastroenterology'
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a colonoscopy cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A colonoscopy in the U.S. costs $2,750–$9,000 on average for self-pay patients (source: FAIR Health Consumer 2024). At a JCI-accredited hospital in India, the same procedure costs $150–$500 including sedation and pathology review — a saving of 90–95%. Türkiye costs $200–$700. Sultan GHC provides a personalised cost estimate at no charge based on your specific case and preferred hospital.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is ERCP available in India and Türkiye? How much does it cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ERCP (Endoscopic Retrograde Cholangiopancreatography) is fully available at our JCI-accredited partner hospitals in India and Türkiye, performed by fellowship-trained therapeutic endoscopists. ERCP in the U.S. costs $5,000–$20,000 for self-pay patients. India costs $500–$1,500. Türkiye costs $700–$2,500. Sultan GHC provides a cost estimate based on your diagnosis (gallstones, bile duct obstruction, pancreatitis) within 24 hours.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I get IBD treatment (Crohn\'s disease or ulcerative colitis) in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our partner hospitals in India and Türkiye have dedicated IBD clinics managed by gastroenterologists with sub-specialty training in inflammatory bowel disease. Treatment includes biologic infusion therapy (infliximab, adalimumab, vedolizumab, ustekinumab), small molecule therapy (tofacitinib), and structured endoscopic monitoring. Biologic infusion costs in India are 70–85% lower than U.S. prices. India sources biologics from WHO-prequalified manufacturers including biosimilar brands approved under Indian regulators (CDSCO).'
      }
    },
    {
      '@type': 'Question',
      name: 'How long do I need to stay in India for GI treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diagnostic procedures such as colonoscopy, upper endoscopy, and capsule endoscopy can be completed in 3–5 days including pre-procedure workup and recovery. Therapeutic procedures like ERCP or endoscopic mucosal resection typically require 5–7 days. IBD evaluation and treatment initiation requires 7–10 days for a full workup, biologic initiation, and monitoring. Sultan GHC\'s Case Managers plan your full itinerary.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does hepatitis C treatment cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hepatitis C direct-acting antiviral (DAA) treatment (12-week course) in the U.S. costs $20,000–$84,000 at list price. Generic DAA regimens (sofosbuvir/velpatasvir, sofosbuvir/daclatasvir) approved in India cost $400–$1,500 for a full 12-week course — representing a saving of 95–99%. These are not counterfeit drugs — they are generic equivalents produced under compulsory license, the same active molecules used in Harvoni and Epclusa, with equivalent efficacy proven in clinical trials. Sultan GHC coordinates hepatologist consultation and DAA prescription.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are gastroenterology endoscopes in India the same quality as U.S. hospitals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our JCI-accredited partner hospitals use Olympus, Fujifilm, and Pentax endoscopy systems — the same manufacturers used in U.S. academic medical centers. All endoscopes are processed through automated reprocessors following ASGE (American Society for Gastrointestinal Endoscopy) or ESGE (European Society of Gastrointestinal Endoscopy) disinfection protocols. JCI accreditation specifically audits infection prevention and endoscope reprocessing standards.'
      }
    },
  ]
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const CONDITIONS = [
  { name: 'GERD & Acid Reflux Disease',              icon: '🔥' },
  { name: "Crohn's Disease",                          icon: '🧬' },
  { name: 'Ulcerative Colitis (IBD)',                 icon: '🔬' },
  { name: 'Irritable Bowel Syndrome (IBS)',           icon: '🫁' },
  { name: 'Colon Polyps & Cancer Screening',         icon: '🔭' },
  { name: 'Gallstones & Biliary Disease',             icon: '🫀' },
  { name: 'Pancreatitis (Acute & Chronic)',           icon: '⚡' },
  { name: 'Celiac Disease',                           icon: '🌾' },
  { name: 'Peptic Ulcer Disease',                     icon: '💊' },
  { name: 'Hepatitis B & C',                          icon: '🩸' },
  { name: 'Esophageal Disorders (Barrett\'s, Achalasia)', icon: '🔗' },
  { name: 'Colorectal Cancer (Early Detection)',      icon: '🏥' },
]

const TREATMENTS = [
  {
    title: 'Colonoscopy & Colorectal Screening',
    desc: 'Diagnostic and therapeutic colonoscopy using high-definition Olympus and Fujifilm scopes — with polypectomy, biopsy, and chromoendoscopy. JCI hospitals follow ASGE quality indicators including adenoma detection rate (ADR) standards.'
  },
  {
    title: 'Upper GI Endoscopy (EGD)',
    desc: 'Esophagogastroduodenoscopy (EGD) for diagnosis of GERD, peptic ulcer, Barrett\'s esophagus, and esophageal stricture — with biopsy, H. pylori testing, and therapeutic interventions (banding, hemostasis) in the same session.'
  },
  {
    title: 'ERCP — Bile Duct & Pancreatic Procedures',
    desc: 'Endoscopic Retrograde Cholangiopancreatography for gallstone removal, bile duct stenting, sphincterotomy, and management of biliary obstruction and chronic pancreatitis — performed by fellowship-trained therapeutic endoscopists.'
  },
  {
    title: 'Endoscopic Ultrasound (EUS)',
    desc: 'EUS for staging pancreatic cancer, assessing submucosal lesions, sampling lymph nodes, draining pancreatic cysts, and evaluating bile duct pathology. Combined EUS-FNA (fine needle aspiration) for tissue diagnosis in the same session.'
  },
  {
    title: 'Capsule Endoscopy (Small Bowel)',
    desc: 'Wireless capsule endoscopy for visualization of the entire small intestine — the gold standard for diagnosing obscure GI bleeding, small bowel Crohn\'s disease, and small bowel tumors not accessible by standard endoscopy.'
  },
  {
    title: 'IBD Biologic Therapy & Management',
    desc: 'Comprehensive IBD management including biologic infusion therapy (infliximab, adalimumab, vedolizumab, ustekinumab) and small molecule therapy (tofacitinib) — at 70–85% lower cost than U.S. infusion center prices. WHO-prequalified biosimilars available.'
  },
  {
    title: 'Hepatitis B & C Treatment',
    desc: 'Specialist hepatologist-supervised hepatitis C treatment with direct-acting antivirals (DAAs) — sofosbuvir/velpatasvir and sofosbuvir/daclatasvir — at a fraction of U.S. list prices. Hepatitis B management with antiviral suppression and monitoring.'
  },
  {
    title: 'Endoscopic Mucosal Resection (EMR) & ESD',
    desc: 'Minimally invasive endoscopic removal of early-stage colorectal and gastric polyps and superficial cancers — avoiding open surgery. EMR and Endoscopic Submucosal Dissection (ESD) are performed by advanced therapeutic endoscopists at select partner hospitals.'
  },
  {
    title: 'Manometry & pH Studies',
    desc: 'High-resolution esophageal manometry and 24-hour pH/impedance monitoring for GERD, achalasia, esophageal dysmotility, and post-fundoplication evaluation — with expert gastroenterologist interpretation.'
  },
  {
    title: 'Pancreatic Cyst & Tumor Evaluation',
    desc: 'Comprehensive workup of pancreatic lesions using EUS, CT pancreas protocol, MRCP, and serum tumor markers — with multidisciplinary review by gastroenterology, radiology, and surgical oncology teams.'
  },
]

const COST_COMPARISON = [
  { procedure: 'Colonoscopy (diagnostic)',             us: '$2,750–$9,000',   india: '$150–$500',      turkey: '$200–$700' },
  { procedure: 'Upper Endoscopy / EGD',                us: '$1,500–$6,000',   india: '$100–$350',      turkey: '$150–$500' },
  { procedure: 'ERCP (bile duct / stones)',             us: '$5,000–$20,000',  india: '$500–$1,500',    turkey: '$700–$2,500' },
  { procedure: 'Endoscopic Ultrasound (EUS)',           us: '$3,000–$8,000',   india: '$300–$800',      turkey: '$400–$1,200' },
  { procedure: 'Capsule Endoscopy (small bowel)',       us: '$3,000–$8,000',   india: '$400–$1,000',    turkey: '$600–$1,500' },
  { procedure: 'IBD Biologic Infusion (per session)',   us: '$10,000–$22,000', india: '$1,500–$4,000',  turkey: '$2,000–$6,000' },
  { procedure: 'Hepatitis C DAA Course (12 weeks)',     us: '$20,000–$84,000', india: '$400–$1,500',    turkey: '$800–$3,000' },
  { procedure: 'Endoscopic Mucosal Resection (EMR)',    us: '$5,000–$15,000',  india: '$500–$1,500',    turkey: '$700–$2,500' },
  { procedure: 'Esophageal Manometry + pH Study',       us: '$2,000–$6,000',   india: '$200–$600',      turkey: '$300–$900' },
]

const FAQS = [
  {
    q: 'How much does a colonoscopy cost in India compared to the U.S.?',
    a: 'Colonoscopy in the U.S. costs $2,750–$9,000 for self-pay patients (FAIR Health 2024). At a JCI-accredited hospital in India, the same procedure costs $150–$500 including sedation and pathology — a 90–95% saving. Türkiye costs $200–$700. Sultan GHC provides a personalised estimate at no charge.'
  },
  {
    q: 'Is ERCP available in India and Türkiye? How much does it cost?',
    a: 'ERCP is fully available at JCI-accredited partner hospitals, performed by fellowship-trained therapeutic endoscopists. U.S. cost: $5,000–$20,000. India: $500–$1,500. Türkiye: $700–$2,500. We provide a cost estimate based on your diagnosis within 24 hours.'
  },
  {
    q: 'Can I get IBD treatment (Crohn\'s or UC) in India?',
    a: 'Yes. Partner hospitals have dedicated IBD clinics with biologic infusion therapy (infliximab, vedolizumab, ustekinumab) and small molecule therapy (tofacitinib) at 70–85% lower cost than U.S. infusion centers. India sources biologics from WHO-prequalified manufacturers.'
  },
  {
    q: 'How long do I need to stay in India for GI treatment?',
    a: 'Diagnostic procedures (colonoscopy, EGD, capsule endoscopy) take 3–5 days. Therapeutic ERCP or EMR typically 5–7 days. IBD evaluation and biologic initiation: 7–10 days. Sultan GHC Case Managers plan your full itinerary.'
  },
  {
    q: 'How much does hepatitis C treatment cost in India?',
    a: 'Hepatitis C DAA treatment (12-week course) costs $20,000–$84,000 in the U.S. Generic DAA regimens in India (sofosbuvir/velpatasvir) cost $400–$1,500 — a saving of 95–99%. These are generic equivalents produced under compulsory license with equivalent clinical efficacy proven in trials.'
  },
  {
    q: 'Are endoscopes in India the same quality as U.S. hospitals?',
    a: 'Yes. Our partner hospitals use Olympus, Fujifilm, and Pentax endoscopy systems — the same manufacturers as leading U.S. academic centers. All scopes are processed following ASGE/ESGE disinfection protocols. JCI accreditation specifically audits endoscope reprocessing standards.'
  },
]

const RELATED_TREATMENTS = [
  { name: 'Hepatology & Liver Care',                 href: '/treatments/hepatology-liver-care',            desc: 'Liver transplant, cirrhosis, liver cancer, TACE, RFA, and hepatitis management' },
  { name: 'Oncology & Cancer Care',                  href: '/treatments/oncology',                         desc: 'Colorectal cancer, pancreatic cancer, and GI malignancy treatment' },
  { name: 'Bariatric & Metabolic Surgery',           href: '/treatments/bariatric-metabolic-surgery',      desc: 'Weight loss surgery for obesity-related GI conditions including GERD and NAFLD' },
  { name: 'Robotic & Minimally Invasive Surgery',    href: '/treatments/robotic-minimally-invasive',       desc: 'Robotic-assisted colorectal surgery, Nissen fundoplication, and laparoscopic GI procedures' },
  { name: 'Organ & Bone Marrow Transplantation',     href: '/treatments/organ-bone-marrow-transplant',     desc: 'Liver transplant for end-stage liver disease — closely coordinated with hepatology' },
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

export default function GastroenterologyPage() {
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
            <span className="text-primary font-medium">Gastroenterology</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Gastroenterology & Digestive Disease
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                World-Class GI Care in{' '}
                <span className="text-primary">India & Türkiye</span> — at 70–95% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                From colonoscopy and ERCP to complex IBD management and hepatitis C treatment — Sultan GHC connects U.S. patients with internationally trained gastroenterologists at JCI-accredited hospitals, using the same Olympus and Fujifilm endoscopy equipment as leading American medical centers.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: CheckCircle2, text: 'Olympus & Fujifilm Endoscopy Systems' },
                  { icon: Shield,       text: 'JCI-Accredited GI Centers' },
                  { icon: Activity,     text: 'Fellowship-Trained Gastroenterologists' },
                  { icon: Users,        text: 'International Patient Coordination' },
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
                  Request Free GI Consultation <ArrowRight size={16} />
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
                filename="gastroenterology-treatment-india-turkey-us-patients.jpg"
                width={840}
                height={630}
                aspectRatio="4/3"
                label="Advanced GI endoscopy suite — Sultan GHC partner hospital, India"
                aiPrompt="A gastroenterologist performing an endoscopic procedure in a modern, well-lit endoscopy suite. High-definition monitor showing clear GI tract imagery. Clean, professional, state-of-the-art environment. Photorealistic, 4K quality, no text overlays."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Gastro ↔ Hepatology callout ── */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Liver disease?</strong> Gastroenterology covers digestive tract conditions. Liver-specific care — including liver transplant, cirrhosis, hepatocellular carcinoma (HCC), TACE, and RFA — is managed under our dedicated{' '}
              <Link href="/treatments/hepatology-liver-care" className="text-primary font-semibold hover:underline">
                Hepatology & Liver Care →
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
              GI Conditions We Coordinate Care For
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              From routine colorectal screening to complex inflammatory bowel disease and advanced therapeutic endoscopy — our partner hospitals manage the full spectrum of digestive health conditions.
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

      {/* ── Procedures ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Gastroenterology Procedures Available
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Diagnostic and therapeutic GI procedures performed with international-standard equipment and clinical protocols at JCI-accredited hospitals.
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
              Submit Your Case for Free Review <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cost Comparison ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Gastroenterology Cost Comparison: USA vs India vs Türkiye
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              U.S. figures sourced from FAIR Health Consumer (2024), CMS Hospital Price Transparency data, and GoodRx. India and Türkiye figures from JCI-accredited partner hospital published rates (2025).
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
            Figures are approximate self-pay estimates. Actual costs vary by clinical complexity, sedation type, and hospital.{' '}
            <Link href="/cost-savings/india" className="text-primary hover:underline">Full India cost savings →</Link>
            {' '}·{' '}
            <Link href="/cost-savings/turkey" className="text-primary hover:underline">Türkiye cost savings →</Link>
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Average Saving in India',   value: '85–95%', sub: 'vs U.S. self-pay GI costs' },
              { label: 'Average Saving in Türkiye',  value: '75–90%', sub: 'vs U.S. self-pay GI costs' },
              { label: 'Free First Consultation',   value: '24–48 hrs', sub: 'remote GI specialist opinion' },
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

      {/* ── Why India / Türkiye ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Gastroenterology in India</h3>
                  <p className="text-sm text-gray-500">Apollo, Fortis, Medanta, Rela Institute, Asian Institute of Gastroenterology</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Asian Institute of Gastroenterology (Hyderabad) — one of Asia\'s largest dedicated GI centers',
                  'Rela Institute & Medical Centre Chennai — advanced hepatobiliary and GI surgery center; Sultan GHC MOU partner',
                  'High-definition colonoscopy with NBI (Narrow Band Imaging) for polyp detection at all partner hospitals',
                  'ERCP performed by therapeutic endoscopists trained at Mayo Clinic and UK tertiary GI centers',
                  'IBD biologics including infliximab, vedolizumab, and ustekinumab biosimilars at WHO-prequalified quality',
                  'Capsule endoscopy and device-assisted enteroscopy (DBE/SBE) for small bowel pathology',
                  'Generic Hepatitis C DAAs (sofosbuvir/velpatasvir) at $400–$1,500 for a full treatment course',
                  'India Medical e-Visa in 3–5 business days — valid for stays up to 6 months',
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
                  <h3 className="text-lg font-semibold text-gray-900">Gastroenterology in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem, Memorial, Koc University Hospital, Medicana</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Acibadem GI centers accredited by TÜV (German quality standard) and JCI simultaneously',
                  'Memorial Hospital Istanbul — dedicated IBD center with structured biologic initiation protocols',
                  'EUS-FNA performed by European Society of Gastrointestinal Endoscopy (ESGE) certified endoscopists',
                  'Chromoendoscopy and AI-assisted polyp detection (CADe/CADx) available at select centers',
                  'Multidisciplinary GI oncology board (colorectal, pancreatic, esophageal cancer) meets weekly',
                  'U.S. citizens visa-free for Türkiye — no pre-approval, no fee (effective January 2024)',
                  'Turkish Airlines nonstop from 7 U.S. cities — direct to Istanbul for GI treatment',
                  'Medicana International, Istanbul — JCI-accredited since 2010; 191-bed purpose-built facility; full international patient support program',
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

      {/* ── CTA ── */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Ready to Explore GI Care Abroad?
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Share your diagnosis, reports, or symptoms. Our GI specialist team reviews your case and connects you with the right gastroenterologist within 24–48 hours — at no cost, no obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get Free GI Consultation <ArrowRight size={15} />
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

      <PartnerHospitalsSection title="Internationally Accredited GI & Liver Centers" />

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Frequently Asked Questions — Gastroenterology Abroad
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
            Get a Free Gastroenterology Second Opinion
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Share your endoscopy reports, colonoscopy findings, IBD history, or labs. Our medical team connects you with a senior gastroenterologist within 24–48 hours.
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
