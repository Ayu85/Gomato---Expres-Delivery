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
            {!showData ? <div>Please wait loading</div> :
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

export default Loggeduser
