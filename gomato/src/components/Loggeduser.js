import React, { useEffect, useState } from 'react'
import Header from './Header'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/Userslice';
import { motion } from 'framer-motion'
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
                <div>
                    welcome user
                    <button onClick={() => {
                        logout()
                        dispatch(addUser(null))
                        navigate('/user')
                    }}>signout</button>
                </div>}
        </div>
    )
}
const Loading = () => {
    return <div className='flex flex-col gap-10 items-center justify-center mt-10'>
        <motion.h1 initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "linear", }}
            className='text-4xl h-10  font-semibold '>PLEASE WAIT !!! LOGGIN YOU IN...TO THE WORLD OF TASTE</motion.h1>
        <motion.div animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear", }}
            className='w-44 aspect-square  border-t-8  bg-yellowish border-t-blackish rounded-full border-white border-8 '>

        </motion.div>
        
    </div>
}

export default Loggeduser
