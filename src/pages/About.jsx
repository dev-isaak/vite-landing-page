import React from 'react'
import Footer from '../components/Footer'
import Initialabout from '../components/Initialabout'
import Navbar from '../components/Navbar'
import Aboutsection from '../components/Aboutsection'

const About = () => {
  return (
    <div>
        <Navbar />
        <Initialabout />
        <Aboutsection />
        <Footer />
    </div>
  )
}

export default About