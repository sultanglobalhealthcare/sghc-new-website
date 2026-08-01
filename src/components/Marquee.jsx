'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Marquee = ({ title }) => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current

    // Marquee timeline (looping)
    const marqueeTl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'none' },
    })

    marqueeTl.to(marquee, {
      xPercent: -50,
      duration: 60,
    })

    // Icon rotation tween (NOT inside marquee timeline)
    const iconTween = gsap.to(".icon", {
      rotate: 90,
      duration: 0.4,
      paused: true,     // we will control it manually
      ease: "power2.out",
    })

    ScrollTrigger.create({
      onUpdate: (self) => {
        // change marquee direction
        marqueeTl.timeScale(self.direction === -1 ? -1 : 1)

        // rotate icons based on scroll direction
        if (self.direction === -1) {
          iconTween.reverse()     // scrolling UP → reverse rotation
        } else {
          iconTween.play()        // scrolling DOWN → rotate forward
        }
      },
    })
  }, [])

  return (
    <div className='py-8 overflow-hidden my-8'>
      <div
        ref={marqueeRef}
        className='flex uppercase flex-row items-center gap-16 text-nowrap w-max'
      >
        {[...Array(15)].map((_, i) => (
          <React.Fragment key={i}>
            <h1 className='text-lg font-bruno tracking-widest'>{title}</h1>
            <img className='icon size-6' src='/arrow-up-right-01-sharp.svg' />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Marquee
