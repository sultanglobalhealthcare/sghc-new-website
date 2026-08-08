import Link from 'next/link'
import {
  TrendingDown, AlertCircle, Info, CheckCircle,
  ArrowRight, DollarSign, Plane, Shield
} from 'lucide-react'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Cost of Medical Treatment in Turkey vs USA | Real Price Comparison 2026 | Sultan GHC',
  description:
    'Verified procedure-by-procedure cost comparison: medical treatment in Turkey vs the United States. Real figures for hair transplant, dental implants, cardiac surgery, bariatric surgery, IVF, and rhinoplasty — with sources.',
  keywords: [
    'medical treatment cost Turkey vs USA',
    'hair transplant cost Turkey vs USA',
    'dental implants Turkey vs USA cost',
    'gastric sleeve Turkey cost vs America',
    'cardiac surgery Turkey vs USA',
    'rhinoplasty Turkey vs USA cost',
    'medical tourism Turkey cost savings',
    'IVF cost Turkey vs USA',
    'how much cheaper is Turkey for surgery',
    'JCI hospital Turkey price',
    'Turkey medical tourism 2025 2026 costs',
    'affordable surgery Turkey Americans',
  ],
  openGraph: {
    title: 'Turkey vs USA Medical Costs — Verified Comparison | Sultan GHC',
    description:
      'Real cost data for 14 procedures: Turkey vs USA. Includes hair transplant, dental implants, bariatric surgery, cardiac procedures, IVF, and rhinoplasty — sourced from published JCI hospital rates and US billing data.',
    url: 'https://www.sultanghc.com/cost-savings/turkey',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  alternates: { canonical: 'https://www.sultanghc.com/cost-savings/turkey' },
}

// ─── Data ────────────────────────────────────────────────────────────────────

// USA figures sourced from:
// — JAHA 2024 study (CABG): doi.org/10.1161/JAHA.123.031982
// — Milliman 2025 actuarial report (Liver transplant)
// — CostHelper 2024 (Knee replacement)
// — ASPS 2024 statistics (Rhinoplasty)
// — ASMBS / FAIR Health (Bariatric)
// — NowHairTime.com (Hair Transplant per-graft US rates)
// — ADA survey (Dental implants)
// — AdvancedFertility.com / GoodRx (IVF)
// — American Refractive Surgery Council (LASIK)
//
// Turkey figures sourced from:
// — Published rates at JCI-accredited hospitals: Acibadem, Memorial, Medipol, Florence Nightingale
// — Bookimed.com (aggregated Turkey hospital rates)
// — NowHairTime.com (Turkey vs US hair transplant comparison)
// — Turkey Travel Planner (Dental costs Turkey 2026)
// — International Clinics (Rhinoplasty Turkey 2025)

