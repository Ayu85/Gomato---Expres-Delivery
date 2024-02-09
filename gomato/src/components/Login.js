import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className='flex flex-col gap-2'>
            <h1>Log In</h1>
            <div>
                < FcGoogle />

            </div>
            <form>
                <input type='email' placeholder='Enter Email' />
                <input type='password' placeholder='Enter Password' />

            </form>
        </div>
    )
}

export default Login
