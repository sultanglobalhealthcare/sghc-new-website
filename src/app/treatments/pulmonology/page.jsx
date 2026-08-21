import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Activity, AlertCircle,
  Shield, Users, Wind
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
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pulmonology Abroad | Lung Care India & Türkiye | Sultan GHC',
    description: 'COPD, pulmonary fibrosis, lung cancer, EBUS, VATS in India & Türkiye at 70–90% less than U.S. costs.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/pulmonology' }
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',        item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments',  item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Pulmonology', item: 'https://www.sultanghc.com/treatments/pulmonology' },
  ]
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
    relevantSpecialty: 'Pulmonary Medicine'
  }
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
        text: 'Bronchoscopy in the U.S. costs $3,000–$8,000 for self-pay patients (FAIR Health Consumer 2024). At a JCI-accredited hospital in India, the same procedure costs $200–$600 including sedation and pathology — a saving of 90–93%. Türkiye costs $300–$900. Endobronchial ultrasound (EBUS) bronchoscopy for lymph node sampling costs $500–$1,500 in India vs $5,000–$12,000 in the U.S.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I get VATS (Video-Assisted Thoracic Surgery) for lung cancer in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. VATS lobectomy and VATS wedge resection are performed at multiple JCI-accredited partner hospitals in India — Apollo, Medanta, Fortis — by thoracic surgeons with fellowship training from U.S. and UK programs. VATS lobectomy in the U.S. costs $50,000–$120,000. In India, the same minimally invasive lung cancer resection costs $7,000–$16,000. Türkiye costs $10,000–$22,000. Recovery time and complication profiles are equivalent to procedures performed in the U.S.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is treatment for IPF (idiopathic pulmonary fibrosis) available in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Partner hospitals in India offer full IPF management including antifibrotic therapy (pirfenidone and nintedanib), high-resolution CT (HRCT) chest for staging, pulmonary function testing (spirometry, DLCO), 6-minute walk test, and multidisciplinary ILD board review. Nintedanib (Ofev) and pirfenidone (Esbriet) are available as CDSCO-approved generic equivalents in India at significantly lower cost than U.S. prices. Lung transplant evaluation and listing are also possible at select partner centers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I travel to India with severe COPD or on supplemental oxygen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travel feasibility for patients with severe COPD or supplemental oxygen dependence is assessed individually. Sultan GHC\'s medical team reviews your FEV1, 6MWT, current O2 requirements, and recent exacerbation history before advising on air travel safety. Most airlines can accommodate supplemental oxygen with advance notice. For patients with very severe COPD (FEV1 <30%), stabilization and pre-travel optimization may be needed. Your Case Manager coordinates oxygen logistics for the journey.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does a lung transplant cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single lung transplant in the U.S. costs $400,000–$600,000 (bilateral: $600,000–$900,000) — total billed before insurance. At JCI-accredited transplant centers in India, a single lung transplant costs $40,000–$70,000. Lung transplant is performed at a smaller number of specialized centers in India compared to liver transplant; Sultan GHC connects patients with the appropriate program based on diagnosis, lung allocation criteria, and individual case complexity.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does a sleep study (polysomnography) cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An overnight polysomnography (sleep study) in the U.S. costs $1,000–$3,500 for self-pay patients. In India, the same study at a dedicated sleep lab costs $150–$500. CPAP titration studies cost a similar amount. For patients with obstructive sleep apnea (OSA) diagnosed in the U.S. who need equipment or specialist follow-up during their treatment trip, Sultan GHC coordinates sleep medicine consultation with their broader care plan.'
      }
    },
  ]
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
    desc: 'Diagnostic and therapeutic bronchoscopy for airway inspection, BAL (bronchoalveolar lavage), transbronchial biopsy, foreign body removal, and airway stenting. Performed with high-definition video bronchoscopes (Olympus, Pentax) under conscious sedation or general anesthesia.'
  },
  {
    title: 'EBUS — Endobronchial Ultrasound',
    desc: 'Endobronchial ultrasound-guided transbronchial needle aspiration (EBUS-TBNA) for mediastinal lymph node staging in lung cancer, and for sampling hilar and mediastinal lesions. Replaces mediastinoscopy in most cases — same-day procedure, no general anesthesia, same-day results.'
  },
  {
    title: 'HRCT Chest & Pulmonary Function Testing',
    desc: 'High-resolution CT (HRCT) chest for ILD, bronchiectasis, and emphysema staging — available same-day at all partner hospitals. Full pulmonary function testing (PFTs): spirometry, DLCO diffusion capacity, body plethysmography, and 6-minute walk test for functional assessment.'
  },
  {
    title: 'VATS — Video-Assisted Thoracic Surgery',
    desc: 'Minimally invasive VATS lobectomy, VATS wedge resection, and VATS segmentectomy for early-stage lung cancer — and VATS pleural procedures (pleurodesis, decortication) for pleural disease. Shorter hospital stay and faster recovery than open thoracotomy.'
  },
  {
    title: 'ILD / IPF Management',
    desc: 'Multidisciplinary interstitial lung disease clinic with chest physician, radiologist, and pathologist review. Antifibrotic therapy (pirfenidone, nintedanib) available as CDSCO-approved generics in India. Structured monitoring with serial PFTs, HRCT, and 6MWT. Lung transplant evaluation pathway available.'
  },
  {
    title: 'Sleep Study & CPAP Titration',
    desc: 'Level I in-lab overnight polysomnography (PSG) for OSA, REM sleep behavior disorder, periodic limb movement, and narcolepsy evaluation. CPAP/BiPAP titration, auto-PAP initiation, and oral appliance referral based on AHI severity and patient preference.'
  },
  {
    title: 'Pleurodesis & Pleural Procedures',
    desc: 'Chemical pleurodesis (talc slurry or VATS poudrage) for malignant pleural effusion and recurrent pneumothorax. Ultrasound-guided pleural aspiration, intercostal chest drain insertion, and indwelling pleural catheter placement for palliation of breathlessness.'
  },
  {
    title: 'Lung Transplant Evaluation & Coordination',
    desc: 'Lung transplant candidacy evaluation for end-stage IPF, COPD, pulmonary hypertension, and cystic fibrosis — conducted at select partner centers with experienced thoracic transplant programs. Sultan GHC coordinates the multi-day assessment process and communication between your U.S. pulmonologist and the transplant team.'
  },
  {
    title: 'Pulmonary Rehabilitation',
    desc: 'Structured exercise-based pulmonary rehabilitation for COPD, post-surgical recovery, and ILD — combining physiotherapy, breathing retraining (pursed-lip, diaphragmatic), occupational therapy, and patient education. Proven to reduce hospitalization and improve quality of life independently of pharmacotherapy.'
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
    a: 'Bronchoscopy in the U.S. costs $3,000–$8,000 (FAIR Health 2024). In India at a JCI hospital: $200–$600 including sedation and pathology — a 90–93% saving. EBUS-TBNA for lymph node sampling: $500–$1,500 India vs $5,000–$12,000 U.S.'
  },
  {
    q: 'Can I get VATS for lung cancer in India?',
    a: 'Yes. VATS lobectomy and wedge resection are performed at Apollo, Medanta, and Fortis by fellowship-trained thoracic surgeons. VATS lobectomy costs $7,000–$16,000 in India vs $50,000–$120,000 in the U.S. Recovery and complication profiles are equivalent.'
  },
  {
    q: 'Is treatment for IPF (idiopathic pulmonary fibrosis) available in India?',
    a: 'Yes. Partner hospitals offer full IPF management including antifibrotic therapy (pirfenidone and nintedanib as CDSCO-approved generics), HRCT staging, PFTs, DLCO, and multidisciplinary ILD board review. Lung transplant evaluation is also available at select centers.'
  },
  {
    q: 'Can I travel to India with severe COPD or on supplemental oxygen?',
    a: 'Travel feasibility is assessed individually. Sultan GHC\'s medical team reviews your FEV1, 6MWT, current O2 requirements, and recent exacerbation history before advising. Most airlines accommodate supplemental oxygen with advance notice. Your Case Manager coordinates oxygen logistics for the journey.'
  },
  {
    q: 'How much does a lung transplant cost in India?',
    a: 'Single lung transplant in the U.S. costs $400,000–$600,000. In India: $40,000–$70,000. Sultan GHC connects patients with specialized lung transplant centers based on diagnosis and candidacy criteria.'
  },
  {
    q: 'How much does a sleep study cost in India?',
    a: 'Overnight polysomnography (PSG) in the U.S. costs $1,000–$3,500 for self-pay patients. In India at a dedicated sleep lab: $150–$500. CPAP titration studies are similarly priced.'
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