const PROCEDURES = [
  // Turkey-signature procedures first
  {
    name: 'Hair Transplant — FUE (2,000 grafts)',
    category: 'Hair & Aesthetics',
    usa: { low: 7000, high: 15000, display: '$7,000 – $15,000', source: 'NowHairTime 2025; avg $5.44/graft in USA' },
    turkey: { low: 1500, high: 3500, display: '$1,500 – $3,500' },
    saving: 77,
    note: 'Turkey performs over 500,000 hair transplants annually — more than any other country. DHI and FUE available.',
  },
  {
    name: 'Hair Transplant — FUE (4,000 grafts)',
    category: 'Hair & Aesthetics',
    usa: { low: 15000, high: 25000, display: '$15,000 – $25,000', source: 'NowHairTime 2025; ISHRS survey' },
    turkey: { low: 2500, high: 5500, display: '$2,500 – $5,500' },
    saving: 80,
    note: 'Advanced norwood grade cases. Most Istanbul clinics are all-inclusive (hotel, transfers, aftercare kit).',
  },
  {
    name: 'Dental Implant (per tooth)',
    category: 'Dental',
    usa: { low: 3000, high: 5500, display: '$3,000 – $5,500 per tooth', source: 'ADA 2024 survey; FAIR Health' },
    turkey: { low: 450, high: 900, display: '$450 – $900 per tooth' },
    saving: 83,
    note: 'Nobel Biocare, Straumann, and Osstem implants available. Same brands as US offices.',
  },
  {
    name: 'Full Mouth Rehabilitation (All-on-4)',
    category: 'Dental',
    usa: { low: 25000, high: 55000, display: '$25,000 – $55,000', source: 'AAOMS published rates; FAIR Health' },
    turkey: { low: 4500, high: 9000, display: '$4,500 – $9,000' },
    saving: 82,
    note: 'All-on-4 and All-on-6 configurations. Many Istanbul clinics offer all-inclusive dental tourism packages.',
  },
  {
    name: 'Rhinoplasty (Nose Job)',
    category: 'Cosmetic Surgery',
    usa: { low: 8000, high: 18000, display: '$8,000 – $18,000', source: 'ASPS 2024 statistics; avg surgeon fee + facility' },
    turkey: { low: 2500, high: 5500, display: '$2,500 – $5,500' },
    saving: 70,
    note: 'Turkey is the global leader in rhinoplasty volume. Istanbul surgeons publish peer-reviewed outcomes.',
  },
  {
    name: 'Gastric Sleeve (Sleeve Gastrectomy)',
    category: 'Bariatric',
    usa: { low: 18000, high: 32000, display: '$18,000 – $32,000', source: 'ASMBS 2024; FAIR Health benchmark' },
    turkey: { low: 2800, high: 5500, display: '$2,800 – $5,500' },
    saving: 84,
    note: 'Typically all-inclusive in Turkey: surgery, anaesthesia, 3–5 night stay, nutritionist, transfers. Acibadem and Memorial perform hundreds monthly.',
  },
  {
    name: 'Gastric Bypass (Roux-en-Y)',
    category: 'Bariatric',
    usa: { low: 25000, high: 45000, display: '$25,000 – $45,000', source: 'ASMBS 2024; Blue Cross benchmark' },
    turkey: { low: 4500, high: 8000, display: '$4,500 – $8,000' },
    saving: 82,
    note: 'Available at JCI-accredited Istanbul hospitals with experienced bariatric teams.',
  },
  {
    name: 'Cardiac Bypass (CABG)',
    category: 'Cardiac',
    usa: { low: 57000, high: 200000, display: '$57,000 – $200,000', source: 'JAHA 2024; median self-pay $75,047' },
    turkey: { low: 12000, high: 18000, display: '$12,000 – $18,000' },
    saving: 80,
    note: 'At JCI-accredited hospitals: Acibadem, Memorial, American Hospital Istanbul, Medipol.',
  },
  {
    name: 'Heart Valve Replacement',
    category: 'Cardiac',
    usa: { low: 80000, high: 200000, display: '$80,000 – $200,000', source: 'FAIR Health benchmark' },
    turkey: { low: 10000, high: 17000, display: '$10,000 – $17,000' },
    saving: 88,
    note: 'Mechanical and biological valve options. Same Medtronic and Edwards Lifesciences devices as in US hospitals.',
  },
  {
    name: 'Knee Replacement (Total)',
    category: 'Orthopaedic',
    usa: { low: 30000, high: 60000, display: '$30,000 – $60,000', source: 'CostHelper 2024; avg inpatient $41,620' },
    turkey: { low: 5000, high: 9000, display: '$5,000 – $9,000' },
    saving: 80,
    note: 'Zimmer Biomet and Stryker implants available. 5–7 day hospital stay included.',
  },
  {
    name: 'IVF (Single Cycle with ICSI)',
    category: 'Fertility',
    usa: { low: 20000, high: 25000, display: '$20,000 – $25,000', source: 'AdvancedFertility.com; GoodRx 2025' },
    turkey: { low: 2000, high: 5000, display: '$2,000 – $5,000' },
    saving: 84,
    note: 'Includes ICSI, monitoring, egg retrieval, fertilisation, and embryo transfer. Medications often bundled.',
  },
  {
    name: 'LASIK (Both Eyes)',
    category: 'Ophthalmology',
    usa: { low: 3800, high: 6000, display: '$3,800 – $6,000', source: 'American Refractive Surgery Council; avg $2,200/eye' },
    turkey: { low: 900, high: 2000, display: '$900 – $2,000' },
    saving: 76,
    note: 'Bladeless (femtosecond) LASIK and SMILE procedures. Istanbul eye hospitals have high international patient volume.',
  },
  {
    name: 'Liver Transplant (Living Donor)',
    category: 'Transplant',
    usa: { low: 878000, high: 1017000, display: '$878,000 – $1,017,000', source: 'Milliman 2025 actuarial report — total billed' },
    turkey: { low: 28000, high: 45000, display: '$28,000 – $45,000' },
    saving: 96,
    note: 'Acibadem and Memorial Hospital Groups perform liver transplants to international patients.',
  },
  {
    name: 'Spinal Fusion (Lumbar)',
    category: 'Spine',
    usa: { low: 48000, high: 150000, display: '$48,000 – $150,000', source: "Becker's Spine Review" },
    turkey: { low: 6000, high: 12000, display: '$6,000 – $12,000' },
    saving: 87,
    note: 'Single and multi-level fusion procedures. TLIF and PLIF approaches. Includes implants.',
  },
]

