import React from 'react'
import { FaBriefcaseMedical } from "react-icons/fa";

const Heromedical = ({ name, bg }) => {
  return (
    <div  className='lg:h-[90vh] md:h-[90vh] h-[50vh] relative w-screen  '>
      <div className='-z-10 fixed top-0 w-full'>
        <img src={bg}
          alt='logo' className='w-fulllg:h-[90vh] md:h-[90vh] h-[50vh] w-screen brightness-50 bg-fixed' />
      </div>
      <div className='absolute z-50 text-white font-bold text-5xl left-1/2 
      -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-6 text-center'>{name}
      </div>
    </div>
  )
}

export default Heromedical
