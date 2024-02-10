import React, { useEffect, useState } from 'react'
import Header from "../Header"
import Heromedical from './Heromedical'
import Products from './Products'
import { FaSliders } from "react-icons/fa6";
import { toogleBar } from '../../redux/slices/Productslide';
import { useDispatch, useSelector } from 'react-redux';
import { medicalSupplies } from '../../utils/__mocks__';
import Footer from '../Footer';
const Medicalsupplies = () => {
  const [title, setTitle] = useState('Medical Supplies - GoMoto')
  const barStatus = useSelector(store => store.productSlider.value)
  const dispatch = useDispatch()
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <div className='relative'>
      <Header />
      <Heromedical name={'MEDICAL SUPPLIES'} bg={'http://gomoto.like-themes.com/wp-content/uploads/2020/05/medical-service-bg.jpg'} />
      <Products products={medicalSupplies}/>
      {!barStatus && <div onClick={() => {
        dispatch(toogleBar())
      }} className='absolute lg:hidden  left-0 z-[999] top-[50%] bg-yellowish rounded-r-full px-3 py-2 cursor-pointer'><FaSliders className='text-2xl' />
      </div>}
      <Footer/>
    </div>
  )
}

export default Medicalsupplies
