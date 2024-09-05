import React from 'react'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'
import HomeProjects from '../components/HomeProjects'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <section>
        <Hero/>
        <Technologies/>
        <HomeProjects/>
        <Footer/>
    </section>
  )
}

export default Homepage