import React from 'react'
import imagelogomd from '../assets/3-1.png'
import imagelogosm from '../assets/cf.png'
import image4 from '../assets/icon-4.png'
import image3 from '../assets/icon-3.png'
import image2 from '../assets/icon-2.png'
import image1 from '../assets/icon-1.png'
import { BsFillCheckSquareFill } from 'react-icons/bs'


const Advantages = () => {
  return (
    <div className='text-white'>
        <div className='bg-[#11a8de] w-full h-20 mt-8 rounded-t-[100%]'>

        </div>
        <div className='bg-[#11a8de] w-full h-fit flex justify-center'>
            <div className='w-[95%] text-center px-8'>
                <p className='text-2xl lg:text-4xl'>Your Data Is Unique To Your Business,</p>
                <p className='font-bold text-4xl lg:text-5xl lg:mt-2'>Your Experiment Plan Should Be Too.</p>
                <p className='text-md lg:text-2xl mt-2 lg:mt-4'>STAY MILES AHEAD OF THE COMPETITION WITH A CUSTOMIZED OPTIMIZATION PLAN</p>
            </div>
        </div>
        {/* ---------------sm---------------- */}
        <div className='bg-[#11a8de] w-full h-fit md:hidden'>
            <div className='p-8 flex flex-col gap-4'>
                <div className='flex justify-center'>
                    <img src={image4} alt="" className='w-30 drop-shadow-2xl' />
                </div>
                <div className='flex justify-center'>
                    <h4 className='font-bold text-xl'>Use Your Data Like Never Before</h4>
                </div>
                <div className='flex justify-center'>
                    <p className='text-center text-xl'>We analyze both qualitative and quantitative data to get an understanding of what areas need the most attention. Then put together an action plan.</p>
                </div>
                <div className='flex justify-center'>
                    <BsFillCheckSquareFill size={30}/>
                </div>
            </div>
            <div className='p-8 flex flex-col gap-4'>
                <div className='flex justify-center'>
                    <img src={image3} alt="" className='w-30 drop-shadow-2xl'/>
                </div>
                <div className='flex justify-center'>
                    <h4 className='font-bold text-xl'>Make Your Site Easier To Use</h4>
                </div>
                <div className='flex justify-center'>
                    <p className='text-center text-xl'>Our creative team then flushes out the designs of the changes we want to test, often with multiple variations. Don’t worry, we’re good about designing to fit your brand.</p>
                </div>
                <div className='flex justify-center'>
                <BsFillCheckSquareFill size={30}/>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src={imagelogosm} alt="" className=' w-[70%]' />
            </div>
            <div className='p-8 flex flex-col gap-4'>
                <div className='flex justify-center'>
                    <img src={image2} alt="" className='w-30 drop-shadow-2xl'/>
                </div>
                <div className='flex justify-center'>
                    <h4 className='font-bold text-xl'>Pre-Launch Development Checklist</h4>
                </div>
                <div className='flex justify-center'>
                    <p className='text-center text-xl'>Our expert developers then code the test functionality and put it through a rigorous QA process to make sure it works on multiple browsers and devices. Boring but crucial.</p>
                </div>
                <div className='flex justify-center'>
                <BsFillCheckSquareFill size={30}/>
                </div>
            </div>
            <div className='p-8 flex flex-col gap-4'>
                <div className='flex justify-center'>
                    <img src={image1} alt="" className='w-30 drop-shadow-2xl'/>
                </div>
                <div className='flex justify-center'>
                    <h4 className='font-bold text-xl'>Launch, Get Results. Iterate. Repeat.</h4>
                </div>
                <div className='flex justify-center'>
                    <p className='text-center text-xl'>Here is where it gets fun. The results! We watch for trends in all the data, report key findings to you. Then based on the results we declare a winner or loser and look for ways to make it better.</p>
                </div>
                <div className='flex justify-center'>
                <BsFillCheckSquareFill size={30}/>
                </div>
            </div>
        </div>
        {/* ------------------------------- */}

        {/* ---------------md---------------- */}
        <div className='bg-[#11a8de] w-full h-fit max-md:hidden md:flex md:flex-row md:justify-center md:p-8 '>
            <div className='w-[20%] text-right flex flex-col gap-4'>
                <div>
                    <h4 className='font-bold text-xl'>Use Your Data Like Never Before</h4>
                </div>
                <div>
                    <p className='text-xl'>We analyze both qualitative and quantitative data to get an understanding of what areas need the most attention. Then put together an action plan.</p>
                </div>
                <div className='flex justify-end'>
                    <BsFillCheckSquareFill size={30}/>
                </div>
                <div>
                    <h4 className='font-bold text-xl'>Make Your Site Easier To Use</h4>
                </div>
                <div>
                    <p className='text-xl'>Our creative team then flushes out the designs of the changes we want to test, often with multiple variations. Don’t worry, we’re good about designing to fit your brand.</p>
                </div>
                <div className='flex justify-end'>
                    <BsFillCheckSquareFill size={30}/>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={imagelogomd} alt="" className=' lg:w-[100%] lg:h-[80%]' />
            </div>
            <div className='w-[20%] text-left flex flex-col gap-4'>
                <div>
                    <h4 className='font-bold text-xl'>Pre-Launch Development Checklist</h4>
                </div>
                <div>
                    <p className='text-xl'>Our expert developers then code the test functionality and put it through a rigorous QA process to make sure it works on multiple browsers and devices. Boring but crucial.</p>
                </div>
                <div>
                    <BsFillCheckSquareFill size={30}/>
                </div>
                <div>
                <h4 className='font-bold text-xl'>Launch, Get Results. Iterate. Repeat.</h4>
                </div>
                <div>
                <p className='text-xl'>Here is where it gets fun. The results! We watch for trends in all the data, report key findings to you. Then based on the results we declare a winner or loser and look for ways to make it better.</p>
                </div>
                <div>
                    <BsFillCheckSquareFill size={30}/>
                </div>
            </div>
        </div>
        {/* ------------------------------- */}

        <div className='bg-[#11a8de] w-full h-20  rounded-b-[100%]'>

        </div>
    </div>

)
}

export default Advantages