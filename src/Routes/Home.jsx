import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Products from '../components/Products'
import TestimonialList from '../components/TestimonialList'

function Home() {
  return (
    <>  
        <Header/>
        <HeroSection video="assets/Home.mp4" title="Buy/Sell at BidEstate" subtitle="Invest With Us" description="BidEstate is a leading online real estate marketplace, connecting buyers and sellers with exclusive property listings." />
        <Products/>
        <TestimonialList/>
        <Footer/>
    </>

  )
}

export default Home