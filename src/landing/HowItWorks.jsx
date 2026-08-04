import React from 'react'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Reach Out to Us',
    text: 'Fill out our enquiry form, send a WhatsApp message, or request a call back. We listen and understand your healthcare need.',
    icon: '💬',
    href: '/how-it-works/#01',
  },
  {
    number: '02',
    title: 'Expert Review & Treatment Plan',
    text: 'Your medical records are reviewed by leading specialists at JCI/NABH-accredited hospitals. We present you with a clear treatment plan and cost estimate.',
    icon: '🩺',
    href: '/how-it-works/#02',
  },
  {
    number: '03',
    title: 'Visa & Logistics',
    text: 'Once you approve the plan, we handle your medical visa, flights, airport transfer, accommodation, and all pre-travel coordination.',
    icon: '✈️',
    href: '/how-it-works/#03',
  },
  {
    number: '04',
    title: 'Arrival & Warm Welcome',
    text: 'From the moment you land, you are under our care. A dedicated coordinator meets you and accompanies you to your hospital.',
    icon: '🤝',
    href: '/how-it-works/#04',
  },
  {
    number: '05',
    title: 'Treatment & Recovery',
    text: 'Your medical journey begins with world-class specialists. We remain by your side throughout treatment and your in-country recovery.',
    icon: '🏥',
    href: '/how-it-works/#05',
  },
  {
    number: '06',
    title: 'Safe Return & Follow-up',
    text: 'We manage your departure with a Fit to Fly certificate and stay in touch after you return home to support your ongoing recovery.',
    icon: '🏠',
    href: '/how-it-works/#06',
  },
]

const HowItWorks = () => {
  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden relative">
      {/* decorative */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-14">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Your Complete Treatment <br className="hidden sm:block" />Journey — Step by Step
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-gray-400 leading-relaxed">
              We simplify every stage of receiving treatment abroad — from first contact to safe return home.
            </p>
            <Link href="/how-it-works" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm mt-3 hover:gap-3 transition-all">
              See the full guide →
            </Link>
          </div>
        </div>

        {/* Steps — 3-col grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step) => (
            <Link
              key={step.number}
              href={step.href}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* watermark */}
              <span className="absolute right-4 bottom-3 text-6xl font-black text-white/[0.04] leading-none select-none">
                {step.number}
              </span>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-xl flex-shrink-0">
                  {step.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-blue-400 tracking-widest mb-1">Step {step.number}</p>
                  <h3 className="font-bold text-white text-base leading-snug mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/enquiry"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/50 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Your Journey Today →
          </Link>
          <Link href="/how-it-works" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            Read the complete guide
          </Link>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks
