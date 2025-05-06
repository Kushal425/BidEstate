import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

function About() {
  return (
    <>
        <Header/>
        <HeroSection video="src/assets/About.mp4" subtitle="FOR OVER DECADE" description="THE NATION'S LARGEST ONLINE AUCTION MARKETPLACE" />
        <Footer/>
    </>
  )
}

export default About