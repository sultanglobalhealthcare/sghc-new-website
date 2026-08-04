import React from 'react'
import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  AiBrain01Icon,
  Bone02Icon,
  DentalCareIcon,
  HeartCheckIcon,
  LiverIcon,
  MicroscopeIcon,
  Plant01Icon,
  SpermIcon,
  UserAiIcon,
} from '@hugeicons/core-free-icons/index'

const TREATMENTS = [
  {
    title: 'Cardiology',
    icon: HeartCheckIcon,
    href: '/treatments/cardiology',
    procedures: 'Bypass · Angioplasty · Valve Replacement · Robotic Heart Surgery',
    color: 'blue',
  },
  {
    title: 'Orthopedics',
    icon: Bone02Icon,
    href: '/treatments/orthopedics',
    procedures: 'Hip Replacement · Knee Replacement · ACL · Spine Surgery',
    color: 'violet',
  },
  {
    title: 'Oncology',
    icon: MicroscopeIcon,
    href: '/treatments/oncology',
    procedures: 'Breast Cancer · Lung Cancer · Cyberknife · Chemotherapy',
    color: 'rose',
  },
  {
    title: 'Neurology & Neurosurgery',
    icon: AiBrain01Icon,
    href: '/treatments/neurosurgery',
    procedures: 'Brain Tumour · Stroke · Epilepsy · Nerve Injuries',
    color: 'teal',
  },
  {
    title: 'Transplants',
    icon: LiverIcon,
    href: '/treatments/organ-transplants',
    procedures: 'Liver · Kidney · Heart · Bone Marrow Transplant',
    color: 'emerald',
  },
  {
    title: 'Cosmetic & Plastic Surgery',
    icon: UserAiIcon,
    href: '/treatments/cosmetic-plastic-surgery',
    procedures: 'Body Contouring · Facial Upliftment · Liposuction',
    color: 'amber',
  },
  {
    title: 'IVF & Fertility',
    icon: SpermIcon,
    href: '/treatments/ivf-fertility',
    procedures: 'IVF · IUI · ICSI · Egg Freezing · Surrogacy',
    color: 'pink',
  },
  {
    title: 'Dental Care',
    icon: DentalCareIcon,
    href: '/treatments/dental-care',
    procedures: 'Implants · Smile Makeover · Root Canal · Orthodontics',
    color: 'cyan',
  },
  {
    title: 'Wellness & Ayurveda',
    icon: Plant01Icon,
    href: '/treatments/wellness',
    procedures: 'Herbal Medicine · Detox · Nasal Therapy · Steam Therapy',
    color: 'lime',
  },
]

const COLOR = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   icon: 'text-blue-500',   arrow: 'group-hover:text-blue-600'   },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', icon: 'text-violet-500', arrow: 'group-hover:text-violet-600' },
  rose:   { bg: 'bg-rose-50',   border: 'border-rose-100',   icon: 'text-rose-500',   arrow: 'group-hover:text-rose-600'   },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-100',   icon: 'text-teal-500',   arrow: 'group-hover:text-teal-600'   },
  emerald:{ bg: 'bg-emerald-50',border: 'border-emerald-100',icon: 'text-emerald-500',arrow: 'group-hover:text-emerald-600'},
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-100',  icon: 'text-amber-500',  arrow: 'group-hover:text-amber-600'  },
  pink:   { bg: 'bg-pink-50',   border: 'border-pink-100',   icon: 'text-pink-500',   arrow: 'group-hover:text-pink-600'   },
  cyan:   { bg: 'bg-cyan-50',   border: 'border-cyan-100',   icon: 'text-cyan-600',   arrow: 'group-hover:text-cyan-600'   },
  lime:   { bg: 'bg-lime-50',   border: 'border-lime-100',   icon: 'text-lime-600',   arrow: 'group-hover:text-lime-600'   },
}

const Treatments = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-14">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Treatments
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Our Treatment Specialities
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-base text-gray-500 leading-relaxed">
              We connect patients to advanced, accredited medical treatments across the world's top
              healthcare destinations — with expertise, safety, and compassionate care.
            </p>
            <Link href="/treatments" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm mt-3 hover:gap-3 transition-all">
              View all treatments →
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TREATMENTS.map((t) => {
            const c = COLOR[t.color]
            return (
              <Link
                key={t.title}
                href={t.href}
                className={`group flex flex-col gap-4 p-7 rounded-2xl border ${c.border} ${c.bg} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between">
                  <HugeiconsIcon icon={t.icon} size={28} className={c.icon} />
                  <span className={`text-gray-300 text-lg transition-colors ${c.arrow}`}>→</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1.5">{t.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{t.procedures}</p>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Treatments
