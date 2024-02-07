import React from 'react'
import { LiaHamburgerSolid } from "react-icons/lia";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { PiBowlFoodLight } from "react-icons/pi";
import { TbMeat } from "react-icons/tb";

const Foodbuttons = () => {
  return (
    <div className='flex items-center justify-between px-8 mt-5 gap-8'>
      <button className='bg-buttoncolor w-96  py-8
       rounded-[25px] flex text-blackish gap-7 justify-evenly items-center text-xl font-[Roboto] pr-16 pl-5'><LiaHamburgerSolid className='bg-yellowish w-20 h-20 px-2 text-blackish font-light text-2xl rounded-full' />
        Fastfood</button>
      <button className='bg-buttoncolor w-96  py-8
       rounded-[25px] flex text-blackish gap-7 justify-evenly items-center text-xl font-[Roboto] pr-16 pl-5'>< LiaPizzaSliceSolid className='bg-yellowish w-20 h-20 px-2 text-blackish font-light text-2xl rounded-full' />
        Pizza</button>
      <button className='bg-buttoncolor w-96  py-8
       rounded-[25px] flex text-blackish gap-7 justify-evenly items-center text-xl font-[Roboto] pr-16 pl-5'><PiBowlFoodLight className='bg-yellowish w-20 h-20 px-2 text-blackish font-light text-2xl rounded-full' />
        Asian Food</button>
      <button className='bg-buttoncolor w-96  py-8
       rounded-[25px] flex text-blackish gap-7 justify-evenly items-center text-xl font-[Roboto] pr-16 pl-5'><TbMeat className='bg-yellowish w-20 h-20 px-2 text-blackish font-light text-2xl rounded-full' />
        Raw Meat</button>
    </div>
  )
}

export default Foodbuttons
