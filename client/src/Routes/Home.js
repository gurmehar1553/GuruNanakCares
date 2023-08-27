import React from 'react'
import HeroSection from '../Components/HeroSection'
import Team from '../Components/Team'
import Testimonial from '../Components/Testimonial'
import WhyUs from '../Components/WhyUs'
import '../App.css'
import ImageSlider from '../Components/ImageSlider'
import images from '../Components/carousel/carouselImages'
import Videos from '../Components/Videos'

export default function Home() {
  return (
    <>
      <ImageSlider images={images} />
      {/* <HeroSection /> */}
      <WhyUs />
      <Team />
      <Videos />
      {/* <Testimonial /> */}
    </>
  )
}
