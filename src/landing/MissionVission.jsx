'use client'
import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const MissionVission = () => {

  useGSAP(() => {
    const cards = gsap.utils.toArray('.mission-card')
    let lastActive = null

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => activate(index),
        onEnterBack: () => activate(index),
      })
    })

    function activate(activeIndex) {
      if (lastActive === activeIndex) return
      lastActive = activeIndex

      cards.forEach((c, i) => {
        if (i === activeIndex) {
          gsap.to(c, {
            backgroundColor: "#4793F3",
            color: "#fff",
            duration: 0.4,
            ease: "power2.out"
          })
        } else {
          gsap.to(c, {
            backgroundColor: "#44793F30D",
            color: "#000",
            duration: 0.4,
            ease: "power2.out"
          })
        }
      })
    }
  })

  return (
    <section className='w-full mt-16 lg:mt-32 px-6 sm:px-10 lg:px-16'>
      <div className='flex flex-col justify-center items-center gap-8'>

        <div>
          <h1 className="mt-8 text-2xl font-medium uppercase sm:text-3xl text-left font-bruno leading-snug">
            Our Mission & Vision
          </h1>

          <p className="mt-4 text-sm sm:text-base text-description max-w-sm">
            We are driven by a clear purpose to guide patients toward the right treatment facilities 
            and create a global network of compassionate, expert doctors.
          </p>

          

        </div>

        <div className='mission-card w-full max-w-sm rounded-2xl bg-white px-8 py-8 space-y-4'>
          <h2 className='text-lg font-medium'>Our Mission</h2>
          <p>To connect patients with the <br /> suitable treatment facilities.</p>
        </div>

        <div className='mission-card w-full max-w-sm rounded-2xl bg-white px-8 py-8 space-y-4'>
          <h2 className='text-lg font-medium'>Our Vision</h2>
          <p> 
            To create a convenient network of caring
            & expert doctors for everyone.
          </p>
        </div>

      </div>
    </section>
  )
}

export default MissionVission
