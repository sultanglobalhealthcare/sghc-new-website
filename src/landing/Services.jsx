import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  UserShield01Icon,
  Calendar02Icon,
  HotelBellIcon,
  File02Icon,
  HealtcareIcon,
  LinkForwardIcon,
} from '@hugeicons/core-free-icons/index'

const servicesData = [
  {
    title: 'Medical Case Evaluation',
    icon: UserShield01Icon,
    desc: 'Our medical team reviews your records and connects you with the most qualified specialist for your specific condition — within 24 to 48 hours.',
    color: 'blue',
  },
  {
    title: 'Treatment Planning & Coordination',
    icon: Calendar02Icon,
    desc: 'We liaise directly with your chosen hospital to plan treatment schedules, appointment timings, and all pre-arrival preparations.',
    color: 'violet',
  },
  {
    title: 'Travel & Accommodation',
    icon: HotelBellIcon,
    desc: 'We arrange flights, comfortable accommodation near your hospital, and local transport — suited to your budget and recovery needs.',
    color: 'emerald',
  },
  {
    title: 'Visa & Documentation Support',
    icon: File02Icon,
    desc: 'We guide you through the medical visa process and help prepare all the documentation required for a smooth entry into India or Türkiye.',
    color: 'amber',
  },
  {
    title: 'Interpreter & Language Assistance',
    icon: HealtcareIcon,
    desc: 'Professional interpreters ensure clear communication with your doctors, nurses, and hospital staff throughout your treatment.',
    color: 'rose',
  },
  {
    title: 'Post-Treatment Follow-up',
    icon: LinkForwardIcon,
    desc: 'Our care does not end when you return home. We remain in contact to support your recovery and connect you with your treating doctor when needed.',
    color: 'teal',
  },
]

const COLOR = {
  blue:    'bg-blue-50 text-blue-600 border-blue-100',
  violet:  'bg-violet-50 text-violet-600 border-violet-100',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  amber:   'bg-amber-50 text-amber-600 border-amber-100',
  rose:    'bg-rose-50 text-rose-600 border-rose-100',
  teal:    'bg-teal-50 text-teal-600 border-teal-100',
}

const Services = () => {
  return (
    <section id="services" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-14">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Everything We Handle <br className="hidden sm:block" /> So You Can Focus on Healing
            </h2>
          </div>
          <p className="text-base text-gray-500 leading-relaxed lg:max-w-sm">
            From first consultation to safe return home — Sultan GHC manages every detail of your
            international medical journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group border rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${COLOR[service.color]}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm">
                <HugeiconsIcon
                  icon={service.icon}
                  size={24}
                  className="opacity-80"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
