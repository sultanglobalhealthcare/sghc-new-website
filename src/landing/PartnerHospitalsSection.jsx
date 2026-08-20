import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

const HOSPITALS = [
  {
    country: 'India',
    flag: 'https://flagcdn.com/w20/in.png',
    name: 'Medanta — The Medicity',
    location: 'Gurugram, Delhi NCR',
    accreditation: 'JCI Accredited',
    mou: true,
    initials: 'ME',
    gradient: 'from-blue-600 to-sky-500',
    spec: 'Cardiology, Oncology, Neurosurgery, Liver Transplant, Robotic Surgery, Orthopaedics',
  },
  {
    country: 'India',
    flag: 'https://flagcdn.com/w20/in.png',
    name: 'Rela Institute & Medical Centre',
    location: 'Chennai',
    accreditation: 'NABH Accredited',
    mou: true,
    initials: 'RI',
    gradient: 'from-teal-600 to-cyan-500',
    spec: 'Liver Transplant, Hepatobiliary Surgery, GI Surgery, Robotic Surgery, GI Oncology',
  },
  {
    country: 'India',
    flag: 'https://flagcdn.com/w20/in.png',
    name: 'Apollo Hospitals',
    location: 'Chennai & Pan-India',
    accreditation: 'JCI Accredited',
    mou: false,
    initials: 'AP',
    gradient: 'from-violet-600 to-purple-500',
    spec: 'Cancer Care, Organ Transplant, Spine Surgery, Cardiology, Robotic Surgery, Fertility',
  },
  {
    country: 'India',
    flag: 'https://flagcdn.com/w20/in.png',
    name: 'Fortis Memorial Research Institute',
    location: 'Gurugram, Delhi NCR',
    accreditation: 'NABH Accredited',
    mou: false,
    initials: 'FM',
    gradient: 'from-emerald-600 to-green-500',
    spec: 'Robotic Surgery, Neurology, Bariatric Surgery, Bone Marrow Transplant, Cardiology',
  },
  {
    country: 'Türkiye',
    flag: 'https://flagcdn.com/w20/tr.png',
    name: 'Acibadem Healthcare Group',
    location: 'Istanbul',
    accreditation: 'JCI Accredited',
    mou: false,
    initials: 'AC',
    gradient: 'from-rose-600 to-pink-500',
    spec: 'Oncology, Cardiology, Orthopaedics, Neurosurgery, Robotic Surgery, BMT',
  },
  {
    country: 'Türkiye',
    flag: 'https://flagcdn.com/w20/tr.png',
    name: 'Memorial Hospital Group',
    location: 'Istanbul & Ankara',
    accreditation: 'JCI Accredited',
    mou: false,
    initials: 'MH',
    gradient: 'from-amber-600 to-orange-500',
    spec: 'IVF & Fertility, Neurosurgery, Bariatric Surgery, Oncology, Cardiology, Robotic Surgery',
  },
]

export default function PartnerHospitalsSection({ title = 'Internationally Accredited Partner Hospitals' }) {
  return (
    <section className="bg-[#EEF4FF] border-y border-[#d9e6ff] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Our Hospital Network
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            Every hospital in our network holds international accreditation and is individually vetted for specialist quality and patient outcome standards before Sultan GHC refers a single patient.
          </p>
        </div>

        {/* Cards — matching oncology page style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOSPITALS.map((h) => (
            <div
              key={h.name}
              className="bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Thumbnail */}
              <div className={`relative h-36 bg-gradient-to-br ${h.gradient} flex items-center justify-center`}>
                <span className="text-7xl font-black text-white/20 select-none">{h.initials}</span>
                {/* Accreditation badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-2.5 py-1 rounded-full shadow-sm">
                  {h.accreditation}
                </div>
                {/* MOU badge */}
                {h.mou && (
                  <div className="absolute top-3 left-3 bg-white text-teal-700 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    MOU Partner
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 mb-1">
                  <img src={h.flag} width={14} height={10} alt={h.country} className="rounded-sm" />
                  <p className="text-[11px] font-semibold text-primary">{h.country}</p>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{h.name}</h3>
                <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                  <MapPin size={11} /> {h.location}
                </p>
                <p className="text-xs text-gray-500 bg-blue-50 px-3 py-2 rounded-lg">
                  <span className="font-medium text-primary">Specialties: </span>{h.spec}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer links */}
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
  )
}
