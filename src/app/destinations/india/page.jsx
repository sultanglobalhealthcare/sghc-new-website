import Link from 'next/link'
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Globe2,
  Shield,
  Stethoscope,
  DollarSign,
  Plane,
  BookOpen,
  ImageIcon,
  Star,
  TrendingUp,
  Users,
  Clock,
  Languages,
  Cpu,
  HeartPulse,
  FlaskConical,
  Bone,
  Eye,
  Baby,
  Smile,
} from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Medical Treatment in India for American Patients | Sultan GHC Destination Guide',
  description:
    'India is Asia\'s top medical tourism destination — 507,000 international patients in 2025, 60–90% cost savings vs. U.S. prices, JCI-accredited hospitals in Delhi, Mumbai, Chennai, Bengaluru & Hyderabad. Sultan GHC connects U.S. patients with the right specialist in India. Free evaluation in 24 hours.',
  keywords: [
    'medical treatment India Americans',
    'medical tourism India USA',
    'JCI accredited hospitals India',
    'India medical tourism cost savings',
    'hospitals in India for international patients',
    'medical tourism Delhi Mumbai Chennai',
    'heart surgery India cost',
    'knee replacement India cost',
    'cancer treatment India',
    'medical visa India USA',
    'Heal in India campaign',
    'India healthcare quality international',
    'Sultan GHC India',
    'affordable surgery India Americans',
    'best hospitals India medical tourism',
  ],
  openGraph: {
    title: 'Medical Treatment in India | Sultan GHC Destination Guide',
    description:
      '507,000 international patients chose India in 2025. JCI-accredited hospitals, fellowship-trained specialists, 60–90% savings. Sultan GHC connects U.S. patients with the right hospital and doctor — free in 24 hours.',
    url: 'https://www.sultanghc.com/destinations/india',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [{ url: 'https://www.sultanghc.com/api/og?title=Medical+Treatment+in+India&desc=507%2C000+international+patients+chose+India+in+2025.+JCI-accredited+hospitals%2C+60-90%25+savings+vs+U.S.&cat=Destination+Guide', width: 1200, height: 630, alt: 'Medical Treatment in India — Sultan GHC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Treatment in India for Americans | Sultan GHC',
    description: 'JCI hospitals, 60–90% savings, fellowship-trained surgeons. India treated 507,000 international patients in 2025.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/destinations/india' },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.sultanghc.com/destinations' },
    { '@type': 'ListItem', position: 3, name: 'India',        item: 'https://www.sultanghc.com/destinations/india' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is medical treatment in India safe for American patients?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. India hosts 57–61 JCI-accredited hospitals — the same international standard used to accredit top U.S. hospitals. Specialist surgeons at these facilities hold fellowship training from institutions in the United States, United Kingdom, and Germany. Sultan GHC only recommends hospitals that hold JCI or equivalent international accreditation.' },
    },
    {
      '@type': 'Question',
      name: 'How much does heart bypass surgery cost in India compared to the United States?',
      acceptedAnswer: { '@type': 'Answer', text: 'A cardiac bypass surgery that costs $100,000–$130,000 in the United States typically costs $6,500–$9,000 in India at a JCI-accredited hospital — a saving of approximately 90%. The same surgical team, implant brands (Medtronic, Abbott, Boston Scientific), and ICU post-operative care standard applies.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa to travel to India for medical treatment?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. U.S. passport holders require an Indian Medical e-Visa (e-MED), available online at indianvisaonline.gov.in. The e-MED visa requires a letter from the accredited Indian hospital confirming your appointment — which Sultan GHC helps obtain. India offers Medical e-Visas to citizens of 172 countries. A companion can travel on a Medical Attendant e-Visa.' },
    },
    {
      '@type': 'Question',
      name: 'Is English spoken in Indian hospitals?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. English is the primary language of medical care at all major private hospitals in India. Consultations, consent forms, discharge summaries, medical reports, and all clinical communication are conducted in English. India has one of the largest English-speaking professional populations in the world.' },
    },
    {
      '@type': 'Question',
      name: 'How many international patients travel to India for medical treatment each year?',
      acceptedAnswer: { '@type': 'Answer', text: 'India received 507,000 foreign patients for medical treatment in 2025, up from 112,000 in 2009 — a 4.5-fold increase in 16 years. In 2024, the Government of India recorded 644,387 foreign medical tourist arrivals. India\'s medical tourism market is valued at $20.4 billion in 2026 and projected to reach $65.1 billion by 2036.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to travel to India for medical treatment?',
      acceptedAnswer: { '@type': 'Answer', text: 'October through March is the most comfortable travel window for international patients visiting India. This period covers the cool, dry winter season across most of India — pleasant temperatures, minimal rainfall, and easier recovery conditions. Avoid June through September (monsoon season) if possible, particularly for longer hospital stays.' },
    },
  ],
}

