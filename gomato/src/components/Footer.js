import React from 'react'
import footerbg from '../assets/footer-banner.jpg'
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='bg-blackish flex justify-center items-center'>
            <div className='flex py-10 px-5 relative'>
                <div><img src={footerbg} alt='logo' className='rounded-l-xl' /></div>
                <div className='bg-yellowish w-[550px] rounded-r-xl'></div>
                <div className='bg-ghee px-5 py-5 rounded-full absolute'><IoCallSharp className='text-4xl'/>
                </div>
            </div>

        </div>
    )
}

export default Footer
