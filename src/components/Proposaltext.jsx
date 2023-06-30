import React from 'react'
import imagelogo from '../assets/CF-F92.png'
import { Link } from 'react-router-dom'
import Minicard from './Minicard'
import image1 from '../assets/whatwedo1.png'
import image2 from '../assets/whatwedo2.png'
import image3 from '../assets/whatwedo3.png'
import included from '../assets/included-proposal.png'

const Proposaltext = () => {
  return (
    <div className='lg:px-8 flex flex-col'>
        <div className='m-8'>
            <Link to='/'>
                <img src={imagelogo} alt="" className='w-40'/>
            </Link>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center my-8 gap-8 lg:flex-row lg:items-start lg:w-[80%] self-center'>
            <div className='w-[90%] flex flex-col items-center gap-4 lg:w-[70%] lg:mt-14'>
                <h2 className='w-[60%] font-bold text-4xl text-center'>You’re 30 Seconds Away From Your Custom Proposal!</h2>
                <p className='text-center'>What Help Are You Looking For? (Choose One)</p>
                <div className='w-[100%] flex flex-col  md:flex-row gap-8 my-8 '>
                    <Link to='/'>
                        <Minicard image={image1} text='Conversion Rate Optimization (CRO)'/>
                    </Link>
                    <Link to='/'>
                        <Minicard image={image2} text='Traffic (Google, FB, Other)'/>
                    </Link>
                    <Link to='/'>
                        <Minicard image={image3} text='Traffic + CRO'/>
                    </Link>
                </div>
            </div>
            <div>
                <img src={included} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Proposaltext