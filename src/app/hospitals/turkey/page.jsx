import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, MapPin, Star, Shield, ArrowRight, BedDouble, Stethoscope, CalendarDays } from 'lucide-react'

export const metadata = {
  title: 'Partner Hospitals in Türkiye | JCI Accredited Istanbul | Sultan GHC',
  description:
    'Sultan GHC\'s network of JCI-accredited partner hospitals in Türkiye — Acibadem, Memorial, Medicana, Liv Hospital and more in Istanbul. Verified centers for U.S. medical tourists.',
  keywords: [
    'JCI accredited hospitals Turkey Istanbul',
    'best hospitals Turkey medical tourism',
    'Acibadem Memorial Medicana hospitals',
    'partner hospitals Sultan GHC Türkiye',
    'hospitals for international patients Turkey',
    'Istanbul hospital medical tourism Americans',
    'Turkey hair transplant hospital',
    'Liv Hospital Istanbul',
  ],
  openGraph: {
    title: 'Partner Hospitals in Türkiye | Sultan GHC',
    description: 'JCI-accredited hospitals in Istanbul — Acibadem, Memorial, Medicana, Liv Hospital and more — vetted for U.S. medical tourists by Sultan GHC.',
    url: 'https://www.sultanghc.com/hospitals/turkey',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner Hospitals in Türkiye | Sultan GHC',
    description: 'Our verified network of JCI-accredited hospitals in Istanbul for U.S. patients.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/hospitals/turkey' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Hospitals',  item: 'https://www.sultanghc.com/hospitals/turkey' },
    { '@type': 'ListItem', position: 3, name: 'Türkiye',    item: 'https://www.sultanghc.com/hospitals/turkey' },
  ],
}

