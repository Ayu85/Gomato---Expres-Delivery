import React, { useEffect, useState } from 'react'
import courier from "../assets/courier-person.png"
import { MdNavigateNext } from 'react-icons/md';
import logo from '../assets/darklogo.png'
import { RxCross1 } from "react-icons/rx";

const Hero = () => {
    const [showbike, setShowbike] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowbike(true)
        }, 700)
    }, [])
    return (
        <div className='bg-blackish flex flex-wrap pt-20 sm:pt-20 md:pt-28 lg:pt-10 items-center justify-center gap-28 py-5 overflow-x-hidden '>
            <div className='w-96 flex items-center flex-col gap-3 sm:items-center lg:items-start md:items-center'>
                {/* left box */}
                <h1 className='lg:text-7xl md:text-7xl text-4xl font-bold text-white'>Express </h1>
                <h1 className='lg:text-7xl md:text-7xl text-4xl  font-bold text-yellowish w-max'>Home Delivery</h1>
                <p className='text-white md:text-center sm:text-center lg:text-start'>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                <button className='px-5 sm:mt-10 lg:mt-2 mt-10 py-5 w-60 text-lg font-semibold text-blackish bg-yellowish rounded-full'>Read More</button>
            </div>
            <div className='lg:-mt-10 md:-mt-28 -mt-28 '>
                {/* right box */}
                <img src={courier} alt='logo' className={`md:w-[800px] mt-20 translate-x-[1000px] ${showbike && "translate-x-1 transition-all duration-1000"}`} />
            </div>
            <div className='bg-white absolute top-0 w-full h-screen'>
                {/* menus box */}
                <div className='flex justify-between px-10 items-center py-7'>
                    <img src={logo} alt='logo' />
                    <RxCross1 className='text-4xl font-bold'/>
                </div>
                <ul className='flex list-none text-blackish text-xl gap-4 '>
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Home<MdNavigateNext />
                    </li>
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>About us<MdNavigateNext />
                    </li>
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Catalog<MdNavigateNext />
                    </li>
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Blog<MdNavigateNext />
                    </li>
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Contacts<MdNavigateNext />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Hero
