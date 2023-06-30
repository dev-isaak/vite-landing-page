import React from 'react'
import vector from '../assets/what-we-do.png'
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Button from './Button';
import TituloSeccion from './TituloSeccion';
import SubtituloAzul from './SubtituloAzul';


const Initialwhatwedo = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center md:py-b-8  bg-primary-color lg:flex-row-reverse lg:py-8'>
            <div className='w-[90%] h-[60%] flex items-end lg:justify-end lg:max-w-[40%]'>
                <div className='flex flex-col gap-4 p-4 items-center text-center pb-16 lg:max-w-[100%] lg:text-left'>
                    <SubtituloAzul title='WE MAKE YOUR LIFE EASIER' />
                    <TituloSeccion title='Actionable Data, More Conversions and Better Marketing Performance' />
                    <p className='w-[90%] text-2xl lg:w-[100%]'>We provide full conversion rate optimization and traffic management services to help you not only increase conversion rates but increase revenue per visitor...</p>
                    <Button text='Get My Free Proposal' url='/proposal'/>
                </div>
            </div>
            <div className='w-[100%] h-max flex items-center justify-center lg:justify-start lg:max-w-max'>
                <img src={ vector } alt="3D vector" className='w-30'/>
            </div>
        </div>
         <div className='w-[100%] h-28 my-[-50px] bg-primary-color rounded-b-[100%] flex flex-col items-center gap-8 pb-8'>
            <IoIosArrowDropdownCircle size={40} color='white' className='mt-10'/>
        </div>
    </div>
  )
}

export default Initialwhatwedo