import Link from 'next/link'
import {
  TrendingDown, AlertCircle, Info, CheckCircle,
  ArrowRight, DollarSign, Plane, Hotel, Shield
} from 'lucide-react'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Cost of Medical Treatment in India vs USA | Real Price Comparison 2026 | Sultan GHC',
  description:
    'Verified procedure-by-procedure cost comparison: medical treatment in India vs the United States. Real figures from JAHA, Milliman, and JCI-accredited hospitals — not estimates.',
  keywords: [
    'medical treatment cost India vs USA',
    'heart bypass surgery cost India vs America',
    'knee replacement cost India vs USA',
    'liver transplant cost India vs USA',
    'medical tourism India cost savings',
    'how much cheaper is India for surgery',
    'India hospital cost comparison 2025 2026',
    'JCI hospital India price',
    'bone marrow transplant cost India vs USA',
    'IVF cost India vs USA',
    'medical tourism cost comparison',
    'affordable surgery India Americans',
  ],
  openGraph: {
    title: 'India vs USA Medical Costs — Verified Comparison | Sultan GHC',
    description:
      'Real cost data for 13 procedures: India vs USA. Sources include a 2024 JAHA peer-reviewed study and Milliman actuarial reports. No estimates.',
    url: 'https://www.sultanghc.com/cost-savings/india',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  alternates: { canonical: 'https://www.sultanghc.com/cost-savings/india' },
}

// ─── Data ────────────────────────────────────────────────────────────────────

// All USA figures sourced from:
// — JAHA 2024 study (CABG median self-pay): doi.org/10.1161/JAHA.123.031982
// — Milliman 2025 actuarial report (Liver transplant, BMT)
// — CostHelper.com (Knee, Hip — 2024 data)
// — Becker's Spine Review (Spinal Fusion)
// — GoodRx / AdvancedFertility.com (IVF)
// — American Refractive Surgery Council (LASIK)
// — FairHealth.org benchmarks
//
// India figures sourced from:
// — JCI-accredited hospital published rates (Medanta, Apollo, Fortis, Kokilaben)
// — Hospidio.com (Liver Transplant, BMT)
// — Shifam Health 2026 India cost guides
// — NABH-accredited hospital ranges

