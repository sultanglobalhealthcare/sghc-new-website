import Link from 'next/link'
import {
  ChevronRight,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Clock,
  DollarSign,
  Star,
  Shield,
  Microscope,
  HeartPulse,
  Users,
  Globe2,
  ImageIcon,
} from 'lucide-react'

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Oncology & Cancer Care Abroad | India & Türkiye | Sultan GHC',
  description:
    'Access world-class oncology and cancer care in India and Türkiye at 60–80% lower cost than the U.S. Sultan GHC connects American patients with JCI-accredited cancer centers, top oncologists, and advanced treatments including chemotherapy, immunotherapy, and bone marrow transplants.',
  keywords: [
    'cancer treatment abroad',
    'oncology treatment India',
    'cancer treatment Türkiye',
    'affordable cancer care USA patients',
    'chemotherapy abroad',
    'bone marrow transplant India',
    'immunotherapy India',
    'medical tourism cancer treatment',
    'best cancer hospitals India',
    'cancer treatment cost comparison',
    'Sultan GHC oncology',
  ],
  openGraph: {
    title: 'Cancer Treatment Abroad — Oncology Care in India & Türkiye | Sultan GHC',
    description:
      'World-class cancer care at 60–80% lower than U.S. prices. JCI-accredited oncology centers in India and Türkiye, matched to your diagnosis.',
    url: 'https://www.sultanghc.com/treatments/oncology',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [
      {
        url: 'https://www.sultanghc.com/api/og?title=Oncology+%26+Cancer+Care+Abroad&desc=Chemotherapy%2C+radiation%2C+robotic+surgery+%26+immunotherapy+in+India+%26+Türkiye.+Save+60-80%25.&cat=Oncology',
        width: 1200,
        height: 630,
        alt: 'Oncology Cancer Treatment Abroad — Sultan GHC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancer Treatment Abroad — Oncology | Sultan GHC',
    description:
      'World-class cancer care at 60–80% lower than U.S. prices. JCI-accredited hospitals in India and Türkiye.',
  },
  alternates: {
    canonical: 'https://www.sultanghc.com/treatments/oncology',
  },
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://www.sultanghc.com/treatments' },
    { '@type': 'ListItem', position: 3, name: 'Oncology (Cancer Care)', item: 'https://www.sultanghc.com/treatments/oncology' },
  ],
}

const medicalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Oncology and Cancer Care Abroad — India and Türkiye',
  description:
    'Comprehensive oncology treatment services for U.S. patients at JCI-accredited hospitals in India and Türkiye, facilitated by Sultan GHC.',
  url: 'https://www.sultanghc.com/treatments/oncology',
  about: {
    '@type': 'MedicalCondition',
    name: 'Cancer',
    alternateName: ['Oncological conditions', 'Malignant tumors'],
    possibleTreatment: [
      { '@type': 'MedicalTherapy', name: 'Chemotherapy' },
      { '@type': 'MedicalTherapy', name: 'Immunotherapy' },
      { '@type': 'MedicalTherapy', name: 'Radiation Therapy' },
      { '@type': 'MedicalTherapy', name: 'Targeted Therapy' },
      { '@type': 'MedicalTherapy', name: 'Bone Marrow Transplant' },
      { '@type': 'MedicalTherapy', name: 'Surgical Oncology' },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does cancer treatment cost in India compared to the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cancer treatment in India typically costs 60–80% less than in the United States. For example, a full chemotherapy cycle that costs $50,000–$100,000 in the U.S. can be completed in India for $8,000–$20,000, including travel and accommodation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Indian and Turkish cancer hospitals safe and accredited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every hospital in our oncology network holds JCI (Joint Commission International) accreditation — the same global standard used to evaluate U.S. hospitals. Many of our partner cancer centers also hold NABH accreditation and ISO certifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a second opinion from an oncologist abroad before committing to treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Sultan GHC facilitates a complimentary first medical opinion from our network oncologists. Simply submit your medical reports, scans, and biopsy results, and we will arrange a remote review within 24–48 hours — your first consultation is at no cost and no obligation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of cancer are treated at your partner hospitals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our partner hospitals treat all major cancer types including breast, lung, colorectal, prostate, blood cancers (leukemia, lymphoma, myeloma), liver, cervical, stomach, brain tumors, thyroid, pancreatic, and many others. Rare and complex cancers are evaluated on a case-by-case basis.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long will I need to stay in India or Türkiye for cancer treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Length of stay depends on the type and stage of cancer and the treatment protocol. Surgical oncology procedures typically require 2–4 weeks. Chemotherapy and radiation therapy protocols may require multiple visits or extended stays. Your dedicated Case Manager will provide a personalised itinerary based on your oncologist's treatment plan.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is chemotherapy quality the same as in the U.S.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our partner hospitals use the same FDA-approved and internationally certified chemotherapy drugs and protocols as U.S. oncology centers. Many oncologists at these hospitals trained in the U.S., UK, or Europe and are internationally published researchers.',
      },
    },
  ],
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const CANCER_TYPES = [
  { name: 'Breast Cancer',            icon: '🎗️' },
  { name: 'Lung Cancer',              icon: '🫁' },
  { name: 'Colorectal Cancer',        icon: '🔬' },
  { name: 'Prostate Cancer',          icon: '🧬' },
  { name: 'Blood Cancers',            icon: '🩸' },
  { name: 'Cervical Cancer',          icon: '💊' },
  { name: 'Liver Cancer',             icon: '🏥' },
  { name: 'Stomach Cancer',           icon: '🔭' },
  { name: 'Brain Tumors',             icon: '🧠' },
  { name: 'Thyroid Cancer',           icon: '⚕️' },
  { name: 'Pancreatic Cancer',        icon: '🧪' },
  { name: 'Bone & Soft Tissue',       icon: '🦴' },
]

const TREATMENTS = [
  {
    title: 'Chemotherapy',
    desc: 'Systemic drug therapy using the same FDA-approved protocols as U.S. centers, administered by board-certified oncologists in modern infusion suites.',
  },
  {
    title: 'Radiation Therapy',
    desc: 'Advanced radiotherapy including IMRT, IGRT, Stereotactic Radiosurgery (SRS), and CyberKnife — with precision targeting to protect healthy tissue.',
  },
  {
    title: 'Surgical Oncology',
    desc: 'Minimally invasive and robotic tumor resections performed by internationally trained surgeons, with significantly shorter recovery times.',
  },
  {
    title: 'Immunotherapy',
    desc: 'Cutting-edge immune checkpoint inhibitors and monoclonal antibody therapies available at our partner hospitals for eligible patients.',
  },
  {
    title: 'Targeted Therapy',
    desc: 'Precision medicine targeting specific genetic mutations in tumors — including EGFR, HER2, BRAF, and ALK-positive cancers.',
  },
  {
    title: 'Bone Marrow Transplant',
    desc: 'Autologous and allogeneic stem cell transplants for blood cancers, performed in dedicated BMT units with full isolation protocols.',
  },
  {
    title: 'CAR-T Cell Therapy',
    desc: 'Available at select partner hospitals for eligible hematologic malignancies — a breakthrough treatment at a fraction of U.S. costs.',
  },
  {
    title: 'Palliative & Supportive Care',
    desc: 'Comprehensive pain management, nutrition support, and psychological care alongside active cancer treatment.',
  },
]

const COST_COMPARISON = [
  { procedure: 'Chemotherapy (per cycle)',       us: '$8,000–$30,000',    india: '$800–$3,000',     turkey: '$1,000–$4,000' },
  { procedure: 'Radiation Therapy (full course)',us: '$30,000–$80,000',   india: '$4,000–$12,000',  turkey: '$5,000–$15,000' },
  { procedure: 'Bone Marrow Transplant',         us: '$300,000–$800,000', india: '$25,000–$45,000', turkey: '$30,000–$60,000' },
  { procedure: 'Tumor Resection Surgery',        us: '$20,000–$60,000',   india: '$3,000–$10,000',  turkey: '$4,000–$12,000' },
  { procedure: 'PET-CT Scan',                    us: '$3,000–$6,000',     india: '$300–$600',       turkey: '$400–$800' },
  { procedure: 'Immunotherapy (per session)',    us: '$10,000–$30,000',   india: '$1,500–$5,000',   turkey: '$2,000–$6,000' },
]

