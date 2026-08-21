import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, MapPin, Star, Shield, ArrowRight, BedDouble, Stethoscope, CalendarDays } from 'lucide-react'

export const metadata = {
  title: 'Partner Hospitals in India | JCI & NABH Accredited | Sultan GHC',
  description:
    'Sultan GHC\'s network of JCI and NABH-accredited partner hospitals in India — Delhi, Mumbai, Chennai, Bengaluru, and Hyderabad. Verified specialist centers for U.S. medical tourists.',
  keywords: [
    'JCI accredited hospitals India',
    'best hospitals India medical tourism',
    'partner hospitals Sultan GHC India',
    'Apollo Fortis Medanta Manipal hospitals',
    'hospitals for international patients India',
    'NABH accredited hospitals India',
    'Rela Institute Chennai',
    'top hospitals Delhi Mumbai Chennai',
  ],
  openGraph: {
    title: 'Partner Hospitals in India | Sultan GHC',
    description: 'JCI and NABH-accredited hospitals across Delhi, Mumbai, Chennai, Bengaluru & Hyderabad — vetted for U.S. medical tourists by Sultan GHC.',
    url: 'https://www.sultanghc.com/hospitals/india',
    siteName: 'Sultan Global Health Care',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner Hospitals in India | Sultan GHC',
    description: 'Our verified network of JCI & NABH-accredited hospitals across India for U.S. patients.',
  },
  alternates: { canonical: 'https://www.sultanghc.com/hospitals/india' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',        item: 'https://www.sultanghc.com' },
    { '@type': 'ListItem', position: 2, name: 'Hospitals',   item: 'https://www.sultanghc.com/hospitals/india' },
    { '@type': 'ListItem', position: 3, name: 'India',       item: 'https://www.sultanghc.com/hospitals/india' },
  ],
}

const CITIES = ['All', 'Delhi NCR', 'Chennai', 'Mumbai', 'Bengaluru', 'Hyderabad']