// ─── Image Placeholder ────────────────────────────────────────────────────────

function ImagePlaceholder({ filename, width, height, label, aiPrompt, aspectRatio, className = '' }) {
  return (
    <div
      className={`relative bg-gradient-to-br from-blue-50 to-slate-100 border-2 border-dashed border-blue-200 rounded-2xl flex flex-col items-start gap-2 text-left p-5 overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || `${width}/${height}` }}
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
      <p className="text-[10px] font-semibold text-blue-500 leading-snug shrink-0">{label}</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg px-3 py-2 w-full flex-1 overflow-auto">
        <p className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mb-1">AI Image Prompt</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">{aiPrompt}</p>
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '507,000',  label: 'International patients treated in India in 2025', source: 'Medical Buyer, July 2026' },
  { value: '60–90%',   label: 'Typical cost savings versus U.S. treatment prices', source: 'Research & Markets, Jan 2025' },
  { value: '57–61',    label: 'JCI-accredited hospitals across India', source: 'JCI / Shifa MHealth, 2025' },
  { value: '$20.4B',   label: 'India medical tourism market value in 2026', source: 'Future Market Insights, 2026' },
]

const REASONS = [
  {
    icon: Shield,
    color: 'bg-blue-50 text-blue-600',
    title: 'Hospital Quality You Can Verify',
    body: "India hosts 57–61 JCI-accredited hospitals — the exact same international standard used to certify hospitals in the United States. JCI conducts rigorous on-site evaluations covering over 1,000 measurable standards. You can verify any hospital's JCI accreditation independently at jointcommissioninternational.org before booking.",
    proof: 'JCI-accredited: Medanta, Fortis, Max, Apollo, Kokilaben and more',
  },
  {
    icon: Stethoscope,
    color: 'bg-violet-50 text-violet-600',
    title: 'Doctors Trained in the U.S. and UK',
    body: "Many specialist surgeons at top Indian hospitals completed postgraduate fellowships at Johns Hopkins, the Cleveland Clinic, Royal College of Surgeons, and leading German universities. Their credentials are internationally verifiable. Sultan GHC shares complete specialist profiles — training, volumes, subspecialty — before you commit.",
    proof: 'Fellowship-trained: cardiac, neuro, ortho, oncology and more',
  },
  {
    icon: Languages,
    color: 'bg-emerald-50 text-emerald-600',
    title: 'English Is the Language of Care',
    body: 'English is the primary language of medical practice at every major private hospital in India. Consultations, consent forms, discharge summaries, operative notes, and medical reports are all in English. There is no language barrier in the hospitals Sultan GHC partners with — and our coordinators are on hand throughout your stay.',
    proof: 'English-speaking care at all Sultan GHC partner hospitals',
  },
  {
    icon: Cpu,
    color: 'bg-amber-50 text-amber-600',
    title: 'Same Technology as U.S. Hospitals',
    body: 'Partner hospitals use the same diagnostic and surgical equipment found in leading American medical centers — da Vinci robotic surgery systems, high-field MRI and 4D CT, PET-CT, CyberKnife radiosurgery, and implants from Medtronic, DePuy, Stryker, and Abbott. India imports medical devices from the same U.S. and European manufacturers supplying American hospitals.',
    proof: 'da Vinci, Varian, Medtronic, Stryker — same as U.S.',
  },
  {
    icon: TrendingUp,
    color: 'bg-cyan-50 text-cyan-600',
    title: 'Outcomes That Match International Standards',
    body: "India's top cardiac centers report surgical mortality rates for bypass surgery comparable to leading U.S. centers. Apollo Hospitals has published peer-reviewed cardiac outcomes data. JCI accreditation requires hospitals to track and benchmark patient outcomes. These are not simply affordable hospitals — they are high-volume, internationally audited centers that do some procedures more frequently than most U.S. hospitals.",
    proof: 'Peer-reviewed outcomes published by major Indian hospital groups',
  },
  {
    icon: Clock,
    color: 'bg-rose-50 text-rose-600',
    title: 'Speed That the U.S. System Cannot Match',
    body: "A patient from the UK reported receiving a next-day neurology consultation in India — with MRI and blood test results within an hour — after facing a year-long wait at home. American patients with complex conditions regularly wait 3–6 months for specialist appointments in the U.S. In India, most patients go from enquiry to hospital in under 4 weeks.",
    proof: 'Source: Medical Buyer, July 2026',
  },
]

const CITIES = [
  {
    city: 'Delhi NCR',
    tagline: 'Cardiac, Neurosurgery & Transplant Hub',
    desc: 'The National Capital Region is home to India\'s most concentrated cluster of super-specialty hospitals. Delhi NCR is particularly renowned for complex cardiac surgery, neurosurgery, organ transplantation, and oncology — with the highest density of U.S. and UK-trained specialists in the country.',
    specialties: ['Cardiac Surgery', 'Neurosurgery', 'Organ Transplant', 'Oncology', 'Orthopaedics'],
    hospitals: 'Medanta, Fortis Gurgaon, Max Super Speciality, BLK-Max, Sir Ganga Ram',
    icon: HeartPulse,
    color: 'border-blue-200 bg-blue-50/50',
    accent: 'text-blue-600 bg-blue-100',
  },
  {
    city: 'Mumbai',
    tagline: 'Oncology, Liver Care & Orthopaedics',
    desc: "India's financial capital houses some of its most prestigious hospitals. Mumbai is a destination of choice for oncology (including Tata Memorial — one of Asia's largest cancer centers), hepatology and liver surgery, orthopaedic procedures, and complex minimally invasive surgery.",
    specialties: ['Oncology & Cancer Care', 'Liver Surgery', 'Orthopaedics', 'Minimally Invasive Surgery', 'Cardiology'],
    hospitals: 'Kokilaben Dhirubhai Ambani, Hinduja, Lilavati, Tata Memorial, Jaslok',
    icon: FlaskConical,
    color: 'border-violet-200 bg-violet-50/50',
    accent: 'text-violet-600 bg-violet-100',
  },
  {
    city: 'Chennai',
    tagline: 'Cardiac Surgery, Spine & ENT',
    desc: "Often called India's \"health capital,\" Chennai attracts a significant share of India's international patients. The city is globally recognized for cardiac care, spine surgery, renal transplants, and ENT — with Apollo Chennai being one of the most visited hospitals by medical tourists in all of Asia.",
    specialties: ['Cardiac Surgery', 'Spine Surgery', 'ENT & Head-Neck', 'Renal Transplant', 'Robotic Surgery'],
    hospitals: 'Apollo Hospitals Chennai, Rela Institute & Medical Centre, MGM Healthcare, MIOT International, Fortis Malar',
    icon: Stethoscope,
    color: 'border-emerald-200 bg-emerald-50/50',
    accent: 'text-emerald-600 bg-emerald-100',
  },
  {
    city: 'Bengaluru',
    tagline: 'Oncology, Fertility & Robotic Surgery',
    desc: "India's technology capital applies the same innovation mindset to healthcare. Bengaluru is a leading destination for oncology, fertility and IVF, robotic and minimally invasive procedures, and paediatric care — with hospitals that attract high-calibre specialists who blend clinical expertise with cutting-edge technology.",
    specialties: ['Oncology', 'Fertility & IVF', 'Robotic Surgery', 'Paediatric Surgery', 'Pulmonology'],
    hospitals: 'Manipal Hospitals, Narayana Health, Columbia Asia, Aster CMI',
    icon: Baby,
    color: 'border-amber-200 bg-amber-50/50',
    accent: 'text-amber-600 bg-amber-100',
  },
  {
    city: 'Hyderabad',
    tagline: 'Bariatric, Robotic & Nephrology',
    desc: 'Hyderabad has rapidly grown into one of India\'s leading medical hubs, particularly for bariatric and metabolic surgery, robotic-assisted procedures, nephrology, and ophthalmology. Its hospitals consistently rank among India\'s best for patient experience and international patient services.',
    specialties: ['Bariatric Surgery', 'Robotic Surgery', 'Nephrology', 'Ophthalmology', 'Orthopaedics'],
    hospitals: 'KIMS Hospitals, Yashoda Hospitals, Apollo Hyderabad, AIG Hospitals',
    icon: Cpu,
    color: 'border-cyan-200 bg-cyan-50/50',
    accent: 'text-cyan-600 bg-cyan-100',
  },
]

const COSTS = [
  { procedure: 'Cardiac Bypass Surgery',          us: '$100,000 – $130,000', india: '$6,500 – $9,000',   saving: '~93%' },
  { procedure: 'Heart Valve Replacement',          us: '$150,000 – $200,000', india: '$8,000 – $12,000',  saving: '~94%' },
  { procedure: 'Knee Replacement (Single)',         us: '$35,000 – $50,000',   india: '$5,500 – $7,500',   saving: '~85%' },
  { procedure: 'Hip Replacement',                  us: '$35,000 – $45,000',   india: '$6,000 – $8,500',   saving: '~82%' },
  { procedure: 'Spinal Fusion Surgery',            us: '$60,000 – $150,000',  india: '$7,000 – $12,000',  saving: '~90%' },
  { procedure: 'Bone Marrow Transplant',           us: '$200,000 – $300,000', india: '$22,000 – $35,000', saving: '~89%' },
  { procedure: 'Liver Transplant',                 us: '$250,000 – $400,000', india: '$30,000 – $45,000', saving: '~88%' },
  { procedure: 'IVF Treatment (Per Cycle)',        us: '$12,000 – $20,000',   india: '$2,500 – $4,500',   saving: '~80%' },
  { procedure: 'LASIK Eye Surgery (Both Eyes)',    us: '$4,000 – $6,000',     india: '$700 – $1,200',     saving: '~82%' },
  { procedure: 'Full Mouth Dental Implants',       us: '$30,000 – $50,000',   india: '$4,000 – $7,000',   saving: '~86%' },
]

const PRACTICAL = [
  {
    icon: Plane,
    title: 'Flights from the United States',
    points: [
      'U.S. East Coast to Delhi/Mumbai: 14–16 hours, typically one stop (via London, Dubai, or Doha)',
      'U.S. West Coast to Delhi/Mumbai: 15–17 hours nonstop available (Air India, United)',
      'Airlines: Air India, United, American, Emirates, Qatar Airways, Etihad, Turkish Airlines',
      'Best practice: book flexible-date tickets; Sultan GHC helps plan your travel itinerary',
    ],
  },
  {
    icon: BookOpen,
    title: 'Medical Visa for India',
    points: [
      'U.S. passport holders require an Indian Medical e-Visa (e-MED) — available online at indianvisaonline.gov.in',
      'Requires a letter from the treating JCI-accredited hospital — Sultan GHC obtains this for you',
      'India offers Medical e-Visas to citizens of 172 countries',
      'A companion may travel on a Medical Attendant e-Visa',
      'e-Visa is typically approved within 24–72 hours',
    ],
  },
  {
    icon: Globe2,
    title: 'English in India',
    points: [
      'English is an official language of India and the primary language of medical practice',
      'Consultations, consent forms, discharge summaries — all in English at partner hospitals',
      'India has approximately 125 million English speakers — the second-largest English-speaking population in the world',
      'Sultan GHC\'s coordinators are English-speaking at all points of contact',
    ],
  },
  {
    icon: Clock,
    title: 'Best Time to Travel',
    points: [
      'October to March: cool, dry season — ideal for patients undergoing surgery and recovery',
      'November to February: best weather in Delhi and North India',
      'December to February: ideal for Chennai, Mumbai, and South India',
      'Avoid June to September (monsoon season) for longer hospital stays if possible',
    ],
  },
  {
    icon: Users,
    title: 'Food & Dietary Needs',
    points: [
      'All Sultan GHC partner hospitals offer international menus — not only Indian cuisine',
      'Dietary requirements (vegetarian, halal, low-sodium, diabetic) are accommodated on request',
      'Soft foods and post-surgical dietary plans are managed by hospital nutritionists',
      'Western-style coffee shops, pharmacies, and convenience stores are available in or near every partner hospital',
    ],
  },
  {
    icon: Shield,
    title: 'Safety for International Patients',
    points: [
      'Major Indian cities (Delhi, Mumbai, Chennai, Hyderabad, Bengaluru) are safe for medical travelers',
      'Sultan GHC arranges private airport pickup, hospital transfers, and ground transport throughout',
      'Partner hospitals operate in well-established, internationally serviced urban areas',
      'Comprehensive travel insurance including medical evacuation coverage is strongly recommended',
    ],
  },
]

const FAQS = [
  {
    q: 'Is medical treatment in India safe for American patients?',
    a: "Yes. India hosts 57–61 JCI-accredited hospitals — the same international quality standard used to accredit leading U.S. hospitals. Specialist surgeons hold fellowship credentials from the U.S., UK, and Germany. Sultan GHC partners only with internationally accredited hospitals that meet rigorous quality and safety criteria. You can independently verify JCI accreditation at jointcommissioninternational.org.",
  },
  {
    q: 'How much does heart bypass surgery cost in India vs. the U.S.?',
    a: "A cardiac bypass surgery that costs $100,000–$130,000 in the United States typically costs $6,500–$9,000 at a JCI-accredited hospital in India — a saving of approximately 90%. The same surgical discipline, implant brands (Medtronic, Abbott, Boston Scientific), and post-operative ICU standards apply. Even after flights and accommodation, patients save tens of thousands of dollars.",
  },
  {
    q: 'Do I need a visa to travel to India for medical treatment?',
    a: "Yes. U.S. passport holders need an Indian Medical e-Visa (e-MED), available online at indianvisaonline.gov.in. It requires an invitation letter from your treating JCI-accredited hospital — which Sultan GHC obtains on your behalf. India offers Medical e-Visas to 172 countries. A travel companion can apply for a Medical Attendant e-Visa. Approval typically takes 24–72 hours.",
  },
  {
    q: 'Is English spoken in Indian hospitals?',
    a: "English is the primary language of medical practice at every major private hospital in India. Consultations, consent forms, discharge summaries, operative notes, and medical reports are all in English. India has the second-largest English-speaking population in the world. Sultan GHC also provides English-speaking coordinators on the ground throughout your stay.",
  },
  {
    q: 'How many international patients travel to India each year?',
    a: "India received 507,000 international patients for medical treatment in 2025, up from 112,000 in 2009 — a 4.5-fold increase in 16 years (Medical Buyer, July 2026). The Government of India recorded 644,387 foreign medical tourist arrivals in 2024 (IBEF). India's medical tourism market is valued at $20.4 billion in 2026 and projected to reach $65.1 billion by 2036.",
  },
  {
    q: 'What is the best time of year to travel to India for surgery?',
    a: "October through March is the recommended travel window for international patients. This covers India's cool, dry winter season — comfortable temperatures, minimal rainfall, and more comfortable recovery conditions. November to February is ideal for Delhi and North India. December to February suits Chennai, Hyderabad, and Mumbai best. Avoid June to September (monsoon season) for longer stays if possible.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IndiaDestinationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-gray-400">Destinations</span>
            <ChevronRight size={12} />
            <span className="text-primary font-medium">India</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="flex-1">
              {/* Badge */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  srcSet="https://flagcdn.com/w80/in.png 2x"
                  width="40"
                  height="30"
                  alt="India flag"
                  className="rounded shadow-sm"
                />
                <span className="text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
                  Destination Guide — India
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                India Treated 507,000 International Patients in 2025.<br />
                <span className="text-primary">There Is a Reason.</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-5 max-w-xl">
                India is Asia&rsquo;s most visited medical tourism destination — not because of low costs alone,
                but because of JCI-accredited hospitals, U.S. and UK fellowship-trained specialists,
                English-language care, and surgical outcomes that match international benchmarks.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
                Sultan GHC connects U.S. patients with the right hospital and the right specialist —
                matched to their exact diagnosis. Free evaluation within 24 hours. No obligation.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  Get My Free India Evaluation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/16107870713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <MessageCircle size={16} />
                  Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="flex-1 w-full max-w-lg">
              <ImagePlaceholder
                filename="jci-accredited-hospital-india-international-patients-modern-interior.jpg"
                width={1200}
                height={900}
                label="JCI-accredited hospital interior in India — modern, clean, internationally certified"
                aiPrompt="Architectural photography of a premium, modern hospital lobby in India — gleaming marble floors, high ceilings, natural light through large windows, international signage in English, a reception desk staffed by professionals in uniforms. The space is indistinguishable from a top American hospital. Clean, minimal, reassuring. No religious imagery, no Taj Mahal, no stereotypical 'India' visual cues. Shot to inspire confidence in quality. Canon R5, wide angle, natural light."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS — THE NUMBERS THAT REFRAME
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest text-center mb-10">
            By the Numbers — India&rsquo;s Medical Tourism Credentials
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ value, label, source }) => (
              <div key={value} className="text-center group">
                <p className="text-4xl sm:text-5xl font-bold text-primary mb-2 leading-none">{value}</p>
                <p className="text-sm text-gray-600 font-medium leading-snug mb-1">{label}</p>
                <p className="text-[10px] text-gray-400 leading-snug">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PRESS CITATIONS STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest text-center mb-6">
            As Reported By
          </p>
          <div className="flex flex-wrap items-stretch justify-center gap-4">
            {[
              {
                outlet: 'Medical Buyer',
                date: 'July 28, 2026',
                quote: '"India is rapidly shifting from being viewed simply as an affordable destination for treatment to becoming a genuine global medical tourism hub."',
                href: 'https://medicalbuyer.co.in/indias-medical-tourism-market-booms-as-foreign-patient-arrivals-jump-sharply/',
              },
              {
                outlet: 'GlobeNewswire / Research & Markets',
                date: 'January 8, 2025',
                quote: '"India [has] emerged as [a] leading destination for medical tourists, offering high-quality medical services at a fraction of the cost."',
                href: 'https://www.globenewswire.com/de/news-release/2025/01/08/3006054/0/en/United-States-Medical-Tourism-Market-Competition-Forecasts-and-Opportunities-2024-2029-Mexico-and-India-Emerge-as-Leading-Destinations-Wellness-and-Cosmetic-Procedures-Propel-Growt',
              },
              {
                outlet: 'IBEF — India Brand Equity Foundation',
                date: 'Government of India',
                quote: '"Foreign tourist arrivals for medical treatment surged to 644,387 in 2024 — a decisive post-pandemic rebound."',
                href: 'https://www.ibef.org/news/number-of-medical-tourists-in-india-to-exceed-pre-pandemic-levels-in-cy24',
              },
            ].map(({ outlet, date, quote, href }) => (
              <a
                key={outlet}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[260px] max-w-sm bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-3 gap-2">
                  <p className="text-xs font-bold text-white leading-snug">{outlet}</p>
                  <span className="text-[9px] text-gray-500 shrink-0 mt-0.5">{date}</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed italic">{quote}</p>
                <p className="text-[10px] text-primary mt-3 group-hover:underline">Read article →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6 REASONS — THE HONEST REFRAME
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Why Patients Choose India
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Six Reasons — Backed by Evidence, Not Marketing Copy
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Most Americans arrive with understandable doubts about Indian healthcare. Here is what
            the evidence actually shows — on quality, doctors, language, technology, outcomes, and speed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map(({ icon: Icon, color, title, body, proof }, i) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all flex flex-col"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 shrink-0 ${color}`}>
                <Icon size={20} />
              </div>
              <div className="flex items-start gap-2 mb-1">
                <span className="text-[10px] font-bold text-gray-300 mt-1">0{i + 1}</span>
                <h3 className="text-base font-semibold text-gray-900 leading-snug">{title}</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{body}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-[11px] font-semibold text-primary flex items-center gap-1.5">
                  <CheckCircle2 size={12} />
                  {proof}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MEDICAL CITIES OF INDIA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              India&rsquo;s Medical Cities
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Five Cities. Each with a World-Class Medical Identity.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              India&rsquo;s medical expertise is not concentrated in one place. Each major city has a
              distinct specialty cluster — and Sultan GHC matches your condition to the right city
              and hospital, not just any available bed.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {CITIES.map(({ city, tagline, desc, specialties, hospitals, icon: Icon, color, accent }) => (
              <div
                key={city}
                className={`bg-white border rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow ${color}`}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Left */}
                  <div className="sm:w-64 shrink-0">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${accent}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{city}</h3>
                    <p className="text-xs font-semibold text-gray-500 leading-snug">{tagline}</p>
                  </div>

                  {/* Right */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Key Specialties</p>
                        <div className="flex flex-wrap gap-1.5">
                          {specialties.map((s) => (
                            <span key={s} className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="sm:w-64 shrink-0">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Featured Hospitals</p>
                        <p className="text-[11px] text-gray-500 leading-relaxed">{hospitals}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          COST COMPARISON TABLE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Cost Comparison
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            What You Pay in the U.S. vs. What You Pay in India
          </h2>
          <p className="text-gray-500 leading-relaxed">
            These are representative cost ranges at JCI-accredited hospitals in India.
            Your Sultan GHC estimate will be procedure-specific, itemised, and provided in writing before you commit.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Table header */}
          <div className="grid grid-cols-4 bg-gray-900 text-white text-[11px] font-semibold uppercase tracking-widest">
            <div className="px-5 py-4 col-span-2">Procedure</div>
            <div className="px-5 py-4 text-center border-l border-white/10">U.S. Estimated Cost</div>
            <div className="px-5 py-4 text-center border-l border-white/10">India (JCI Hospital)</div>
          </div>

          {COSTS.map(({ procedure, us, india, saving }, i) => (
            <div
              key={procedure}
              className={`grid grid-cols-4 text-sm border-t border-gray-100 items-center ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="px-5 py-4 col-span-2">
                <p className="font-medium text-gray-800">{procedure}</p>
              </div>
              <div className="px-5 py-4 text-center border-l border-gray-100">
                <p className="text-gray-500">{us}</p>
              </div>
              <div className="px-5 py-4 text-center border-l border-gray-100">
                <p className="text-gray-900 font-semibold">{india}</p>
                <p className="text-[11px] text-emerald-600 font-bold mt-0.5">Save {saving}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
          Cost ranges are indicative. Actual costs depend on hospital, surgeon, procedure complexity, and length of stay.
          Sultan GHC provides a written, itemised estimate before any commitment.
          Sources: Research &amp; Markets (Jan 2025), Medical Buyer (Jul 2026), Future Market Insights (2026).
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PRACTICAL REALITY — WHAT IT IS ACTUALLY LIKE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EEF4FF] border-y border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              The Practical Reality
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              What It Is Actually Like to Seek Treatment in India
            </h2>
            <p className="text-gray-500 leading-relaxed">
              The section most destination guides skip. Flights, visas, language, food,
              weather, and safety — answered plainly for American patients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICAL.map(({ icon: Icon, title, points }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">{title}</h3>
                <div className="space-y-2">
                  {points.map((p) => (
                    <div key={p} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="text-primary mt-1 shrink-0" />
                      <p className="text-xs text-gray-500 leading-relaxed">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          HEAL IN INDIA CAMPAIGN CALLOUT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
            <Star size={24} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-2">Government of India Initiative</p>
            <h3 className="text-lg font-semibold text-white mb-2">The &ldquo;Heal in India&rdquo; Campaign</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              The Indian government has launched the &ldquo;Heal in India&rdquo; initiative — a national strategy to promote
              India as a premium international healthcare destination. It includes improved hospital infrastructure
              investment, streamlined Medical e-Visa processes (now available for citizens of 172 countries),
              a centralized international patient portal, and public-private partnerships with India&rsquo;s leading
              hospital groups. This is not an emerging trend — it is national policy backed by institutional commitment.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          INDIA-SPECIFIC FAQs
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              India FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Questions Specific to Treatment in India
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              For broader medical tourism questions, visit our{' '}
              <Link href="/faq" className="text-primary hover:underline font-medium">full FAQ page</Link>.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-6 py-5 bg-primary/5 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug">{q}</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RELATED PAGES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="text-center mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Explore Further</h2>
          <p className="text-gray-500 text-sm">Everything you need before making your decision.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/hospitals/india',               icon: Shield,       label: 'Partner Hospitals in India' },
            { href: '/treatments',                    icon: Stethoscope,  label: 'All Treatments We Facilitate' },
            { href: '/destinations/turkey',           icon: Globe2,       label: 'Also Explore Türkiye' },
            { href: '/international-patient-services', icon: Users,        label: 'Our Patient Services' },
          ].map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-primary hover:shadow-sm transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors leading-snug">{label}</span>
              <ChevronRight size={14} className="ml-auto text-gray-300 group-hover:text-primary shrink-0 transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EEF4FF] border-t border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
          <img
            src="https://flagcdn.com/w40/in.png"
            srcSet="https://flagcdn.com/w80/in.png 2x"
            width="40"
            height="30"
            alt="India"
            className="rounded shadow-sm mx-auto mb-5"
          />
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Ready to Explore Treatment in India?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Submit your medical reports today. Within 24 hours, you will receive a free specialist
            opinion, matched hospital recommendation in India, and a transparent cost estimate.
            No commitment. No obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get My Free India Medical Evaluation
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+16107870713"
              className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-700 text-sm font-medium px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all"
            >
              <Phone size={16} />
              +1-610-787-0713
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-5">
            Free first opinion &middot; Response in 24 hours &middot; No obligation &middot; JCI-accredited hospitals only
          </p>
        </div>
      </section>
    </>
  )
}
