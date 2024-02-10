import React from 'react'
import Header from './Header'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';
const Loggeduser = () => {
    const navigate = useNavigate()
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
            <div>
                welcome user
                <button onClick={() => {
                    logout()
                }}>signout</button>
            </div>
        </div>
    )
}

export default Loggeduser
