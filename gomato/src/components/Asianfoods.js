import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Heromedical from '../components/Medical Supplies/Heromedical'
const Asianfoods = () => {
  const [title] = useState("Asian Foods- GoMoto Delivery")
  useEffect(() => {
    document.title = title
  },[])
  return (
    <div>
      <Header />
      <Heromedical name={'ASIAN FOODS'} bg={'https://as1.ftcdn.net/v2/jpg/02/97/67/70/1000_F_297677001_zX7ZzRq8DObUV5IWTHAIhAae6DuiEQh4.jpg'} />
    </div>
  )
}

export default Asianfoods
