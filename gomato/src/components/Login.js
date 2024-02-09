import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import waves from '../assets/overlay-waves-white.png'
const Login = () => {
    return (
        <div className='flex relative flex-col gap-6 px-10 rounded-xl mt-36 py-20 lg:w-[500px] md:w-[500px] w-[300px]  ml-[50%] -translate-x-[50%] items-center mb-20 bg-blackish text-white justify-center'>
            <h1 className='text-4xl font-semibold '>LOG IN</h1>
            <div className='flex items-center gap-3'>
                {/* logos page */}
                <div className=' bg-ghee mb-3 px-3 py-3 cursor-pointer rounded-full flex justify-center items-center gap-3'>
                    < FcGoogle className='text-3xl' />
                </div>
                <div className=' bg-ghee mb-3 px-3 py-3 cursor-pointer rounded-full flex justify-center items-center gap-3'>
                    <FcPhone className='text-3xl' />
                </div></div>
            <form className='flex flex-col gap-5 z-50'>
                <input type='email' placeholder='Enter Email' className='lg:w-96 md:w-96 py-3 w-52 rounded-xl pl-3 text-gray outline-none' />
                <input type='password' placeholder='Enter Password' className='lg:w-96 md:w-96 w-52 py-3 rounded-xl pl-3 text-gray outline-none' />
                <button className='lg:w-96 md:w-96  w-52  bg_slider2 cursor-pointer font-semibold text-lg py-3 rounded-xl pl-3 text-blackish bg-yellowish outline-none'>Log In</button>
            </form>
            <div className='text-center'>
                <h1>Not Registered Yet ? <span className='font-semibold text-yellowish'>Register Now </span></h1>
            </div>
            {/* overlay bg */}
            <div className='absolute -z-50'>
                <img src={waves} alt='logo' className='w-full h-[75vh]' />
            </div>
        </div>
    )
}

export default Login
