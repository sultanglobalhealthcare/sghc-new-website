'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

// ── 6 Partner Hospitals ───────────────────────────────────────────────────────
const HOSPITALS = [
  {
    country: 'India',
    flag: 'https://flagcdn.com/w20/in.png',
    name: 'Medanta — The Medicity',
    city: 'Gurugram, Delhi NCR',
    beds: '1,600+ Beds',
    accreditation: 'JCI Accredited',
    initials: 'ME',
    color: 'from-blue-100 to-sky-50',
    textColor: 'text-blue-600',
    img: null,
    specialties: ['Cardiology', 'Oncology', 'Neurosurgery', 'Liver Transplant', 'Robotic Surgery'],
  },
  {
    country: 'India',
    flag: 'https://flagcdn.com/w20/in.png',
    name: 'Rela Institute & Medical Centre',
    city: 'Chennai',
    beds: '400+ Beds',
    accreditation: 'NABH Accredited',
    initials: 'RI',
    color: 'from-teal-100 to-cyan-50',
    textColor: 'text-teal-600',
    img: '/rela-hospital.webp',
    specialties: ['Liver Transplant', 'Hepatobiliary Surgery', 'GI Surgery', 'Robotic Surgery'],
  },
  {
    country: 'India',
    flag: 'https://flagcdn.com/w20/in.png',
    name: 'Apollo Hospitals',
    city: 'Chennai & Pan-India',
    beds: '10,000+ Beds',
    accreditation: 'JCI Accredited',
    initials: 'AP',
    color: 'from-violet-100 to-purple-50',
    textColor: 'text-violet-600',
    img: null,
    specialties: ['Cancer Care', 'Organ Transplant', 'Spine Surgery', 'Cardiology'],
  },
  {
    country: 'India',
    flag: 'https://flagcdn.com/w20/in.png',
    name: 'Fortis Memorial Research Institute',
    city: 'Gurugram, Delhi NCR',
    beds: '310 Beds',
    accreditation: 'NABH Accredited',
    initials: 'FM',
    color: 'from-emerald-100 to-green-50',
    textColor: 'text-emerald-600',
    img: null,
    specialties: ['Robotic Surgery', 'Neurology', 'Bariatric Surgery', 'Cardiology'],
  },
  {
    country: 'Türkiye',
    flag: 'https://flagcdn.com/w20/tr.png',
    name: 'Acibadem Healthcare Group',
    city: 'Istanbul',
    beds: '200+ Beds',
    accreditation: 'JCI Accredited',
    initials: 'AC',
    color: 'from-rose-100 to-pink-50',
    textColor: 'text-rose-600',
    img: null,
    specialties: ['Oncology', 'Cardiology', 'Orthopaedics', 'Robotic Surgery'],
  },
  {
    country: 'Türkiye',
    flag: 'https://flagcdn.com/w20/tr.png',
    name: 'Memorial Hospital Group',
    city: 'Istanbul & Ankara',
    beds: '300+ Beds',
    accreditation: 'JCI Accredited',
    initials: 'MH',
    color: 'from-amber-100 to-orange-50',
    textColor: 'text-amber-700',
    img: null,
    specialties: ['IVF & Fertility', 'Neurosurgery', 'Bariatric Surgery', 'Oncology'],
  },
  {
    country: 'Türkiye',
    flag: 'https://flagcdn.com/w20/tr.png',
    name: 'Koç University Hospital',
    city: 'Istanbul',
    beds: '400+ Beds',
    accreditation: 'JCI Accredited',
    initials: 'KU',
    color: 'from-sky-100 to-blue-50',
    textColor: 'text-sky-700',
    img: null,
    specialties: ['Organ Transplant', 'Oncology', 'Cardiology', 'Neurosurgery', 'IVF'],
  },
  {
    country: 'Türkiye',
    flag: 'https://flagcdn.com/w20/tr.png',
    name: 'Medicana International',
    city: 'Istanbul',
    beds: '191 Beds',
    accreditation: 'JCI Accredited',
    initials: 'MC',
    color: 'from-indigo-100 to-violet-50',
    textColor: 'text-indigo-700',
    img: null,
    specialties: ['Bariatric Surgery', 'Orthopedics', 'Cardiology', 'Hair Transplant'],
  },
]

