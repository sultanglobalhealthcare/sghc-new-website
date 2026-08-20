import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users, ImageIcon, Wind,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Pulmonology Treatment Abroad | India & Türkiye | Sultan GHC',
  description:
    'Access world-class pulmonology care — COPD, asthma, pulmonary fibrosis, lung cancer, interstitial lung disease, sleep apnea, bronchoscopy, EBUS, VATS, and lung transplant — in India and Türkiye at 70–90% lower cost than U.S. prices. Sultan GHC connects American patients with JCI-accredited pulmonary centers.',
  keywords: [
    'pulmonology treatment abroad',
    'COPD treatment India Türkiye',
    'lung cancer treatment India cost',
    'pulmonary fibrosis treatment India',
    'bronchoscopy cost India vs USA',
    'EBUS India cost',
    'VATS lobectomy India cost',
    'sleep study India cost',
    'lung transplant India cost',
    'interstitial lung disease treatment abroad',
    'affordable pulmonology for Americans',
    'medical tourism pulmonology',
    'Sultan GHC pulmonology',
    'ILD treatment India Türkiye',
  ],
  openGraph: {
    title: 'Pulmonology in India & Türkiye — Affordable for U.S. Patients | Sultan GHC',
    description:
      'COPD, ILD, lung cancer, bronchoscopy, EBUS, VATS, and lung transplant at JCI-accredited pulmonary centers in India and Türkiye — 70–90% less than U.S. costs.',
    url: 'https://www.sultanghc.com/treatments/pulmonology',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pulmonology Abroad | Lung Care India & Türkiye | Sultan GHC',
    description: 'COPD, pulmonary fibrosis, lung cancer, EBUS, VATS in India & Türkiye at 70–90% less than U.S. costs.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/pulmonology' },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',        item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments',  item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Pulmonology', item: 'https://www.sultanghc.com/treatments/pulmonology' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Pulmonology Treatment Abroad — India and Türkiye',
  description: 'Comprehensive pulmonology and respiratory medicine services for U.S. patients at JCI-accredited hospitals in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/pulmonology',
  about: {
    '@type': 'MedicalSpecialty',
    name: 'Pulmonology',
    alternateName: ['Respiratory Medicine', 'Pulmonary Medicine', 'Chest Medicine'],
    relevantSpecialty: 'Pulmonary Medicine',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does bronchoscopy cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bronchoscopy in the U.S. costs $3,000–$8,000 for self-pay patients (FAIR Health Consumer 2024). At a JCI-accredited hospital in India, the same procedure costs $200–$600 including sedation and pathology — a saving of 90–93%. Türkiye costs $300–$900. Endobronchial ultrasound (EBUS) bronchoscopy for lymph node sampling costs $500–$1,500 in India vs $5,000–$12,000 in the U.S.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get VATS (Video-Assisted Thoracic Surgery) for lung cancer in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. VATS lobectomy and VATS wedge resection are performed at multiple JCI-accredited partner hospitals in India — Apollo, Medanta, Fortis — by thoracic surgeons with fellowship training from U.S. and UK programs. VATS lobectomy in the U.S. costs $50,000–$120,000. In India, the same minimally invasive lung cancer resection costs $7,000–$16,000. Türkiye costs $10,000–$22,000. Recovery time and complication profiles are equivalent to procedures performed in the U.S.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is treatment for IPF (idiopathic pulmonary fibrosis) available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Partner hospitals in India offer full IPF management including antifibrotic therapy (pirfenidone and nintedanib), high-resolution CT (HRCT) chest for staging, pulmonary function testing (spirometry, DLCO), 6-minute walk test, and multidisciplinary ILD board review. Nintedanib (Ofev) and pirfenidone (Esbriet) are available as CDSCO-approved generic equivalents in India at significantly lower cost than U.S. prices. Lung transplant evaluation and listing are also possible at select partner centers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I travel to India with severe COPD or on supplemental oxygen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travel feasibility for patients with severe COPD or supplemental oxygen dependence is assessed individually. Sultan GHC\'s medical team reviews your FEV1, 6MWT, current O2 requirements, and recent exacerbation history before advising on air travel safety. Most airlines can accommodate supplemental oxygen with advance notice. For patients with very severe COPD (FEV1 <30%), stabilization and pre-travel optimization may be needed. Your Case Manager coordinates oxygen logistics for the journey.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a lung transplant cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single lung transplant in the U.S. costs $400,000–$600,000 (bilateral: $600,000–$900,000) — total billed before insurance. At JCI-accredited transplant centers in India, a single lung transplant costs $40,000–$70,000. Lung transplant is performed at a smaller number of specialized centers in India compared to liver transplant; Sultan GHC connects patients with the appropriate program based on diagnosis, lung allocation criteria, and individual case complexity.',
import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a sleep study (polysomnography) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An overnight polysomnography (sleep study) in the U.S. costs $1,000–$3,500 for self-pay patients. In India, the same study at a dedicated sleep lab costs $150–$500. CPAP titration studies cost a similar amount. For patients with obstructive sleep apnea (OSA) diagnosed in the U.S. who need equipment or specialist follow-up during their treatment trip, Sultan GHC coordinates sleep medicine consultation with their broader care plan.',
      },
    },
  ],
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const CONDITIONS = [
  { name: 'COPD (Chronic Obstructive Pulmonary Disease)', icon: '🫁' },
  { name: 'Asthma (Severe & Uncontrolled)',               icon: '💨' },
  { name: 'Pulmonary Fibrosis (IPF & Other ILD)',         icon: '🔬' },
  { name: 'Lung Cancer (NSCLC & SCLC)',                   icon: '🎗️' },
  { name: 'Sleep Apnea (OSA & Central)',                  icon: '😴' },
  { name: 'Pulmonary Hypertension',                       icon: '❤️' },
  { name: 'Pleural Disease (Effusion, Empyema)',          icon: '💧' },
  { name: 'Sarcoidosis',                                  icon: '🧬' },
  { name: 'Bronchiectasis',                               icon: '🌀' },
  { name: 'Pneumonia (Recurrent / Complex)',              icon: '🦠' },
  { name: 'Mesothelioma',                                 icon: '⚠️' },
  { name: 'Pulmonary Embolism (PE) Management',           icon: '🩸' },
]

