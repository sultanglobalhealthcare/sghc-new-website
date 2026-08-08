import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const INDIA_HOSPITALS = [
  {
    name: 'Medanta – The Medicity',
    city: 'Gurugram, NCR',
    specialties: ['Cardiology', 'Oncology', 'Neurosurgery'],
    accreditation: 'JCI Accredited',
    beds: '1,600+ Beds',
    img: null,
    initials: 'ME',
    color: 'from-blue-100 to-sky-50',
    textColor: 'text-blue-600',
  },
  {
    name: 'Apollo Hospitals',
    city: 'Chennai & Pan-India',
    specialties: ['Cancer Care', 'Transplants', 'Spine'],
    accreditation: 'JCI Accredited',
    beds: '10,000+ Beds',
    img: null,
    initials: 'AP',
    color: 'from-violet-100 to-purple-50',
    textColor: 'text-violet-600',
  },
  {
    name: 'Fortis Memorial Research Institute',
    city: 'Gurugram',
    specialties: ['Robotic Surgery', 'Neurology', 'Fertility'],
    accreditation: 'NABH Accredited',
    beds: '310 Beds',
    img: null,
    initials: 'FM',
    color: 'from-emerald-100 to-green-50',
    textColor: 'text-emerald-600',
  },
  {
    name: 'Rela Hospital',
    city: 'Chennai',
    specialties: ['Liver Transplant', 'GI Surgery', 'Hepatology'],
    accreditation: 'NABH Accredited',
    beds: '400 Beds',
    img: '/rela-hospital.webp',
    initials: 'RH',
    color: 'from-teal-100 to-cyan-50',
    textColor: 'text-teal-600',
  },
]

const TURKEY_HOSPITALS = [
  {
    name: 'Acibadem Hospital',
    city: 'Istanbul',
    specialties: ['Orthopedics', 'Cardiology', 'Oncology'],
    accreditation: 'JCI Accredited',
    beds: '200+ Beds',
    img: null,
    initials: 'AC',
    color: 'from-rose-100 to-pink-50',
    textColor: 'text-rose-600',
  },
  {
    name: 'Memorial Hospital',
    city: 'Istanbul & Ankara',
    specialties: ['IVF', 'Neurosurgery', 'Bariatric'],
    accreditation: 'JCI Accredited',
    beds: '300+ Beds',
    img: null,
    initials: 'MH',
    color: 'from-amber-100 to-orange-50',
    textColor: 'text-amber-700',
  },
]

function HospitalCard({ hospital }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Image / placeholder */}
      <div className={`relative h-36 bg-gradient-to-br ${hospital.color} flex items-center justify-center overflow-hidden`}>
        {hospital.img ? (
          <Image
            src={hospital.img}
            alt={hospital.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span className={`text-6xl font-black ${hospital.textColor} opacity-25 select-none`}>
            {hospital.initials}
          </span>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-2.5 py-1 rounded-full shadow-sm">
          {hospital.accreditation}
        </div>
      </div>
      {/* Info */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 leading-snug text-sm">{hospital.name}</h3>
        <p className="text-xs text-gray-400 mt-0.5 mb-3">{hospital.city} · {hospital.beds}</p>
        <div className="flex flex-wrap gap-1.5">
          {hospital.specialties.map((s) => (
            <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const OurNetwork = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-14">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 shadow-sm">
              Our Network
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Trusted Hospitals in <span className="text-primary">India</span> &{' '}
              <span className="text-primary">Turkey</span>
            </h2>
            <p className="text-base text-gray-500 mt-3 max-w-xl leading-relaxed">
              Every hospital in our network is individually vetted for international accreditation,
              specialist quality, and patient outcome standards.
            </p>
          </div>
          <Link href="/hospitals/india" className="text-sm font-semibold text-primary hover:underline flex-shrink-0">
            View all hospitals →
          </Link>
        </div>

        {/* India */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <img src="https://flagcdn.com/32x24/in.png" width={32} height={24} alt="India" className="rounded shadow-sm" />
            <div>
              <h3 className="text-base font-bold text-gray-900">India</h3>
              <p className="text-sm text-gray-400">JCI & NABH-accredited hospitals with world-class specialists</p>
            </div>
            <div className="flex-1 h-px bg-gray-200 ml-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDIA_HOSPITALS.map((h) => <HospitalCard key={h.name} hospital={h} />)}
          </div>
        </div>

        {/* Turkey */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="https://flagcdn.com/32x24/tr.png" width={32} height={24} alt="Turkey" className="rounded shadow-sm" />
            <div>
              <h3 className="text-base font-bold text-gray-900">Turkey</h3>
              <p className="text-sm text-gray-400">Istanbul's internationally renowned clinics combining quality care with modern facilities</p>
            </div>
            <div className="flex-1 h-px bg-gray-200 ml-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:max-w-2xl">
            {TURKEY_HOSPITALS.map((h) => <HospitalCard key={h.name} hospital={h} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default OurNetwork
