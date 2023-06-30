import React from 'react'
import imagen from '../assets/bg-1.png'
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Button from './Button';
import TituloSeccion from './TituloSeccion';
import SubtituloAzul from './SubtituloAzul';

const Initialabout = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center h-80 bg-primary-color text-center gap-4'>
            <SubtituloAzul title='WE MAKE YOU MORE MONEY WITH CRO + PPC' />
            <TituloSeccion title='We Eat, Sleep, And Breathe Conversion Optimization' />
            <Button text='Get My Free Proposal' url='/proposal'/>
        </div>
         <div className='w-[100%] h-28 my-[-50px] bg-primary-color mb-12 rounded-b-[100%] flex flex-col items-center gap-8 pb-8'>
            <IoIosArrowDropdownCircle size={40} color='white' className='mt-10'/>
        </div>
    </div>
  )
}

export default Initialabout