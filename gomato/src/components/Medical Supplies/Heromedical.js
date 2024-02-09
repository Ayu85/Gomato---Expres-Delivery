import React from 'react'
import { FaBriefcaseMedical } from "react-icons/fa";

const Heromedical = ({ name, bg }) => {
  return (
    <div className='h-[90vh] relative  '>
      <div className='z-10 absolute w-full'>
        <img src={bg}
          alt='logo' className='w-full h-[100vh] brightness-50' />
      </div>
      <div className='absolute z-50 text-white font-bold text-5xl left-1/2 
      -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-6 text-center'>{name}
      </div>
    </div>
  )
}

export default Heromedical