const HOSPITALS = [
  {
    name: 'Acibadem Healthcare Group',
    city: 'Istanbul',
    location: 'Multiple locations — Istanbul, Ankara, Bursa',
    accreditation: 'JCI Accredited',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '3,300+ Beds (network)',
    established: '1991',
    img: null,
    specialties: ['Oncology', 'Cardiology', 'Orthopaedics', 'Neurosurgery', 'Robotic Surgery', 'Bone Marrow Transplant'],
    highlights: [
      'Türkiye\'s largest private hospital group — 11 hospitals in Istanbul serving 5 million+ patients annually with 22,500 medical professionals',
      'da Vinci Xi robotic surgery for urology, gynecology, and thoracic surgery across multiple JCI-accredited campuses',
      'Gamma Knife stereotactic radiosurgery for brain and spine tumors — FIFA-certified sports medicine center',
      'Acibadem Altunizade & Maslak: dedicated international patient coordinators and English-language care',
    ],
    doctors: '7,000+ specialists',
    color: 'from-blue-700 to-sky-600',
    initials: 'AC',
  },
  {
    name: 'Memorial Hospital Group',
    city: 'Istanbul',
    location: 'Şişli, Bahçelievler, Ataşehir — Istanbul & Ankara',
    accreditation: 'JCI Accredited',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '1,200+ Beds (network)',
    established: '1999',
    img: null,
    specialties: ['IVF & Fertility', 'Neurosurgery', 'Bariatric Surgery', 'Oncology', 'Cardiology', 'Robotic Surgery'],
    highlights: [
      'First hospital group in Türkiye to receive JCI accreditation — Memorial Şişli was the 21st JCI-accredited hospital in the world',
      '75,000+ international patients annually from 167 countries — serving over 2.5 million patients per year across 12 hospitals',
      'Memorial IVF: 9,000 IVF cycles per year — first IVF center in Türkiye accredited by the American Embryology Society',
      'Gamma Knife Icon for non-invasive brain tumor treatment and high-volume bariatric surgery',
    ],
    doctors: '1,500+ specialists',
    color: 'from-violet-700 to-purple-600',
    initials: 'MH',
  },
  {
    name: 'Medicana International',
    city: 'Istanbul',
    location: 'Beylikdüzü & Çamlıca, Istanbul',
    accreditation: 'JCI Accredited',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '191 Beds',
    established: '1992',
    img: null,
    specialties: ['Orthopaedics & Joint Replacement', 'Cardiology', 'Hair Transplant', 'IVF', 'Oncology', 'Bariatric Surgery'],
    highlights: [
      'JCI accredited since 2010 — purpose-built 30,000 m² facility designed to international healthcare standards',
      'High-volume joint replacement (hip, knee, shoulder) with robotic-assisted and navigation-guided systems',
      'Hair transplant center offering FUE, DHI, and sapphire blade techniques for international patients',
      'Transparent all-inclusive international pricing across 50+ medical and surgical specialties',
    ],
    doctors: '800+ specialists',
    color: 'from-emerald-700 to-green-600',
    initials: 'MC',
  },
  {
    name: 'Liv Hospital',
    city: 'Istanbul',
    location: 'Ulus & Vadistanbul, Istanbul',
    accreditation: 'JCI Accredited',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '154 Beds',
    established: '2013',
    img: null,
    specialties: ['Cardiology & Cardiac Surgery', 'Oncology', 'Orthopaedics', 'Liver Transplant', 'Neurology', 'Robotic Surgery'],
    highlights: [
      'JCI & SRC (Bariatric Surgery Center of Excellence) accredited — 50 specialized departments including oncology and transplantology',
      '1,000+ successful liver transplants performed — living and cadaveric donor programs for adults and children',
      'Advanced cardiac surgery: 1,400+ cardiac operations per year including TAVI (transcatheter aortic valve implantation)',
      'da Vinci robotic surgery for oncological and urological procedures',
    ],
    doctors: '500+ specialists',
    color: 'from-rose-700 to-pink-600',
    initials: 'LV',
  },
  {
    name: 'Florence Nightingale Hospital',
    city: 'Istanbul',
    location: 'Şişli, Istanbul',
    accreditation: 'JCI Accredited',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '251 Beds',
    established: '1993',
    img: null,
    specialties: ['Cardiology', 'Neurology & Neurosurgery', 'Oncology', 'Orthopaedics', 'Spine Surgery', 'Urology'],
    highlights: [
      'First hospital in Türkiye to be accredited under the 8th Edition JCI standards — continuously accredited since 2013',
      'Türkiye\'s first Smart & Green Hospital — advanced digital infrastructure with AI-assisted diagnostics',
      'First EOS low-dose imaging system in Türkiye — used for precise orthopaedic and spine assessment',
      'Cardiac success rate of 99% in heart and vascular surgeries — 11 laminar airflow operating theatres',
    ],
    doctors: '400+ specialists',
    color: 'from-amber-700 to-orange-600',
    initials: 'FN',
  },
  {
    name: 'Medical Park Hospitals',
    city: 'Istanbul',
    location: 'Multiple — Istanbul, Ankara, Izmir, Antalya',
    accreditation: 'TEMOS & JCI',
    accreditationColor: 'bg-purple-100 text-purple-700',
    beds: '3,500+ Beds (network)',
    established: '1995',
    img: null,
    specialties: ['Hair Transplant', 'Dental & Cosmetic', 'Bariatric Surgery', 'Orthopaedics', 'IVF', 'Cardiology'],
    highlights: [
      'Türkiye\'s largest private hospital group — 30+ hospitals in 17 provinces with 14,000+ employees',
      'TEMOS-certified and JCI-accredited facilities — specialized in international patient services from 100+ countries',
      'Leading hair transplant destination: FUE, DHI, and Sapphire techniques with all-inclusive 5-star packages',
      'US Bariatric Surgery Center of Excellence certificate — gastric sleeve, bypass, and adjustable banding',
    ],
    doctors: '5,000+ specialists',
    color: 'from-indigo-700 to-blue-600',
    initials: 'MP',
  },
  {
    name: 'BHT CLINIC Istanbul Tema Hospital',
    city: 'Istanbul',
    location: 'Küçükçekmece, Istanbul',
    accreditation: 'JCI Accredited',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '450 Beds',
    established: '2015',
    img: null,
    specialties: ['Bariatric Surgery', 'Metabolic Surgery', 'Oncology', 'Cardiology', 'Neurosurgery', 'Orthopaedics'],
    highlights: [
      'First Turkish general medical center to be JCI certified under 7th Edition standards — passed at the very first audit',
      '450 beds across a 19-storey building with 18 state-of-the-art operating rooms and 3D laparoscopic visualization',
      'Comprehensive bariatric program: sleeve gastrectomy, RYGB, mini bypass, and diabetes remission surgery',
      'Pre-surgery evaluation by nutritionists, psychologists, and endocrinologists — all-inclusive international packages',
    ],
    doctors: '150+ specialists',
    color: 'from-teal-700 to-cyan-600',
    initials: 'BH',
  },
]

const STATS = [
  { value: '7+',       label: 'Partner Hospitals in Türkiye' },
  { value: 'Istanbul', label: 'Primary treatment hub' },
  { value: 'JCI',      label: 'Primary accreditation standard' },
  { value: '0',        label: 'Visa required for U.S. passport' },
]