const PROCEDURES = [
  {
    title: 'Bronchoscopy — Flexible & Rigid',
    desc: 'Diagnostic and therapeutic bronchoscopy for airway inspection, BAL (bronchoalveolar lavage), transbronchial biopsy, foreign body removal, and airway stenting. Performed with high-definition video bronchoscopes (Olympus, Pentax) under conscious sedation or general anesthesia.',
  },
  {
    title: 'EBUS — Endobronchial Ultrasound',
    desc: 'Endobronchial ultrasound-guided transbronchial needle aspiration (EBUS-TBNA) for mediastinal lymph node staging in lung cancer, and for sampling hilar and mediastinal lesions. Replaces mediastinoscopy in most cases — same-day procedure, no general anesthesia, same-day results.',
  },
  {
    title: 'HRCT Chest & Pulmonary Function Testing',
    desc: 'High-resolution CT (HRCT) chest for ILD, bronchiectasis, and emphysema staging — available same-day at all partner hospitals. Full pulmonary function testing (PFTs): spirometry, DLCO diffusion capacity, body plethysmography, and 6-minute walk test for functional assessment.',
  },
  {
    title: 'VATS — Video-Assisted Thoracic Surgery',
    desc: 'Minimally invasive VATS lobectomy, VATS wedge resection, and VATS segmentectomy for early-stage lung cancer — and VATS pleural procedures (pleurodesis, decortication) for pleural disease. Shorter hospital stay and faster recovery than open thoracotomy.',
  },
  {
    title: 'ILD / IPF Management',
    desc: 'Multidisciplinary interstitial lung disease clinic with chest physician, radiologist, and pathologist review. Antifibrotic therapy (pirfenidone, nintedanib) available as CDSCO-approved generics in India. Structured monitoring with serial PFTs, HRCT, and 6MWT. Lung transplant evaluation pathway available.',
  },
  {
    title: 'Sleep Study & CPAP Titration',
    desc: 'Level I in-lab overnight polysomnography (PSG) for OSA, REM sleep behavior disorder, periodic limb movement, and narcolepsy evaluation. CPAP/BiPAP titration, auto-PAP initiation, and oral appliance referral based on AHI severity and patient preference.',
  },
  {
    title: 'Pleurodesis & Pleural Procedures',
    desc: 'Chemical pleurodesis (talc slurry or VATS poudrage) for malignant pleural effusion and recurrent pneumothorax. Ultrasound-guided pleural aspiration, intercostal chest drain insertion, and indwelling pleural catheter placement for palliation of breathlessness.',
  },
  {
    title: 'Lung Transplant Evaluation & Coordination',
    desc: 'Lung transplant candidacy evaluation for end-stage IPF, COPD, pulmonary hypertension, and cystic fibrosis — conducted at select partner centers with experienced thoracic transplant programs. Sultan GHC coordinates the multi-day assessment process and communication between your U.S. pulmonologist and the transplant team.',
  },
  {
    title: 'Pulmonary Rehabilitation',
    desc: 'Structured exercise-based pulmonary rehabilitation for COPD, post-surgical recovery, and ILD — combining physiotherapy, breathing retraining (pursed-lip, diaphragmatic), occupational therapy, and patient education. Proven to reduce hospitalization and improve quality of life independently of pharmacotherapy.',
  },
]

