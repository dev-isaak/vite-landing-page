import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Initial from '../components/Initial'
import Advantages from '../components/Advantages'
import TheyAreTalking from '../components/TheyAreTalking'
import person from '../assets/5.png'
import client5 from '../assets/carousel/client5.png'
import Carouselfinal from '../components/Carouselfinal'

const Mainpage = () => {
  return (
    <div>
    <Navbar />
    <Initial />
    <Carouselfinal />
    <Advantages />
    <TheyAreTalking
      title='Conversion Fanatics has significantly improved our conversion rates year over year'
      text='The Conversion Fanatics team is very talented in developing effective testing strategies to help improve conversion rates significantly over time. In addition to delivering results that have exceeded expectations, they’re also proactive and great at managing projects overall.'
      personName='Daniel Weisman, VP of Marketing'
      companyName='Ministry of Supply'
      imgPerson={person}
      imgClient={client5}
    />
    <Footer />
    </div>
  )
}

export default Mainpage