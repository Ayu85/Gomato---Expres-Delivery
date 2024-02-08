import React, { useEffect, useState } from 'react'
import Header from "../Header"
import Heromedical from './Heromedical'
import Products from './Products'
import { FaSliders } from "react-icons/fa6";

const Medicalsupplies = () => {
  const [title, setTitle] = useState('Medical Supplies - GoMoto')
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <div className='relative'>
      <Header />
      <Heromedical />
      <Products />
      <div className='absolute left-0 z-[999] top-[50%] bg-yellowish rounded-r-full px-3 py-2 cursor-pointer'><FaSliders className='text-2xl' />
      </div>
    </div>
  )
}

export default Medicalsupplies
