import React from 'react'
import { LiaHamburgerSolid } from "react-icons/lia";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { PiBowlFoodLight } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Foodbuttons = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => {
      navigate('/pizza')
    }} className='flex items-center flex-wrap justify-center px-5 mt-5 gap-8 py-10 md:flex-wrap sm:flex-wrap lg:justify-evenly lg:px-4 lg:flex-nowrap sm:justify-center md:justify-center'>
      <button className='bg-buttoncolor w-96  py-8 hover:scale-110 transition-all hover:bg-white hover:shadow-xl shadow-blackish
       rounded-[25px] flex text-blackish gap-7 justify-evenly items-center text-xl font-[Roboto] pr-16 pl-5'><LiaHamburgerSolid className='bg-yellowish w-20 h-20 px-2 text-blackish font-light text-2xl rounded-full' />
        Fastfood</button>
      <button onClick={() => {
        navigate('/pizza')
      }} className='bg-buttoncolor w-96  py-8 hover:scale-110 transition-all hover:bg-white hover:shadow-xl shadow-blackish
       rounded-[25px] flex text-blackish gap-7 justify-evenly items-center text-xl font-[Roboto] pr-16 pl-5'>< LiaPizzaSliceSolid className='bg-yellowish w-20 h-20 px-2 text-blackish font-light text-2xl rounded-full' />
        Pizza</button>
      <button onClick={() => {
        navigate('/asianfood')
      }} className='bg-buttoncolor w-96  py-8 hover:scale-110 transition-all hover:bg-white hover:shadow-xl shadow-blackish
       rounded-[25px] flex text-blackish gap-7 justify-evenly items-center text-xl font-[Roboto] pr-16 pl-5'><PiBowlFoodLight className='bg-yellowish w-20 h-20 px-2 text-blackish font-light text-2xl rounded-full' />
        Asian Food</button>
      <button className='bg-buttoncolor w-96  py-8 hover:scale-110 transition-all hover:bg-white hover:shadow-xl shadow-blackish
       rounded-[25px] flex text-blackish gap-7 justify-evenly items-center text-xl font-[Roboto] pr-16 pl-5'><TbMeat className='bg-yellowish w-20 h-20 px-2 text-blackish font-light text-2xl rounded-full' />
        Raw Meat</button>
    </div>
  )
}

export default Foodbuttons
