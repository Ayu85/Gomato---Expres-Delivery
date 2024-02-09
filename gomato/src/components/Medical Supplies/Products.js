import React, { useState } from 'react'
import { medicalSupplies } from "../../utils/__mocks__"
import Productcard from './Productcard'
import { useDispatch, useSelector } from 'react-redux'
import wave from '../../assets/overlay-waves-white.png'
import { MdNavigateNext } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Pagebuttons from './Pagebuttons'
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { toogleBar } from '../../redux/slices/Productslide'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const currentIndex = useSelector(store => store.currentProductIndex.value)
  const barStatus = useSelector(store => store.productSlider.value)
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  return (
    <div className={`flex px-6 relative  `} >
      {/* category section */}
      <div className='hidden lg:flex w-[30%]  flex-col gap-3'>
        <div className='bg-[#F2EFE6] w-full mt-10 py-8 px-5 flex relative items-center justify-center  rounded-2xl '>
          {/* searchbar */}
          <input type='text' placeholder='Enter Product Name' className='pl-5 z-50 px-8 py-4 rounded-full text-blackish placeholder:text-gray w-[600px]' />
          <div className='bg-yellowish absolute z-50 right-6  px-4 py-4 rounded-full text-blackish '><IoSearch className='' />
          </div>
        </div>
        <div className=' border border-[#d2d1d1] border-dashed px-5 rounded-2xl py-5'>
          <h1 className='text-xl text-blackish font-semibold border-b border-[#d2d1d1] border-dashed pb-5'>🚀PRODUCT CATEGORIES</h1>
          <ul className='flex flex-col gap-3 py-5'>
            <li className='font-semibold text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' onClick={() => {
              navigate('/asianfood')
            }} />Asian Food</li>
            <li className='font-semibold text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Fast Food</li>
            <li className='font-semibold text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Hot Pizza</li>
            <ul className='ml-8 text-sm -mt-2'>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Cheesy</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Fish and Seafood</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Italian</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Vegeterian</li>
            </ul>
            <li className='font-semibold text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Water Delivery</li>
            <li className='font-semibold text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Raw Meat</li>
            <ul className='font-semibold  text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Medical Supplies</ul>
            <ul className='ml-8 text-sm -mt-2'>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Antiseptic</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Face Masks</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Equipement</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Gloves</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Pills</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Latex Gloves</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Vitamins</li>
            </ul>
          </ul>
        </div>
      </div>
      {/* product section */}
      <div className=' flex flex-col justify-center items-center gap-4'>
        <div className='flex   justify-center items-center pt-10 gap-5 flex-wrap '>
          {/* products */}
          {
            medicalSupplies[currentIndex].map((items) => {
              return <Productcard product_name={items.product_name} logo={items.logo} price={items.price} />
            })
          }
        </div>
        <Pagebuttons />
      </div>
      {/* ***************************************/}
      {/* side bar opening and closing */}
      {/* ***************************************/}
      <div className={`absolute z-50 bg-ghee left-0 w-96 h-full ${!barStatus ? "-translate-x-[500px] transition-all duration-300" : "translate-x-0 transition-all duration-300"}`}>
        <RxCross1 onClick={() => {
          dispatch(toogleBar())
        }} className='text-4xl ml-[50%] -translate-x-[50%] mt-6 -mb-4 cursor-pointer' />
        <div className='bg-[#F2EFE6] w-full mt-10 py-8 px-5 flex  relative items-center justify-center  rounded-2xl '>

          <input type='text' placeholder='Enter Product Name' className='pl-5 z-50 px-8 py-4 rounded-full text-blackish placeholder:text-gray w-[600px]' />
          <div className='bg-yellowish absolute z-50 right-6  px-4 py-4 rounded-full text-blackish '><IoSearch className='' />
          </div>
        </div>
        <div className=' border border-[#d2d1d1] border-dashed px-5 rounded-2xl py-5 mt-5'>
          <h1 className='text-xl text-blackish font-semibold border-b border-[#d2d1d1] border-dashed pb-5'>🚀PRODUCT CATEGORIES</h1>
          <ul className='flex flex-col gap-3 py-5'>
            <li className='font-semibold text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Asian Food</li>
            <li className='font-semibold text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Fast Food</li>
            <li className='font-semibold text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Hot Pizza</li>
            <ul className='ml-8 text-sm -mt-2'>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Cheesy</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Fish and Seafood</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Italian</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Vegeterian</li>
            </ul>
            <li className='font-semibold text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Water Delivery</li>
            <li className='font-semibold text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Raw Meat</li>
            <ul className='font-semibold  text-blackish flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Medical Supplies</ul>
            <ul className='ml-8 text-sm -mt-2'>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Antiseptic</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Face Masks</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Equipement</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Gloves</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Pills</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Latex Gloves</li>
              <li className='font-semibold text-blackish my-2 flex items-center gap-1'><MdNavigateNext className='text-yellowish font-bold text-lg' />Vitamins</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Products
