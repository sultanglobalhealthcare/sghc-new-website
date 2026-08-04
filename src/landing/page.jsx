import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import AboutUs from './AboutUs'
import MissionVission from './MissionVission'
import WhyChooseUs from './WhyChooseUs'
import OurNetwork from './OurNetwork'
import Treatments from './Treatments'
import HowItWorks from './HowItWorks'
import Services from './Services'
import OurFocus from './OurFocus'
import EnquiryCta from './EnquiryCta'

const LandingPage = () => {
  return (
    <>
      {/* Hero — full-width gradient section */}
      <Hero />

      {/* Stats bar — 4 key numbers */}
      <Stats />

      {/* About Sultan GHC */}
      <AboutUs />

      {/* Treatments grid */}
      <Treatments />

      {/* Mission & Vision — dark two-col */}
      <MissionVission />

      {/* Why Choose Us — 6-card grid */}
      <WhyChooseUs />

      {/* Hospital network — India & Turkey */}
      <OurNetwork />

      {/* How It Works — step grid on dark */}
      <HowItWorks />

      {/* Services */}
      <Services />

      {/* Our Focus */}
      <OurFocus />

      {/* Final CTA */}
      <EnquiryCta />
    </>
  )
}

export default LandingPage
