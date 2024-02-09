import React from 'react'
import footerbg from '../assets/footer-banner.jpg'
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='bg-blackish flex justify-center items-center'>
            <div className='flex py-10 px-5 relative'>
                <div><img src={footerbg} alt='logo' className='rounded-l-xl' /></div>
                <div className='bg-yellowish w-[530px] rounded-r-xl'></div>
                <div className='px-5 py-5 cursor-pointer bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'> <div className='bg-ghee px-3 py-3 rounded-full '><IoCallSharp className='text-4xl text-yellowish' />
                </div></div>
            </div>

        </div>
    )
}

export default Footer
