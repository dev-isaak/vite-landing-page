import React from 'react'
import Vector from '../assets/main-image.png'
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Button from './Button';
import TituloSeccion from './TituloSeccion';


const Initial = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center md:py-b-8  bg-primary-color lg:flex-row lg:py-8'>
            <div className='w-[90%] h-[60%] flex items-end lg:justify-end lg:max-w-[40%]'>
                <div className='flex flex-col gap-4 p-4 items-center text-center pb-16 lg:max-w-[100%] lg:text-left'>
                        <TituloSeccion title='Test Everything. Get Conversion Optimization Superpowers. Make More Money.' />
                        <p className='w-[90%] text-2xl lg:w-[100%]'>Put A Creative Team Of Fanatical Split-Testers To Work On Your Site</p>
                        <div className='lg:w-[100%] lg:text-left'>
                            <Button text='Get My Free Proposal' url='/proposal'/>
                        </div>
                </div>
            </div>
            <div className='w-[100%] h-max flex items-center justify-center lg:justify-start lg:max-w-max'>
                <img src={ Vector } alt="3D vector" className='w-30'/>
            </div>
        </div>
         <div className='w-[100%] h-28 my-[-50px] bg-primary-color rounded-b-[100%] flex flex-col items-center gap-8 pb-8'>
            <IoIosArrowDropdownCircle size={40} color='white' className='mt-10'/>
        </div>
    </div>
  )
}

export default Initial