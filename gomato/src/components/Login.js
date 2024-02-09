import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className='flex flex-col gap-2 mt-20 w-[500px]  ml-[50%] -translate-x-[50%] items-center py-20 bg-blackish text-white justify-center'>
            <h1 className='text-4xl font-semibold '>LOG IN</h1>
            <div>
                < FcGoogle />

            </div>
            <form className='flex flex-col gap-3'>
                <input type='email' placeholder='Enter Email' className='w-96 py-3 rounded-xl pl-3 text-gray outline-none' />
                <input type='password' placeholder='Enter Password' className='w-96 py-3 rounded-xl pl-3 text-gray outline-none' />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login
