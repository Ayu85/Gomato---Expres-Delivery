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
      <Heromedical name={'ASIAN FOODS'} bg={'https://as2.ftcdn.net/v2/jpg/02/64/00/51/1000_F_264005126_KflpWsRolKZQvZqDSh87UMELw5B8HYTR.jpg'} />
    </div>
  )
}

export default Asianfoods
