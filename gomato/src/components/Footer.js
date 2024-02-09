import React from 'react'
import footerbg from '../assets/footer-banner.jpg'
import { IoCallSharp } from "react-icons/io5";
import logo from '../assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import waves from '../assets/waves_white-15.png'
const Footer = () => {
    return (
        <div className='bg-blackish flex flex-col justify-center items-center relative'>
            <div className='flex py-10 px-5 relative z-40'>
                <div><img src={footerbg} alt='logo' className='rounded-l-xl' /></div>
                <div className='bg-yellowish w-[530px] rounded-r-xl'></div>
                <div className='hover:bg-blackish transition-all duration-200 px-4 py-4 cursor-pointer bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'> <div className='bg-ghee px-3 py-3 rounded-full '><IoCallSharp className='text-4xl text-yellowish' />
                </div></div>
            </div>
            <div className='z-40'>
                <img src={logo} alt='logo' />
            </div>
            <div className='flex z-40 gap-4 text-yellowish pt-5 text-2xl'>
                <FaFacebookF />
                <CiTwitter />
                <FaLinkedinIn />
                <CiInstagram />
            </div>
            {/* overlay bg */}
            <div className='absolute z-10'>
                <img src={waves} alt='logo' className='w-full'/>
            </div>
        </div >
    )
}

export default Footer
