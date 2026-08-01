import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Stats from './Stats'
import AboutUs from './AboutUs'
import Services from './Services'
import OurFocus from './OurFocus'
import EnquiryCta from './EnquiryCta'
import Footer from './Footer'
import MissionVission from './MissionVission'
import WhyChooseUs from './WhyChooseUs'
import OurNetwork from './OurNetwork'
import Marquee from '@/components/Marquee'
import Treatments from './Treatments'
import HowItWorks from './HowItWorks'

const LandingPage = () => {
  return (
    <>
        
        <section>
            <Hero/>
        </section>

        {/* <section>
            <Stats/>
        </section> */}

        <Marquee title={'Sultan Global Health Care'}/>

        <section id='about'>
            <AboutUs/>
        </section>
        <section>
            <MissionVission/>
        </section>
        <section>
            <WhyChooseUs/>
        </section>
        <section>
            <OurNetwork/>
        </section>

        <section id='services'>
            <Services/>
        </section>
        
        <section>
            <Treatments/>
        </section>

        <section>
            <HowItWorks/>
        </section>

        <section>
            <OurFocus/>
        </section>

        <section>
            <EnquiryCta/>
        </section>

        
        
        
    </>
  )
}

export default LandingPage