const COST_COMPARISON = [
  { procedure: 'Bronchoscopy (flexible, diagnostic)',        us: '$3,000–$8,000',    india: '$200–$600',       turkey: '$300–$900' },
  { procedure: 'EBUS-TBNA (lymph node staging)',             us: '$5,000–$12,000',   india: '$500–$1,500',     turkey: '$700–$2,500' },
  { procedure: 'HRCT Chest (high-resolution)',               us: '$1,500–$4,000',    india: '$80–$250',        turkey: '$120–$400' },
  { procedure: 'Pulmonary Function Tests (full PFT)',        us: '$500–$2,000',      india: '$50–$200',        turkey: '$80–$300' },
  { procedure: 'Sleep Study (polysomnography)',              us: '$1,000–$3,500',    india: '$150–$500',       turkey: '$200–$700' },
  { procedure: 'VATS Lobectomy (lung cancer)',               us: '$50,000–$120,000', india: '$7,000–$16,000',  turkey: '$10,000–$22,000' },
  { procedure: 'Pleurodesis (talc / VATS)',                  us: '$5,000–$15,000',   india: '$500–$2,000',     turkey: '$800–$3,000' },
  { procedure: 'Lung Transplant (single)',                   us: '$400,000–$600,000',india: '$40,000–$70,000', turkey: '$50,000–$80,000' },
  { procedure: 'Antifibrotic Therapy — IPF (per month)',     us: '$9,000–$12,000',   india: '$400–$1,200',     turkey: '$600–$2,000' },
]

const FAQS = [
  {
    q: 'How much does bronchoscopy cost in India compared to the U.S.?',
    a: 'Bronchoscopy in the U.S. costs $3,000–$8,000 (FAIR Health 2024). In India at a JCI hospital: $200–$600 including sedation and pathology — a 90–93% saving. EBUS-TBNA for lymph node sampling: $500–$1,500 India vs $5,000–$12,000 U.S.',
  },
  {
    q: 'Can I get VATS for lung cancer in India?',
    a: 'Yes. VATS lobectomy and wedge resection are performed at Apollo, Medanta, and Fortis by fellowship-trained thoracic surgeons. VATS lobectomy costs $7,000–$16,000 in India vs $50,000–$120,000 in the U.S. Recovery and complication profiles are equivalent.',
  },
  {
    q: 'Is treatment for IPF (idiopathic pulmonary fibrosis) available in India?',
    a: 'Yes. Partner hospitals offer full IPF management including antifibrotic therapy (pirfenidone and nintedanib as CDSCO-approved generics), HRCT staging, PFTs, DLCO, and multidisciplinary ILD board review. Lung transplant evaluation is also available at select centers.',
  },
  {
    q: 'Can I travel to India with severe COPD or on supplemental oxygen?',
    a: 'Travel feasibility is assessed individually. Sultan GHC\'s medical team reviews your FEV1, 6MWT, current O2 requirements, and recent exacerbation history before advising. Most airlines accommodate supplemental oxygen with advance notice. Your Case Manager coordinates oxygen logistics for the journey.',
  },
  {
    q: 'How much does a lung transplant cost in India?',
    a: 'Single lung transplant in the U.S. costs $400,000–$600,000. In India: $40,000–$70,000. Sultan GHC connects patients with specialized lung transplant centers based on diagnosis and candidacy criteria.',
  },
  {
    q: 'How much does a sleep study cost in India?',
    a: 'Overnight polysomnography (PSG) in the U.S. costs $1,000–$3,500 for self-pay patients. In India at a dedicated sleep lab: $150–$500. CPAP titration studies are similarly priced.',
  },
]

