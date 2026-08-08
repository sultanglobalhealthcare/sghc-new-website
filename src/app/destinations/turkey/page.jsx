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
  Smile,
  Sparkles,
  Eye,
  Scale,
  MapPin,
} from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Medical Treatment in Turkey for American Patients | Sultan GHC Destination Guide',
  description:
    "Turkey welcomed 2 million health tourists in 2024 with $10 billion in revenue. JCI-accredited hospitals in Istanbul, 50–70% cost savings vs. U.S. prices, European-standard care, and a 10-hour direct flight from the U.S. East Coast. Sultan GHC connects American patients with the right specialist in Turkey — free evaluation in 24 hours.",
  keywords: [
    'medical treatment Turkey Americans',
    'medical tourism Turkey USA',
    'JCI accredited hospitals Turkey Istanbul',
    'Turkey medical tourism cost savings',
    'hair transplant Turkey USA patients',
    'dental implants Turkey cost',
    'Istanbul hospitals international patients',
    'bariatric surgery Turkey',
    'IVF treatment Turkey cost',
    'Turkey medical visa USA',
    'cosmetic surgery Turkey Americans',
    'heart surgery Turkey cost',
    'Turkey healthcare quality international',
    'Sultan GHC Turkey',
    'affordable surgery Turkey Americans',
  ],
  openGraph: {
    title: 'Medical Treatment in Turkey | Sultan GHC Destination Guide',
    description:
      "2 million health tourists, $10 billion in revenue, 40+ JCI-accredited hospitals. Turkey — Europe's leading medical tourism hub — is 10 hours from the U.S. East Coast. Sultan GHC matches U.S. patients to the right Istanbul specialist — free in 24 hours.",
    url: 'https://www.sultanghc.com/destinations/turkey',
    siteName: 'Sultan Global Health Care',
    type: 'website',
    images: [{ url: 'https://www.sultanghc.com/api/og?title=Medical+Treatment+in+Turkey&desc=Istanbul%27s+JCI-accredited+hospitals.+European+standards+at+60-80%25+lower+than+U.S.+costs.&cat=Destination+Guide', width: 1200, height: 630, alt: 'Medical Treatment in Turkey — Sultan GHC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Treatment in Turkey for Americans | Sultan GHC',
    description: '2M health tourists, $10B revenue, JCI hospitals. Turkey treated more medical tourists than any European country in 2024.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/destinations/turkey' },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',         item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.sultanghc.com/destinations' },
    { '@type': 'ListItem', position: 3, name: 'Turkey',       item: 'https://www.sultanghc.com/destinations/turkey' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is medical treatment in Turkey safe for American patients?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Turkey has 40+ JCI-accredited hospitals — the same international quality standard used to certify leading U.S. hospitals — with 25 of those located in Istanbul. Turkish hospitals operate under EU-aligned healthcare regulations and employ physicians with fellowship training from Germany, France, the UK, and the United States. Sultan GHC recommends only internationally accredited hospitals that meet rigorous quality benchmarks." },
    },
    {
      '@type': 'Question',
      name: 'How far is Turkey from the United States?',
      acceptedAnswer: { '@type': 'Answer', text: "Istanbul is approximately 10–11 hours from the U.S. East Coast by direct flight. Turkish Airlines operates nonstop services from New York (JFK), Chicago (ORD), Washington D.C. (IAD), Los Angeles (LAX), and Miami (MIA). This makes Turkey significantly more accessible than many other medical tourism destinations — a shorter journey than flying to India or Thailand." },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa to travel to Turkey for medical treatment?',
      acceptedAnswer: { '@type': 'Answer', text: "U.S. passport holders obtain a Turkish e-Visa online at evisa.gov.tr in minutes — there is no embassy visit required. The standard e-Visa covers medical travel and is valid for multiple entries. Sultan GHC provides guidance on the e-Visa application process and any documentation your treating hospital may need to provide." },
    },
    {
      '@type': 'Question',
      name: 'Is English spoken in Turkish hospitals?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes. All major internationally accredited hospitals in Istanbul and other major Turkish cities have dedicated English-speaking international patient departments. Medical consultations, consent forms, discharge summaries, and follow-up communications are all handled in English. Sultan GHC also provides English-speaking coordinators at all partner hospitals throughout your stay." },
    },
    {
      '@type': 'Question',
      name: 'Why is Turkey the number one destination for hair transplant surgery?',
      acceptedAnswer: { '@type': 'Answer', text: "Turkey performs more hair transplant procedures than any other country in the world — an estimated 500,000+ per year. This volume has produced a concentration of specialist surgeons, advanced FUE and DHI techniques, and highly competitive pricing that no other destination matches. Istanbul alone has hundreds of specialist hair transplant clinics, many operating inside JCI-accredited hospital groups. Costs in Turkey run 60–80% below U.S. prices for the same procedure." },
    },
    {
      '@type': 'Question',
      name: 'How many international patients travel to Turkey each year?',
      acceptedAnswer: { '@type': 'Answer', text: "Turkey welcomed approximately 2 million international health tourists in 2024, generating $10 billion in health tourism revenue — according to data published by the Turkish Ministry of Health (New Health Media, February 2025). In 2023, Turkey hosted 1,538,643 health tourists generating over $3 billion in revenue (TurkStat). Turkey attracts patients from more than 120 countries and is Europe's leading medical tourism destination by volume." },
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
  { value: '2 Million',  label: 'International health tourists welcomed by Turkey in 2024',   source: 'Turkish Ministry of Health, Feb 2025' },
  { value: '$10B',       label: 'Health tourism revenue generated by Turkey in 2024',          source: 'New Health Media, Feb 2025' },
  { value: '40+',        label: 'JCI-accredited hospitals — 25 in Istanbul alone',             source: 'JCI / Mordor Intelligence, 2025' },
  { value: '50–70%',     label: 'Typical savings versus U.S. and European treatment costs',    source: 'Research & Markets, 2025' },
]

const REASONS = [
  {
    icon: Shield,
    color: 'bg-blue-50 text-blue-600',
    title: 'European-Standard Care You Can Verify',
    body: "Turkey's hospitals operate under EU-aligned healthcare regulations and hold JCI accreditation — the same international standard used to certify leading U.S. hospitals. With 40+ JCI-accredited institutions (25 in Istanbul alone), Turkey offers the highest concentration of internationally certified hospitals of any country in its region. Accreditation is publicly verifiable at jointcommissioninternational.org.",
    proof: 'JCI-accredited: Acibadem, Memorial, American Hospital Istanbul, and more',
  },
  {
    icon: Languages,
    color: 'bg-violet-50 text-violet-600',
    title: 'Dedicated English-Language Care',
    body: 'Every major internationally accredited hospital in Istanbul has a dedicated International Patient Department with English-speaking physicians, coordinators, and patient relations staff. Medical consultations, all documentation, consent forms, operative notes, and discharge summaries are handled in English. Sultan GHC also provides English-speaking ground coordinators at every partner hospital.',
    proof: 'International Patient Departments at all Sultan GHC partner hospitals',
  },
  {
    icon: Plane,
    color: 'bg-emerald-50 text-emerald-600',
    title: 'Only 10 Hours from the U.S. East Coast',
    body: "Istanbul is 10–11 hours from New York, Washington D.C., Chicago, and Miami by direct flight — making Turkey one of the most accessible medical tourism destinations for American patients. Turkish Airlines operates nonstop services from 5+ U.S. gateway cities. Compared to India (14–16 hours) or Thailand (18+ hours), Turkey's proximity is a meaningful advantage for patients recovering from surgery.",
    proof: 'Direct flights: NYC, DC, Chicago, Miami, LA via Turkish Airlines',
  },
  {
    icon: Cpu,
    color: 'bg-amber-50 text-amber-600',
    title: 'Same Technology as U.S. Hospitals',
    body: "Major hospitals in Turkey — particularly in Istanbul — are equipped with the same generation of diagnostic and surgical technology found in leading American medical centers: da Vinci robotic surgery systems, PET-CT scanners, CyberKnife and TrueBeam radiosurgery, hybrid catheterization labs, and implants from Medtronic, Johnson & Johnson, Stryker, and Zimmer Biomet. New flagship facilities such as Başakşehir Çam and Sakura City Hospital represent some of the most advanced healthcare infrastructure in Europe.",
    proof: 'da Vinci, Varian, Medtronic, Stryker — same U.S. and EU manufacturers',
  },
  {
    icon: TrendingUp,
    color: 'bg-cyan-50 text-cyan-600',
    title: 'Volume That Produces Excellence',
    body: "Turkey performs more hair transplants than any other country globally — over 500,000 per year. It is Europe's leading destination for bariatric surgery and among the top destinations worldwide for dental implants, rhinoplasty, and IVF treatment. This volume is not incidental — it means Turkish surgeons in these specialties have extraordinarily deep procedural experience, producing consistently high patient satisfaction rates and outcome data.",
    proof: "#1 globally for hair transplant volume — 500,000+ procedures per year",
  },
  {
    icon: Star,
    color: 'bg-rose-50 text-rose-600',
    title: 'A World City Built for International Patients',
    body: "Istanbul is not just a medical destination — it is one of the world's great cities. International patients recovering after surgery have access to premium hotels, international cuisine, English-speaking hospitality staff, and a rich cultural environment that makes an extended recovery feel nothing like a hospital trip. Turkey's established medical tourism infrastructure — from dedicated airport transfer services to international patient concierge desks — reflects decades of experience hosting over 120 countries' worth of patients.",
    proof: 'Turkey attracts patients from 120+ countries annually',
  },
]

const CITIES = [
  {
    city: 'Istanbul',
    tagline: "Turkey's Medical Capital — 25 JCI Hospitals",
    desc: "Istanbul is the undisputed center of Turkey's medical tourism sector, attracting approximately 40% of all the country's international health patients. The city's internationally accredited hospital groups — Acibadem, Memorial, Medipol, American Hospital — cover every medical specialty, from complex cardiac surgery and neurosurgery to hair transplantation, dental implants, bariatric surgery, and oncology. Istanbul's world-class aviation hub (Istanbul Airport is the busiest in Europe) makes it accessible from anywhere in the United States.",
    specialties: ['Cardiac Surgery', 'Neurosurgery', 'Oncology', 'Hair Transplant', 'Bariatric Surgery', 'Dental Implants', 'Cosmetic Surgery', 'IVF'],
    hospitals: 'Acibadem, Memorial, American Hospital Istanbul, Medipol, Florence Nightingale',
    icon: HeartPulse,
    color: 'border-blue-200 bg-blue-50/50',
    accent: 'text-blue-600 bg-blue-100',
  },
  {
    city: 'Ankara',
    tagline: "Capital City — Oncology & Research Centers",
    desc: "As Turkey's capital, Ankara is home to major government-affiliated teaching hospitals and research centers alongside leading private hospital groups. The city is a strong destination for oncology, haematology, organ transplantation, and neurology — particularly for patients who prefer a quieter environment than Istanbul for their recovery, with lower accommodation costs and shorter in-hospital waiting times.",
    specialties: ['Oncology', 'Haematology', 'Organ Transplant', 'Neurology', 'Orthopaedics'],
    hospitals: 'Ankara City Hospital, Güven Hospital, Türkiye Hastanesi, Hacettepe University Hospital',
    icon: Stethoscope,
    color: 'border-violet-200 bg-violet-50/50',
    accent: 'text-violet-600 bg-violet-100',
  },
  {
    city: 'Antalya',
    tagline: 'Resort City — Dental, Hair & Cosmetic Surgery',
    desc: "Antalya on the Turkish Riviera has emerged as a leading destination for dental tourism, hair transplantation, and cosmetic procedures — combining high-quality medical care with a premium resort environment that makes recovery genuinely pleasant. International patients often combine treatment with a recuperation stay in a five-star coastal hotel. Antalya's dental clinics are globally recognized and attract hundreds of thousands of patients annually from Europe and the U.S.",
    specialties: ['Dental Implants & Veneers', 'Hair Transplant', 'Cosmetic Surgery', 'Ophthalmology', 'Bariatric Surgery'],
    hospitals: 'Akdeniz University Hospital, Medline Antalya, Dentatur Clinics, Antalya Medical Park',
    icon: Smile,
    color: 'border-emerald-200 bg-emerald-50/50',
    accent: 'text-emerald-600 bg-emerald-100',
  },
  {
    city: 'Izmir',
    tagline: "Aegean Hub — Cardiac, Orthopaedics & Fertility",
    desc: "Turkey's third-largest city, Izmir sits on the Aegean coast and offers internationally accredited hospital care in a more relaxed, coastal setting. Strong for cardiac procedures, orthopaedics, fertility treatment, and gastroenterology — Izmir offers patients the same clinical quality as Istanbul-based facilities with lower accommodation costs and a distinctly different post-treatment recovery environment.",
    specialties: ['Cardiac Surgery', 'Orthopaedics', 'Fertility & IVF', 'Gastroenterology', 'Ophthalmology'],
    hospitals: 'Medicana Izmir, Acibadem Bodrum, Kent Hospital, Ege University Hospital',
    icon: Sparkles,
    color: 'border-amber-200 bg-amber-50/50',
    accent: 'text-amber-600 bg-amber-100',
  },
  {
    city: 'Bursa',
    tagline: 'Orthopaedics, Thermal Rehabilitation & Spine',
    desc: "Bursa is gaining recognition as a specialized destination for orthopaedic surgery, spine procedures, and thermal rehabilitation. Located just south of Istanbul with excellent transport links, Bursa combines modern hospital infrastructure with access to thermal spa and rehabilitation facilities — particularly valuable for patients recovering from joint replacement, spinal surgery, or sports injury procedures.",
    specialties: ['Orthopaedics & Joint Replacement', 'Spine Surgery', 'Thermal Rehabilitation', 'Sports Injury', 'Physical Medicine'],
    hospitals: 'Bursa City Hospital, Acibadem Bursa, Memorial Bursa, Medicana Bursa',
    icon: Scale,
    color: 'border-cyan-200 bg-cyan-50/50',
    accent: 'text-cyan-600 bg-cyan-100',
  },
]

const COSTS = [
  { procedure: 'Cardiac Bypass Surgery',           us: '$100,000 – $130,000', turkey: '$8,000 – $12,000',   saving: '~91%' },
  { procedure: 'Heart Valve Replacement',          us: '$150,000 – $200,000', turkey: '$10,000 – $15,000',  saving: '~93%' },
  { procedure: 'Knee Replacement (Single)',        us: '$35,000 – $50,000',   turkey: '$5,000 – $8,000',    saving: '~84%' },
  { procedure: 'Hair Transplant (FUE / DHI)',      us: '$10,000 – $18,000',   turkey: '$1,800 – $4,000',    saving: '~80%' },
  { procedure: 'Dental Implants (Full Mouth)',     us: '$30,000 – $50,000',   turkey: '$4,000 – $8,000',    saving: '~85%' },
  { procedure: 'Rhinoplasty (Nose Job)',           us: '$8,000 – $15,000',    turkey: '$2,500 – $4,500',    saving: '~72%' },
  { procedure: 'Bariatric / Gastric Sleeve',      us: '$20,000 – $30,000',   turkey: '$4,000 – $7,500',    saving: '~78%' },
  { procedure: 'IVF Treatment (Per Cycle)',        us: '$12,000 – $20,000',   turkey: '$2,500 – $4,000',    saving: '~80%' },
  { procedure: 'LASIK Eye Surgery (Both Eyes)',   us: '$4,000 – $6,000',     turkey: '$1,000 – $1,800',    saving: '~73%' },
  { procedure: 'Liver Transplant',                us: '$250,000 – $400,000', turkey: '$35,000 – $55,000',  saving: '~86%' },
]

const PRACTICAL = [
  {
    icon: Plane,
    title: 'Flights from the United States',
    points: [
      'U.S. East Coast to Istanbul: 10–11 hours nonstop (New York, DC, Miami, Chicago)',
      'U.S. West Coast to Istanbul: 14–15 hours, typically one stop',
      'Turkish Airlines operates direct services from JFK, IAD, ORD, MIA, LAX, SFO, and BOS',
      'Istanbul Airport (IST) is the busiest airport in Europe — excellent connections and facilities',
    ],
  },
  {
    icon: BookOpen,
    title: 'Turkish e-Visa for U.S. Passport Holders',
    points: [
      'U.S. citizens obtain a Turkish e-Visa online at evisa.gov.tr — no embassy visit required',
      'Takes minutes to complete; approved within 24 hours in most cases',
      'Valid for multiple entries, 180-day stay per year',
      'Sultan GHC provides guidance and any hospital documentation required for your application',
    ],
  },
  {
    icon: Globe2,
    title: 'English in Turkish Hospitals',
    points: [
      'All JCI-accredited hospitals in Istanbul have dedicated International Patient Departments',
      'Physicians, coordinators, and patient relations staff communicate fluently in English',
      'Medical reports, discharge summaries, operative notes — all available in English',
      'Sultan GHC provides English-speaking on-ground coordinators at all partner hospitals',
    ],
  },
  {
    icon: Clock,
    title: 'Best Time to Travel',
    points: [
      'April–June and September–November: ideal weather for Istanbul — mild, dry, pleasant',
      'Turkey is a year-round medical destination — winters in Istanbul are cool but manageable',
      'Antalya and Izmir are warm even in winter — ideal for longer recovery stays',
      'Avoid August for Istanbul if possible — peak tourist season, hotter and more crowded',
    ],
  },
  {
    icon: Users,
    title: 'Food, Culture & Recovery',
    points: [
      'International cuisine widely available — all major hospitals offer non-Turkish dietary options',
      'Halal, vegetarian, low-sodium, and diabetic meal plans accommodated at all partner hospitals',
      'Istanbul is a cosmopolitan city with Western-style amenities, pharmacies, and services',
      'Five-star hotels near hospitals offer medical concierge services for recovering patients',
    ],
  },
  {
    icon: Shield,
    title: 'Safety for International Patients',
    points: [
      'Istanbul, Ankara, Antalya, and Izmir are safe, well-policed cities for international visitors',
      'Sultan GHC arranges private airport transfers and hospital transport throughout',
      'All partner hospitals are in established, internationally serviced urban areas',
      'Comprehensive international travel insurance including medical evacuation is strongly recommended',
    ],
  },
]

const FAQS = [
  {
    q: 'Is medical treatment in Turkey safe for American patients?',
    a: "Yes. Turkey has 40+ JCI-accredited hospitals — the same international quality standard used to certify leading U.S. hospitals — with 25 of them in Istanbul. Turkish hospitals operate under EU-aligned healthcare regulations and employ physicians with fellowship training from Germany, France, the UK, and the United States. Sultan GHC recommends only internationally accredited hospitals. You can verify JCI status independently at jointcommissioninternational.org.",
  },
  {
    q: 'How far is Turkey from the United States?',
    a: "Istanbul is approximately 10–11 hours from the U.S. East Coast by direct flight — significantly shorter than flying to India or Southeast Asia. Turkish Airlines operates nonstop services from New York (JFK), Washington D.C. (IAD), Chicago (ORD), Miami (MIA), Los Angeles (LAX), and San Francisco (SFO). This makes Turkey one of the most accessible medical tourism destinations for American patients.",
  },
  {
    q: 'Do I need a visa to travel to Turkey for medical treatment?',
    a: "U.S. passport holders obtain a Turkish e-Visa online at evisa.gov.tr — the process takes minutes and requires no embassy visit. The e-Visa is valid for multiple entries and up to 180 days per year. Sultan GHC guides you through the application process and provides any hospital documentation you may need.",
  },
  {
    q: 'Is English spoken in Turkish hospitals?',
    a: "Yes. All major internationally accredited hospitals in Istanbul have dedicated International Patient Departments staffed by English-speaking physicians, coordinators, and patient relations officers. Medical consultations, consent forms, discharge summaries, and follow-up communications are all in English. Sultan GHC additionally provides English-speaking on-ground coordinators at every partner hospital throughout your stay.",
  },
  {
    q: 'Why is Turkey the global number one for hair transplant surgery?',
    a: "Turkey performs more hair transplant procedures than any other country — an estimated 500,000+ per year. This volume has produced an unmatched concentration of specialist surgeons, advanced FUE and DHI techniques, and pricing that is 60–80% below U.S. costs for the same procedure. Istanbul alone has hundreds of specialist hair transplant clinics, many operating within internationally accredited hospital groups.",
  },
  {
    q: 'How many international patients travel to Turkey each year?',
    a: "Turkey welcomed approximately 2 million international health tourists in 2024, generating $10 billion in health tourism revenue, according to the Turkish Ministry of Health (New Health Media, February 2025). In 2023, Turkey hosted 1,538,643 health tourists generating over $3 billion (TurkStat / EIN Presswire). Turkey attracts patients from 120+ countries and is Europe's leading medical tourism destination by volume.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TurkeyDestinationPage() {
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
            <span className="text-primary font-medium">Turkey</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="flex-1">
              {/* Badge */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="https://flagcdn.com/w40/tr.png"
                  srcSet="https://flagcdn.com/w80/tr.png 2x"
                  width="40"
                  height="27"
                  alt="Turkey flag"
                  className="rounded shadow-sm"
                />
                <span className="text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
                  Destination Guide — Turkey
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Turkey Welcomed 2 Million Health Tourists in 2024.<br />
                <span className="text-primary">Europe&rsquo;s Most Visited Medical Hub.</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-5 max-w-xl">
                Turkey is Europe&rsquo;s leading medical tourism destination — not because of low costs alone,
                but because of 40+ JCI-accredited hospitals, EU-aligned care standards, fellowship-trained
                specialists, and a 10-hour direct flight from the U.S. East Coast.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
                Sultan GHC connects U.S. patients with the right hospital and specialist in Turkey —
                matched to their exact diagnosis. Free evaluation within 24 hours. No obligation.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  Get My Free Turkey Evaluation
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
                filename="jci-accredited-hospital-istanbul-turkey-international-patients-modern.jpg"
                width={1200}
                height={900}
                label="JCI-accredited hospital in Istanbul, Turkey — modern, European-standard international facility"
                aiPrompt="Architectural photography of a premium, modern hospital lobby in Istanbul, Turkey — high ceilings with contemporary design, gleaming floors, natural light through floor-to-ceiling glass, bilingual (Turkish and English) signage, international patient reception desk. The space communicates European-standard quality and international sophistication. No tourist landmarks, no stereotypical Turkey imagery. Shot to inspire confidence in clinical quality. Wide angle, Canon R5, natural light, photorealistic."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest text-center mb-10">
            By the Numbers — Turkey&rsquo;s Medical Tourism Credentials
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ value, label, source }) => (
              <div key={value} className="text-center">
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
                outlet: 'New Health Media',
                date: 'February 12, 2025',
                quote: '"With approximately 2 million health tourists and over $10 billion in revenue, Turkey has once again proven its leadership in the global health tourism market."',
                href: 'https://www.newhealth.media/en/blog/turkeys-2024-health-tourism-data',
              },
              {
                outlet: 'EIN Presswire / Turkey Medicals',
                date: 'September 20, 2024',
                quote: '"Turkey has established itself as a premier destination for health tourism, drawing international attention and positioning itself as a vital player in the global healthcare landscape."',
                href: 'https://www.einpresswire.com/article/744959651/turkey-medicals-international-patient-center-turkey-emerges-as-a-global-leader-in-health-tourism',
              },
              {
                outlet: 'Mordor Intelligence / Market Research',
                date: '2025 Market Report',
                quote: '"42 JCI-accredited hospitals and mandatory registration of every overseas case on the HealthTürkiye portal form the core growth engine for Turkey\'s medical tourism market."',
                href: 'https://www.mordorintelligence.com/industry-reports/turkey-medical-tourism-market',
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
          6 REASONS — THE HONEST CASE FOR TURKEY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Why Patients Choose Turkey
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Six Reasons — Backed by Evidence, Not Marketing Copy
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Turkey&rsquo;s standing as Europe&rsquo;s top medical tourism destination is built on verifiable
            credentials — quality standards, specialist training, proximity, and patient volume
            that produces genuine expertise.
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
          TURKEY'S MEDICAL CITIES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Turkey&rsquo;s Medical Cities
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Five Cities. Each with a Distinct Medical Strength.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Turkey&rsquo;s medical excellence spans five cities — each with its own specialty profile.
              Sultan GHC matches your condition and recovery preferences to the right city
              and hospital, not just any available facility.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {CITIES.map(({ city, tagline, desc, specialties, hospitals, icon: Icon, color, accent }) => (
              <div
                key={city}
                className={`bg-white border rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow ${color}`}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-64 shrink-0">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${accent}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{city}</h3>
                    <p className="text-xs font-semibold text-gray-500 leading-snug">{tagline}</p>
                  </div>
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
            What You Pay in the U.S. vs. What You Pay in Turkey
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Representative cost ranges at JCI-accredited hospitals in Turkey.
            Your Sultan GHC estimate will be procedure-specific, itemised in writing, and provided before any commitment.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-4 bg-gray-900 text-white text-[11px] font-semibold uppercase tracking-widest">
            <div className="px-5 py-4 col-span-2">Procedure</div>
            <div className="px-5 py-4 text-center border-l border-white/10">U.S. Estimated Cost</div>
            <div className="px-5 py-4 text-center border-l border-white/10">Turkey (JCI Hospital)</div>
          </div>
          {COSTS.map(({ procedure, us, turkey, saving }, i) => (
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
                <p className="text-gray-900 font-semibold">{turkey}</p>
                <p className="text-[11px] text-emerald-600 font-bold mt-0.5">Save {saving}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
          Cost ranges are indicative. Actual costs depend on hospital, surgeon, procedure complexity, and length of stay.
          Sultan GHC provides a written, itemised estimate before any commitment.
          Sources: Research &amp; Markets (2025), New Health Media (Feb 2025), Mordor Intelligence (2025).
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PRACTICAL REALITY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EEF4FF] border-y border-[#d9e6ff]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              The Practical Reality
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
              What It Is Actually Like to Seek Treatment in Turkey
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Flights, e-Visa, language, food, best travel time, and safety —
              answered plainly for American patients planning their journey.
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
          HEALTHTÜRKIYE CALLOUT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
            <Star size={24} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-2">Government of Turkey Initiative</p>
            <h3 className="text-lg font-semibold text-white mb-2">The HealthT&uuml;rkiye Platform</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Turkey&rsquo;s Ministry of Health has launched HealthT&uuml;rkiye — a mandatory national registry
              and patient services portal that tracks every international patient case, enforces quality
              standards across accredited hospitals, and provides a centralized platform for international
              patients to research hospitals and doctors. Every overseas treatment case at a Turkish accredited
              hospital must be registered on HealthT&uuml;rkiye, creating an unprecedented level of transparency
              and regulatory oversight in the sector. This is backed by national policy and institutional commitment
              at the highest level of Turkey&rsquo;s government.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TURKEY-SPECIFIC FAQs
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Turkey FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
              Questions Specific to Treatment in Turkey
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
            { href: '/hospitals/turkey',              icon: Shield,       label: 'Partner Hospitals in Turkey' },
            { href: '/treatments',                    icon: Stethoscope,  label: 'All Treatments We Facilitate' },
            { href: '/destinations/india',            icon: Globe2,       label: 'Also Explore India' },
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
            src="https://flagcdn.com/w40/tr.png"
            srcSet="https://flagcdn.com/w80/tr.png 2x"
            width="40"
            height="27"
            alt="Turkey"
            className="rounded shadow-sm mx-auto mb-5"
          />
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Ready to Explore Treatment in Turkey?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Submit your medical reports today. Within 24 hours, you will receive a free specialist
            opinion, matched hospital recommendation in Turkey, and a transparent cost estimate.
            No commitment. No obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Get My Free Turkey Medical Evaluation
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
