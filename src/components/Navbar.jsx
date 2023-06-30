import React from 'react'
import Logo from '../assets/CF-F92.png'
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
const [ nav, setNav ] = useState(false);

const handleNav = () => {
    setNav(!nav);
  }


  return (
    <div className='w-full h-20 flex justify-center items-center bg-[#f1f6f9] bg-opacity-90 sticky top-0 z-50'>       
        <div className='max-sm:w-full max-md:w-full w-[60%] my-2 md:my-0 flex justify-between items-center bg-opacity-90 px-4 '>
            <Link to='/'><img src={Logo} alt="/" className='w-40' /></Link>
            <HiMenu onClick={ handleNav } className='min-[1024px]:hidden mx-4' size={30}/>
            <ul className='max-[1024px]:hidden flex gap-6'>
                <li className='group relative h-full flex items-center hover:text-secondary-color cursor-pointer transition-all duration-300'>
                    <NavLink to='/what-we-do'>What We Do</NavLink>
                    <div className='linea absolute w-[30px] h-0.5 bg-secondary-color top-8 hidden group-hover:block '></div>
                </li>
                <li className='group relative h-full flex items-center hover:text-secondary-color cursor-pointer transition-all duration-300'>
                    <NavLink to='/about'>About Us</NavLink>
                    <div className='absolute w-[30px] h-0.5 bg-secondary-color top-8 hidden group-hover:block '></div>
                </li>
                <li className='group relative h-full flex items-center hover:text-secondary-color cursor-pointer transition-all duration-300'>
                    <NavLink to='/cases'>Case Studies</NavLink>
                    <div className='absolute w-[30px] h-0.5 bg-secondary-color top-8 hidden group-hover:block '></div>
                </li>
                <li className='group relative h-full flex items-center hover:text-secondary-color cursor-pointer transition-all duration-300'>
                    <NavLink to='/blog'>Blog</NavLink>
                    <div className='absolute w-[30px] h-0.5 bg-secondary-color top-8 hidden group-hover:block '></div>
                </li>
            </ul>
        </div>
        <div className='max-[700px]:hidden w-[20%] min-w-fit h-fit my-8 flex justify-center items-center '>
            <ul className=' h-full flex  gap-6'>
                <li className='h-full'>
                    <Button text='FREE PROPOSAL' url='/proposal'/>
                </li>
            </ul>
        </div>
        <div className={ nav ? 'min-[1024px]:hidden w-[60%] h-full fixed right-0 top-0 bg-white shadow-lg p-4 ease-linear duration-300' : 'fixed right-[-100%]'}>
            <AiOutlineClose onClick={ handleNav } className='m-4 absolute right-0' size={20}/>
            <ul className='my-16 '>
                <li className='p-4 border-b-2 border-t-2'>
                    <Link to='/what-we-do'>What We Do</Link>
                </li>
                <li className='p-4 border-b-2'>
                <Link to='/about'> About Us</Link>
                </li>
                <li className='p-4 border-b-2'>
                <Link to='/cases'> Case Studies</Link>
                </li>
                <li className='p-4 border-b-2'>
                <Link to='/blog'> Blog</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar