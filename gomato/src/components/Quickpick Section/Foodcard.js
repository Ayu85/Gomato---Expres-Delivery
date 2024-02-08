import React from 'react'

const Foodcard = ({ name, price, about, img }) => {
    return (
        <div initial={{ translateY: 200 }} whileInView={{ translateY: 0 }} transition={{ duration: 0.5 }} className='flex flex-col items-center justify-center gap-3 w-80 px-3 text-center cursor-pointer bg-white'>
            <div className='w-80'>
                <img src={img} alt='logo' className='hover:scale-110 transition-all'/>
            </div>
            <h1 className='text-lg font-semibold text-blackish'>{name}</h1>
            <h1 className='text-gray line-clamp-2 w-60'>{about}</h1>
            <h1 className='text-lg font-bold text-blackish'>💲{price}</h1>
            <button className='bg-yellowish px-8 bg_slider py-3 text-blackish rounded-full text-sm font-semibold'>Add To Cart</button>
        </div>
    )
}

export default Foodcard
