import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <>  
        <Header/>
        <HeroSection image="src/assets/HouseAerial.jpg" video="src/assets/Home.mp4" title="Buy/Sell at BidEstate" description="Exclusive property listings from the nation's leading online real estate marketplace." />
        <Footer/>
    </>

  )
}

export default Home