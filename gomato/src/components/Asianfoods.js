import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Heromedical from '../components/Medical Supplies/Heromedical'
import Products from './Medical Supplies/Products'
import { asianFood } from '../utils/__mocks__'
import { useDispatch, useSelector } from 'react-redux'
import { toogleBar } from '../redux/slices/Productslide'
import { FaSliders } from "react-icons/fa6";

const Asianfoods = () => {
  const [title] = useState("Asian Foods- GoMoto Delivery")
  // const currentIndex = useSelector(store => store.currentProductIndex.value)
  const barStatus = useSelector(store => store.productSlider.value)
  const dispatch = useDispatch()
  useEffect(() => {
    document.title = title
  }, [])
  return (
    <div className='relative'>
      <Header />
      <Heromedical name={'ASIAN FOODS'} bg={'https://as1.ftcdn.net/v2/jpg/02/97/67/70/1000_F_297677001_zX7ZzRq8DObUV5IWTHAIhAae6DuiEQh4.jpg'} />
      <Products products={asianFood} />
      {!barStatus && <div onClick={() => {
        dispatch(toogleBar())
      }} className='absolute lg:hidden  left-0 z-[999] top-[50%] bg-yellowish rounded-r-full px-3 py-2 cursor-pointer'><FaSliders className='text-2xl' />
      </div>}
    </div>
  )
}

export default Asianfoods