// ── Card ─────────────────────────────────────────────────────────────────────
function HospitalCard({ h }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group h-full flex flex-col">
      <div className={`relative h-36 bg-gradient-to-br ${h.color} flex items-center justify-center overflow-hidden flex-shrink-0`}>
        {h.img ? (
          <Image
            src={h.img}
            alt={h.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span className={`text-6xl font-black ${h.textColor} opacity-25 select-none`}>
            {h.initials}
          </span>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-2.5 py-1 rounded-full shadow-sm">
          {h.accreditation}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={h.flag} width={14} height={10} alt={h.country} className="rounded-sm" />
          <p className="text-[11px] font-semibold text-primary">{h.country}</p>
        </div>
        <h3 className="font-bold text-gray-900 leading-snug text-sm mb-0.5">{h.name}</h3>
        <p className="text-xs text-gray-400 mb-3">{h.city} · {h.beds}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {h.specialties.map((s) => (
            <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Slider ────────────────────────────────────────────────────────────────────
function HospitalSlider() {
  const [idx, setIdx] = useState(0)
  const [perView, setPerView] = useState(3)
  const intervalRef = useRef(null)
  const idxRef = useRef(0)
  const perViewRef = useRef(3)

  const total = HOSPITALS.length

  // Keep refs in sync
  useEffect(() => { idxRef.current = idx }, [idx])
  useEffect(() => { perViewRef.current = perView }, [perView])

  // Responsive perView
  useEffect(() => {
    function update() {
      const w = window.innerWidth
      const pv = w < 640 ? 1 : w < 1024 ? 2 : 3
      setPerView(pv)
      perViewRef.current = pv
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIdx = Math.max(0, total - perView)

  const goNext = () => {
    const next = idxRef.current >= maxIdx ? 0 : idxRef.current + 1
    idxRef.current = next
    setIdx(next)
  }

  const goPrev = () => {
    const pv = perViewRef.current
    const max = Math.max(0, total - pv)
    const prev = idxRef.current <= 0 ? max : idxRef.current - 1
    idxRef.current = prev
    setIdx(prev)
  }

  const goTo = (i) => {
    idxRef.current = i
    setIdx(i)
  }

  // Auto-slide
  const startAuto = () => {
    stopAuto()
    intervalRef.current = setInterval(() => {
      const pv = perViewRef.current
      const max = Math.max(0, total - pv)
      const next = idxRef.current >= max ? 0 : idxRef.current + 1
      idxRef.current = next
      setIdx(next)
    }, 3500)
  }

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    startAuto()
    return stopAuto
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pct = 100 / perView
  const translateX = -(idx * pct)

  return (
    <div onMouseEnter={stopAuto} onMouseLeave={startAuto}>
      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {HOSPITALS.map((h) => (
            <div
              key={h.name}
              className="px-2.5 flex-shrink-0"
              style={{ width: `${pct}%` }}
            >
              <HospitalCard h={h} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === idx ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-all cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-all cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function PartnerHospitalsSection({
  title = 'Internationally Accredited Partner Hospitals',
}) {
  return (
    <section className="py-14 lg:py-20 bg-[#F5F7FA] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-10">
          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              Our Hospital Network
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-sm text-gray-500 mt-3 max-w-xl leading-relaxed">
              Every hospital is individually vetted for international accreditation, specialist credentials, and patient outcome standards before Sultan GHC refers a single patient.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0 text-sm font-semibold text-primary">
            <Link href="/hospitals/india" className="hover:underline flex items-center gap-1">
              India <ArrowRight size={13} />
            </Link>
            <Link href="/hospitals/turkey" className="hover:underline flex items-center gap-1">
              Türkiye <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Slider */}
        <HospitalSlider />

      </div>
    </section>
  )
}
