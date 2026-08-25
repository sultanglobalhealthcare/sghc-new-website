import PartnerHospitalsSection from "@/landing/PartnerHospitalsSection";
import Link from 'next/link'
import {
  ChevronRight, ArrowRight, Phone, MessageCircle,
  CheckCircle2, Brain, Activity, AlertCircle,
  DollarSign, Shield, Users
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Neurology Treatment Abroad | India & Türkiye | Sultan GHC',
  description:
    'Access world-class neurology care — stroke, epilepsy, Parkinson\'s, multiple sclerosis, deep brain stimulation, and more — in India and Türkiye at 70–90% lower cost than U.S. prices. Sultan GHC connects American patients with JCI-accredited neurology centers and internationally trained neurologists.',
  keywords: [
    'neurology treatment abroad',
    'stroke treatment India',
    'epilepsy treatment Türkiye',
    'Parkinson\'s disease treatment India',
    'deep brain stimulation India cost',
    'multiple sclerosis treatment abroad',
    'neurology India vs USA cost',
    'affordable neurology care for Americans',
    'brain MRI India cost',
    'EEG test India cost',
    'neurologist India internationally trained',
    'medical tourism neurology',
    'Sultan GHC neurology',
    'brain specialist India Türkiye',
  ],
  openGraph: {
    title: 'Neurology Treatment in India & Türkiye — Affordable for U.S. Patients | Sultan GHC',
    description:
      'World-class neurology care at 70–90% lower than U.S. prices. JCI-accredited neurology hospitals in India and Türkiye matched to your diagnosis.',
    url: 'https://www.sultanghc.com/treatments/neurology',
    siteName: 'Sultan Global Health Care',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neurology Treatment Abroad | Sultan GHC',
    description:
      'Stroke, Parkinson\'s, epilepsy, MS care in India & Türkiye at 70–90% less than U.S. costs. JCI-accredited hospitals.'
  },
  alternates: { canonical: 'https://www.sultanghc.com/treatments/neurology' }
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Neurology',  item: 'https://www.sultanghc.com/treatments/neurology' },
  ]
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Neurology Treatment Abroad — India and Türkiye',
  description:
    'Comprehensive neurology services for U.S. patients at JCI-accredited hospitals in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/neurology',
  about: {
    '@type': 'MedicalSpecialty',
    name: 'Neurology',
    alternateName: ['Brain & Nervous System Medicine', 'Clinical Neurology'],
    relevantSpecialty: 'Neurology'
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does deep brain stimulation (DBS) cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deep brain stimulation (DBS) for Parkinson\'s disease in the U.S. typically costs $80,000–$150,000 including device and surgery. At a JCI-accredited hospital in India, the same procedure — using FDA-approved Medtronic or Abbott devices — costs $15,000–$28,000, a saving of 80–85%. Türkiye offers DBS for $20,000–$35,000. Sultan GHC provides a personalised cost estimate at no charge.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are neurologists in India trained to U.S. or European standards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many neurologists at our partner JCI-accredited hospitals completed their fellowships and sub-specialty training in the United States, United Kingdom, or Germany. They hold board certifications from international bodies including the American Board of Psychiatry and Neurology (ABPN) equivalent, Royal College of Physicians (UK), and the European Academy of Neurology. They regularly publish in peer-reviewed journals and attend international neurology conferences.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I travel to India or Türkiye after a stroke?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travel after a stroke depends on neurological stability. Most neurologists recommend waiting a minimum of 4–6 weeks after an ischemic stroke before long-haul air travel, subject to individual clinical assessment. Sultan GHC\'s medical team reviews your imaging, current medications, and neurological status before making a travel recommendation. For sub-acute rehabilitation rather than acute care, travel is often safe and beneficial.'
      }
    },
    {
      '@type': 'Question',
      name: 'What neurology tests are available in India and Türkiye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our partner hospitals offer the full range of diagnostic neurology: 3T MRI brain and spine, CT angiography, EEG (routine and long-term), video EEG epilepsy monitoring, nerve conduction studies (NCS), electromyography (EMG), evoked potentials (VEP, BAEP, SSEP), PET-CT for dementia workup, neuropsychological testing, and CSF analysis. Turnaround times are typically 24–48 hours for routine studies.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long will I need to stay for neurology treatment in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stay duration depends on the procedure. Diagnostic evaluations take 3–7 days. Epilepsy monitoring unit stays are typically 5–10 days. Deep brain stimulation surgery requires 7–14 days in-country including pre-operative assessment, surgery, and post-operative programming. Stroke rehabilitation stays vary from 3 to 8 weeks depending on deficit severity. Sultan GHC\'s Case Managers plan your full itinerary.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Sultan GHC arrange a second opinion from a neurologist before treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and we encourage it. Sultan GHC arranges a complimentary remote second opinion from our network neurologists within 24–48 hours. Upload your MRI scans, EEG reports, genetic tests, and medication history. Our specialists review your case and provide a written recommendation. There is no cost and no obligation for the first opinion.'
      }
    },
  ]
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const CONDITIONS = [
  { name: 'Stroke (Ischemic & Hemorrhagic)',   icon: '🧠' },
  { name: 'Epilepsy & Seizure Disorders',       icon: '⚡' },
  { name: "Parkinson's Disease",                icon: '🤲' },
  { name: 'Multiple Sclerosis (MS)',            icon: '🔗' },
  { name: 'Alzheimer\'s & Dementia',            icon: '🔬' },
  { name: 'Migraine & Chronic Headache',        icon: '💊' },
  { name: 'Peripheral Neuropathy',              icon: '🦵' },
  { name: 'ALS (Motor Neuron Disease)',         icon: '🧬' },
  { name: 'Myasthenia Gravis',                  icon: '💪' },
  { name: 'Guillain-Barré Syndrome',            icon: '🩺' },
  { name: 'Cerebrovascular Disease',            icon: '🫀' },
  { name: 'Traumatic Brain Injury (TBI)',       icon: '🏥' },
]

