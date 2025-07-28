import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <AboutSection/>
        <ExperienceSection/>
        <Portfolio/>
        <Contact/>
    </>
  )
}

export default Home