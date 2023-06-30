import React from 'react'
import{ RiDoubleQuotesR } from 'react-icons/ri'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom'

const TheyAreTalking = (props) => {
  return (
    <div className='flex justify-center'>
        <div className='w-[95%] h-fit relative flex flex-col-reverse px-8 pt-20 my-28 pb-20 bg-[#f0f6f9] rounded-xl lg:w-[80%] lg:flex-row xl:pb-0 xl:pt-10 lg:gap-8 '>
            <RiDoubleQuotesR className='absolute w-28 h-28  top-[-70px] right-0 text-gray-200'/>
            <div className='flex justify-center items-center xl:translate-y-[-8rem] '>
                <Fade left>
                <img src={props.imgPerson} alt="" className='lg:drop-shadow-[20px_0_15px_rgba(0,0,0,0.3)]' />
                </Fade>
            </div>
            <div className='flex flex-col gap-4 lg:w-[80%] h-max'>
                <h5 className='italic text-xl font-bold'>“{props.title}”</h5>
                <p>“{props.text}”</p>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-8'>
                    <h6 className='font-bold'>{props.personName} – 
                    <a href='' className='text-blue-400'>{props.companyName}</a>
                    </h6>
                    <Zoom>
                        <img src={props.imgClient} alt="" className='w-52 my-4'/>
                    </Zoom>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TheyAreTalking