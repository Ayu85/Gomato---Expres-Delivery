import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Heromedical from '../components/Medical Supplies/Heromedical'
import Login from './Login'
const User = () => {
  const [title] = useState('My Account-GoMoto Delivery')
  useEffect(() => {
    document.title = title
  }, [])
  return (
    <div>
      <Header />
      <Heromedical name={"MY ACCOUNT"} bg={'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
      <Login/>
    </div>
  )
}

export default User
