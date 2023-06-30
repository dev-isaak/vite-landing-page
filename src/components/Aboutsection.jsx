import React from 'react'
import image from '../assets/about2.png'
import cert1 from '../assets/certification1.png'
import cert2 from '../assets/certification2.png'
import cert3 from '../assets/certification3.png'
import TheyAreTalking from './TheyAreTalking'
import imgPerson from '../assets/person1.png'
import imgClient from '../assets/carousel/byrider.png'

const Aboutsection = () => {
  return (
    <div className='flex flex-col place-items-center' >
      <div className='flex flex-col w-[100%] justify-center items-center gap-4 md:flex-row md:w-[80%]'>
        <div className='w-[90%] md:w-[50%]'>
          <h3 className='font-bold text-3xl mb-4'>Some Fun Factoids About Us:</h3>
          <p className='text-lg'>Mission: <span className='font-bold'>Every. Site. Optimized.</span> Motto: <span className='font-bold'>Kaizen </span> aka decentralized, relentless, continuous improvement. Conversion Fanatics has <span className='font-bold'> grown over 957% since 2015. We love our clients (but we’re picky).</span> We’d love to help everyone, but it’s no secret that conversion optimization requires a fair bit of traffic (at least 30,000 per month), conversions (at least 300 a month), and sales (at least $1,000,000) to optimize. Oh, and <span className='font-bold'> we have a strict “no assholes” policy </span>. How’s that for up front?!? We’re running over 100 A/B tests for clients at all times (101 as of this writing, to be precise). We also <span className='font-bold'> have 52 new tests in development </span>, 51 in creative and 77 in strategy. That’s a lot of data! We’re born and bred in Austin, TX since 2014 and <span className='font-bold'> we have 15+ team members and growing</span>. That’s a lot of tacos! We are one of only 6 Premium Partners at Convert.com. Optimizely and VWO have also given us their conversion rate optimization solutions partner seal of approval. Clutch named us a top agency in 2019. Became a Fusion92 brand in 2022.</p>
        </div>
        <div className='w-[90%] md:w-[50%] mb-8'>
          <div className=''>
            <img src={image} alt="" />
            <p className='text-lg'>We <span className='font-bold'>write for Forbes.com </span> and wrote a bestselling book on A/B testing. Conversion Fanatics works with <span className='font-bold'>e-commerce, pets, golf, apparel, home furnishings, health, beauty, fitness, SaaS, professional services, and financial industry clients </span>. We also do PPC via <span className='font-bold'> Google, Facebook, Instagram, Amazon, and Retargeting </span>to help you reach your customers everywhere they go across the web. CRO + PPC is the ultimate combo!</p>
          </div>
          <div className='flex flex-row w-[100%] place-content-center gap-4  p-8'>
            <img src={cert1} alt="" className='w-[30%] md:w-[25%]'/>
            <img src={cert2} alt="" className='w-[30%] md:w-[25%]'/>
            <img src={cert3} alt="" className='w-[30%] md:w-[25%]'/>
          </div>
        </div>
        <div>
        </div>
      </div>
      <TheyAreTalking
      title='The ROI speaks for itself.'
      text='I’ve worked with a handful of great companies over the past 15 years and Conversion Fanatics is definitely on that list. Companies often tout their expertise, their ability to produce results and the big brands they work with in order to get your business. The great thing about CF is their actual follow through and delivery on their promises….both in customer service and results. We tested a lot of things and found three significant improvements that more than paid for the cost of using CF. The ROI speaks for itself.'
      personName='Sheila Smiley'
      companyName='JD Byrider'
      imgPerson={imgPerson}
      imgClient={imgClient}
      />
    </div>
  )
}

export default Aboutsection