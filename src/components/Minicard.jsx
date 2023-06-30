import React from 'react'
import { FaRegHandPointUp } from 'react-icons/fa'

const Minicard = (props) => {
  return (
    <div className='w-[100%]  lg:w-[200px] lg:h-[100px]'>
        <div className='relative overflow-hidden w-[100%] p-8 rounded-xl shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)] flex place-items-center gap-4 lg:justify-around lg:flex-row lg:h-[125px] group '>
            <img src={props.image} alt="" />
            <label className='w-[80%] lg:w-[80%] text-center text-sm'>{props.text}</label>
            <div className='group-hover:translate-y-[-10%] ease-in-out duration-500 absolute bg-blue w-[120%] h-[140%] bg-secondary-color opacity-80 top-0 left-[-1rem] flex justify-center items-center translate-y-[100%] '>
              <FaRegHandPointUp size={40} color='white'/>
            </div>
        </div>
    </div>
  )
}

export default Minicard