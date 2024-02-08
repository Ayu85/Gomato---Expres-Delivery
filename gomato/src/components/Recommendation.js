import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

import rest1 from "../assets/recommendation/rest_01.jpg"
import rest2 from "../assets/recommendation/rest_02.jpg"
import rest3 from "../assets/recommendation/rest_03.jpg"
import rest4 from "../assets/recommendation/rest_04.jpg"
import rest5 from "../assets/recommendation/rest_05.jpg"

const Recommendation = () => {
    return (

        <div className='flex flex-col items-center justify-center mt-10 gap-5'>
            <h1 className='text-yellowish font-semibold'>Our Recommendations</h1>
            <h1 className='text-blackish font-semibold text-4xl -mt-4'>Cafes and Restautants</h1>
            {/* main container box with 6 restaurants */}
            <div className='flex items-center justify-center gap-10 flex-wrap'>
                <div className='w-96 h-[30rem] rounded-2xl bg-blackish overflow-hidden relative'>
                    {/* 1 restaurant */}
                    <div ><img src={rest1} alt='logo' className='hover:scale-110 transition-all  cursor-pointer' /></div>
                    <div className='absolute bottom-0 bg-ghee w-full flex flex-col gap-3 pl-6 py-3'>
                        <h1 className='text-xl font-semibold'>Burger King</h1>
                        <h1 className='flex items-center gap-2 '><FaCalendarAlt className='text-yellowish text-lg' />Monday - Saturday</h1>
                        <h1 className='flex items-center gap-2 '><IoIosTime FaCalendarAlt className='text-yellowish text-xl' />9:00 AM - 11:00 PM </h1>
                    </div>
                </div>
                <div className='w-96 h-[30rem] rounded-2xl bg-blackish overflow-hidden relative'>
                    {/* 1 restaurant */}
                    <div ><img src={rest2} alt='logo' className='hover:scale-110 transition-all  cursor-pointer' /></div>
                    <div className='absolute bottom-0 bg-ghee w-full flex flex-col gap-3 pl-6 py-3'>
                        <h1 className='text-xl font-semibold'>Restaurant Monaco</h1>
                        <h1 className='flex items-center gap-2 '><FaCalendarAlt className='text-yellowish text-lg' />Monday - Saturday</h1>
                        <h1 className='flex items-center gap-2 '><IoIosTime FaCalendarAlt className='text-yellowish text-xl' />9:00 AM - 11:00 PM </h1>
                    </div>
                </div>
                <div className='w-96 h-[30rem] rounded-2xl bg-blackish overflow-hidden relative'>
                    {/* 1 restaurant */}
                    <div ><img src={rest3} alt='logo' className='hover:scale-110 transition-all  cursor-pointer' /></div>
                    <div className='absolute bottom-0 bg-ghee w-full flex flex-col gap-3 pl-6 py-3'>
                        <h1 className='text-xl font-semibold'>Ribs and Beer</h1>
                        <h1 className='flex items-center gap-2 '><FaCalendarAlt className='text-yellowish text-lg' />Monday - Saturday</h1>
                        <h1 className='flex items-center gap-2 '><IoIosTime FaCalendarAlt className='text-yellowish text-xl' />9:00 AM - 11:00 PM </h1>
                    </div>
                </div>
                <div className='w-96 h-[30rem] rounded-2xl bg-blackish overflow-hidden relative'>
                    {/* 1 restaurant */}
                    <div ><img src={rest4} alt='logo' className='hover:scale-110 transition-all  cursor-pointer' /></div>
                    <div className='absolute bottom-0 bg-ghee w-full flex flex-col gap-3 pl-6 py-3'>
                        <h1 className='text-xl font-semibold'>Taste King</h1>
                        <h1 className='flex items-center gap-2 '><FaCalendarAlt className='text-yellowish text-lg' />Monday - Saturday</h1>
                        <h1 className='flex items-center gap-2 '><IoIosTime FaCalendarAlt className='text-yellowish text-xl' />9:00 AM - 11:00 PM </h1>
                    </div>
                </div>
                <div className='w-96 h-[30rem] rounded-2xl bg-blackish overflow-hidden relative'>
                    {/* 1 restaurant */}
                    <div ><img src={rest5} alt='logo' className='hover:scale-110 transition-all  cursor-pointer' /></div>
                    <div className='absolute bottom-0 bg-ghee w-full flex flex-col gap-3 pl-6 py-3'>
                        <h1 className='text-xl font-semibold'>Happy Grill Cafe</h1>
                        <h1 className='flex items-center gap-2 '><FaCalendarAlt className='text-yellowish text-lg' />Monday - Saturday</h1>
                        <h1 className='flex items-center gap-2 '><IoIosTime FaCalendarAlt className='text-yellowish text-xl' />9:00 AM - 11:00 PM </h1>
                    </div>
                </div>
                <div className='w-96 h-[30rem] rounded-2xl bg-blackish overflow-hidden relative'>
                    {/* 1 restaurant */}
                    <div ><img src={rest1} alt='logo' className='hover:scale-110 transition-all  cursor-pointer' /></div>
                    <div className='absolute bottom-0 bg-ghee w-full flex flex-col gap-3 pl-6 py-3'>
                        <h1 className='text-xl font-semibold'>Subway</h1>
                        <h1 className='flex items-center gap-2 '><FaCalendarAlt className='text-yellowish text-lg' />Monday - Saturday</h1>
                        <h1 className='flex items-center gap-2 '><IoIosTime FaCalendarAlt className='text-yellowish text-xl' />9:00 AM - 11:00 PM </h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Recommendation