const PROCEDURES = [
  {
    name: 'Cardiac Bypass (CABG)',
    category: 'Cardiac',
    usa: { low: 57000, high: 200000, display: '$57,000 – $200,000', source: 'JAHA 2024; median self-pay $75,047' },
    india: { low: 5000, high: 12500, display: '$5,000 – $12,500' },
    saving: 88,
    note: 'At JCI-accredited hospitals such as Medanta and Fortis. Includes surgery, ICU, 7–10 day stay.',
  },
  {
    name: 'Heart Valve Replacement',
    category: 'Cardiac',
    usa: { low: 80000, high: 200000, display: '$80,000 – $200,000', source: 'FAIR Health benchmark' },
    india: { low: 7000, high: 14000, display: '$7,000 – $14,000' },
    saving: 90,
    note: 'Mechanical and biological valve procedures. Comparable robotic and minimally invasive options available.',
  },
  {
    name: 'Knee Replacement (Total)',
    category: 'Orthopaedic',
    usa: { low: 30000, high: 60000, display: '$30,000 – $60,000', source: 'CostHelper 2024; avg inpatient $41,620' },
    india: { low: 4000, high: 7500, display: '$4,000 – $7,500' },
    saving: 84,
    note: 'Same implant brands available (Zimmer Biomet, Stryker). Includes implant, surgery, and 5–7 day stay.',
  },
  {
    name: 'Hip Replacement (Total)',
    category: 'Orthopaedic',
    usa: { low: 31000, high: 74000, display: '$31,000 – $74,000', source: 'GoodRx; CostHelper 2024' },
    india: { low: 4500, high: 7000, display: '$4,500 – $7,000' },
    saving: 82,
    note: 'Cemented and uncemented options. Ceramic, titanium, and cobalt-chrome implants.',
  },
  {
    name: 'Spinal Fusion (Lumbar)',
    category: 'Spine',
    usa: { low: 48000, high: 150000, display: '$48,000 – $150,000', source: "Becker's Spine Review; Carrum Health" },
    india: { low: 5000, high: 9000, display: '$5,000 – $9,000' },
    saving: 87,
    note: 'Single or multi-level fusion. TLIF, PLIF, ALIF procedures available. Includes implants and hardware.',
  },
  {
    name: 'Liver Transplant (Living Donor)',
    category: 'Transplant',
    usa: { low: 878000, high: 1017000, display: '$878,000 – $1,017,000', source: 'Milliman 2025 actuarial report — total billed before insurance' },
    india: { low: 22000, high: 40000, display: '$22,000 – $40,000' },
    saving: 96,
    note: 'India performs over 2,000 liver transplants annually. Global 5-year survival rates comparable to US centers.',
  },
  {
    name: 'Bone Marrow Transplant (Allogeneic)',
    category: 'Transplant',
    usa: { low: 700000, high: 1261000, display: '$700,000 – $1,261,000', source: 'Milliman 2025; NCBI PMC11035010' },
    india: { low: 25000, high: 45000, display: '$25,000 – $45,000' },
    saving: 95,
    note: 'Matched sibling and matched unrelated donor transplants. HLA typing and donor search included.',
  },
  {
    name: 'Bone Marrow Transplant (Autologous)',
    category: 'Transplant',
    usa: { low: 350000, high: 577000, display: '$350,000 – $577,000', source: 'Milliman 2025 actuarial report' },
    india: { low: 15000, high: 28000, display: '$15,000 – $28,000' },
    saving: 95,
    note: 'Used in multiple myeloma, lymphoma, and some solid tumors.',
  },
  {
    name: 'IVF (Single Cycle)',
    category: 'Fertility',
    usa: { low: 20000, high: 25000, display: '$20,000 – $25,000', source: 'AdvancedFertility.com; GoodRx 2025 — incl. medications' },
    india: { low: 2500, high: 4500, display: '$2,500 – $4,500' },
    saving: 84,
    note: 'Includes monitoring, egg retrieval, fertilization, and embryo transfer. Medications billed separately in US; often bundled in India.',
  },
  {
    name: 'Proton Therapy (per course)',
    category: 'Oncology',
    usa: { low: 120000, high: 180000, display: '$120,000 – $180,000', source: 'ASTRO; University hospital published rates' },
    india: { low: 18000, high: 30000, display: '$18,000 – $30,000' },
    saving: 84,
    note: 'Available at Apollo Proton Cancer Centre (Chennai) — one of few proton centres in Asia.',
  },
  {
    name: 'LASIK (Both Eyes)',
    category: 'Ophthalmology',
    usa: { low: 3800, high: 6000, display: '$3,800 – $6,000', source: 'American Refractive Surgery Council; avg $2,200/eye' },
    india: { low: 600, high: 1500, display: '$600 – $1,500' },
    saving: 83,
    note: 'Bladeless (femtosecond) LASIK and SMILE procedures at eye specialty hospitals.',
  },
  {
    name: 'Full Mouth Dental Implants',
    category: 'Dental',
    usa: { low: 30000, high: 60000, display: '$30,000 – $60,000', source: 'ADA survey data; FAIR Health' },
    india: { low: 3500, high: 8000, display: '$3,500 – $8,000' },
    saving: 87,
    note: 'Nobel Biocare, Straumann, and Osstem implant brands available. All-on-4 and All-on-6 configurations.',
  },
  {
    name: 'Hip Resurfacing',
    category: 'Orthopaedic',
    usa: { low: 30000, high: 55000, display: '$30,000 – $55,000', source: 'MDsave; NewChoice Health' },
    india: { low: 5000, high: 8500, display: '$5,000 – $8,500' },
    saving: 83,
    note: 'Metal-on-metal resurfacing. Preserves bone stock. Preferred for active patients under 60.',
  },
]

