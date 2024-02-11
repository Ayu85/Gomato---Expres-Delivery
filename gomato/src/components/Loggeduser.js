import React, { useEffect, useState } from 'react'
import Header from './Header'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/slices/Userslice';
import { motion } from 'framer-motion'
import welcomelogo from '../assets/welcome.png'
import lockedlogo from '../assets/locked.png'
import userlogo from '../assets/userlogo.png'
const Loggeduser = () => {
    const [showData, setData] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setData(true)
        }, 4000)
    }, [])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("sign out")
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <Header />
            {!showData ?
                <Loading /> :
                <Userdetails />}
        </div>
    )
}
const Loading = () => {
    return <div className='flex flex-col gap-20 items-center justify-center pt-10 h-screen bg-blackish'>
        <motion.h1 initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "linear", }}
            className='text-xl md:text-4xl text-center lg:text-4xl  h-10  font-semibold text-yellowish '>PLEASE WAIT !!! LOGGIN YOU IN...TO THE WORLD OF TASTE</motion.h1>
        <motion.div animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear", }}
            className='lg:w-44 md:w-44 w-24 aspect-square  border-t-8   border-t-yellowish rounded-full border-white border-8 '>

        </motion.div>

    </div>
}
const Userdetails = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.userSlice.user)
    return <div className='flex items-center justify-center bg-blackish h-screen'>
        <div className='bg-[#00000039]  text-white px-24 rounded-lg h-[500px] flex flex-col gap-4 items-center py-5'>
            {/* <h1 className='text-yellowish text-3xl '>Welcome Buddy</h1> */}
            <img src={!user ? lockedlogo : welcomelogo} alt='logo' className='w-72' />
            <h1 className='text-xl font-semibold'> {user?.email || "Please Log In"}</h1>
            {!user && <button onClick={() => {
                navigate('/user')
            }} className='bg-yellowish px-3 py-3 rounded-lg text-blackish font-semibold'>Take me to Login Page</button>
            } </div>
    </div>
}
export default Loggeduser