export default function HospitalsTurkeyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff] pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Partner Hospitals in Türkiye</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white border border-[#d9e6ff] text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 shadow-sm">
                <img src="https://flagcdn.com/w20/tr.png" width={16} height={12} alt="Türkiye" className="rounded-sm" />
                Türkiye — Hospital Network
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Our Partner Hospitals<br className="hidden sm:block" />
                <span className="text-primary"> in Türkiye</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
                Istanbul is home to some of the world's most sophisticated private hospitals — JCI-accredited, internationally staffed, and exceptionally affordable for U.S. patients. No visa required for American passport holders.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get a Free Hospital Match
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-xl text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  Send Medical Reports
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="lg:w-80 grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }) => (
                <div key={label} className="bg-white rounded-2xl border border-[#d9e6ff] p-5 shadow-sm">
                  <p className="text-2xl font-bold text-primary mb-1">{value}</p>
                  <p className="text-xs text-gray-500 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Istanbul ── */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                <Shield size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">JCI Accredited</p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">Joint Commission International — the gold standard for international hospital quality, independently verifiable at jointcommissioninternational.org.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                <Star size={16} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">TEMOS Accredited</p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">TEMOS International Healthcare Accreditation — specialized accreditation for medical tourism centers, focused on international patient safety and experience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">No Visa for U.S. Patients</p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">U.S. passport holders do not require a visa for Türkiye — travel directly to Istanbul for treatment without any pre-travel documentation barrier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hospital cards ── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Partner Hospital Network — Türkiye
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              All hospitals are vetted by Sultan GHC for international patient services, English-speaking care, transparent pricing, and specialist quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {HOSPITALS.map((h) => (
              <div key={h.name} className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col">
                {/* Card header — image when available, gradient fallback */}
                <div className={`relative overflow-hidden h-56 bg-gradient-to-br ${h.color}`}>
                  {h.img && (
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover"
                    />
                  )}
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${h.img ? 'bg-gradient-to-t from-black/75 via-black/30 to-transparent' : ''}`} />

                  {/* Content */}
                  <div className="relative p-6 flex flex-col justify-end h-full">
                    {!h.img && (
                      <div className="w-12 h-12 rounded-xl bg-white/25 flex items-center justify-center text-white text-lg font-black mb-3">
                        {h.initials}
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-bold text-white leading-snug">{h.name}</h3>
                        <p className="flex items-center gap-1 text-white/75 text-xs mt-0.5">
                          <MapPin size={10} />{h.location}
                        </p>
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${h.accreditationColor}`}>
                        {h.accreditation}
                      </span>
                    </div>

                    {/* Stats strip */}
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/20">
                      <div className="flex items-center gap-1.5 text-white/80 text-xs">
                        <BedDouble size={12} />
                        <span>{h.beds}</span>
                      </div>
                      <div className="w-px h-3 bg-white/25" />
                      <div className="flex items-center gap-1.5 text-white/80 text-xs">
                        <Stethoscope size={12} />
                        <span>{h.doctors}</span>
                      </div>
                      <div className="w-px h-3 bg-white/25" />
                      <div className="flex items-center gap-1.5 text-white/80 text-xs">
                        <CalendarDays size={12} />
                        <span>Est. {h.established}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1 gap-5">
                  {/* Specialties */}
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Key Specialties</p>
                    <div className="flex flex-wrap gap-1.5">
                      {h.specialties.map(s => (
                        <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2.5">Why Sultan GHC Refers Patients Here</p>
                    <ul className="space-y-2">
                      {h.highlights.map(pt => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                          <CheckCircle2 size={12} className="text-primary shrink-0 mt-0.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href="/free-consultation"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all"
                    >
                      Request treatment at {h.name} <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Türkiye ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why U.S. Patients Choose Türkiye</h2>
            <p className="text-gray-500 text-sm">Türkiye combines world-class hospital infrastructure with exceptional affordability and accessibility from the U.S.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: 'No Visa Required', desc: 'U.S. passport holders travel to Türkiye visa-free — no pre-travel paperwork, no embassy visit, no delays.' },
              { title: 'Short Flight Times', desc: 'Turkish Airlines operates nonstop from JFK, EWR, IAD, ORD, MIA, LAX, SFO, and BOS — 10–11 hours from the East Coast.' },
              { title: '70–80% Cost Savings', desc: 'Istanbul hospitals offer 70–80% savings vs. U.S. self-pay prices — with JCI-accredited quality and internationally trained surgeons.' },
              { title: 'Turkish Airlines Lounge & Connections', desc: 'Istanbul Airport is the busiest in Europe. Turkish Airlines\'s award-winning lounge and seamless connections make the journey comfortable for medical patients.' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200">
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#EEF4FF] border-t border-[#d9e6ff] py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Not sure which hospital is right for you?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Share your medical reports and our case managers will match you to the most suitable hospital and specialist for your specific condition — at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Get a Free Hospital Match
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-7 py-3.5 rounded-xl text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              Upload Medical Reports
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-5">Free evaluation · No commitment · Response within 24 hours</p>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Explore More</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Hospitals in India',          href: '/hospitals/india',            desc: 'Apollo, Medanta, Rela & more' },
              { label: 'Treatments in Türkiye',        href: '/destinations/turkey',        desc: 'Full Türkiye medical tourism guide' },
              { label: 'Cost Savings — Türkiye',       href: '/cost-savings/turkey',        desc: 'How much can you save?' },
              { label: 'Türkiye Visa Guide',           href: '/visa-guide/turkey',          desc: 'No visa needed for U.S. patients' },
            ].map(({ label, href, desc }) => (
              <Link key={href} href={href} className="flex items-center gap-3 p-4 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-sm transition-all group">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">{label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                </div>
                <ArrowRight size={14} className="text-gray-400 group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
