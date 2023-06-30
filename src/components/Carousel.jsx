import React from 'react'
import aventon from '../assets/carousel/aventon.png'
import burga from '../assets/carousel/burga.png'
import catholic from '../assets/carousel/catholic.png'
import client1 from '../assets/carousel/client1.png'
import client3 from '../assets/carousel/client3.png'
import client4 from '../assets/carousel/client4.png'
import client5 from '../assets/carousel/client5.png'
import client6 from '../assets/carousel/client6.png'
import fittrack from '../assets/carousel/aventon.png'
import harper from '../assets/carousel/harper_collins.png'
import hdsuply from '../assets/carousel/HDsupply.png'
import nbcgolf from '../assets/carousel/nbc_golf.png'
import snow from '../assets/carousel/snow.png'




const Carouselimages = () => {
  return (
    <div className='my-20'>
        <div className='w-full flex flex-col items-center gap-8 pb-8 '>
            <h2 className='text-2xl font-bold'>WE LOVE OUR CLIENTS</h2>
        </div>
        <div className='grid grid-cols-6 gap-4 p-4 lg:flex lg:items-center'>
            <div className='flex items-center'>
                <img src={aventon} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={burga} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={catholic} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={client1} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={client3} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={client4} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={client5} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={client6} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={fittrack} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={harper} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={hdsuply} alt="" className='w-[10rem]'/>
            </div>
            <div className='flex items-center'>
                <img src={nbcgolf} alt="" className='w-[10rem]'/>
            </div>
        </div>
    </div>
  )
}
export default Carouselimages
