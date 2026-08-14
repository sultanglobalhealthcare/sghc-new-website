import Link from 'next/link'
import {
  CheckCircle, AlertCircle, Clock, Globe,
  Users, ArrowRight, Info, Shield,
  MapPin, FileText, Building2, Plane
} from 'lucide-react'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Türkiye Medical Visa Guide for US Patients | Visa-Free Entry & Residence Permit 2026 | Sultan GHC',
  description:
    'U.S. citizens do not need a visa to enter Türkiye for medical treatment under 90 days (effective January 19, 2024). Complete guide to Türkiye entry rules, stay limits, and the Medical Treatment Residence Permit for extended treatment.',
  keywords: [
    'Türkiye visa US citizens 2024 2025',
    'Türkiye visa-free entry Americans',
    'Türkiye medical treatment no visa',
    'Türkiye 90 days visa-free',
    'Türkiye medical tourism entry requirements',
    'Türkiye residence permit medical treatment',
    'Türkiye evisa medical patients US',
    'HealthTurkiye international patients',
    'Türkiye medical visa extension',
    'Istanbul hospital visa requirements',
  ],
  openGraph: {
    title: 'Türkiye Entry Guide for Medical Patients from the U.S. | Sultan GHC',
    description:
      'US citizens are visa-free in Türkiye for up to 90 days (since January 19, 2024). Complete guide: entry rules, stay limits, and the Medical Treatment Residence Permit for longer stays.',
    url: 'https://www.sultanghc.com/visa-guide/turkey',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  alternates: { canonical: 'https://www.sultanghc.com/visa-guide/turkey' },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ENTRY_FACTS = [
  {
    label: 'Visa Requirement for US Citizens',
    value: 'No visa required',
    note: 'U.S. citizens have been visa-free for Türkiye since January 19, 2024.',
    highlight: true,
  },
  {
    label: 'Maximum Stay (Visa-Free)',
    value: '90 days in any 180-day period',
    note: 'This covers the vast majority of medical treatments including surgery, dental work, hair transplant, and recovery.',
    highlight: false,
  },
  {
    label: 'Entry Fee',
    value: 'None',
    note: 'No e-Visa fee. No sticker visa. No embassy appointment. US passport holders arrive and enter.',
    highlight: false,
  },
  {
    label: 'Passport Validity Required',
    value: '6 months from arrival date',
    note: 'Passport must be valid for at least 6 months from the date you enter Türkiye.',
    highlight: false,
  },
  {
    label: 'Official Entry Authority',
    value: 'Republic of Turkiye Ministry of Foreign Affairs',
    note: 'mfa.gov.tr — Turkish Ministry of Foreign Affairs is the official source for entry rules.',
    highlight: false,
  },
  {
    label: 'Permitted Purposes',
    value: 'Tourism, business, and medical treatment',
    note: 'The 90-day visa-free window covers medical treatment — no special medical endorsement is required.',
    highlight: false,
  },
  {
    label: 'Entry Points',
    value: 'All airports, seaports, and land borders',
    note: 'No restriction on entry point — unlike India\'s Medical e-Visa which limits entry to 25 airports.',
    highlight: false,
  },
  {
    label: 'For Stays Exceeding 90 Days',
    value: 'Medical Treatment Residence Permit required',
    note: 'Applied for through the Provincial Directorate of Migration Management (PDMM) in Türkiye.',
    highlight: false,
  },
]

const WHAT_TO_BRING = [
  {
    item: 'Valid U.S. Passport',
    detail: '6+ months validity from arrival date. No blank page requirement.',
    required: true,
  },
  {
    item: 'Return/Onward Flight Booking',
    detail: 'Immigration officers may ask for proof of onward travel. Carry a printed or digital booking confirmation.',
    required: true,
  },
  {
    item: 'Hospital Appointment Confirmation',
    detail: 'Print or save a digital copy. Turkish border officials may ask the purpose of your visit. A hospital appointment letter confirms medical intent.',
    required: false,
  },
  {
    item: 'Proof of Sufficient Funds',
    detail: 'No fixed amount is stipulated, but immigration officers have discretion. A bank statement or credit card is adequate for most cases.',
    required: false,
  },
  {
    item: 'Medical Insurance',
    detail: 'Not required for short stays under 90 days. Mandatory if applying for a Medical Treatment Residence Permit for extended stays.',
    required: false,
  },
]

const STEPS_UNDER_90 = [
  {
    num: '01',
    title: 'Book your medical appointment and travel',
    detail: 'Select your hospital in Türkiye. Sultan GHC coordinates the hospital, doctor, and appointment. Book your flights. No visa application required.',
  },
  {
    num: '02',
    title: 'Arrive at any Turkish airport or port of entry',
    detail: 'Present your U.S. passport at Turkish immigration. State the purpose of your visit as medical treatment if asked. There are no restrictions on which airport or port you use.',
  },
  {
    num: '03',
    title: 'Receive your entry stamp',
    detail: 'Turkish immigration will stamp your passport. You are permitted to stay up to 90 days from the date of entry. This 90-day window covers the treatment period, recovery, and follow-up appointments in most cases.',
  },
  {
    num: '04',
    title: 'Depart within 90 days',
    detail: 'Ensure you depart Türkiye within 90 days of entry. The 90-day counter resets after you have been outside Türkiye for sufficient time within the 180-day rolling window. Overstaying results in a fine and potential entry ban.',
  },
]

const RESIDENCE_PERMIT_DOCS = [
  'Valid U.S. passport (6+ months validity)',
  'Application form (submitted online through e-ikamet.goc.gov.tr)',
  'Written confirmation from a public or private hospital in Türkiye confirming you are under active treatment',
  'Valid health insurance policy covering the full duration of your stay in Türkiye',
  'Proof of accommodation in Türkiye (rental agreement or hotel booking)',
  'Proof of sufficient financial means for the stay duration',
  'Biometric photographs (quantity specified at time of appointment)',
  'Proof of payment of the residence permit fee',
]

const FAQS = [
  {
    q: 'Do U.S. citizens need a visa to go to Türkiye for medical treatment?',
    a: 'No. As of January 19, 2024, U.S. citizens are visa-free in Türkiye for stays up to 90 days in any 180-day period. This covers medical treatment — no e-Visa, no sticker visa, and no fee is required. You arrive in Türkiye with your U.S. passport and receive an entry stamp.',
  },
  {
    q: 'Was there an e-Visa for Türkiye before January 2024?',
    a: 'Yes. Before January 19, 2024, U.S. citizens required a USD 50 e-Visa to enter Türkiye. This requirement was eliminated effective January 19, 2024. If you see any website telling you to pay $50 for a Türkiye e-Visa as a U.S. citizen, that information is outdated.',
  },
  {
    q: 'My treatment in Türkiye will take more than 90 days. What do I do?',
    a: 'Apply for a Medical Treatment Residence Permit through the Provincial Directorate of Migration Management (PDMM). Required documents include a hospital letter confirming active treatment, valid health insurance, accommodation proof, and proof of financial means. Applications are submitted online at e-ikamet.goc.gov.tr. Processing takes approximately 30 days.',
  },
  {
    q: 'Can I leave Türkiye and re-enter during my treatment?',
    a: 'Yes, within the 90-day/180-day framework. If you need to leave and return for follow-up treatment, the days outside Türkiye do not count toward your 90-day limit. The 180-day rolling window means you can accumulate up to 90 days of presence in Türkiye in any rolling 180-day period.',
  },
  {
    q: 'Does Türkiye have a specific medical visa category like India?',
    a: 'No. Türkiye does not have a dedicated medical visa category for U.S. citizens. Medical treatment falls under the general visa-free entry permission. If your stay exceeds 90 days, the applicable permit is the Medical Treatment Residence Permit — not a visa.',
  },
  {
    q: 'Do attendants / family members accompanying me also get visa-free entry?',
    a: 'U.S. citizens traveling as family members or caregivers also enter visa-free under the same 90-day rule. Each person enters individually on their own U.S. passport. No special attendant visa category exists for Türkiye.',
  },
  {
    q: 'What happens if I overstay the 90-day limit in Türkiye?',
    a: 'Overstaying is treated as a violation of Turkish immigration law. On departure, you will be assessed a fine. In some cases, overstaying can result in a re-entry ban. If your treatment is extending beyond 90 days, apply for the Medical Treatment Residence Permit before your 90 days expire.',
  },
  {
    q: 'Does Sultan GHC assist with the Medical Treatment Residence Permit if needed?',
    a: 'Yes. For patients whose treatment exceeds 90 days, Sultan GHC coordinates with the hospital to obtain the required hospital letter and guides patients through the residence permit application process. This is part of our extended patient coordination service.',
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
        { '@type': 'ListItem', position: 3, name: 'Türkiye Medical Visa', item: 'https://www.sultanghc.com/visa-guide/turkey' },
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
      name: 'Türkiye Entry Guide for US Medical Patients',
      description: 'US citizens are visa-free in Türkiye for up to 90 days (since January 19, 2024). Guide to entry requirements and Medical Treatment Residence Permit for extended stays.',
      url: 'https://www.sultanghc.com/visa-guide/turkey',
      audience: { '@type': 'Patient' },
    },
  ],
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TürkiyeVisaGuidePage() {
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
              <span className="text-gray-800 font-medium">Türkiye Medical Visa</span>
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
                  src="https://flagcdn.com/48x36/tr.png"
                  srcSet="https://flagcdn.com/96x72/tr.png 2x"
                  width={48}
                  height={36}
                  alt="Türkiye flag"
                  className="rounded shadow-sm"
                />
                <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Türkiye</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                Türkiye Entry Guide
                <span className="block text-primary mt-2">for U.S. Medical Patients</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
                U.S. citizens do not need a visa, an e-Visa, or any pre-approval to enter Türkiye.
                Since January 19, 2024, American passport holders arrive visa-free for up to 90 days.
                This covers the vast majority of medical treatments — no paperwork, no fee.
              </p>

              {/* Green positive callout */}
              <div className="inline-flex items-start gap-3 bg-green-500/15 border border-green-500/30 rounded-xl px-5 py-4 max-w-2xl">
                <CheckCircle size={20} className="text-green-400 shrink-0 mt-0.5" />
                <p className="text-sm text-green-200">
                  <strong className="text-green-300">No visa required.</strong> U.S. passport holders enter Türkiye visa-free since January 19, 2024.
                  No e-Visa, no embassy appointment, no fee. Arrive at any Turkish airport with your passport.
                  Source:{' '}
                  <a
                    href="https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white"
                  >
                    Turkish Ministry of Foreign Affairs
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Distinction callout ── */}
        <section className="py-12 bg-primary">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="shrink-0 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Globe size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-white font-bold text-xl mb-1">Türkiye vs. India — Key Difference</h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  India requires a specific Medical e-Visa, hospital invitation letter, and takes 3–5 days to process.
                  Türkiye requires nothing for U.S. citizens under 90 days — you book your treatment and fly.
                  This makes Türkiye one of the most frictionless medical tourism destinations for American patients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Entry Facts Table ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Entry Rules at a Glance</h2>
              <p className="text-gray-500 mb-10">Exact rules — no estimates, no third-party sources.</p>

              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                {ENTRY_FACTS.map(({ label, value, note, highlight }, i) => (
                  <div
                    key={label}
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-5 ${
                      highlight
                        ? 'bg-green-50 border-l-4 border-l-green-500'
                        : i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } ${i !== ENTRY_FACTS.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{label}</div>
                    <div className="sm:col-span-2">
                      <p className={`font-semibold ${highlight ? 'text-green-700 text-lg' : 'text-gray-900'}`}>
                        {value}
                      </p>
                      {note && <p className="text-sm text-gray-500 mt-0.5">{note}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 mt-4 flex items-center gap-1.5">
                <Info size={13} />
                Source: Republic of Turkiye Ministry of Foreign Affairs (mfa.gov.tr). Entry rules effective January 19, 2024.
              </p>
            </div>
          </div>
        </section>

        {/* ── What to Bring ── */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What to Carry When You Travel</h2>
              <p className="text-gray-500 mb-10">
                No visa is required, but Turkish immigration officers can ask questions. Carrying these items prevents any delays at the border.
              </p>

              <div className="space-y-4">
                {WHAT_TO_BRING.map(({ item, detail, required }) => (
                  <div key={item} className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
                    <div className="shrink-0 mt-0.5">
                      <CheckCircle size={20} className={required ? 'text-green-500' : 'text-gray-300'} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <h3 className="font-semibold text-gray-900">{item}</h3>
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
            </div>
          </div>
        </section>

        {/* ── Steps for Under 90 Days ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">For Treatments Under 90 Days — Process</h2>
              <p className="text-gray-500 mb-12">
                Most medical procedures in Türkiye — including cardiac surgery, orthopaedic surgery, dental work,
                hair transplant, and bariatric surgery — are completed within the 90-day visa-free window.
                The process is as simple as it gets.
              </p>

              <div className="space-y-0">
                {STEPS_UNDER_90.map(({ num, title, detail }, i) => (
                  <div key={num} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {num}
                      </div>
                      {i < STEPS_UNDER_90.length - 1 && (
                        <div className="w-px flex-1 bg-gray-200 my-2" style={{ minHeight: '40px' }} />
                      )}
                    </div>
                    <div className={`pb-10 ${i === STEPS_UNDER_90.length - 1 ? 'pb-0' : ''}`}>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Medical Treatment Residence Permit ── */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <FileText size={24} className="text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Stays Beyond 90 Days — Medical Treatment Residence Permit</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                For patients whose treatment extends beyond 90 days — such as organ transplant recipients,
                patients undergoing multiple chemotherapy cycles, or extended rehabilitation — Türkiye offers
                a dedicated Medical Treatment Residence Permit. This is not a visa; it is a residency permit
                applied for after arrival in Türkiye.
              </p>

              {/* How it works */}
              <div className="grid sm:grid-cols-3 gap-5 mb-8">
                {[
                  {
                    title: 'Application Portal',
                    value: 'e-ikamet.goc.gov.tr',
                    detail: 'Online application through Turkish Directorate General of Migration Management.',
                  },
                  {
                    title: 'Processing Time',
                    value: '~30 days',
                    detail: 'From submission to permit issuance. Apply well before your 90-day entry limit expires.',
                  },
                  {
                    title: 'Issuing Authority',
                    value: 'PDMM',
                    detail: 'Provincial Directorate of Migration Management — the local immigration office in the city where you are being treated.',
                  },
                ].map(({ title, value, detail }) => (
                  <div key={title} className="bg-white rounded-xl border border-gray-200 p-5">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{title}</p>
                    <p className="font-bold text-gray-900 text-lg mb-2">{value}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>

              {/* Document checklist */}
              <h3 className="font-semibold text-gray-900 text-lg mb-4">Required Documents for Medical Treatment Residence Permit</h3>
              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                <ul className="space-y-3">
                  {RESIDENCE_PERMIT_DOCS.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Important note */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5">
                <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900">
                  <strong>Apply before your 90 days expire.</strong> The Medical Treatment Residence Permit application must be submitted while you are legally within your 90-day stay period. Overstaying and then applying is treated as a violation and may complicate the permit application.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Attendants ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Users size={24} className="text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Family Members and Caregivers</h2>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  There is no separate attendant visa category for Türkiye. U.S. citizens accompanying a medical patient
                  enter Türkiye on exactly the same terms — visa-free, up to 90 days, on their U.S. passport.
                  Each person uses their own passport. No documentation linking them to the patient is required at the border.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If a family member needs to stay beyond 90 days to support a patient, they may apply for a
                  Short-Term Residence Permit on the basis of accompanying a family member undergoing medical treatment.
                  Sultan GHC can advise on this process if needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HealthTurkiye ── */}
        <section className="py-16 sm:py-20 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Shield size={24} className="text-primary" />
                <h2 className="text-3xl font-bold">HealthTurkiye — Government Patient Registry</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Türkiye operates HealthTurkiye (saglik.gov.tr), a government-mandated registry where all hospitals
                treating international patients must report cases. This is a patient-protection measure —
                it ensures that every hospital treating a foreign patient is accountable to the Turkish Ministry of Health.
                It does not affect the entry process for U.S. patients, but it is evidence of Türkiye{`'`}s regulatory infrastructure
                for medical tourism.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: 'Registry Authority', value: 'Turkish Ministry of Health' },
                  { label: 'Requirement', value: 'Mandatory for all hospitals treating international patients' },
                  { label: 'Purpose', value: 'Patient safety tracking and quality assurance' },
                  { label: 'Patient Action Required', value: 'None — handled by the hospital' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                ))}
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
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sultan GHC Handles for Türkiye Patients</h2>
              <p className="text-gray-500 mb-10">
                Entry into Türkiye is straightforward for U.S. patients. Our support is focused on what comes after you arrive.
              </p>

              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    'Match you with a JCI-accredited hospital in Istanbul, Ankara, Antalya, or Izmir',
                    'Coordinate your doctor consultation and appointment scheduling',
                    'Arrange airport pickup with English-speaking ground staff',
                    'Book accommodation near the treatment facility',
                    'Provide an interpreter for consultations and hospital procedures',
                    'Coordinate the Medical Treatment Residence Permit process if your stay exceeds 90 days',
                    'Arrange all post-treatment follow-up and report delivery',
                    'Remain your single point of contact throughout the journey',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-8 border-t border-gray-100">
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
                    className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Links ── */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Related Pages</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Türkiye Destination Guide', href: '/destinations/turkey', desc: 'Cities, hospitals, costs, and specialties' },
                  { label: 'India Medical Visa Guide', href: '/visa-guide/india', desc: 'Dedicated Medical e-Visa for treatment in India' },
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
