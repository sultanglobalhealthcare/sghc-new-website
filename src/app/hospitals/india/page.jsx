import Link from 'next/link'
import { CheckCircle2, MapPin, Star, Shield, Users, ArrowRight, Phone } from 'lucide-react'

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
    accreditation: 'JCI Accredited',
    accreditationColor: 'bg-blue-100 text-blue-700',
    beds: '1,600+ Beds',
    established: '2009',
    mou: true,
    specialties: ['Cardiology & Cardiac Surgery', 'Oncology', 'Neurosurgery', 'Orthopaedics', 'Liver Transplant', 'Robotic Surgery'],
    highlights: [
      '400+ liver transplants annually — India\'s highest-volume LDLT center',
      'da Vinci Xi robotic surgery across urology, gynecology, and cardiac surgery',
      'JCI accreditation verified — same standard as leading U.S. hospitals',
      'Institute of Heart, Brain & Spine, and Cancer all under one campus',
    ],
    doctors: '1,200+ specialists',
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
    specialties: ['Cancer Care', 'Organ Transplant', 'Spine Surgery', 'Robotic Surgery', 'Cardiology', 'Fertility'],
    highlights: [
      'India\'s highest-volume robotic surgery center (da Vinci Xi) — 3,000+ procedures/year',
      'Apollo Cancer Centre — multidisciplinary tumor board for every case',
      'One of Asia\'s most visited hospitals by international patients',
      'Apollo Fertility: advanced IVF and reproductive medicine',
    ],
    doctors: '4,000+ specialists',
    color: 'from-violet-600 to-purple-500',
    initials: 'AP',
  },
  {
    name: 'Rela Institute & Medical Centre',
    city: 'Chennai',
    location: 'Chromepet, Chennai',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '400+ Beds',
    established: '2010',
    mou: true,
    specialties: ['Liver Transplant', 'Hepatobiliary Surgery', 'GI Surgery', 'Robotic Surgery', 'Kidney Transplant', 'Hepatobiliary Oncology'],
    highlights: [
      'Asia\'s largest liver transplant program by volume — founded by world-renowned HPB surgeon Dr. Mohamed Rela',
      'Sultan GHC MOU partner — preferred referral center for liver, HPB, and GI cases',
      'Dedicated hepatobiliary oncology program for GI cancers',
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
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '310 Beds',
    established: '2013',
    mou: false,
    specialties: ['Robotic Surgery', 'Neurology & Neurosurgery', 'Bone Marrow Transplant', 'Bariatric Surgery', 'Cardiology', 'Fertility'],
    highlights: [
      'da Vinci Xi robotic prostatectomy, hysterectomy, colectomy, and complex revision bariatric',
      'Haploidentical BMT program for patients without a fully matched donor',
      'Joint Commission International standards-equivalent quality process',
      'High-volume bariatric and metabolic surgery center',
    ],
    doctors: '500+ specialists',
    color: 'from-emerald-600 to-green-500',
    initials: 'FM',
  },
  {
    name: 'Kokilaben Dhirubhai Ambani Hospital',
    city: 'Mumbai',
    location: 'Andheri West, Mumbai',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '750+ Beds',
    established: '2009',
    mou: false,
    specialties: ['Robotic Surgery', 'Oncology', 'Cardiology', 'Neurosurgery', 'Orthopaedics', 'Urology'],
    highlights: [
      'da Vinci Xi robotic gynecology and urology — NABH-accredited with ISO certification',
      'Tata Memorial-linked oncology programs for complex cancer cases',
      'CyberKnife stereotactic radiosurgery for brain and spine tumors',
      'One of Mumbai\'s largest private multispecialty hospitals',
    ],
    doctors: '700+ specialists',
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
    specialties: ['Oncology', 'Robotic Surgery', 'Orthopaedics', 'Neurology', 'Fertility', 'Cardiology'],
    highlights: [
      'da Vinci Si/Xi robotic prostatectomy and radical hysterectomy for cervical cancer',
      'Manipal Comprehensive Cancer Centre — multidisciplinary oncology board',
      'Advanced orthopaedic and joint replacement program',
      'Network across Bengaluru, Kolkata, Vijayawada, and Goa',
    ],
    doctors: '3,500+ specialists',
    color: 'from-rose-600 to-pink-500',
    initials: 'MH',
  },
  {
    name: 'Narayana Health',
    city: 'Bengaluru',
    location: 'Bommasandra, Bengaluru',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '6,000+ Beds (network)',
    established: '2000',
    mou: false,
    specialties: ['Cardiac Surgery', 'Robotic Cardiac Surgery', 'Oncology', 'Neurology', 'Kidney Transplant', 'Thoracic Surgery'],
    highlights: [
      'da Vinci robotic cardiac surgery including robotic CABG and lobectomy',
      'One of the world\'s highest-volume cardiac surgery programs — 30,000+ heart surgeries/year',
      'Rabindranath Tagore International Institute of Cardiac Sciences: premier cardiac center',
      'Exceptional cost-to-quality ratio — affordable cardiac care with JCI-equivalent outcomes',
    ],
    doctors: '4,000+ specialists',
    color: 'from-indigo-600 to-blue-500',
    initials: 'NH',
  },
  {
    name: 'Max Super Speciality Hospital',
    city: 'Delhi NCR',
    location: 'Saket & Patparganj, Delhi',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '500+ Beds',
    established: '2006',
    mou: false,
    specialties: ['Cardiac Surgery', 'Orthopaedics', 'Neurology', 'Oncology', 'Bariatric Surgery', 'Liver Transplant'],
    highlights: [
      'Max Institute of Cancer Care — comprehensive medical, surgical, and radiation oncology',
      'High-volume liver transplant program with NOTTO compliance',
      'Joint replacement and sports medicine center with U.S.-trained orthopedic surgeons',
      'Dedicated international patient services department',
    ],
    doctors: '800+ specialists',
    color: 'from-cyan-600 to-teal-500',
    initials: 'MS',
  },
  {
    name: 'Global Hospitals',
    city: 'Mumbai',
    location: 'Parel, Mumbai',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '300+ Beds',
    established: '1998',
    mou: false,
    specialties: ['Liver Transplant', 'Kidney Transplant', 'Multi-Organ Transplant', 'Hepatobiliary Surgery', 'Gastroenterology'],
    highlights: [
      'Specialized in living donor liver transplant — 95%+ graft survival rate',
      'Multi-organ transplant capability including simultaneous liver-kidney',
      'NOTTO-compliant transplant program with full donor ethics committee',
      'Dr. Mohamed Rela performed landmark pediatric liver transplants here',
    ],
    doctors: '300+ specialists',
    color: 'from-green-600 to-emerald-500',
    initials: 'GH',
  },
  {
    name: 'MIOT International',
    city: 'Chennai',
    location: 'Manapakkam, Chennai',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '1,000+ Beds',
    established: '2007',
    mou: false,
    specialties: ['Orthopaedics & Joint Replacement', 'Spine Surgery', 'Cardiology', 'Neurosciences', 'Urology'],
    highlights: [
      'One of India\'s most specialized orthopaedic hospitals — complex joint revision and limb reconstruction',
      'Navigation-assisted and robotic-assisted knee replacement',
      'Quaternary referral center for complex spine and trauma cases',
      'Strong international patient program with dedicated coordinators',
    ],
    doctors: '450+ specialists',
    color: 'from-amber-600 to-yellow-500',
    initials: 'MI',
  },
  {
    name: 'Asian Institute of Gastroenterology',
    city: 'Hyderabad',
    location: 'Somajiguda, Hyderabad',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '500+ Beds',
    established: '2004',
    mou: false,
    specialties: ['Gastroenterology', 'Hepatology', 'GI Oncology', 'Endoscopy', 'Liver Disease', 'IBD'],
    highlights: [
      'One of Asia\'s largest dedicated GI hospitals — 150,000+ endoscopies/year',
      'Capsule endoscopy, double balloon enteroscopy, EUS, and EMR/ESD for complex lesions',
      'Advanced IBD center — biologics program with infliximab, vedolizumab, ustekinumab',
      'Recognized as a Center of Excellence by international GI societies',
    ],
    doctors: '200+ specialists',
    color: 'from-lime-600 to-green-500',
    initials: 'AI',
  },
  {
    name: 'Yashoda Hospitals',
    city: 'Hyderabad',
    location: 'Secunderabad & Malakpet, Hyderabad',
    accreditation: 'NABH Accredited',
    accreditationColor: 'bg-emerald-100 text-emerald-700',
    beds: '1,500+ Beds (network)',
    established: '1989',
    mou: false,
    specialties: ['Cardiology', 'Neurosciences', 'Oncology', 'Transplant', 'Orthopaedics', 'Bariatric Surgery'],
    highlights: [
      'High-volume cardiac catheterization and interventional cardiology program',
      'Dedicated kidney transplant and dialysis center',
      'Advanced neurosciences including epilepsy surgery and DBS for Parkinson\'s',
      'Affordable pricing with strong international patient services',
    ],
    doctors: '600+ specialists',
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

          <div className="space-y-8">
            {HOSPITALS.map((h, i) => (
              <div key={h.name} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Header bar */}
                <div className={`bg-gradient-to-r ${h.color} p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white text-xl font-black shrink-0">
                    {h.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{h.name}</h3>
                      {h.mou && (
                        <span className="text-xs bg-white text-teal-700 font-bold px-2.5 py-0.5 rounded-full">
                          MOU Partner
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-white/80 text-xs">
                      <span className="flex items-center gap-1"><MapPin size={11} />{h.location}</span>
                      <span>·</span>
                      <span>{h.beds}</span>
                      <span>·</span>
                      <span>{h.doctors}</span>
                      <span>·</span>
                      <span>Est. {h.established}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full shrink-0 ${h.accreditationColor}`}>
                    {h.accreditation}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 grid lg:grid-cols-2 gap-8">
                  {/* Specialties */}
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {h.specialties.map(s => (
                        <span key={s} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Why Sultan GHC Refers Patients Here</p>
                    <ul className="space-y-2">
                      {h.highlights.map(pt => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                          <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA strip */}
                <div className="border-t border-gray-100 px-6 sm:px-8 py-4 bg-gray-50 flex flex-col sm:flex-row sm:items-center gap-3">
                  <p className="text-xs text-gray-500 flex-1">Interested in treatment at {h.name}? Sultan GHC handles hospital selection, appointment scheduling, and full coordination.</p>
                  <Link
                    href="/free-consultation"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline shrink-0"
                  >
                    Request a Match <ArrowRight size={12} />
                  </Link>
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