const TREATMENTS = [
  {
    title: 'Stroke Management & Thrombolysis',
    desc: 'IV tPA (thrombolysis) and mechanical thrombectomy for acute ischemic stroke — performed in dedicated stroke units with 24/7 neuro-intervention teams. Post-stroke rehabilitation is integrated from day one.'
  },
  {
    title: 'Deep Brain Stimulation (DBS)',
    desc: 'FDA-approved Medtronic and Abbott DBS systems implanted by internationally trained neurosurgeons for Parkinson\'s disease, essential tremor, and dystonia. Post-implant programming by specialist neurologists included.'
  },
  {
    title: 'Epilepsy & Long-Term Video EEG Monitoring',
    desc: 'Dedicated epilepsy monitoring units (EMU) with continuous video-EEG recording to accurately classify seizures and determine surgical candidacy — essential for patients with drug-resistant epilepsy.'
  },
  {
    title: 'Multiple Sclerosis Disease Management',
    desc: 'Neurologist-led MS management including disease-modifying therapies (DMTs), infusion therapy (natalizumab, ocrelizumab), and structured MRI monitoring. Second opinions for MS diagnosis are frequently requested.'
  },
  {
    title: 'Botulinum Toxin Therapy',
    desc: 'Botox injections for movement disorders, spasticity, cervical dystonia, chronic migraine, and hemifacial spasm — administered by movement disorder specialists with clinical follow-up.'
  },
  {
    title: 'Neurophysiology — EEG, EMG & NCS',
    desc: 'Full neurophysiology laboratory services: EEG, nerve conduction studies (NCS), electromyography (EMG), evoked potentials. Available in 24–48 hours with expert interpretation by consultant neurophysiologists.'
  },
  {
    title: 'Memory & Dementia Clinic',
    desc: 'Comprehensive cognitive assessment, neuropsychological testing, biomarker analysis (CSF tau, amyloid), and PET-CT dementia workup. Specialist memory clinics at partner hospitals in India offer structured diagnostic pathways.'
  },
  {
    title: 'Neuro-Rehabilitation',
    desc: 'Multidisciplinary neuro-rehabilitation for stroke, TBI, spinal cord injury, and Guillain-Barré — combining physiotherapy, speech & language therapy, occupational therapy, and neuropsychology under one care team.'
  },
]