const FAQS = [
  {
    q: 'How much does cancer treatment cost in India compared to the U.S.?',
    a: 'Cancer treatment in India typically costs 60–80% less than in the United States. For example, a full chemotherapy cycle that costs $50,000–$100,000 in the U.S. can be completed in India for $8,000–$20,000, including travel and accommodation.',
  },
  {
    q: 'Are Indian and Turkish cancer hospitals safe and accredited?',
    a: 'Yes. Every hospital in our oncology network holds JCI (Joint Commission International) accreditation — the same global standard used to evaluate U.S. hospitals. Many of our partner cancer centers also hold NABH accreditation and ISO certifications.',
  },
  {
    q: 'Can I get a second opinion from an oncologist abroad before committing to treatment?',
    a: 'Absolutely. Sultan GHC facilitates a complimentary first medical opinion from our network oncologists. Simply submit your medical reports, scans, and biopsy results, and we will arrange a remote review within 24–48 hours — your first consultation is at no cost, no obligation.',
  },
  {
    q: 'What types of cancer are treated at your partner hospitals?',
    a: 'Our partner hospitals treat all major cancer types including breast, lung, colorectal, prostate, blood cancers (leukemia, lymphoma, myeloma), liver, cervical, stomach, brain tumors, thyroid, pancreatic, and many others. Rare and complex cancers are evaluated on a case-by-case basis.',
  },
  {
    q: 'How long will I need to stay in India or Türkiye for cancer treatment?',
    a: 'Length of stay depends on the type and stage of cancer and the treatment protocol. Surgical procedures typically require 2–4 weeks. Chemotherapy and radiation protocols may require multiple visits. Your Case Manager will provide a personalised itinerary based on your treatment plan.',
  },
  {
    q: 'Is chemotherapy quality the same as in the U.S.?',
    a: 'Yes. Our partner hospitals use the same FDA-approved and internationally certified chemotherapy drugs and protocols as U.S. oncology centers. Many oncologists trained in the U.S., UK, or Europe and are internationally published researchers.',
  },
]

// ─── Reusable Components ──────────────────────────────────────────────────────

