'use client'
import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const WhyChooseUs = () => {

    useGSAP(() => {
    const cards = gsap.utils.toArray(".why-card");

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".why-cards",
    //     start: "top 25%",
    //     end: `+=${cards.length * 100}%`,
    //     scrub: 1,
    //     pin: true,
    //     toggleActions: 'play none none reverse'
    //   },
    // });

    cards.forEach((card, index) => {
        
        gsap.to(card, {
            scale: 0.8,
            scrollTrigger: {
                trigger: card,
                start: "top center",
                markers : false,
                scrub: 1,
                
            }
        })
       
    })

  }, []);

  return (
    <section className='w-full mt-16 lg:mt-32 px-6 sm:px-10 lg:px-16 why-cards min-w-fit h-fit md:min-h-screen relative'>
        <div className=' flex flex-col items-center gap-8'>
            <div>
                <h1 className="mt-8 text-2xl font-medium uppercase sm:text-3xl text-left font-bruno leading-snug">
                    Why Choose Us ?
                </h1>

                <p className="mt-4 text-sm sm:text-base text-description max-w-sm">
                    Choosing Sultan Global Health Care means choosing clarity, comfort, and trusted care. 
                    We connect you with expert doctors, accredited hospitals, and reliable support at every 
                    step.
                </p>

                

            </div>
            
            <div className='relative w-full flex flex-col items-center gap-8'>
            
                <div className='w-full max-w-sm why-card sticky top-[25vh]'>
                    <div className='px-8 py-8 space-y-4 rounded-2xl bg-[#F6F7FD]'>
                        <h2 className='text-lg font-medium'>Network of Healthcare providers</h2>
                        <p>The SGHC is a seasoned medical tourism facilitator agency with strong
                        connections with reputed and credible facilities across the country.</p>
                        {/* <p className='justify-self-end mt-16 text-5xl font-medium text-primary'>01</p> */}
                    </div>
                </div>

                <div className='w-full max-w-sm why-card sticky top-[25vh]'>
                    <div className='px-8 py-8 space-y-4 rounded-2xl bg-[#F6F7FD]'>
                        <h2 className='text-lg font-medium'>Affordable healthcare services</h2>
                        <p>We sincerely try to suit the most reasonable cost
                        estimates so that you can budget accordingly and try consistently to match your pocket.</p>
                        {/* <p className='justify-self-end mt-16 text-5xl font-medium text-primary'>02</p> */}
                    </div>
                </div>

                <div className='w-full max-w-sm why-card sticky top-[25vh]'>
                    <div className='px-8 py-8 space-y-4 rounded-2xl bg-[#F6F7FD]'>
                        <h2 className='text-lg font-medium'>Decent Accommodation</h2>
                        <p>We ensure your stay to be the best according to your pocket, close to the hospital, affordable and good places to eat.</p>
                        {/* <p className='justify-self-end mt-16 text-5xl font-medium text-primary'>03</p> */}
                    </div>
                </div>

            </div>   

        </div>
    </section>
  )
}

export default WhyChooseUs