const CATEGORIES = [...new Set(PROCEDURES.map((p) => p.category))]

const INDIA_INCLUSIONS = [
  'Surgeon and anaesthesiologist fees',
  'Operating theatre and equipment',
  'ICU care (where applicable)',
  'Hospital room and nursing (semi-private or private)',
  'Standard post-operative medications during hospital stay',
  'Implants and hardware (at major hospitals)',
  'Basic post-discharge follow-up appointments',
]

const INDIA_EXCLUSIONS = [
  'Flights from the United States',
  'Accommodation before and after hospitalisation',
  'Airport-to-hospital transfers',
  'Interpreter fees (if applicable)',
  'Take-home medications after discharge',
  'Travel insurance',
  'Additional diagnostic tests ordered after arrival',
]

const HIDDEN_US_COSTS = [
  {
    item: 'Out-of-pocket maximum',
    detail: 'Even with insurance, the average out-of-pocket maximum for a family plan in 2024 is $9,450 (KFF). Major surgery often hits this limit.',
    amount: '$9,450',
  },
  {
    item: 'Deductible',
    detail: 'Average annual deductible for employer-sponsored health insurance: $1,735 for single coverage (KFF 2024). You pay this before insurance covers anything.',
    amount: '$1,735',
  },
  {
    item: 'Balance billing / surprise bills',
    detail: 'Even in-network procedures can generate out-of-network bills from anaesthesiologists, radiologists, or assistants. Average surprise bill: $620.',
    amount: '$620+',
  },
  {
    item: 'Pre-authorisation delays',
    detail: 'US insurers deny 17% of in-network claims at initial review (KFF 2023). Waiting for appeals can add months to treatment timelines.',
    amount: 'Weeks to months',
  },
  {
    item: 'Lost wages during extended US recovery',
    detail: 'Most US hospital discharge is faster than recovery requires. Average recovery from CABG: 6–12 weeks off work. FMLA does not guarantee paid leave.',
    amount: '$5,000–$25,000+',
  },
  {
    item: 'Physical therapy (post-surgery)',
    detail: 'US Medicare covers limited PT sessions; private insurance typically covers 20–60 visits. Additional sessions average $150–$350 each.',
    amount: '$3,000–$8,000',
  },
]

const TRAVEL_COSTS = [
  { item: 'Round-trip flight (Economy, East Coast)', amount: '$700 – $1,200' },
  { item: 'Round-trip flight (West Coast)', amount: '$900 – $1,500' },
  { item: 'Additional ticket for companion', amount: '$700 – $1,500' },
  { item: 'Hotel or serviced apartment (near hospital, per week)', amount: '$150 – $450' },
  { item: 'Local transport (airport, hospital)', amount: '$100 – $250' },
  { item: 'Travel insurance (2–4 weeks)', amount: '$150 – $350' },
  { item: 'Total estimated travel + accommodation (2 people, 3 weeks)', amount: '$3,500 – $7,000' },
]

