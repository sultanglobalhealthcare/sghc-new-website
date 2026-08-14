import React from 'react'
import Link from 'next/link'

const REASONS = [
  {
    number: '01',
    icon: '🏥',
    title: 'Network of Accredited Hospitals',
    desc: 'Access to 50+ JCI and NABH-accredited hospitals across India and Türkiye — vetted for quality, safety, and international patient standards.',
    color: 'blue',
  },
  {
    number: '02',
    icon: '💰',
    title: 'Affordable, Transparent Pricing',
    desc: 'Save 60–80% compared to U.S. healthcare costs. We provide clear cost estimates upfront — no hidden fees, no surprises.',
    color: 'emerald',
  },
  {
    number: '03',
    icon: '🩺',
    title: 'Expert Doctor Matching',
    desc: 'We match your specific condition to the most qualified specialist — not just any available doctor. Every recommendation is based on outcomes, not availability.',
    color: 'violet',
  },
  {
    number: '04',
    icon: '✈️',
    title: 'Complete Travel & Logistics',
    desc: 'From visa support and flights to airport transfers, accommodation near your hospital, and local transport — we handle everything.',
    color: 'amber',
  },
  {
    number: '05',
    icon: '🌐',
    title: 'Multilingual Patient Support',
    desc: 'Professional interpreters and dedicated patient coordinators who speak your language and guide you at every stage of your journey.',
    color: 'rose',
  },
  {
    number: '06',
    icon: '📞',
    title: '24/7 Post-Treatment Follow-up',
    desc: 'Our commitment does not end when you return home. We stay in touch to monitor your recovery and connect you with your treating doctor.',
    color: 'teal',
  },
]

const COLOR = {
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-100',   icon: 'bg-blue-100',   num: 'text-blue-200'   },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100',icon: 'bg-emerald-100',num: 'text-emerald-200' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-100', icon: 'bg-violet-100', num: 'text-violet-200'  },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-100',  icon: 'bg-amber-100',  num: 'text-amber-200'   },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-100',   icon: 'bg-rose-100',   num: 'text-rose-200'    },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-100',   icon: 'bg-teal-100',   num: 'text-teal-200'    },
}

const WhyChooseUs = () => {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-14">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Why Sultan GHC
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Why Patients Choose <br className="hidden sm:block" />
              Sultan GHC for Treatment Abroad
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-base text-gray-500 leading-relaxed">
              Choosing Sultan GHC means choosing clarity, comfort, and trusted care at every stage
              of your international medical journey.
            </p>
            <Link href="/why-sultan-ghc" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm mt-3 hover:gap-3 transition-all">
              See full details →
            </Link>
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r) => {
            const c = COLOR[r.color]
            return (
              <div
                key={r.number}
                className={`relative ${c.bg} border ${c.border} rounded-3xl p-8 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                {/* watermark number */}
                <span className={`absolute right-4 top-4 text-5xl font-black ${c.num} opacity-50 leading-none select-none pointer-events-none`}>
                  {r.number}
                </span>

                <div className={`w-12 h-12 rounded-2xl ${c.icon} flex items-center justify-center text-2xl mb-5`}>
                  {r.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug pr-8">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
