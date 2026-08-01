import React from 'react'

import gsap from 'gsap'
import Badge from '@/components/Badge'

const OurNetwork = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-32">
        <Badge text='OUR NETWORK'/>
        <h1 className="mt-4 text-2xl font-medium sm:text-3xl font-bruno leading-snug">
          OUR MEDICAL TRAVEL NETWORK
        </h1>

        <p className="mt-4 text-sm sm:text-base text-description max-w-lg">
          Our Network links patients to accredited hospitals and leading specialists worldwide, 
          helping many such people access relevant medical services in US, India and Turkey easily.
        </p>

        {/* FIXED GRID */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div>
            <img
              src="https://www.medanta.org/storage/hospitals/September2023/7SQ9q1Q1OCZRgZRErb64rLCNhnUGSi-metabHVja25vdy5qcGc=-.jpg"
              className="w-full h-48 sm:h-64 object-cover rounded-lg"
            />
            <div className="flex justify-between items-center mt-3">
              <h2 className="text-base font-medium">Medanta</h2>
              <p className="text-sm text-description">Gurugram, India</p>
            </div>
          </div>

          <div>
            <img
              src="/rela-hospital.webp"
              className="w-full h-48 sm:h-64 object-cover rounded-lg"
            />
            <div className="flex justify-between items-center mt-3">
              <h2 className="text-base font-medium">Rela Hospital</h2>
              <p className="text-sm text-description">Chennai, India</p>
            </div>
          </div>

          <div>
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.GD4kUQJR-Z8fOc8ZqH6wGQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3"
              className="w-full h-48 sm:h-64 object-cover rounded-lg"
            />
            <div className="flex justify-between items-center mt-3">
              <h2 className="text-base font-medium">Acibadem</h2>
              <p className="text-sm text-description">Istanbul, Turkey</p>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default OurNetwork
