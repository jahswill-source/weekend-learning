import React from 'react'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'
import Hero from '../components/Hero/Hero'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'
import Copyright from '../components/copyright/Copyright'

const landingPageScren = () => {
  return (
    <div>
       <Header />
        <Hero/>
       <About/>
       <Testimonials/>
           
      <CTA/>
<Footer/>
<Copyright/>
    </div>
  )
}

export default landingPageScren
