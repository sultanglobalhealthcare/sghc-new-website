import Link from 'next/link'
import React from 'react'

const REASONS = [
  '✓  Your first medical opinion is free — no commitment required',
  '✓  Response within 24 hours',
  '✓  Dedicated patient coordinator assigned',
  '✓  Cost estimate provided upfront',
]

const EnquiryCta = () => {
  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-primary to-blue-700 relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-blue-900/30 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">Free — No Obligation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Ready to Start Your <br className="hidden sm:block" />
              Healthcare Journey?
            </h2>
            <p className="text-blue-100 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Share your medical reports and our patient coordinators will match you with the right
              specialist and hospital — completely free of charge.
            </p>
            <div className="space-y-2 mb-8">
              {REASONS.map((r) => (
                <p key={r} className="text-blue-100 text-sm font-medium">{r}</p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/enquiry"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                Request a Free Medical Opinion →
              </Link>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: what happens next */}
          <div className="w-full lg:w-80 flex-shrink-0 bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-white font-bold text-lg mb-6">What happens next?</h3>
            <div className="space-y-5">
              {[
                { step: '1', title: 'Upload your reports', desc: 'Share any existing medical records or test results securely.' },
                { step: '2', title: 'We review your case', desc: 'Our coordinators review within 24–48 hours.' },
                { step: '3', title: 'Receive your options', desc: 'Get matched specialists, hospitals, and cost estimates.' },
                { step: '4', title: 'Book a consultation', desc: 'Schedule a complimentary first video call with your matched specialist.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {step}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-blue-200 text-xs mt-0.5 leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default EnquiryCta