const CATEGORIES = [...new Set(PROCEDURES.map((p) => p.category))]

const TURKEY_INCLUSIONS = [
  'Surgeon and anaesthesiologist fees',
  'Operating theatre and equipment',
  'Hospital room and nursing (private room standard at most international-patient hospitals)',
  'Standard post-operative medications during hospital stay',
  'Implants and hardware (at major hospitals)',
  'Airport-to-hospital transfer (usually included in package deals)',
  'Basic post-discharge follow-up',
]

const TURKEY_EXCLUSIONS = [
  'Round-trip flights from the United States',
  'Hotel accommodation before and after hospitalisation',
  'Take-home medications after discharge',
  'Travel insurance',
  'Additional diagnostic tests if ordered after arrival',
  'Interpreter (most major Istanbul hospitals have English-speaking staff — interpreter rarely needed)',
]

const HIDDEN_US_COSTS = [
  {
    item: 'Out-of-pocket maximum (KFF 2024)',
    detail: 'Average family plan OOP maximum: $9,450. Major surgical procedures typically hit this limit, meaning full OOP max is paid before insurance covers 100%.',
    amount: '$9,450',
  },
  {
    item: 'Annual deductible (KFF 2024)',
    detail: 'Average individual deductible for employer-sponsored insurance: $1,735. You pay this before insurance begins covering costs.',
    amount: '$1,735',
  },
  {
    item: 'Claim denials',
    detail: 'US insurers initially deny 17% of in-network claims (KFF 2023). Appeal timelines add weeks to months of delay while the medical condition progresses.',
    amount: 'Weeks of delay',
  },
  {
    item: 'Surprise billing (No Surprises Act gaps)',
    detail: 'Ground ambulance services are still exempt from the No Surprises Act. Anaesthesiologist and radiologist out-of-network bills remain common in practice.',
    amount: '$600 – $10,000+',
  },
  {
    item: 'Hair transplant not covered by insurance',
    detail: 'Hair transplants are classified as cosmetic by all US insurers. 100% out-of-pocket, typically $7,000–$15,000 for 2,000 grafts.',
    amount: '$7,000 – $25,000',
  },
  {
    item: 'Dental not covered by medical insurance',
    detail: 'US medical insurance does not cover dental implants or restorations. Stand-alone dental insurance caps typically at $1,000–$2,000/year — far below implant costs.',
    amount: '$3,000 – $5,500 per tooth',
  },
]

const TRAVEL_COSTS = [
  { item: 'Round-trip flight (East Coast — direct Turkish Airlines)', amount: '$600 – $1,100' },
  { item: 'Round-trip flight (West Coast — 1 stop)', amount: '$900 – $1,500' },
  { item: 'Additional ticket for companion', amount: '$600 – $1,500' },
  { item: 'Hotel near hospital (per week)', amount: '$200 – $500' },
  { item: 'Local transport (airport, hospital)', amount: '$80 – $200' },
  { item: 'Travel insurance (2–3 weeks)', amount: '$120 – $280' },
  { item: 'Total estimated travel + accommodation (2 people, 2 weeks)', amount: '$2,500 – $5,500' },
]

const FAQS = [
  {
    q: 'Are Turkish hospitals actually comparable to US hospitals in quality?',
    a: 'Turkey has more than 40 JCI-accredited hospitals — the same international accreditation held by Cleveland Clinic, Johns Hopkins, and other leading US centers. Twenty-five of these are in Istanbul alone. JCI accreditation requires identical patient safety standards, surgical outcome tracking, and infection control protocols as in the US. Acibadem, Memorial, American Hospital Istanbul, and Florence Nightingale Hospital treat hundreds of thousands of international patients annually.',
  },
  {
    q: 'Why is Turkey specifically known for hair transplants and dental work?',
    a: 'Turkey performs more hair transplants than any other country — over 500,000 procedures annually (ISHRS data). The combination of volume, specialist training, and cost has made Istanbul the global hub. Turkish surgeons publish peer-reviewed outcomes and train international colleagues. For dental work, Turkey has both the trained specialists and the infrastructure to handle high international patient volumes with consistent quality.',
  },
  {
    q: 'Is a Turkey hair transplant as good as one done in the US?',
    a: 'The technique is identical — FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation) are global standards, not country-specific. The difference is volume: a Turkish surgeon performing 300+ procedures per year has more hands-on experience than most US surgeons performing 30–50 per year. Sultan GHC selects clinics based on surgeon credentials, published outcomes, and patient volume — not lowest price.',
  },
  {
    q: 'What does the gastric sleeve all-inclusive package in Turkey include?',
    a: 'At most JCI-accredited Istanbul hospitals, a gastric sleeve package includes the surgery itself, anaesthesia, 3–5 night hospital stay, pre-surgery bloodwork and ECG, dietitian consultation, airport-to-hospital transfers, and aftercare follow-up. Flights and pre-travel accommodation are additional. The all-in range including travel is typically $5,000–$9,000 vs $18,000–$32,000 in the US.',
  },
  {
    q: 'Do Turkish hospitals use the same implant brands as US hospitals?',
    a: 'Yes. Major Turkish hospitals use Zimmer Biomet, Stryker, and DePuy Synthes for orthopaedic implants; Nobel Biocare, Straumann, and Osstem for dental implants; Medtronic and Edwards Lifesciences for cardiac devices. The difference is hospital procurement costs — Turkish hospitals negotiate lower device prices due to volume and different import economics.',
  },
  {
    q: 'What is the total cost including flights and accommodation for dental work in Turkey?',
    a: 'A full mouth rehabilitation (All-on-4) in Turkey costs $4,500–$9,000 for the dental work itself. Adding two round-trip economy flights and two weeks in an Istanbul hotel brings the total to approximately $7,000–$12,500. The same procedure in the US costs $25,000–$55,000. The net saving even after all travel costs is $12,500–$42,500.',
  },
  {
    q: 'Does Sultan GHC work with JCI-accredited hospitals in Turkey?',
    a: 'Yes. Sultan GHC exclusively partners with JCI-accredited and internationally certified hospitals. In Turkey, our network includes hospitals in Istanbul, Ankara, Antalya, and Izmir — all with dedicated International Patient Departments, English-speaking coordinators, and experience serving American patients.',
  },
  {
    q: 'What does Sultan GHC charge for facilitating treatment in Turkey?',
    a: 'Sultan GHC does not charge patients a facilitation fee. The service is free to patients. We are compensated by partner hospitals. There are no hidden charges and no markups on the hospital bill you receive.',
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
        { '@type': 'ListItem', position: 3, name: 'Turkey vs USA', item: 'https://www.sultanghc.com/cost-savings/turkey' },
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
      name: 'Medical Treatment Cost in Turkey vs USA',
      description: 'Verified procedure cost comparison between Turkey (JCI-accredited hospitals) and the United States, covering hair transplant, dental implants, cardiac surgery, bariatric procedures, IVF, rhinoplasty, and orthopaedics.',
      url: 'https://www.sultanghc.com/cost-savings/turkey',
      audience: { '@type': 'Patient' },
    },
  ],
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function savingBadgeColor(saving) {
  if (saving >= 85) return 'bg-emerald-100 text-emerald-800'
  if (saving >= 75) return 'bg-green-100 text-green-800'
  return 'bg-lime-100 text-lime-700'
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CostSavingsTurkeyPage() {
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
              <Link href="/destinations/turkey" className="hover:text-primary transition-colors">Turkey</Link>
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
                  src="https://flagcdn.com/48x36/tr.png"
                  srcSet="https://flagcdn.com/96x72/tr.png 2x"
                  width={48}
                  height={36}
                  alt="Turkey flag"
                  className="rounded shadow-sm"
                />
                <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Turkey vs USA</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                What the Same Procedure
                <span className="block text-primary mt-2">Actually Costs in Turkey</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
                14 procedure-by-procedure cost comparisons using verified US billing data and
                published rates at JCI-accredited Turkish hospitals.
                Includes Turkey-specific procedures: hair transplant, dental implants, rhinoplasty, and bariatric surgery
                — categories where Turkey leads globally in both volume and expertise.
              </p>

              <div className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-4 max-w-2xl">
                <Info size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  US costs sourced from: JAHA 2024 (CABG), Milliman 2025 (transplants),
                  ASPS 2024 statistics (rhinoplasty), ASMBS 2024 (bariatric),
                  ADA survey (dental), NowHairTime 2025 (hair transplant), GoodRx (IVF).
                  Turkey costs from JCI-accredited hospital published rates.
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
                { stat: '70–96%', label: 'Savings range across 14 procedures' },
                { stat: '500,000+', label: 'Hair transplants performed in Turkey annually' },
                { stat: '40+', label: 'JCI-accredited hospitals in Turkey' },
                { stat: '$75,047', label: 'US median self-pay cost for CABG (JAHA 2024)' },
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
              US figures represent self-pay / uninsured billing — relevant for Americans who are uninsured,
              underinsured, or seeking procedures (hair transplant, dental, rhinoplasty) that US insurance
              classifies as cosmetic and does not cover.
              Turkey figures are for JCI-accredited hospitals only.
            </p>

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

                            {/* Turkey */}
                            <div className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3">
                              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-primary/70 uppercase tracking-wider mb-0.5">
                                <img src="https://flagcdn.com/16x12/tr.png" width={16} height={12} alt="Turkey" className="rounded-sm" />
                                Turkey — JCI hospital
                              </div>
                              <p className="text-lg font-bold text-primary leading-none">{proc.turkey.display}</p>
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
              Turkey cost ranges reflect published rates at JCI-accredited hospitals only.
              Actual quotes vary by hospital, surgeon, and patient complexity.
              Sultan GHC obtains itemised cost estimates from the treating hospital before you commit.
            </p>
          </div>
        </section>

        {/* ── Inclusions / Exclusions ── */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">What the Turkey Cost Includes</h2>
              <p className="text-gray-500 mb-10">
                Turkey hospitals treating international patients often bundle more into the base price than US hospitals.
                Here is what is typically included and what is not.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    Typically included
                  </h3>
                  <ul className="space-y-3">
                    {TURKEY_INCLUSIONS.map((item) => (
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
                    {TURKEY_EXCLUSIONS.map((item) => (
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

        {/* ── Travel cost context ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <Plane size={24} className="text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Add Travel and Accommodation</h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Turkey has a major advantage over India on travel: Turkish Airlines operates nonstop flights
                from New York, Washington D.C., Chicago, Miami, Los Angeles, San Francisco, and Boston
                — 10–11 hours versus 14–16 hours to India.
                Here are realistic 2025 estimates for a patient and one companion.
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

              {/* Two concrete examples */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Hair transplant */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Example: Hair Transplant (3,000 grafts)</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">USA</p>
                      <p className="text-xl font-bold text-gray-900">$10,000 – $20,000</p>
                      <p className="text-xs text-gray-500">Procedure only.</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Turkey total all-in</p>
                      <p className="text-xl font-bold text-primary">$4,500 – $8,500</p>
                      <p className="text-xs text-gray-500">Procedure + flights + 1 week hotel + transfers.</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 pt-2 border-t border-primary/10">
                      Net saving: $5,000 – $15,000
                    </p>
                  </div>
                </div>

                {/* Gastric sleeve */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Example: Gastric Sleeve Surgery</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">USA</p>
                      <p className="text-xl font-bold text-gray-900">$18,000 – $32,000</p>
                      <p className="text-xs text-gray-500">Surgery only. Most insurers require extended pre-approval.</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Turkey total all-in</p>
                      <p className="text-xl font-bold text-primary">$5,500 – $9,500</p>
                      <p className="text-xs text-gray-500">All-inclusive surgery package + flights + 2 weeks hotel.</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 pt-2 border-t border-primary/10">
                      Net saving: $8,500 – $22,500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hidden US costs ── */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">US Costs Often Overlooked</h2>
              <p className="text-gray-600 mb-10">
                For procedures that US insurance does not cover — hair transplant, dental implants, cosmetic surgery —
                there is no insurance offset at all. 100% of the US cost is out of pocket.
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
                <h2 className="text-3xl font-bold text-gray-900">The Cost Gap Is Not a Quality Gap</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Turkey{`'`}s lower prices are driven by physician compensation levels, hospital operational costs,
                and medical device procurement — not by inferior outcomes.
                The following facts are verifiable through public data.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    fact: '40+ JCI-accredited hospitals',
                    context: 'JCI accreditation requires identical patient safety standards as US Joint Commission accreditation. 25 of these hospitals are in Istanbul.',
                  },
                  {
                    fact: '2 million international patients in 2024',
                    context: 'Turkish Ministry of Health confirmed 2 million health tourists with $10 billion in healthcare tourism revenue in 2024.',
                  },
                  {
                    fact: '500,000+ hair transplants per year',
                    context: 'Turkey performs more hair transplants than any other country — ISHRS (International Society of Hair Restoration Surgery) data.',
                  },
                  {
                    fact: 'HealthTurkiye mandatory registry',
                    context: 'All hospitals treating international patients must report cases to the Turkish Ministry of Health registry. This is a regulatory requirement, not marketing.',
                  },
                  {
                    fact: 'English-speaking International Patient Departments',
                    context: 'Every major Istanbul hospital has a dedicated IPD. American patients are a significant and growing segment.',
                  },
                  {
                    fact: 'Same surgical technology',
                    context: 'Da Vinci robotic surgery, robotic hair transplant (ARTAS system), digital implant planning (iTero scanner), and real-time intraoperative imaging are all available.',
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
              <h2 className="text-3xl font-bold mb-4">Get a Free Cost Estimate from a Turkish Hospital</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Share your medical reports or treatment requirements.
                Sultan GHC sends your case to the right hospital in Turkey and
                returns an itemised cost estimate — typically within 48 hours. No obligation.
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
                { label: 'Turkey Destination Guide', href: '/destinations/turkey', desc: 'Cities, hospitals, and specialties' },
                { label: 'Turkey Entry Guide (No Visa)', href: '/visa-guide/turkey', desc: 'US citizens enter visa-free since Jan 2024' },
                { label: 'India Cost Savings', href: '/cost-savings/india', desc: 'Same comparison for India' },
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
