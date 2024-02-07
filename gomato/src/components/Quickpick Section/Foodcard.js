import React from 'react'

const Foodcard = ({ name, price, about, img }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 w-80 px-3 text-center bg-white'>
            <div className='w-80'>
                <img src={img} alt='logo' />
            </div>
            <h1 className='text-lg font-semibold text-blackish'>{name}</h1>
            <h1 className='text-gray line-clamp-2 w-60'>{about}</h1>
            <h1 className='text-lg font-bold text-blackish'>💲{price}</h1>
        </div>
    )
}

export default Foodcard
