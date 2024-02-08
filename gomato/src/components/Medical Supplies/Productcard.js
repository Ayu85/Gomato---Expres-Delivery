import React from 'react'

const Productcard = ({logo,product_name,price}) => {
    return (
        <div className='w-96 flex flex-col items-center justify-center gap-2'>
            <div><img src={logo} alt='logo' /></div>
            <div className='text-blackish text-xl font-semibold'>{product_name}</div>
            <div className='text-lg font-semibold text-gray'>💲{price}</div>
            <button className='bg_slider px-5 py-2 rounded-full'>Add To Cart</button>
        </div>
    )
}

export default Productcard
