import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Initialwhatwedo from '../components/Initialwhatwedo'

const Whatwedo = () => {
  return (
    <div>
        <Navbar />
        <Initialwhatwedo />
        <Carousel />
        <Footer />
    </div>
  )
}

export default Whatwedo