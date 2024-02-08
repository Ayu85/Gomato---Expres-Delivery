import React from 'react'
import { FaBriefcaseMedical } from "react-icons/fa";

const Heromedical = () => {
  return (
    <div className='h-[90vh] relative'>
      <div className='z-10 absolute w-full'>
        <img src='https://img.freepik.com/free-photo/medicine-blue-background-flat-lay_23-2149341573.jpg'
          alt='logo' className='w-full h-[90vh] brightness-50 ' />
      </div>
      <div className='absolute z-50 text-white font-bold text-5xl left-1/2 
      -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-6'> MEDICAL SUPPLIES<FaBriefcaseMedical className='-mt-2 text-yellowish'/>
      </div>
    </div>
  )
}

export default Heromedical