const HOSPITALS = [
  {
    name: 'Medanta — The Medicity',
    city: 'Delhi NCR',
    location: 'Gurugram, Haryana',
    accreditation: 'JCI & NABH',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '1,600+ Beds',
    established: '2009',
    mou: true,
    img: null,
    specialties: ['Cardiology & Cardiac Surgery', 'Oncology', 'Neurosurgery', 'Orthopaedics', 'Liver Transplant', 'Robotic Surgery'],
    highlights: [
      'Ranked Best Private Hospital in India for 6 consecutive years (2020–2025) and Newsweek Top 250 World\'s Best Hospitals 2024',
      'da Vinci Xi robotic surgery across urology, gynecology, and cardiac surgery',
      'High-volume liver transplant program — one of North India\'s leading LDLT centers',
      'Dedicated institutes for Heart, Brain & Spine, Cancer, and Transplants on a single campus',
    ],
    doctors: '800+ specialists',
    color: 'from-blue-600 to-sky-500',
    initials: 'ME',
  },
  {
    name: 'Apollo Hospitals',
    city: 'Chennai',
    location: 'Greams Road, Chennai & Pan-India',
    accreditation: 'JCI Accredited',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '10,000+ Beds (network)',
    established: '1983',
    mou: false,
    img: null,
    specialties: ['Cancer Care', 'Organ Transplant', 'Spine Surgery', 'Robotic Surgery', 'Cardiology', 'Fertility'],
    highlights: [
      'JCI accredited seven times — one of the longest-standing JCI-certified hospital networks in Asia',
      'Apollo Cancer Centre — multidisciplinary tumor board for every case with da Vinci Xi robotic oncology',
      'One of Asia\'s most visited hospitals by international patients across 50+ countries',
      'Apollo Fertility: advanced IVF and reproductive medicine with high success rates',
    ],
    doctors: '4,000+ specialists',
    color: 'from-violet-600 to-purple-500',
    initials: 'AP',
  },
  {
    name: 'Rela Institute & Medical Centre',
    city: 'Chennai',
    location: 'Chromepet, Chennai',
    accreditation: 'JCI & NABH',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '450+ Beds',
    established: '2018',
    mou: true,
    img: '/rela-hospital.webp',
    specialties: ['Liver Transplant', 'Hepatobiliary Surgery', 'GI Surgery', 'Robotic Surgery', 'Kidney Transplant', 'Hepatobiliary Oncology'],
    highlights: [
      'India\'s largest liver transplant program by volume — 300+ liver transplants performed annually',
      'Founded by Prof. Mohamed Rela, who holds a Guinness World Record for a successful liver transplant on a 5-day-old infant',
      'Prof. Rela has personally performed 4,000+ liver transplant surgeries over 28 years',
      'Robotic hepatobiliary surgery including robotic liver resection and Whipple procedure',
    ],
    doctors: '300+ specialists',
    color: 'from-teal-600 to-cyan-500',
    initials: 'RI',
  },
  {
    name: 'Fortis Memorial Research Institute',
    city: 'Delhi NCR',
    location: 'Gurugram, Haryana',
    accreditation: 'JCI & NABH',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '310 Beds',
    established: '2013',
    mou: false,
    img: null,
    specialties: ['Robotic Surgery', 'Neurology & Neurosurgery', 'Bone Marrow Transplant', 'Bariatric Surgery', 'Cardiology', 'Fertility'],
    highlights: [
      'First hospital in India to perform robotic-assisted joint replacement surgery',
      'da Vinci Xi robotic prostatectomy, hysterectomy, colectomy, and complex revision bariatric surgery',
      'Haploidentical BMT program — bone marrow transplant for patients without a fully matched donor',
      'High-volume bariatric and metabolic surgery center with 15 ultra-modern operating theatres',
    ],
    doctors: '200+ specialists',
    color: 'from-emerald-600 to-green-500',
    initials: 'FM',
  },
  {
    name: 'Kokilaben Dhirubhai Ambani Hospital',
    city: 'Mumbai',
    location: 'Andheri West, Mumbai',
    accreditation: 'JCI & NABH',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '750+ Beds',
    established: '2009',
    mou: false,
    img: null,
    specialties: ['Robotic Surgery', 'Oncology', 'Cardiology', 'Neurosurgery', 'Orthopaedics', 'Urology'],
    highlights: [
      'Only hospital in Mumbai with all four accreditations: JCI, NABH, NABL, and CAP (College of American Pathology)',
      'da Vinci Xi robotic surgery across gynecology, urology, and oncology — 630+ robotic surgeries performed',
      'Novalis TX stereotactic radiosurgery for brain, liver, pancreas, prostate, and lung tumors',
      'One of Mumbai\'s largest and most technologically advanced private multispecialty hospitals',
    ],
    doctors: '400+ specialists',
    color: 'from-orange-600 to-amber-500',
    initials: 'KD',
  },
  {
    name: 'Manipal Hospitals',
    city: 'Bengaluru',
    location: 'Old Airport Road, Bengaluru & Pan-India',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '5,000+ Beds (network)',
    established: '1991',
    mou: false,
    img: null,
    specialties: ['Oncology', 'Robotic Surgery', 'Orthopaedics', 'Neurology', 'Fertility', 'Cardiology'],
    highlights: [
      'Robotic oncology program — da Vinci Xi for gynecological, GI, oesophageal, thyroid, and urological cancers',
      'Manipal Comprehensive Cancer Centre — multidisciplinary oncology board with IBM Watson-assisted diagnosis',
      'Complex multi-organ transplants and high-risk cardiac procedures across 60+ specialties',
      'Network spanning Bengaluru, Kolkata, Vijayawada, Goa, and other major Indian cities',
    ],
    doctors: '3,500+ specialists',
    color: 'from-rose-600 to-pink-500',
    initials: 'MH',
  },
  {
    name: 'Narayana Health',
    city: 'Bengaluru',
    location: 'Bommasandra, Bengaluru',
    accreditation: 'JCI & NABH',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '6,000+ Beds (network)',
    established: '2000',
    mou: false,
    img: null,
    specialties: ['Cardiac Surgery', 'Robotic Cardiac Surgery', 'Oncology', 'Neurology', 'Kidney Transplant', 'Thoracic Surgery'],
    highlights: [
      'Narayana Institute of Cardiac Sciences performs 30–35 cardiac surgeries per day — among the highest in the world',
      'World\'s largest dedicated pediatric cardiac ICU — 80-bed unit for complex congenital heart surgery',
      '23 cardiac operation theatres and 5 digital catheterization laboratories including a hybrid OR',
      'Exceptional cost-to-quality ratio — world-class cardiac outcomes at a fraction of U.S. prices',
    ],
    doctors: '4,000+ specialists',
    color: 'from-indigo-600 to-blue-500',
    initials: 'NH',
  },
  {
    name: 'Max Super Speciality Hospital',
    city: 'Delhi NCR',
    location: 'Saket & Patparganj, Delhi',
    accreditation: 'JCI & NABH',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '539+ Beds',
    established: '2006',
    mou: false,
    img: null,
    specialties: ['Cardiac Surgery', 'Orthopaedics', 'Neurology', 'Oncology', 'Bariatric Surgery', 'Liver Transplant'],
    highlights: [
      'Max liver transplant program: 2,600+ transplants since 2001 with 95%+ one-year survival rate',
      'Max Institute of Cancer Care — comprehensive medical, surgical, and radiation oncology',
      'Led by Dr. Subhash Gupta — liver transplant surgeon with 38+ years of experience',
      'Dedicated international patient services department with 12 modular operation theatres',
    ],
    doctors: '500+ specialists',
    color: 'from-cyan-600 to-teal-500',
    initials: 'MS',
  },
  {
    name: 'Gleneagles Global Hospitals',
    city: 'Mumbai',
    location: 'Parel, Mumbai',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '200+ Beds',
    established: '1998',
    mou: false,
    img: null,
    specialties: ['Liver Transplant', 'Kidney Transplant', 'Multi-Organ Transplant', 'Hepatobiliary Surgery', 'Gastroenterology'],
    highlights: [
      'Western India\'s foremost center for multi-organ transplants — liver, kidney, heart, and lung',
      'Performed Asia\'s first Pediatric Auxiliary Liver Transplant and India\'s first Swap Liver Transplant',
      'Dedicated transplant ICUs: Liver ICU, Renal ICU, Cardiac ICU, and Post-Transplant ICU',
      'NOTTO-compliant transplant program with full donor ethics committee oversight',
    ],
    doctors: '300+ specialists',
    color: 'from-green-600 to-emerald-500',
    initials: 'GH',
  },
  {
    name: 'MIOT International',
    city: 'Chennai',
    location: 'Manapakkam, Chennai',
    accreditation: 'NABH & NABL',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '1,000+ Beds',
    established: '1999',
    mou: false,
    img: null,
    specialties: ['Orthopaedics & Joint Replacement', 'Spine Surgery', 'Cardiology', 'Neurosciences', 'Urology'],
    highlights: [
      'Performed India\'s first hip joint replacement surgery — a pioneer in Indian orthopaedics',
      'Computer-navigated and robotic-assisted joint replacement with laminar airflow OTs for 99.9% infection-free environments',
      'Quaternary referral center for complex spine, trauma, and limb reconstruction cases',
      'Strong international patient program serving 5 lakh+ international patients across 63+ specialties',
    ],
    doctors: '250+ specialists',
    color: 'from-amber-600 to-yellow-500',
    initials: 'MI',
  },
  {
    name: 'AIG Hospitals (Asian Institute of Gastroenterology)',
    city: 'Hyderabad',
    location: 'Somajiguda, Hyderabad',
    accreditation: 'JCI & NABH',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '750+ Beds',
    established: '2004',
    mou: false,
    img: null,
    specialties: ['Gastroenterology', 'Hepatology', 'GI Oncology', 'Endoscopy', 'Liver Disease', 'IBD'],
    highlights: [
      'Recognized as the world\'s largest gastroenterology hospital and Asia\'s leading therapeutic endoscopy center',
      'Performs the highest volume of ERCP procedures globally — a world record in advanced GI endoscopy',
      'Capsule endoscopy, double balloon enteroscopy, EUS, EMR/ESD for complex GI lesions',
      'Advanced IBD center — biologics program with infliximab, vedolizumab, and ustekinumab',
    ],
    doctors: '200+ specialists',
    color: 'from-lime-600 to-green-500',
    initials: 'AI',
  },
  {
    name: 'Yashoda Hospitals',
    city: 'Hyderabad',
    location: 'Somajiguda, Secunderabad & Malakpet, Hyderabad',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '2,756 Beds (network)',
    established: '1989',
    mou: false,
    img: null,
    specialties: ['Cardiology', 'Neurosciences', 'Oncology', 'Transplant', 'Orthopaedics', 'Bariatric Surgery'],
    highlights: [
      'Performed the first combined heart and lung transplant in Andhra Pradesh and Telangana (2017)',
      'Four dedicated Cancer Institutes and four Heart Institutes across the Hyderabad network',
      'Advanced neurosciences including epilepsy surgery and Deep Brain Stimulation for Parkinson\'s',
      '646+ specialist doctors across four independent hospitals with round-the-clock critical care',
    ],
    doctors: '646+ specialists',
    color: 'from-fuchsia-600 to-purple-500',
    initials: 'YH',
  },
]

