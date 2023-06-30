import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-[100%] bg-[#353434] h-fit p-4 text-white flex flex-col '>
        <div className='flex justify-center flex-col md:flex-row gap-4 md:justify-around'>
            <div className=''>
                <h5 className='mb-4 font-bold'>AGENCY</h5>
                <ul className='flex flex-col gap-2'>
                    <li className='flex flex-row gap-2 items-center text-sm'>
                        <MdOutlineKeyboardArrowRight />
                        <Link to='/what-we-do'>
                            What We Do
                        </Link>
                    </li>
                    <li className='flex flex-row gap-2 items-center text-sm'>
                        <MdOutlineKeyboardArrowRight />
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className='flex flex-row gap-2 items-center text-sm'>
                        <MdOutlineKeyboardArrowRight />
                        <Link to='/cases'>Case Studies</Link>
                    </li>
                    <li className='flex flex-row gap-2 items-center text-sm'>
                        <MdOutlineKeyboardArrowRight />
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h5 className='mb-4 font-bold'>CONTACT US</h5>
                <ul className='flex flex-col gap-2'>
                    <li className='flex flex-col gap-2 text-sm'>
                        <p className='flex flex-row gap-2 items-center text-sm'> <FiMapPin /> Office Address <br />
                        11673 Jollyville Rd. Ste 102<br />
                        Austin TX 78759</p>
                    </li>
                    <li className='flex flex-row gap-2 items-center text-sm'>
                        <p className='flex flex-row gap-2 items-center text-sm'><BsTelephoneFill /> Phone: 844.94.CONVERT</p>
                    </li>
                    <li className='flex flex-row gap-2 items-center text-sm'>
                        <p className='flex flex-row gap-2 items-center text-sm'><FiMail /> hi@conversionfanatics.com</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex flex-row mt-8 pt-4 justify-center gap-4 border-t border-[#4d4d4d] text-sm text-secondary-color md:w-[60%] md:self-center'>
            <a href=''>Terms</a>
            <p>|</p>
            <a href=''>Cookies</a>
        </div>
    </div>
  )
}

export default Footer