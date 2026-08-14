import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PILLARS = [
  { icon: '✈️', label: 'End-to-End Travel & Logistics' },
  { icon: '🩺', label: 'Expert Doctor Matching' },
  { icon: '📋', label: 'Medical Case Evaluation' },
  { icon: '🏨', label: 'Accommodation & Transfers' },
  { icon: '🌐', label: 'Interpreter Support' },
  { icon: '📞', label: '24/7 Post-Treatment Follow-up' },
]

const AboutUs = () => {
  return (
    <section id="about" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Image column */}
        <div className="w-full lg:w-5/12 relative flex-shrink-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100/60">
            <Image
              src="/doctor-consulting.jpg"
              alt="Sultan GHC patient coordinator consulting with a specialist doctor"
              width={800}
              height={900}
              className="w-full h-auto object-cover"
            />
            {/* overlay badge */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">🌍</div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Trusted by Patients Across 30+ U.S. States</p>
                  <p className="text-xs text-gray-500 mt-0.5">Serving patients in India & Türkiye since 2020</p>
                </div>
              </div>
            </div>
          </div>
          {/* accent block behind image */}
          <div className="absolute -bottom-4 -left-4 -z-10 w-full h-full rounded-3xl bg-blue-50 border border-blue-100" />
        </div>

        {/* Text column */}
        <div className="w-full lg:w-7/12 space-y-7">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              About Sultan GHC
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Your Trusted Healthcare <br className="hidden sm:block" />
              Concierge for Treatment Abroad
            </h2>
          </div>

          <p className="text-base text-gray-500 leading-relaxed">
            Sultan Global Health Care (SGHC) is a United States-based medical tourism concierge that
            helps patients access world-class, affordable healthcare through a trusted network of
            internationally accredited hospitals and specialist doctors in <strong className="text-gray-700">India</strong> and{' '}
            <strong className="text-gray-700">Türkiye</strong>.
          </p>

          <p className="text-base text-gray-500 leading-relaxed">
            We are not a hospital or clinic — we are your personal healthcare advocate. SGHC manages
            every stage of your medical journey so you can focus entirely on getting better.
          </p>

          {/* What we handle */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PILLARS.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3.5 py-2.5">
                <span className="text-base">{icon}</span>
                <span className="text-xs font-medium text-gray-700 leading-snug">{label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
          >
            Learn more about Sultan GHC
            <span className="text-base">→</span>
          </Link>
        </div>

      </div>
      </div>
    </section>
  )
}

export default AboutUs
