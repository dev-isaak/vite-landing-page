import React from 'react'
import aventon from '../assets/carousel/aventon.png'
import burga from '../assets/carousel/burga.png'
import catholic from '../assets/carousel/catholic.png'
import client1 from '../assets/carousel/client1.png'
import client3 from '../assets/carousel/client3.png'
import client4 from '../assets/carousel/client4.png'
import client5 from '../assets/carousel/client5.png'
import client6 from '../assets/carousel/client6.png'
import fittrack from '../assets/carousel/fittrack.png'
import harper from '../assets/carousel/harper_collins.png'
import hdsuply from '../assets/carousel/HDsupply.png'
import nbcgolf from '../assets/carousel/nbc_golf.png'
import snow from '../assets/carousel/snow.png'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { useState } from 'react'


const images = [
    aventon, burga, catholic, client1, client3, client4, client5, client6, fittrack, harper, hdsuply, nbcgolf, snow, catholic, snow
]


const Carouselfinal = () => {
    const [currentPosition, setCurrentPosition] = useState(0);
   
    const imageList = images.map((imagen, index)=>
        <img key={index} src={imagen} alt="" className='w-[10rem]'/>
        )
    
    const nextImage=()=>{
        let newPosition = currentPosition
        if(newPosition > 66){
            setCurrentPosition(0)
        }
        else{
            newPosition = currentPosition + 11
            setCurrentPosition(newPosition)
        }
    }

    const prevImage=()=>{
        let newPosition2 = currentPosition
        if(newPosition2 <= 0){   // en lugar de quedarse en la posición 0 volver a la última positicón
            setCurrentPosition(77)
        }
        else{
            newPosition2 = currentPosition - 11
            setCurrentPosition(newPosition2)
        }
    }

  return (
        <div className='mt-28'>
            <div className='w-full flex flex-col items-center'>
            <h2 className='text-2xl font-bold'>WE LOVE OUR CLIENTS</h2>
            </div>
            <div className='flex justify-center items-center' >
                <div className=''>
                    <IoIosArrowBack size={40} className='cursor-pointer' onClick={prevImage}/>
                </div>
                <div className='my-10 w-[calc((3)*4rem)] md:w-[calc((4.5+4)*4rem)]  lg:w-[calc((10+4)*4rem)] h-36 px-4 overflow-hidden'>
                    <div className={`carousel flex items-center gap-4 w-fit h-[100%] ease-in-out duration-300 translate-x-[-${currentPosition}rem]`}>
                        {imageList}
                    </div>   
                </div>
                <div>
                    <IoIosArrowForward size={40} className='cursor-pointer' onClick={nextImage}/>
                </div>
            </div>
        </div>
  )
}

export default Carouselfinal