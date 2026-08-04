import React from 'react'

const MissionVission = () => {
  return (
    <section className="py-14 lg:py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section label */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-10">
          Mission & Vision
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 lg:p-12 overflow-hidden group hover:bg-white/8 transition-colors">
            {/* watermark */}
            <span className="absolute right-8 bottom-6 text-[9rem] font-bold text-white/[0.04] leading-none select-none pointer-events-none">M</span>

            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-3xl mb-8">
              🎯
            </div>
            <p className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3">Our Mission</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-5">
              To Make World-Class Healthcare <br className="hidden lg:block" /> Accessible to Every Patient
            </h2>
            <p className="text-gray-400 leading-relaxed text-base">
              We connect U.S. patients with the right treatment facilities, specialist doctors, and
              internationally accredited hospitals — ensuring they receive world-class care at a price
              they can afford, without compromising on quality or safety.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
              {[
                { value: '50+', label: 'Hospital Partners' },
                { value: '15+', label: 'Specialties Covered' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="relative bg-primary border border-blue-400/20 rounded-3xl p-10 lg:p-12 overflow-hidden group hover:bg-blue-600 transition-colors">
            {/* watermark */}
            <span className="absolute right-8 bottom-6 text-[9rem] font-bold text-white/[0.07] leading-none select-none pointer-events-none">V</span>

            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl mb-8">
              🌟
            </div>
            <p className="text-xs font-bold tracking-widest text-blue-100 uppercase mb-3">Our Vision</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-5">
              To Become the Most Trusted <br className="hidden lg:block" /> Global Healthcare Concierge
            </h2>
            <p className="text-blue-100 leading-relaxed text-base">
              We envision a world where geography never limits a patient's access to the best care.
              Our goal is to build a global network of caring, expert doctors and world-class hospitals
              that every patient — regardless of budget — can trust and access.
            </p>

            <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-2 gap-4">
              {[
                { value: '2', label: 'Destinations' },
                { value: '30+', label: 'U.S. States Served' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs text-blue-200 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MissionVission
