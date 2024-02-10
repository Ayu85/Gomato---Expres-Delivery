import React, { useEffect, useRef, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import waves from '../assets/waves_white-15.png'
import validate from '../utils/validate';
import { auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/slices/Userslice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignin, setSignin] = useState(false)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [mailError, setMailError] = useState()
    const [passError, setPassError] = useState()
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const user = useSelector(store => store.userSlice.user)
     console.log(user);
    useEffect(() => {
        let error = (validate(email, password));
        setMailError(error[0])
        setPassError(error[1])
    }, [email, password])
    const signUpUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
            });

    }
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch(addUser(user))
                navigate('/loggeduser')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        !isSignin ? <div className='flex transition-all duration-300 relative flex-col gap-6 px-10 rounded-xl mt-36 py-20 lg:w-[500px] md:w-[500px] w-[300px]  ml-[50%] -translate-x-[50%] items-center mb-20 bg-blackish text-white justify-center'>
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
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }} type='email' placeholder='Enter Email' className='lg:w-96 md:w-96 py-3 w-52 rounded-xl pl-3 text-gray outline-none' />
                <h1 className='text-[#ff3232] -mt-4 pl-3 transition-all'>{mailError && 'Enter Valid Email'}</h1>
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} type='password' placeholder='Enter Password' className='lg:w-96 md:w-96 w-52 py-3 rounded-xl pl-3 text-gray outline-none' />
                <h1 className='text-[#ff3232] -mt-4 pl-3 transition-all'>{passError && 'Enter Valid Password'}</h1>

                <button onClick={(e) => {
                    e.preventDefault();
                    loginUser(email, password)
                }} className='lg:w-96 md:w-96  w-52  bg_slider2 cursor-pointer font-semibold text-lg py-3 rounded-xl pl-3 text-blackish bg-yellowish outline-none'>Log In</button>
            </form>
            <div className='text-center'>
                <h1>Not Registered Yet ? <span className='font-semibold cursor-pointer text-yellowish' onClick={() => {
                    setSignin(true)
                }}>Register Now </span></h1>
            </div>
            {/* overlay bg */}
            <div className='absolute -z-50'>
                <img src={waves} alt='logo' className='w-full h-[85vh]' />
            </div>
        </div> :
            <div className='flex transition-all relative flex-col gap-6 px-10 rounded-xl mt-36 py-20 lg:w-[500px] md:w-[500px] w-[300px]  ml-[50%] -translate-x-[50%] items-center mb-20 bg-blackish text-white justify-center'>
                <h1 className='text-4xl font-semibold '>SIGN IN</h1>
                <div className='flex items-center gap-3'>
                    {/* logos page */}
                    <div className=' bg-ghee mb-3 px-3 py-3 cursor-pointer rounded-full flex justify-center items-center gap-3'>
                        < FcGoogle className='text-3xl' />
                    </div>
                    <div className=' bg-ghee mb-3 px-3 py-3 cursor-pointer rounded-full flex justify-center items-center gap-3'>
                        <FcPhone className='text-3xl' />
                    </div></div>
                <form className='flex flex-col gap-5 z-50'>
                    <input type='text' placeholder='Enter Name' className='lg:w-96 md:w-96 py-3 w-52 rounded-xl pl-3 text-gray outline-none' />
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} type='email' placeholder='Enter Email' className='lg:w-96 md:w-96 py-3 w-52 rounded-xl pl-3 text-gray outline-none' />
                    <h1 className='text-[#ff3232] -mt-4 pl-3 transition-all'>{mailError && 'Enter Valid Email'}</h1>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} type='password' placeholder='Enter Password' className='lg:w-96 md:w-96 w-52 py-3 rounded-xl pl-3 text-gray outline-none' />
                    <h1 className='text-[#ff3232] -mt-4 pl-3 transition-all'>{passError && 'Enter Valid Password'}</h1>
                    <button onClick={(e) => {
                        e.preventDefault(); signUpUser(email, password)
                    }} className='lg:w-96 md:w-96  w-52  bg_slider2 cursor-pointer font-semibold text-lg py-3 rounded-xl pl-3 text-blackish bg-yellowish outline-none'>Sign In</button>
                </form>
                <div className='text-center'>
                    <h1>Already Registered? <span className='font-semibold cursor-pointer text-yellowish' onClick={() => {
                        setSignin(false)
                    }}>Log In </span></h1>
                </div>
                {/* overlay bg */}
                <div className='absolute -z-50'>
                    <img src={waves} alt='logo' className='w-full h-[85vh]' />
                </div>
            </div>

    )
}

export default Login
