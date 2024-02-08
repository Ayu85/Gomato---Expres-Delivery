import React, { useState } from 'react'
import { medicalSupplies } from "../../utils/__mocks__"
import Productcard from './Productcard'
import { useSelector } from 'react-redux'
import wave from '../../assets/overlay-waves-white.png'
const Products = () => {
  const currentIndex = useSelector(store => store.currentProductIndex.value)
  return (
    <div className='flex'>
      <div><div className='bg-[#F2EFE6] mt-10 py-8 px-5 flex relative items-center justify-center  rounded-2xl w-[400px]'>
        {/* searchbar */}
        <img src={wave} alt='logo' className='absolute w-full ' />
        <input type='text' placeholder='Enter Product Name' className='pl-5 z-50 px-8 py-4 rounded-full text-blackish placeholder:text-gray w-[600px]' />
      </div></div>
      <div><div className='flex  justify-center items-center pt-10 gap-5 flex-wrap '>
        {/* products */}
        {
          medicalSupplies[currentIndex].map((items) => {
            return <Productcard product_name={items.product_name} logo={items.logo} price={items.price} />
          })
        }
      </div></div>
    </div>
  )
}

export default Products