const RELATED = [
  { name: 'Oncology & Cancer Care',               href: '/treatments/oncology',                       desc: 'Lung cancer — medical oncology, immunotherapy, targeted therapy, chemotherapy' },
  { name: 'Cardiology & Cardiac Surgery',         href: '/treatments/cardiology',                     desc: 'Pulmonary hypertension, cor pulmonale, and cardiopulmonary conditions' },
  { name: 'Robotic & Minimally Invasive Surgery', href: '/treatments/robotic-minimally-invasive',     desc: 'Robotic VATS and minimally invasive thoracic surgery' },
  { name: 'Organ & Bone Marrow Transplantation',  href: '/treatments/organ-bone-marrow-transplant',  desc: 'Lung transplant coordination for end-stage pulmonary disease' },
  { name: 'Neurology',                            href: '/treatments/neurology',                     desc: 'Sleep disorders, neuromuscular respiratory failure, and breathing-related sleep studies' },
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

export default function PulmonologyPage() {
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
            <span className="text-primary font-medium">Pulmonology</span>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Pulmonology & Respiratory Medicine
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                World-Class Lung Care in{' '}
                <span className="text-primary">India & Türkiye</span> — at 70–90% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Respiratory conditions demand specialist expertise and advanced diagnostics. Sultan GHC connects U.S. patients with internationally trained pulmonologists at JCI-accredited hospitals — from complex ILD management and EBUS-guided lung cancer staging to VATS thoracic surgery and lung transplant evaluation.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: CheckCircle2, text: 'JCI-Accredited Pulmonary Centers' },
                  { icon: Wind,         text: 'EBUS, VATS & Advanced Bronchoscopy' },
                  { icon: Shield,       text: 'ILD & Lung Cancer MDT Boards' },
                  { icon: Users,        text: 'International Patient Coordination' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm">
                    <Icon size={15} className="text-primary shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/enquiry" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md">
                  Request Free Lung Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/16107870713" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
                  <MessageCircle size={16} className="text-green-500" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="pulmonology-lung-care-india-turkey-us-patients.jpg"
                width={840} height={630} aspectRatio="4/3"
                label="Advanced pulmonology suite — Sultan GHC partner hospital, India"
                aiPrompt="A pulmonologist reviewing high-resolution CT chest scans on large digital monitors in a modern respiratory medicine suite. Clean, professional, well-lit environment. Photorealistic, 4K quality, no text overlays."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Pulmonary Conditions We Coordinate Care For</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">From severe asthma and COPD to interstitial lung disease and lung cancer — our partner hospitals manage the full spectrum of respiratory conditions.</p>
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
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Pulmonology Procedures Available</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">Diagnostic and therapeutic respiratory procedures performed with international-standard equipment at JCI-accredited hospitals.</p>
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
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Pulmonology Cost Comparison: USA vs India vs Türkiye</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">U.S. figures from FAIR Health Consumer (2024), CMS data, and published hospital pricing. India and Türkiye from JCI-accredited partner hospital published rates (2025).</p>
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
            Figures are approximate self-pay estimates. Actual costs vary by procedure complexity and hospital.{' '}
            <Link href="/cost-savings/india" className="text-primary hover:underline">Full India cost savings →</Link>{' '}·{' '}
            <Link href="/cost-savings/turkey" className="text-primary hover:underline">Türkiye cost savings →</Link>
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Average Saving in India',  value: '80–93%', sub: 'vs U.S. self-pay pulmonology' },
              { label: 'Average Saving in Türkiye', value: '70–88%', sub: 'vs U.S. self-pay pulmonology' },
              { label: 'Free First Opinion',       value: '24–48 hrs', sub: 'remote pulmonologist review' },
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
                  <h3 className="text-lg font-semibold text-gray-900">Pulmonology in India</h3>
                  <p className="text-sm text-gray-500">Apollo, Medanta, Fortis, Narayana Health</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Apollo Hospitals runs dedicated ILD clinics with HRCT, DLCO, and multidisciplinary ILD boards',
                  'EBUS-TBNA performed by interventional pulmonologists trained at European and U.S. centers',
                  'VATS thoracic surgery — lobectomy, segmentectomy, and pleural procedures — at Apollo and Medanta',
                  'Generic antifibrotic therapy (pirfenidone, nintedanib) available at 85–95% lower cost than U.S. list price',
                  'Sleep medicine centers with full Level I polysomnography and CPAP titration facilities',
                  'Pulmonologists with training from AIIMS, post-doctoral fellowships from UK and U.S. institutions',
                  'India Medical e-Visa in 3–5 business days; extendable to 6 months for long-term treatment',
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
                  <h3 className="text-lg font-semibold text-gray-900">Pulmonology in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem, Memorial, Koc University Hospital</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Acibadem chest medicine centers offer EBUS, navigational bronchoscopy, and VATS thoracic surgery',
                  'Memorial Hospital lung oncology unit with PET-CT staging, EBUS, and multidisciplinary lung cancer MDT',
                  'Thoracic surgeons with European Society of Thoracic Surgeons (ESTS) membership and training',
                  'Same-day HRCT chest, PFT, and spirometry with 24-hour expert reporting',
                  'Interventional pulmonology — rigid bronchoscopy, airway stenting, cryotherapy, and thermal ablation',
                  'U.S. citizens visa-free for Türkiye — no pre-approval required (effective January 2024)',
                  'Turkish Airlines nonstop from 7 U.S. cities — direct access to Istanbul pulmonology centers',
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Ready to Explore Lung Care Abroad?</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">Upload your CT chest, PFT results, or biopsy reports. Our pulmonology team reviews your case and connects you with the right specialist within 24–48 hours — at no cost, no obligation.</p>
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

      <PartnerHospitalsSection title="Internationally Accredited Pulmonology Centers" />

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">Frequently Asked Questions — Pulmonology Abroad</h2>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Get a Free Pulmonology Second Opinion</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Share your CT chest, PFT reports, biopsy results, or referral letter. Our team connects you with a senior pulmonologist within 24–48 hours.</p>
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