function ImagePlaceholder({ width, height, label, className = '' }) {
  return (
    <div
      className={`relative bg-gradient-to-br from-blue-50 to-slate-100 border-2 border-dashed border-blue-200 rounded-2xl flex flex-col items-center justify-center gap-3 text-center p-6 ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      aria-label={label}
      role="img"
    >
      <ImageIcon size={32} className="text-blue-300" />
      <div>
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{label}</p>
        <p className="text-[11px] text-blue-300 mt-0.5">{width} × {height}px</p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OncologyPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">Oncology & Cancer Care</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left */}
            <div className="flex-1">
              <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                Oncology & Cancer Care
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                World-Class Cancer Treatment in{' '}
                <span className="text-primary">India & Türkiye</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-xl">
                Access the same advanced oncology treatments available in the U.S. — at 60–80% lower cost.
                Sultan GHC connects American cancer patients with internationally accredited specialists
                and cancer centers in India and Türkiye.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['JCI-Accredited Hospitals', 'Free First Opinion', 'Dedicated Oncology Case Manager', 'No Waiting Lists'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-blue-100 text-gray-600 px-3 py-1.5 rounded-full shadow-sm">
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
                  Get Your Free First Cancer Consultation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <MessageCircle size={16} />
                  WhatsApp a Specialist
                </a>
              </div>
            </div>

            {/* Right — Hero image */}
            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                width={800}
                height={600}
                label="Hero — Oncologist reviewing cancer scans with patient"
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
              { value: '60–80%', label: 'Cost savings vs. U.S. treatment', icon: DollarSign },
              { value: '24–48hrs', label: 'Free first opinion turnaround', icon: Clock },
              { value: 'JCI', label: 'Accredited oncology hospitals only', icon: Shield },
              { value: '12+', label: 'Cancer types treated at our network', icon: Microscope },
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

      {/* ── Why Seek Cancer Care Abroad ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="flex-1 w-full max-w-lg">
            <ImagePlaceholder
              width={700}
              height={520}
              label="Patient in consultation with oncologist — supportive care setting"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Why Consider Treatment Abroad
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-5 leading-snug">
              The Reality of Cancer Care Costs in America
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              For many Americans, the cost of cancer treatment is devastating. Even with insurance,
              out-of-pocket expenses for chemotherapy, surgery, and radiation can reach six figures.
              Uninsured or underinsured patients often face impossible choices.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our partner hospitals in India and Türkiye provide the exact same internationally accredited
              standard of oncology care — using the same drugs, protocols, and technologies — at a
              fraction of the U.S. price, with no waitlists and no insurance gatekeepers.
            </p>

            <div className="space-y-3">
              {[
                'Same chemotherapy drugs and protocols as U.S. oncology centers',
                'Oncologists trained at U.S., UK, and European medical institutions',
                'No insurance denials or prior-authorization delays',
                'Internationally certified pathology and imaging labs on-site',
                'English-speaking oncology teams across all partner hospitals',
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

      {/* ── Cancer Types Treated ── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Conditions We Treat
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Cancer Types Treated at Our Network
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our partner hospitals cover the full spectrum of oncological conditions.
              If your cancer type is not listed, submit your case — most conditions are evaluated.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CANCER_TYPES.map(({ name, icon }) => (
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
            Don't see your cancer type?{' '}
            <Link href="/enquiry" className="text-primary hover:underline font-medium">
              Submit your case for a free review →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Treatment Options ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Available Treatments
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Advanced Oncology Treatment Options
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Our partner cancer centers offer the complete spectrum of modern oncology treatments —
            from standard chemotherapy to cutting-edge CAR-T cell therapy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TREATMENTS.map(({ title, desc }) => (
            <div key={title} className="bg-[#EEF4FF] rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center mb-4">
                <HeartPulse size={16} className="text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── India vs Türkiye ── */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Choose Your Destination
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-4">
              Cancer Treatment in India or Türkiye?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Both destinations offer world-class oncology care. Here is how they compare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* India */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/in.png" width={40} height={30} alt="India" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Oncology in India</h3>
                  <p className="text-sm text-gray-400">Largest medical tourism destination</p>
                </div>
              </div>

              {/* Destination image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <ImagePlaceholder
                  width={600}
                  height={280}
                  label="Cancer hospital exterior — India flagship oncology center"
                  className="rounded-xl"
                />
              </div>

              <ul className="space-y-3">
                {[
                  'World-renowned cancer centers — Tata Memorial, Apollo, Fortis',
                  'Lowest cost for chemotherapy and bone marrow transplants globally',
                  'Leading destination for complex hematological cancers',
                  'CAR-T cell therapy available at select centers',
                  'U.S.-trained oncologists with international publications',
                  'Ayurvedic and integrative supportive care available',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                href="/destinations/india"
                className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:underline font-medium"
              >
                Explore India for Cancer Treatment <ArrowRight size={14} />
              </Link>
            </div>

            {/* Türkiye */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/40x30/tr.png" width={40} height={30} alt="Türkiye" className="rounded shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Oncology in Türkiye</h3>
                  <p className="text-sm text-gray-400">Europe-adjacent, cutting-edge facilities</p>
                </div>
              </div>

              {/* Destination image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <ImagePlaceholder
                  width={600}
                  height={280}
                  label="Modern oncology center exterior — Istanbul Türkiye"
                  className="rounded-xl"
                />
              </div>

              <ul className="space-y-3">
                {[
                  'Istanbul-based centers with EU-standard oncology protocols',
                  'Strong in surgical oncology and robotic tumor resections',
                  'Shorter travel time for East Coast U.S. patients',
                  'Advanced CyberKnife and Gamma Knife radiosurgery centers',
                  'Growing expertise in immunotherapy and targeted therapy',
                  'Excellent post-treatment tourism and recovery facilities',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                href="/destinations/turkey"
                className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:underline font-medium"
              >
                Explore Türkiye for Cancer Treatment <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost Comparison Table ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Cost Comparison
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Cancer Treatment Cost: U.S. vs. India vs. Türkiye
          </h2>
          <p className="text-gray-500 leading-relaxed">
            All estimates are approximate and vary by hospital, stage of cancer, and individual protocol.
            Your Case Manager will provide a precise quote based on your reports.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-950 text-white">
                <th className="text-left px-6 py-4 font-semibold">Procedure</th>
                <th className="text-center px-6 py-4 font-semibold"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/us.png" width={20} height={15} alt="USA" className="rounded-sm" />USA</span></th>
                <th className="text-center px-6 py-4 font-semibold text-primary"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/in.png" width={20} height={15} alt="India" className="rounded-sm" />India</span></th>
                <th className="text-center px-6 py-4 font-semibold text-primary"><span className="inline-flex items-center justify-center gap-1.5"><img src="https://flagcdn.com/20x15/tr.png" width={20} height={15} alt="Türkiye" className="rounded-sm" />Türkiye</span></th>
              </tr>
            </thead>
            <tbody>
              {COST_COMPARISON.map((row, i) => (
                <tr key={row.procedure} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-medium text-gray-800">{row.procedure}</td>
                  <td className="px-6 py-4 text-center text-red-600 font-medium">{row.us}</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">{row.india}</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">{row.turkey}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-start gap-2.5 mt-4">
          <AlertCircle size={14} className="text-gray-400 mt-0.5 shrink-0" />
          <p className="text-xs text-gray-400 leading-relaxed">
            Prices are approximate estimates for educational purposes only. Actual costs depend on cancer type,
            stage, treatment protocol, and hospital selection. Sultan GHC does not charge a fee for cost estimates.
          </p>
        </div>
      </section>

      {/* ── Hospital Spotlight ── */}
      <section className="bg-[#EEF4FF] border-y border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Our Hospital Network
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Internationally Accredited Cancer Centers
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Every hospital below holds JCI accreditation and has a dedicated oncology
              department with internationally trained specialists.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                country: 'India',
                name: 'Apollo Cancer Centres',
                location: 'Chennai, Mumbai, Delhi',
                spec: 'Bone Marrow Transplant, Surgical Oncology, CAR-T',
              },
              {
                country: 'India',
                name: 'Fortis Memorial Research Institute',
                location: 'Gurugram, Delhi NCR',
                spec: 'Robotic Surgery, Radiation Oncology, Immunotherapy',
              },
              {
                country: 'India',
                name: 'Manipal Hospitals',
                location: 'Bangalore, Kolkata, Vijayawada',
                spec: 'Medical Oncology, Targeted Therapy, Hematology',
              },
              {
                country: 'India',
                name: 'Rela Institute & Medical Centre',
                location: 'Chennai',
                spec: 'Hepatobiliary Oncology, GI Cancer Surgery, Robotic Resection',
              },
              {
                country: 'Türkiye',
                name: 'Memorial Hospital Group',
                location: 'Istanbul, Ankara',
                spec: 'Gamma Knife, CyberKnife, Surgical Oncology',
              },
              {
                country: 'Türkiye',
                name: 'Acibadem Healthcare Group',
                location: 'Istanbul, Izmir',
                spec: 'PET-CT, IMRT Radiation, Chemotherapy Suites',
              },
              {
                country: 'Türkiye',
                name: 'Medipol Mega Hospital',
                location: 'Istanbul',
                spec: 'Proton Therapy, Stem Cell, Integrative Oncology',
              },
            ].map((hospital) => (
              <div key={hospital.name} className="bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                {/* Hospital image placeholder */}
                <ImagePlaceholder
                  width={400}
                  height={200}
                  label={`${hospital.name} — hospital building photo`}
                  className="rounded-none rounded-t-2xl border-0 border-b border-blue-100"
                />
                <div className="p-5">
                  <p className="text-[11px] font-semibold text-primary mb-1">{hospital.country}</p>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{hospital.name}</h3>
                  <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                    <Globe2 size={11} /> {hospital.location}
                  </p>
                  <p className="text-xs text-gray-500 bg-blue-50 px-3 py-2 rounded-lg">
                    <span className="font-medium text-primary">Specialties:</span> {hospital.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/hospitals/india"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline mr-6"
            >
              View all hospitals in India <ArrowRight size={14} />
            </Link>
            <Link
              href="/hospitals/turkey"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
            >
              View all hospitals in Türkiye <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Patient Journey ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Your Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            How Your Cancer Treatment Journey Works
          </h2>
          <p className="text-gray-500 leading-relaxed">
            From your first enquiry to returning home healthy — Sultan GHC manages every step.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { step: '01', title: 'Submit Medical Reports', body: 'Share your pathology reports, imaging scans, and treatment history through our secure portal. No obligation at this stage.' },
            { step: '02', title: 'Free First Oncologist Review', body: 'Our network oncologists review your case within 24–48 hours and provide a complimentary first opinion and recommended treatment protocol.' },
            { step: '03', title: 'Cost Estimate & Planning', body: 'Receive a transparent, itemised cost estimate with hospital options, doctor profiles, and duration of stay — no hidden fees.' },
            { step: '04', title: 'Visa & Travel Support', body: 'We obtain your medical visa invitation letter and guide you through the full visa application process for India or Türkiye.' },
            { step: '05', title: 'Treatment & In-Person Care', body: 'Our on-ground team accompanies you through admission, treatment, and daily hospital visits to ensure your comfort.' },
            { step: '06', title: 'Follow-Up After You Return', body: 'Remote video consultations with your oncologist continue after you return home to monitor your recovery and next steps.' },
          ].map(({ step, title, body }) => (
            <div key={step} className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-md transition-all overflow-hidden">
              <span className="absolute -bottom-3 -right-1 text-[80px] font-bold text-gray-100 leading-none select-none pointer-events-none">
                {step}
              </span>
              <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-2">Step {step}</p>
              <h3 className="text-base font-semibold text-gray-900 mb-2 relative z-10">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed relative z-10">{body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
          >
            Read the full patient journey guide <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Cancer Treatment Abroad — FAQs
            </h2>
            <p className="text-gray-500">
              Common questions from U.S. patients considering oncology treatment in India or Türkiye.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-800 leading-snug">{faq.q}</span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 group-open:border-primary group-open:text-primary transition-colors text-lg font-light leading-none">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-white/5" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-[11px] font-semibold text-blue-100 uppercase tracking-widest mb-4">
              Start Your Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-4 leading-tight">
              Get Your Free First Cancer Opinion Within 48 Hours
            </h2>
            <p className="text-blue-100 leading-relaxed mb-8">
              Upload your medical reports and receive a personalised oncology review from
              an internationally accredited specialist — your first review is at no cost, no commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 bg-white text-primary text-sm font-bold px-7 py-3.5 rounded-full shadow-xl hover:scale-[1.02] transition-all"
              >
                Upload Reports & Get Opinion
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+16107870713"
                className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
              >
                <Phone size={16} />
                +1-610-787-0713
              </a>
            </div>
            <p className="text-blue-200 text-xs mt-6">
              * Sultan GHC does not provide medical advice, diagnosis, or treatment.
              We are a healthcare facilitation company.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
