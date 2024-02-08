import React, { useEffect, useState } from 'react'
import Header from "../Header"
import Heromedical from './Heromedical'
import Products from './Products'
const Medicalsupplies = () => {
  const [title, setTitle] = useState('Medical Supplies - GoMoto')
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <div>
      <Header />
      <Heromedical/>
      <Products/>
    </div>
  )
}

export default Medicalsupplies
