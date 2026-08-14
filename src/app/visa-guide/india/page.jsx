import Link from 'next/link'
import {
  FileText, CheckCircle, AlertCircle, Clock, Globe,
  Users, ArrowRight, ExternalLink, Info, Shield,
  MapPin, Phone, Building2, Plane
} from 'lucide-react'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'India Medical Visa Guide for US Patients | e-Medical Visa Requirements 2026 | Sultan GHC',
  description:
    'Complete India Medical e-Visa guide for American patients. Official requirements, fees, processing time, document checklist, attendant visa (MED-X) rules, and step-by-step application process for treatment in India.',
  keywords: [
    'India medical visa US citizens',
    'India e-Medical visa requirements',
    'medical visa India American patients',
    'India medical visa documents',
    'NABH hospital invitation letter India',
    'India medical attendant visa MED-X',
    'indianvisaonline.gov.in medical visa',
    'India medical tourism visa process',
    'India medical visa fee',
    'FRRO registration India',
    'medical visa India 60 days triple entry',
    'India medical visa extension FRRO',
  ],
  openGraph: {
    title: 'India Medical e-Visa — Complete Guide for American Patients | Sultan GHC',
    description:
      'Everything US patients need to know about India Medical e-Visa: official fees, processing time, document checklist, attendant visa rules, and FRRO extension process.',
    url: 'https://www.sultanghc.com/visa-guide/india',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  alternates: { canonical: 'https://www.sultanghc.com/visa-guide/india' },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const VISA_FACTS = [
  { label: 'Visa Category', value: 'e-Medical Visa (e-MV)', note: 'Dedicated medical category — tourist visa is NOT valid for treatment' },
  { label: 'Validity', value: '60 days from first arrival', note: 'Extendable to 6 months via FRRO for long-term treatment' },
  { label: 'Entries Permitted', value: 'Triple entry', note: 'Three entries within the 60-day validity window' },
  { label: 'Government Fee (US Citizens)', value: '~USD 84–100', note: 'Plus 2.5% bank processing charge. Non-refundable.' },
  { label: 'Processing Time', value: '3–5 business days', note: 'Apply at least 4 business days before travel. Not same-day.' },
  { label: 'Official Application Portal', value: 'indianvisaonline.gov.in', note: 'Only this URL. Third-party lookalike sites charge 2–5× the fee.' },
  { label: 'Passport Validity Required', value: '6+ months from arrival date', note: 'Plus minimum 2 blank pages for immigration stamps' },
  { label: 'Entry Points', value: '25 designated airports + 5 seaports', note: 'Cannot enter through road crossings or non-designated ports' },
]

const PATIENT_DOCS = [
  {
    doc: 'Valid U.S. Passport',
    detail: 'Minimum 6 months validity from arrival date. At least 2 blank pages.',
    required: true,
  },
  {
    doc: 'Hospital Invitation Letter (Appendix II Format)',
    detail: 'Must be issued by a NABH-, MCI-, ICMR-, or CGHS-accredited hospital in India. The letter must be on hospital letterhead, include the treating doctor\'s signature, specify diagnosis and treatment plan, estimated duration, and treatment cost. This is the most critical document — visa is typically rejected without a properly formatted Appendix II letter.',
    required: true,
  },
  {
    doc: 'Recent Passport-Size Photograph',
    detail: 'Front-facing, white background, taken within the last 6 months.',
    required: true,
  },
  {
    doc: 'Proof of Financial Means',
    detail: 'Bank statement showing sufficient funds to cover treatment costs, accommodation, and return travel.',
    required: true,
  },
  {
    doc: 'Medical Records / Diagnosis Reports',
    detail: 'Recent test results, imaging, biopsy reports, or referring physician\'s letter documenting the medical condition requiring treatment in India.',
    required: true,
  },
  {
    doc: 'Travel Itinerary',
    detail: 'Confirmed or provisional flight booking showing onward/return travel.',
    required: false,
  },
]

const ATTENDANT_FACTS = [
  { label: 'Visa Type', value: 'e-Medical Attendant Visa (MED-X)' },
  { label: 'Eligible Attendants', value: 'Immediate blood relatives only — spouse, parent, child, or sibling' },
  { label: 'Maximum (US Citizens)', value: '2 attendants per patient' },
  { label: 'Application Timing', value: 'Must apply simultaneously with the patient visa, not after' },
  { label: 'Validity', value: 'Matches the patient\'s visa duration exactly' },
  { label: 'Additional Documents', value: 'Proof of relationship (birth/marriage certificate) + copy of patient\'s approved visa' },
]

const DESIGNATED_AIRPORTS = [
  'Delhi (IGI)', 'Mumbai (CSIA)', 'Chennai (MAA)', 'Bengaluru (KIA)',
  'Hyderabad (GMR)', 'Kolkata (NSCBI)', 'Ahmedabad (SVPI)', 'Kochi (CIAL)',
  'Goa (GOI)', 'Pune (PNQ)', 'Amritsar (RJSS)', 'Tiruchirappalli (TRZ)',
  'Lucknow (CSIA)', 'Jaipur (JAI)', 'Calicut (CCJ)', 'Guwahati (LGB)',
  'Varanasi (VNS)', 'Nagpur (NAG)', 'Coimbatore (CJB)', 'Mangalore (IXE)',
  'Visakhapatnam (VTZ)', 'Chandigarh (IXC)', 'Bhubaneswar (BBI)',
  'Srinagar (SXR)', 'Trivendrum (TRV)',
]

const STEPS = [
  {
    num: '01',
    title: 'Get your Hospital Invitation Letter (Appendix II)',
    detail: 'Contact your chosen hospital in India. Request an invitation letter in the official Appendix II format. The hospital must be accredited by NABH, MCI, ICMR, or CGHS. This letter must include your diagnosis, proposed treatment, doctor\'s name and signature, estimated duration, and approximate cost. Sultan GHC arranges this letter on your behalf — it is included in our patient coordination service.',
  },
  {
    num: '02',
    title: 'Apply online at indianvisaonline.gov.in',
    detail: 'Visit the official portal only. Select "e-Medical Visa." Fill in your personal details, passport information, travel dates, and upload the required documents. Pay the government fee (approx. USD 84–100 for US citizens) plus the 2.5% bank charge. Do not use third-party websites.',
  },
  {
    num: '03',
    title: 'Receive your ETA by email',
    detail: 'Processing takes 3–5 business days. Your Electronic Travel Authorisation (ETA) is emailed to you. Print a physical copy — Indian immigration officers may ask for it alongside your passport. Save a digital backup on your phone.',
  },
  {
    num: '04',
    title: 'Arrive through a designated airport',
    detail: 'Present your ETA printout and passport at immigration. e-Medical Visa holders may only enter through one of the 25 designated international airports or 5 seaports. You cannot enter through land borders.',
  },
  {
    num: '05',
    title: 'Register with FRRO if staying beyond 180 days',
    detail: 'For most nationalities including U.S. citizens: register with the Foreigners Regional Registration Office (FRRO) within 14 days of arrival if your stay will exceed 180 days. For extended treatment (organ transplant, cancer therapy, etc.), apply for a 6-month extension through FRRO.',
  },
]

const FAQS = [
  {
    q: 'Can I use a tourist visa for medical treatment in India?',
    a: 'No. The Government of India requires a specific e-Medical Visa for patients seeking treatment. A tourist visa does not permit medical treatment and could result in denial of entry or legal complications.',
  },
  {
    q: 'How long does it take to get the India Medical e-Visa?',
    a: '3 to 5 business days from the date of application submission. The official portal advises applying at minimum 4 business days before travel. Same-day processing is not available.',
  },
  {
    q: 'What is the Appendix II hospital letter and who issues it?',
    a: 'Appendix II is the official Government of India format for the hospital invitation letter required with every Medical e-Visa application. It must be issued by an Indian hospital accredited by NABH, MCI, ICMR, or CGHS. It must include: patient name, diagnosis, proposed treatment, doctor\'s name and signature, hospital accreditation details, estimated treatment duration, and approximate cost.',
  },
  {
    q: 'My treatment in India will take more than 60 days. What do I do?',
    a: 'The initial e-Medical Visa is valid for 60 days with triple entry. For longer treatments such as organ transplants, bone marrow transplants, or multi-cycle cancer therapy, you can apply for an extension of up to 6 months through the Foreigners Regional Registration Office (FRRO) after arriving in India. Further extensions beyond 6 months require Ministry of Home Affairs approval.',
  },
  {
    q: 'Can my spouse accompany me to India?',
    a: 'Yes. Up to 2 attendants (for US citizens) may accompany the patient on a Medical Attendant Visa (MED-X). Attendants must be immediate blood relatives — spouse, parent, child, or sibling. They must apply simultaneously with the patient, not separately after visa approval. Attendants cannot apply for MED-X if the patient\'s visa has already been approved.',
  },
  {
    q: 'Can I enter India through any airport?',
    a: 'No. Medical e-Visa holders may only enter through 25 designated international airports and 5 designated seaports. You cannot enter through land borders or non-designated ports. All major medical hubs (Delhi, Mumbai, Chennai, Bengaluru, Hyderabad) are on the approved list.',
  },
  {
    q: 'Is the India Medical e-Visa fee refundable if rejected?',
    a: 'No. The government fee is non-refundable regardless of the outcome. Sultan GHC assists all patients with the hospital letter and document review before application to minimize rejection risk.',
  },
  {
    q: 'Does Sultan GHC assist with the Medical Visa process?',
    a: 'Yes. Sultan GHC coordinates the hospital invitation letter (Appendix II format), reviews your document checklist before submission, and guides you through the application process step by step. Visa facilitation is included in our concierge service at no additional charge.',
  },
]

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sultanghc.com' },
        { '@type': 'ListItem', position: 2, name: 'Visa Guide', item: 'https://www.sultanghc.com/visa-guide' },
        { '@type': 'ListItem', position: 3, name: 'India Medical Visa', item: 'https://www.sultanghc.com/visa-guide/india' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'MedicalWebPage',
      name: 'India Medical e-Visa Guide for US Patients',
      description: 'Complete guide to India Medical e-Visa for American patients seeking treatment in India — requirements, fees, documents, and step-by-step process.',
      url: 'https://www.sultanghc.com/visa-guide/india',
      audience: { '@type': 'Patient' },
      about: {
        '@type': 'MedicalEntity',
        name: 'International Medical Tourism to India',
      },
    },
  ],
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function IndiaVisaGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white">

        {/* ── Breadcrumb ── */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/visa-guide" className="hover:text-primary transition-colors">Visa Guide</Link>
              <span>/</span>
              <span className="text-gray-800 font-medium">India Medical Visa</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl">
              {/* Country indicator */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://flagcdn.com/48x36/in.png"
                  srcSet="https://flagcdn.com/96x72/in.png 2x"
                  width={48}
                  height={36}
                  alt="India flag"
                  className="rounded shadow-sm"
                />
                <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">India</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                India Medical e-Visa
                <span className="block text-primary mt-2">Complete Guide for U.S. Patients</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
                India has a dedicated Medical Visa category — a tourist visa is not valid for treatment.
                This guide covers the exact requirements, fees, documents, and process for the
                India e-Medical Visa (e-MV) for American patients traveling for healthcare.
              </p>

              {/* Key alert */}
              <div className="inline-flex items-start gap-3 bg-amber-500/15 border border-amber-500/30 rounded-xl px-5 py-4 max-w-2xl">
                <AlertCircle size={20} className="text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-200">
                  <strong className="text-amber-300">Important:</strong> Apply through{' '}
                  <a
                    href="https://indianvisaonline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                  >
                    indianvisaonline.gov.in
                  </a>{' '}
                  only. Third-party lookalike sites charge 2–5x the government fee for the same application.
                  The fee is non-refundable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── At-a-Glance Facts Table ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Visa at a Glance</h2>
              <p className="text-gray-500 mb-10">Key facts — no estimates, no ranges where the exact figure is known.</p>

              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                {VISA_FACTS.map(({ label, value, note }, i) => (
                  <div
                    key={label}
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-5 ${
                      i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } ${i !== VISA_FACTS.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{label}</div>
                    <div className="sm:col-span-2">
                      <p className="font-semibold text-gray-900">{value}</p>
                      {note && <p className="text-sm text-gray-500 mt-0.5">{note}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 mt-4 flex items-center gap-1.5">
                <Info size={13} />
                Source: Ministry of External Affairs, Government of India — indianvisaonline.gov.in. Fee amounts shown are approximate and subject to change.
              </p>
            </div>
          </div>
        </section>

        {/* ── Document Checklist ── */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Required Documents</h2>
              <p className="text-gray-500 mb-10">
                Every item below is required by the Government of India for e-Medical Visa processing.
                Missing or incorrectly formatted documents are the primary cause of rejection.
              </p>

              <div className="space-y-4">
                {PATIENT_DOCS.map(({ doc, detail, required }) => (
                  <div key={doc} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
                    <div className="shrink-0 mt-0.5">
                      <CheckCircle size={20} className={required ? 'text-green-500' : 'text-gray-400'} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <h3 className="font-semibold text-gray-900">{doc}</h3>
                        {required ? (
                          <span className="text-[11px] font-semibold uppercase tracking-wide bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            Required
                          </span>
                        ) : (
                          <span className="text-[11px] font-semibold uppercase tracking-wide bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hospital letter callout */}
              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Building2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      The Appendix II Hospital Letter — What It Must Contain
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      The hospital invitation letter (Appendix II format) is the most critical document.
                      Indian embassies have rejected visa applications where the letter was missing
                      any of the following elements:
                    </p>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {[
                        'Hospital letterhead with NABH / MCI / ICMR / CGHS accreditation number',
                        'Patient full name (exactly as in passport)',
                        'Specific diagnosis requiring treatment in India',
                        'Proposed treatment plan and procedures',
                        'Treating doctor\'s name, qualification, and signature',
                        'Estimated duration of treatment (in weeks or months)',
                        'Approximate treatment cost in USD or INR',
                        'Hospital address and contact details',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-primary font-medium mt-4">
                      Sultan GHC coordinates this letter directly with the hospital. You do not need to manage this yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Step by Step ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Process — Step by Step</h2>
              <p className="text-gray-500 mb-12">
                Five steps from first contact with the hospital to clearing immigration at your arrival airport.
              </p>

              <div className="space-y-0">
                {STEPS.map(({ num, title, detail }, i) => (
                  <div key={num} className="flex gap-6">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {num}
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className="w-px flex-1 bg-gray-200 my-2" style={{ minHeight: '40px' }} />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`pb-10 ${i === STEPS.length - 1 ? 'pb-0' : ''}`}>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Medical Attendant Visa ── */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <Users size={24} className="text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Medical Attendant Visa (MED-X)</h2>
              </div>
              <p className="text-gray-500 mb-10">
                Family members accompanying the patient must apply for a separate Medical Attendant Visa.
                This is a distinct visa category — a tourist visa is not valid for an attendant accompanying a medical patient.
              </p>

              <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white mb-6">
                {ATTENDANT_FACTS.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-4 ${
                      i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } ${i !== ATTENDANT_FACTS.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{label}</div>
                    <div className="sm:col-span-2 font-medium text-gray-800">{value}</div>
                  </div>
                ))}
              </div>

              {/* Critical note */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5">
                <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900">
                  <strong>Apply together, not separately.</strong> Attendant visa applications must be submitted simultaneously with the patient visa application. If the patient visa has already been approved, the attendant cannot apply for MED-X after the fact. Plan both applications at the same time.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Designated Airports ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <Plane size={24} className="text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Designated Entry Airports</h2>
              </div>
              <p className="text-gray-500 mb-8">
                Medical e-Visa holders may only enter India through these 25 international airports.
                Entry through land borders or non-designated ports is not permitted.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {DESIGNATED_AIRPORTS.map((airport) => (
                  <div key={airport} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 text-sm text-gray-700">
                    <MapPin size={13} className="text-primary shrink-0" />
                    {airport}
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 mt-4 flex items-start gap-1.5">
                <Info size={13} className="shrink-0 mt-0.5" />
                All five medical destination cities (Delhi, Mumbai, Chennai, Bengaluru, Hyderabad) are on the approved list.
                Exit may be through any authorized Immigration Check Post.
              </p>
            </div>
          </div>
        </section>

        {/* ── Extension / FRRO ── */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Long-Stay Treatments — Extension via FRRO</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                The initial e-Medical Visa is valid for 60 days. Treatments such as organ transplants, bone marrow transplants,
                multi-cycle chemotherapy, or complex cardiac surgeries with extended recovery may require longer stays.
                India allows extensions through the Foreigners Regional Registration Office (FRRO).
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: 'Initial Visa',
                    duration: '60 days',
                    detail: 'Triple entry. Issued with the e-Medical Visa. No action required.',
                    highlight: false,
                  },
                  {
                    title: 'FRRO Extension',
                    duration: 'Up to 6 months',
                    detail: 'Apply at FRRO after arriving in India with hospital documentation confirming ongoing treatment need.',
                    highlight: true,
                  },
                  {
                    title: 'MHA Approval',
                    duration: 'Beyond 6 months',
                    detail: 'Exceptional cases only. Requires Ministry of Home Affairs approval. FRRO files on behalf of patient.',
                    highlight: false,
                  },
                ].map(({ title, duration, detail, highlight }) => (
                  <div
                    key={title}
                    className={`rounded-xl p-6 border ${
                      highlight
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white border-gray-200 text-gray-800'
                    }`}
                  >
                    <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${highlight ? 'text-white/70' : 'text-gray-400'}`}>
                      {title}
                    </p>
                    <p className={`text-3xl font-bold mb-3 ${highlight ? 'text-white' : 'text-gray-900'}`}>
                      {duration}
                    </p>
                    <p className={`text-sm leading-relaxed ${highlight ? 'text-white/80' : 'text-gray-600'}`}>
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-5">
                <Info size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <strong>Registration requirement:</strong> U.S. citizens must register with FRRO within 14 days of arrival if
                  the stay will exceed 180 days. Registration is done online at{' '}
                  <a
                    href="https://indianfrro.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    indianfrro.gov.in
                  </a>
                  . Late registration may result in penalties at departure.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {FAQS.map(({ q, a }) => (
                  <div key={q} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── How Sultan GHC Helps ── */}
        <section className="py-16 sm:py-20 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">How Sultan GHC Supports Your Visa Process</h2>
              <p className="text-gray-400 mb-10 text-lg">
                Navigating a foreign visa system while managing a medical situation is stressful.
                Sultan GHC handles the administrative side so you can focus on your health.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-12">
                {[
                  'Coordinate the Appendix II hospital invitation letter on your behalf',
                  'Verify that your chosen hospital is NABH/MCI accredited',
                  'Review your complete document package before you submit',
                  'Advise on travel dates to ensure processing window is met',
                  'Guide you on the FRRO extension process if your treatment is extended',
                  'Arrange airport pickup with our ground team in India',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Request Free Medical Opinion
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Links ── */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Related Pages</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'India Destination Guide', href: '/destinations/india', desc: 'Cities, hospitals, costs, and specialties' },
                  { label: 'Türkiye Medical Visa Guide', href: '/visa-guide/turkey', desc: 'Visa-free entry rules and residence permit process' },
                  { label: 'International Patient Services', href: '/international-patient-services', desc: 'Full list of services Sultan GHC provides' },
                ].map(({ label, href, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex flex-col gap-1 p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-primary text-sm transition-colors">{label}</span>
                    <span className="text-xs text-gray-500">{desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
