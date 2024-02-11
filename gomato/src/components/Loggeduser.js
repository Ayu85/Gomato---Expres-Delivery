import React, { useEffect, useState } from 'react'
import Header from './Header'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/Userslice';
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
                <div>Please wait loading</div> :
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
    return <div className='flex flex-col gap-6 items-center justify-center'>
        <h1>PLEASE WAIT !!! LOGGIN YOU TO THE WORLD OF TASTE</h1>
        <div className='w-44 h-44 bg-yellowish border-t-2 border-t-ghee rounded-full animate-[spin_linearly_5s] '>

        </div>
    </div>
}

export default Loggeduser
