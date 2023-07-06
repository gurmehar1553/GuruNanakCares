import React from 'react'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Team from '../Components/Team'
import Testimonial from '../Components/Testimonial'
import WhyUs from '../Components/WhyUs'
import '../App.css'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUs />
      <Team />
      <Testimonial />
      <Footer />
    </>
  )
}
