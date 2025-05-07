import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import VisionMission from '../components/VisionMIssion';
import EmployeeCarousel from '../components/EmployeeCarousel';

function About() {
  return (
    <>
      <Header />
      <HeroSection video="assets/About.mp4" subtitle="FOR OVER DECADE" description="THE NATION'S LARGEST ONLINE AUCTION MARKETPLACE" />
      <VisionMission />
      <EmployeeCarousel />
      <Footer />
    </>
  );
}

export default About;