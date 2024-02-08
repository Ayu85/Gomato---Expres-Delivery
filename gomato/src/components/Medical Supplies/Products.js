import React, { useState } from 'react'
import { medicalSupplies } from "../../utils/__mocks__"
import Productcard from './Productcard'
import { useSelector } from 'react-redux'
const Products = () => {
  // const [currentIndex, setIndex] = useState(0)
  const currentIndex = useSelector(store => store.currentProductIndex.value)
  return (
    <div>
      <div className='bg-ghee mt-10 py-7 px-5 flex items-center justify-center w-[70%] rounded-2xl ml-[50%] -translate-x-[50%]'>
        {/* searchbar */}
        <input type='text' placeholder='Enter Product Name' className='pl-5 px-8 py-5 rounded-full text-blackish placeholder:text-gray w-[600px]' />
      </div>
      <div className='flex w-[70%] justify-center items-center pt-10 gap-5 flex-wrap ml-[50%] -translate-x-[50%]'>
        {/* products */}
        {
          medicalSupplies[currentIndex].map((items) => {
            return <Productcard product_name={items.product_name} logo={items.logo} price={items.price} />
          })
        }
      </div>
    </div>
  )
}

export default Products
