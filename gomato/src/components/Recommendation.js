import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

import rest1 from "../assets/recommendation/rest_01.jpg"
const Recommendation = () => {
    return (
        <div className='h-[100vh] px-5  '>
            {/* main div */}
            <div className='w-1/2 cursor-pointer box-border  overflow-hidden rounded-2xl relative'>
                {/* left div */}
                <img src={rest1} alt='logo' className='h-[90%] hover:scale-[1.1] transition-all ' />
                <div className='absolute flex flex-col gap-4 bottom-0 w-full bg-ghee rounded-b-2xl pl-7 py-5'>
                    <div className='text-5xl text-blackish font-bold'>Burger House</div>
                    <h1 className='flex items-center gap-3  text-gray'><FaCalendarAlt className='text-yellowish' />
                        Monday - Saturday</h1>
                    <h1 className='flex items-center gap-3  text-gray'><IoIosTime className='text-yellowish text-xl' />
                        09:00 - 18:00 </h1></div>
            <div className='absolute bottom-3 right-5  bg-yellowish px-1 py-1 rounded-full '><FaLongArrowAltRight className='text-3xl w-full hover:translate-x-5 transition-all' />
            </div>
            </div>
            <div className='w-1/2'>
                {/* right div */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Recommendation