const STATS = [
  { value: '12+',     label: 'Partner Hospitals in India' },
  { value: '5',       label: 'Major cities covered' },
  { value: 'JCI & NABH', label: 'Accreditation standards' },
  { value: '24 hrs',  label: 'Case evaluation turnaround' },
]

export default function HospitalsIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-[#EEF4FF] border-b border-[#d9e6ff] pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Partner Hospitals in India</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white border border-[#d9e6ff] text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 shadow-sm">
                <img src="https://flagcdn.com/w20/in.png" width={16} height={12} alt="India" className="rounded-sm" />
                India — Hospital Network
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                Our Partner Hospitals<br className="hidden sm:block" />
                <span className="text-primary"> in India</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
                Every hospital in our India network is individually vetted for international accreditation, specialist credentials, and patient outcome standards. Sultan GHC matches each patient to the right hospital for their specific condition.
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

      {/* ── Accreditation explainer ── */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                <Shield size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">JCI Accredited</p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">Joint Commission International — the same standard used to accredit leading U.S. hospitals. Verified independently at jointcommissioninternational.org.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={16} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">NABH Accredited</p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">National Accreditation Board for Hospitals — India's national quality standard, aligned with ISQua international norms. Required for top-tier hospitals in India.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                <Star size={16} className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">Sultan GHC MOU Partner</p>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">Hospitals with a signed Memorandum of Understanding with Sultan GHC — preferred referral partners with priority access and dedicated liaison for our patients.</p>
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
              Partner Hospital Network — India
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              All hospitals below are vetted by Sultan GHC for international patient services, English-language care, and specialist quality before referral.
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
                  {/* Overlay — always present so text is readable */}
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

      {/* ── How Sultan GHC selects hospitals ── */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How We Select Our Partner Hospitals</h2>
            <p className="text-gray-500 text-sm">Every hospital in our network passes a rigorous multi-step vetting process before we refer a single patient.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: 'International Accreditation', desc: 'JCI or NABH accreditation is our minimum standard. We verify accreditation status independently before any referral.' },
              { title: 'Specialist Credentials', desc: 'We review individual surgeon credentials — fellowship training institutions, procedure volumes, and published outcomes — not just hospital reputation.' },
              { title: 'International Patient Infrastructure', desc: 'Partner hospitals must have a dedicated international patient services department, English-language care, and transparent pricing.' },
              { title: 'Ongoing Quality Review', desc: 'We continuously monitor patient feedback, complication rates, and post-treatment outcomes. Hospitals that do not meet our standards are removed from the network.' },
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
              { label: 'Hospitals in Türkiye',        href: '/hospitals/turkey',          desc: 'Acibadem, Memorial, Medicana & more' },
              { label: 'Treatments in India',          href: '/destinations/india',         desc: 'Full India medical tourism guide' },
              { label: 'Cost Savings — India',         href: '/cost-savings/india',         desc: 'How much can you save?' },
              { label: 'India Medical Visa',           href: '/visa-guide/india',           desc: 'e-MED visa for U.S. patients' },
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
