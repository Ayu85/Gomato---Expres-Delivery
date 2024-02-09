import React from 'react'
import footerbg from '../assets/footer-banner.jpg'
const Footer = () => {
    return (
        <div className='bg-blackish flex justify-center items-center'>
            <div className='flex py-10'>
                <div><img src={footerbg} alt='logo' className='rounded-l-xl' /></div>
                <div className='bg-yellowish w-[550px] rounded-r-xl'></div>
            </div>

        </div>
    )
}

export default Footer