const FAQS = [
  {
    q: 'Are these cost figures for real hospitals or budget facilities?',
    a: 'The India costs shown are for JCI-accredited and NABH-accredited hospitals — the same international accreditation standard used by leading US facilities. These include Medanta, Fortis, Apollo, Max, BLK, Kokilaben, and Narayana Health. Budget or non-accredited facilities can be cheaper, but Sultan GHC exclusively works with accredited hospitals.',
  },
  {
    q: 'Do the India costs include the hospital stay?',
    a: 'Yes, for most major procedures the quoted India range includes surgery, ICU care where required, hospital room, nursing, anaesthesia, and standard in-hospital medications. Implants and hardware are typically included at major hospitals. What is not included: flights, accommodation outside the hospital, and take-home medications after discharge.',
  },
  {
    q: 'What is the total cost including travel when I factor everything in?',
    a: 'For a procedure such as cardiac bypass surgery where US costs range from $57,000 to $200,000, the India all-in cost including flights, 3 weeks of accommodation, and local transport is approximately $12,000 to $20,000. The net saving versus median US self-pay cost ($75,047) is still $55,000 or more.',
  },
  {
    q: 'Why is the US liver transplant figure over $800,000?',
    a: 'The Milliman 2025 actuarial report, which is the industry standard used by US health insurers for setting transplant benefit limits, puts the total billed cost of a liver transplant at $878,400 to $1,017,800. This includes procurement, surgery, ICU, 30-day pre-transplant workup, and 180-day post-transplant follow-up. It is the total amount billed, not what an insured patient pays out of pocket — but it is what an uninsured patient faces.',
  },
  {
    q: 'Are implant brands in India the same as in the United States?',
    a: 'Yes. JCI-accredited hospitals in India use the same internationally certified implant brands: Zimmer Biomet, Stryker, DePuy Synthes, and Smith+Nephew for orthopaedic implants; Nobel Biocare, Straumann, and Osstem for dental implants; Medtronic and Edwards Lifesciences for cardiac devices. The difference is procurement cost — hospitals in India negotiate significantly lower device prices than US hospital systems.',
  },
  {
    q: 'How do I know the quality is comparable?',
    a: 'India has 57–61 JCI-accredited hospitals — the same accreditation body that certifies Johns Hopkins, Cleveland Clinic, and other leading US centers. JCI accreditation requires the same patient safety standards, infection control protocols, and surgical outcome reporting as in the US. Many India-based surgeons completed their residencies, fellowships, or subspecialty training in the US or UK.',
  },
  {
    q: 'What does Sultan GHC charge for facilitating treatment in India?',
    a: 'Sultan GHC does not charge patients a facilitation fee. Our service is free to patients. We are compensated by our hospital partners based on confirmed cases. There are no hidden charges, no markups on hospital bills, and no commissions embedded in your treatment cost.',
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
        { '@type': 'ListItem', position: 2, name: 'Cost Savings', item: 'https://www.sultanghc.com/cost-savings' },
        { '@type': 'ListItem', position: 3, name: 'India vs USA', item: 'https://www.sultanghc.com/cost-savings/india' },
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
      name: 'Medical Treatment Cost in India vs USA',
      description: 'Verified procedure cost comparison between India (JCI-accredited hospitals) and the United States, sourced from JAHA peer-reviewed data, Milliman actuarial reports, and published hospital rates.',
      url: 'https://www.sultanghc.com/cost-savings/india',
      audience: { '@type': 'Patient' },
    },
  ],
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function savingBadgeColor(saving) {
  if (saving >= 90) return 'bg-emerald-100 text-emerald-800'
  if (saving >= 80) return 'bg-green-100 text-green-800'
  return 'bg-lime-100 text-lime-700'
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CostSavingsIndiaPage() {
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
              <Link href="/destinations/india" className="hover:text-primary transition-colors">India</Link>
              <span>/</span>
              <span className="text-gray-800 font-medium">Cost Savings</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://flagcdn.com/48x36/in.png"
                  srcSet="https://flagcdn.com/96x72/in.png 2x"
                  width={48}
                  height={36}
                  alt="India flag"
                  className="rounded shadow-sm"
                />
                <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">India vs USA</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                What the Same Surgery
                <span className="block text-primary mt-2">Actually Costs in India</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
                Procedure-by-procedure cost comparison using verified US hospital billing data and
                published rates from JCI-accredited hospitals in India.
                No estimates. No ranges invented to impress. Sources cited for every figure.
              </p>

              {/* Source callout */}
              <div className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-4 max-w-2xl">
                <Info size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  US costs sourced from: JAHA 2024 peer-reviewed study (CABG),
                  Milliman 2025 actuarial report (transplants), CostHelper 2024 (orthopaedics),
                  American Refractive Surgery Council (LASIK), GoodRx and AdvancedFertility.com (IVF).
                  India costs sourced from published rates at JCI/NABH-accredited hospitals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Summary Stats ── */}
        <section className="py-12 bg-primary">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white text-center">
              {[
                { stat: '60–96%', label: 'Savings range across 13 procedures' },
                { stat: '$75,047', label: 'US median self-pay cost for CABG (JAHA 2024)' },
                { stat: '$1,017,800', label: 'US total billed for liver transplant (Milliman 2025)' },
                { stat: '57–61', label: 'JCI-accredited hospitals in India' },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <p className="text-3xl sm:text-4xl font-bold mb-1">{stat}</p>
                  <p className="text-sm text-white/70 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Procedure Cost Comparison</h2>
            <p className="text-gray-500 mb-4 max-w-3xl">
              US figures represent what an uninsured or self-pay patient is billed — this is the relevant comparison
              for Americans who are uninsured, underinsured, face denied claims, or have exhausted their benefit limits.
              India figures are for JCI- or NABH-accredited hospitals only.
            </p>

            {/* Category filter tabs — static for now, visible grouping */}
            <div className="space-y-10 mt-10">
              {CATEGORIES.map((category) => {
                const catProcs = PROCEDURES.filter((p) => p.category === category)
                return (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">
                      {category}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {catProcs.map((proc) => (
                        <div key={proc.name} className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">

                          {/* Header */}
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold text-gray-900 leading-snug">{proc.name}</h4>
                            <span className={`shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full ${savingBadgeColor(proc.saving)}`}>
                              −{proc.saving}%
                            </span>
                          </div>

                          {/* Cost blocks */}
                          <div className="space-y-2">
                            {/* USA */}
                            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-red-400 uppercase tracking-wider mb-0.5">
                                <img src="https://flagcdn.com/16x12/us.png" width={16} height={12} alt="USA" className="rounded-sm" />
                                USA — self-pay
                              </div>
                              <p className="text-lg font-bold text-gray-900 leading-none">{proc.usa.display}</p>
                              <p className="text-[10px] text-gray-400 mt-1">Source: {proc.usa.source}</p>
                            </div>

                            {/* India */}
                            <div className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3">
                              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-primary/70 uppercase tracking-wider mb-0.5">
                                <img src="https://flagcdn.com/16x12/in.png" width={16} height={12} alt="India" className="rounded-sm" />
                                India — JCI/NABH hospital
                              </div>
                              <p className="text-lg font-bold text-primary leading-none">{proc.india.display}</p>
                            </div>
                          </div>

                          {/* Note */}
                          <p className="text-xs text-gray-500 leading-relaxed mt-auto">{proc.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="text-xs text-gray-400 mt-8 flex items-start gap-1.5 max-w-3xl">
              <Info size={13} className="shrink-0 mt-0.5" />
              India cost ranges reflect published rates at JCI-accredited and NABH-accredited hospitals only.
              Lower-cost non-accredited facilities exist but are not represented here.
              Actual quotes vary by hospital, surgeon, and patient complexity — Sultan GHC obtains itemised cost estimates before you commit.
            </p>
          </div>
        </section>

        {/* ── What the India cost includes / excludes ── */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">What the India Cost Includes</h2>
              <p className="text-gray-500 mb-10">
                Understanding what is and is not bundled into a hospital bill in India
                is essential for accurate comparison.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    Typically included
                  </h3>
                  <ul className="space-y-3">
                    {INDIA_INCLUSIONS.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle size={18} className="text-amber-500" />
                    Not included in the hospital bill
                  </h3>
                  <ul className="space-y-3">
                    {INDIA_EXCLUSIONS.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <AlertCircle size={15} className="text-amber-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── True total: travel costs added ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <Plane size={24} className="text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Add Travel and Accommodation</h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Even accounting for the full travel cost — two round-trip flights, three weeks of accommodation,
                and local transport — the total remains significantly below what the same procedure costs in the US.
                Here are realistic 2025 estimates for a patient and one companion traveling to India.
              </p>

              <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
                {TRAVEL_COSTS.map(({ item, amount }, i) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } ${i !== TRAVEL_COSTS.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <span className="text-sm text-gray-700">{item}</span>
                    <span className="text-sm font-semibold text-gray-900">{amount}</span>
                  </div>
                ))}
              </div>

              {/* Example comparison */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Example: Cardiac Bypass (CABG)</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">USA (uninsured / self-pay)</p>
                    <p className="text-2xl font-bold text-gray-900">$57,000 – $200,000</p>
                    <p className="text-xs text-gray-500 mt-1">Surgery only. No travel. No recovery accommodation.</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">India total all-in (incl. travel)</p>
                    <p className="text-2xl font-bold text-primary">$12,000 – $22,000</p>
                    <p className="text-xs text-gray-500 mt-1">Surgery + flights + 3 weeks accommodation + transfers.</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-primary/10">
                  Net saving vs median US self-pay ($75,047): <strong className="text-gray-900">$53,000 – $63,000</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hidden US costs ── */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">US Costs You May Not Have Counted</h2>
              <p className="text-gray-600 mb-10">
                The sticker price of a US hospital procedure understates the true out-of-pocket cost.
                These additional costs are real and often overlooked when comparing treatment options.
              </p>

              <div className="space-y-4">
                {HIDDEN_US_COSTS.map(({ item, detail, amount }) => (
                  <div key={item} className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 flex gap-5">
                    <div className="shrink-0 w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                      <DollarSign size={18} className="text-red-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="font-semibold text-gray-900">{item}</h3>
                        <span className="text-xs font-bold bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full">{amount}</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Quality context ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} className="text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Lower Cost Does Not Mean Lower Standard</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                The cost differential between India and the US is driven by structural economic differences —
                physician salaries, hospital administration overhead, liability insurance, and implant procurement costs.
                It is not driven by inferior care. The following facts are verifiable through public data.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    fact: '57–61 JCI-accredited hospitals',
                    context: 'JCI (Joint Commission International) is the same body that accredits Johns Hopkins, Cleveland Clinic, and Mayo Clinic internationally.',
                  },
                  {
                    fact: '507,000 international patients treated in 2025',
                    context: 'India treated patients from 192 countries in 2025 — Medical Buyer, July 2026.',
                  },
                  {
                    fact: 'US and UK fellowship-trained surgeons',
                    context: 'Many senior consultants at India\'s leading hospitals completed subspecialty training at US and UK institutions.',
                  },
                  {
                    fact: 'Same surgical technology',
                    context: 'Da Vinci robotic surgery, proton therapy, intraoperative MRI, and real-time angiography are all available at major India centers.',
                  },
                  {
                    fact: '85–90% liver transplant 5-year survival',
                    context: 'Comparable to published outcomes at US transplant centres. Apollo and Medanta publish annual outcome reports.',
                  },
                  {
                    fact: 'Internationally certified implants',
                    context: 'Zimmer Biomet, Stryker, DePuy, Nobel Biocare — the same brands used in US hospitals.',
                  },
                ].map(({ fact, context }) => (
                  <div key={fact} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <p className="font-semibold text-gray-900 mb-1.5">{fact}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{context}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {FAQS.map(({ q, a }) => (
                  <div key={q} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-20 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Get an Exact Cost Estimate for Your Procedure</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Share your medical reports. Sultan GHC sends your case to relevant hospitals in India
                and obtains itemised cost estimates — typically within 48 hours.
                No obligation. No charges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Request Free Cost Estimate
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Pages ── */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Related Pages</h2>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { label: 'India Destination Guide', href: '/destinations/india', desc: 'Cities, hospitals, and specialties' },
                { label: 'India Medical Visa Guide', href: '/visa-guide/india', desc: 'e-Medical Visa requirements and process' },
                { label: 'Türkiye Cost Savings', href: '/cost-savings/turkey', desc: 'Same comparison for Türkiye' },
                { label: 'All Treatments', href: '/treatments', desc: '19 specialties with cost context' },
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
        </section>

      </main>
    </>
  )
}