const COST_COMPARISON = [
  { procedure: 'MRI Brain (3T)',                    us: '$1,500–$3,500',    india: '$100–$300',      turkey: '$150–$450' },
  { procedure: 'EEG (routine)',                     us: '$1,500–$4,000',    india: '$50–$200',       turkey: '$100–$350' },
  { procedure: 'Video EEG Epilepsy Monitoring (5d)',us: '$20,000–$50,000',  india: '$2,000–$6,000',  turkey: '$3,000–$8,000' },
  { procedure: 'Nerve Conduction Study (NCS/EMG)',  us: '$1,500–$4,000',    india: '$80–$300',       turkey: '$120–$450' },
  { procedure: 'Deep Brain Stimulation (DBS)',      us: '$80,000–$150,000', india: '$15,000–$28,000',turkey: '$20,000–$35,000' },
  { procedure: 'Botulinum Toxin (full session)',    us: '$2,000–$5,000',    india: '$200–$600',      turkey: '$300–$800' },
  { procedure: 'Lumbar Puncture (CSF analysis)',    us: '$1,500–$5,000',    india: '$100–$400',      turkey: '$150–$600' },
  { procedure: 'Neuropsychological Testing',        us: '$3,000–$6,000',    india: '$300–$800',      turkey: '$400–$1,000' },
]

const FAQS = [
  {
    q: 'How much does deep brain stimulation (DBS) cost in India compared to the U.S.?',
    a: 'DBS in the U.S. typically costs $80,000–$150,000. At a JCI-accredited hospital in India using FDA-approved Medtronic or Abbott devices, the same procedure costs $15,000–$28,000 — a saving of 80–85%. Türkiye costs $20,000–$35,000. Sultan GHC provides a personalised cost estimate at no charge.'
  },
  {
    q: 'Are neurologists in India trained to U.S. or European standards?',
    a: 'Many neurologists at our partner hospitals completed fellowship and sub-specialty training in the U.S., UK, or Germany. They hold international certifications (ABPN equivalent, Royal College of Physicians UK, European Academy of Neurology) and publish regularly in peer-reviewed journals.'
  },
  {
    q: 'Can I travel to India or Türkiye after a stroke?',
    a: 'Travel after a stroke depends on neurological stability. Most neurologists recommend waiting at least 4–6 weeks after an ischemic stroke before long-haul travel, subject to individual assessment. Sultan GHC\'s medical team reviews your imaging and clinical status before advising on travel. For sub-acute rehab, travel is often safe and highly beneficial.'
  },
  {
    q: 'What neurology tests are available in India and Türkiye?',
    a: 'Partner hospitals offer the full diagnostic range: 3T MRI brain and spine, CT angiography, EEG (routine and long-term), video EEG, nerve conduction studies, EMG, evoked potentials, PET-CT for dementia workup, neuropsychological testing, and CSF analysis. Turnaround is typically 24–48 hours.'
  },
  {
    q: 'How long will I need to stay for neurology treatment in India?',
    a: 'Diagnostic evaluations take 3–7 days. Epilepsy monitoring unit stays are 5–10 days. Deep brain stimulation requires 7–14 days (assessment, surgery, programming). Stroke rehabilitation varies from 3–8 weeks. Your Sultan GHC Case Manager coordinates the full itinerary.'
  },
  {
    q: 'Does Sultan GHC arrange a second opinion from a neurologist before treatment?',
    a: 'Yes — and we encourage it. Sultan GHC arranges a complimentary remote second opinion within 24–48 hours. Upload your MRI scans, EEG reports, and medication history. Our specialists review your case and provide a written recommendation. The first opinion is at no cost and no obligation.'
  },
]

