import React from 'react'

import rest1 from "../assets/recommendation/rest_01.jpg"
const Recommendation = () => {
    return (
        <div className='h-[100vh] px-5  '>
            {/* main div */}
            <div className='w-1/2 cursor-pointer box-border bg-ghee overflow-hidden rounded-2xl'>
                {/* left div */}
                <img src={rest1} alt='logo' className='h-[90%] hover:scale-110 transition-all z-10' />
                <div className='z-20'>Burger House</div>
                <h1>Date</h1>
                <h1>Time</h1>
            </div>
            <div className='w-1/2'>
                {/* right div */}
            </div>
        </div>
    )
}

export default Recommendation
