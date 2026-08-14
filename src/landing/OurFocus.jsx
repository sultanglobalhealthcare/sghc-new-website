import Image from 'next/image'
import React from 'react'

const FEATURES = [
  { icon: '🩺', label: 'Personalised Treatment Planning' },
  { icon: '🛂', label: 'Smooth Medical Visa Process' },
  { icon: '📅', label: 'Appointments Scheduled for You' },
  { icon: '🏨', label: 'Accommodation & Local Transport' },
]

const OurFocus = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image */}
          <div className="w-full lg:w-5/12 flex-shrink-0 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-gray-200/80">
              <Image
                src="/hands.jpg"
                alt="Sultan GHC patient coordinator guiding a patient through their treatment journey"
                width={700}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 -z-10 w-full h-full rounded-3xl bg-blue-50 border border-blue-100" />
          </div>

          {/* Text */}
          <div className="w-full lg:w-7/12 space-y-7">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                Our Focus
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                A Seamless, Supported <br className="hidden sm:block" />
                Experience from Start to Finish
              </h2>
            </div>

            <p className="text-base text-gray-500 leading-relaxed">
              With thousands of patients seeking medical care internationally each year, Sultan GHC
              plays a vital role in helping people access the right medical services in{' '}
              <strong className="text-gray-700">India</strong> and{' '}
              <strong className="text-gray-700">Türkiye</strong> — at a standard of care and support
              they can truly rely on.
            </p>

            <p className="text-base text-gray-500 leading-relaxed">
              Our focus is to make every step of your journey comfortable, clear, and worry-free —
              so you can direct all your energy toward getting better.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEATURES.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OurFocus