const RELATED_TREATMENTS = [
  { name: 'Neurosurgery',                                   href: '/treatments/neurosurgery',                         desc: 'Brain tumor surgery, aneurysm clipping, spine decompression, Gamma Knife radiosurgery' },
  { name: 'Spine & Sports Injury',                          href: '/treatments/spine-sports-injury',                  desc: 'Cervical and lumbar disc disease, spinal stenosis, minimally invasive spine surgery' },
  { name: 'Oncology & Cancer Care',                         href: '/treatments/oncology',                             desc: 'Brain tumor oncology, radiation therapy, and chemotherapy protocols' },
  { name: 'Robotic & Minimally Invasive Surgery',           href: '/treatments/robotic-minimally-invasive',           desc: 'Precision robotic procedures including robotic spine and neurosurgery assistance' },
  { name: 'Organ & Bone Marrow Transplantation',            href: '/treatments/organ-bone-marrow-transplant',         desc: 'For neurological conditions requiring stem cell or bone marrow treatment' },
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

export default function NeurologyPage() {
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
            <span className="text-primary font-medium">Neurology</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left */}
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Neurology & Brain Medicine
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                World-Class Neurology Care in{' '}
                <span className="text-primary">India & Türkiye</span> — at 70–90% Less Than U.S. Costs
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Brain and nervous system conditions demand expert diagnosis and precision medicine. Sultan GHC connects U.S. patients with internationally trained neurologists at JCI-accredited hospitals in India and Türkiye — the same standard of care at a fraction of American prices.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: CheckCircle2, text: 'JCI-Accredited Neurology Centers' },
                  { icon: Brain,       text: 'Fellowship-Trained Neurologists' },
                  { icon: Shield,      text: 'FDA-Approved Devices & Drugs' },
                  { icon: Users,       text: 'Dedicated International Patient Desk' },
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
                  Request Free Consultation <ArrowRight size={16} />
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

            {/* Right — image placeholder */}
            <div className="w-full lg:w-[420px] shrink-0">
              <ImagePlaceholder
                filename="neurology-treatment-india-turkey-us-patients.jpg"
                width={840}
                height={630}
                aspectRatio="4/3"
                label="World-class neurology care — Sultan GHC partner hospital, India"
                aiPrompt="A senior neurologist reviewing 3T MRI brain scans on a large monitor in a modern, well-lit hospital neurology suite. Equipment includes EEG monitoring station in background. Clean, professional, warm atmosphere. Photorealistic, 4K quality, no text overlays."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Neurology vs Neurosurgery callout ── */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Neurology vs Neurosurgery:</strong> Neurologists diagnose and manage brain and nervous system conditions medically. When surgery is required — brain tumor removal, aneurysm clipping, or deep spine decompression — that falls under{' '}
                <Link href="/treatments/neurosurgery" className="text-primary font-semibold hover:underline">
                  Neurosurgery →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conditions Treated ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Neurological Conditions We Coordinate Care For
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              From acute stroke management to long-term neurodegenerative disease — our partner hospitals manage the full spectrum of neurological conditions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CONDITIONS.map(({ name, icon }) => (
              <div
                key={name}
                className="flex items-center gap-3 bg-[#F4F8FF] border border-[#dce8ff] rounded-xl px-4 py-3"
              >
                <span className="text-xl shrink-0" aria-hidden="true">{icon}</span>
                <span className="text-sm font-medium text-gray-800 leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Treatments & Procedures ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Neurology Treatments & Procedures Available
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Our partner hospitals in India and Türkiye offer the complete range of diagnostic and therapeutic neurology services — managed with the same protocols used in leading U.S. medical centers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {TREATMENTS.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
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
            <p className="text-sm text-gray-500 mb-4">
              Not sure which treatment applies to your condition?
            </p>
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Submit Your Case for Free Medical Review <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cost Comparison Table ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Neurology Cost Comparison: USA vs India vs Türkiye
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              All figures represent approximate self-pay costs. U.S. figures sourced from FAIR Health Consumer, CMS, and published hospital pricing data. India and Türkiye figures from JCI-accredited partner hospital published rates.
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
                  <tr
                    key={row.procedure}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
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
            Costs are indicative estimates for self-pay patients. Actual costs vary by hospital, device brand, length of stay, and individual clinical complexity.{' '}
            <Link href="/cost-savings/india" className="text-primary hover:underline">
              See detailed India cost savings →
            </Link>
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Average Saving in India', value: '80–90%', sub: 'vs U.S. self-pay costs' },
              { label: 'Average Saving in Türkiye', value: '70–85%', sub: 'vs U.S. self-pay costs' },
              { label: 'Free First Consultation', value: '24–48 hrs', sub: 'remote medical opinion' },
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

      {/* ── Why India / Türkiye for Neurology ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* India */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Neurology in India</h3>
                  <p className="text-sm text-gray-500">Apollo, Fortis, Medanta, Rela Institute, NIMHANS</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'NIMHANS (Bengaluru) ranked among Asia\'s top neurology centers',
                  '3T and 7T MRI available at Apollo Hospitals and Medanta',
                  'DBS surgery with Medtronic and Abbott systems by trained movement disorder specialists',
                  'Epilepsy monitoring units (EMU) at multiple partner centers with video-EEG',
                  'Stroke units with 24/7 neuro-intervention and thrombolysis capability',
                  'Neurologists with training from UCSF, Mayo Clinic, Johns Hopkins, and UK Royal Colleges',
                                    'Rela Institute, Chennai — NABH-accredited 450-bed multi-specialty hospital; MOU partner of Sultan GHC',
'India Medical e-Visa processed in 3–5 business days for U.S. citizens',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100 flex gap-3 flex-wrap">
                <Link href="/visa-guide/india" className="text-xs text-primary font-semibold hover:underline">
                  India Medical Visa Guide →
                </Link>
                <Link href="/cost-savings/india" className="text-xs text-primary font-semibold hover:underline">
                  Cost Savings in India →
                </Link>
                <Link href="/destinations/india" className="text-xs text-primary font-semibold hover:underline">
                  Destination Guide →
                </Link>
              </div>
            </div>

            {/* Türkiye */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/tr.png" width={40} height={30} alt="Türkiye" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Neurology in Türkiye</h3>
                  <p className="text-sm text-gray-500">Acibadem, Memorial, Koc University Hospital, Medicana</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Acibadem Neurology Center ranked among Europe\'s leading neurological institutes',
                  'Memorial Hospital Group operates dedicated Parkinson\'s and movement disorder clinics',
                  'Gamma Knife and CyberKnife radiosurgery available for non-surgical candidates',
                  'Same-day MRI, EEG, and neurophysiology with 24-hour report turnaround',
                  'U.S. citizens visa-free for Türkiye — no pre-approval required (effective Jan 2024)',
                  'Istanbul\'s hospitals are 30–60 minutes from 7 U.S. nonstop routes via Turkish Airlines',
                  'Interpreter and patient liaison support available in English for all appointments',
                  'Medicana International, Istanbul — JCI-accredited since 2010; 191-bed purpose-built facility; full international patient support program',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100 flex gap-3 flex-wrap">
                <Link href="/visa-guide/turkey" className="text-xs text-primary font-semibold hover:underline">
                  Türkiye Entry Guide →
                </Link>
                <Link href="/cost-savings/turkey" className="text-xs text-primary font-semibold hover:underline">
                  Cost Savings in Türkiye →
                </Link>
                <Link href="/destinations/turkey" className="text-xs text-primary font-semibold hover:underline">
                  Destination Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works CTA ── */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Ready to Explore Neurology Care Abroad?
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Submit your MRI, EEG reports, or diagnosis summary. Our medical team reviews your case and connects you with the right neurologist within 24–48 hours — at no cost, no obligation.
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
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                    {t.name}
                  </h3>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-primary transition-colors shrink-0" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline"
            >
              View All 19 Treatment Specialties <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <PartnerHospitalsSection title="Internationally Accredited Neurology Centers" />

      {/* ── FAQ Section ── */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Frequently Asked Questions — Neurology Abroad
            </h2>
            <p className="text-gray-500 text-sm">
              Answers sourced from clinical experience and real patient journeys coordinated by Sultan GHC.
            </p>
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
            Have a question not listed here?{' '}
            <Link href="/faq" className="text-primary font-semibold hover:underline">
              Visit our full FAQ →
            </Link>
            {' '}or{' '}
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              contact our Patient Care team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Get a Free Neurology Second Opinion
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Upload your MRI scans, EEG results, clinical notes, or diagnosis report. Our medical team will connect you with a senior neurologist from our network within 24–48 hours.
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
