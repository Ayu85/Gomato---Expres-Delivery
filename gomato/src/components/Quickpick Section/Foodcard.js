import React from 'react'

const Foodcard = ({ name, price, about, img }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            <div>
                <img src={img} alt='logo' />
            </div>
            <h1>{name}</h1>
            <h1>{about}</h1>
            <h1>{price}</h1>
        </div>
    )
}

export default Foodcard
