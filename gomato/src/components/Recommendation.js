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

        <div className='flex flex-col items-center justify-center mt-10'>
            <h1 className='text-yellowish font-semibold'>Our Recommendations</h1>
            <h1 className='text-blackish font-semibold text-4xl'>Cafes and Restautants</h1>
            {/* main container box with 6 restaurants */}
            <div>
                <div className='w-80 rounded-2xl bg-blackish overflow-hidden relative'>
                    {/* 1 restaurant */}
                    <div ><img src={rest1} alt='logo' className='hover:scale-110 transition-all  cursor-pointer' /></div>
                    <div className='absolute bottom-0 bg-ghee w-full'>
                        <h1>Burger King</h1>
                        <h1>Monday - Saturday</h1>
                        <h1>9:00 AM - 11:00 PM </h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Recommendation
