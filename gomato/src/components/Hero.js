import React, { useEffect, useState } from 'react'
import courier from "../assets/courier-person.png"
const Hero = () => {
    const [showbike, setShowbike] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowbike(true)
        }, 500)
    }, [])
    return (
        <div className='bg-blackish flex flex-wrap items-center justify-between px-10 overflow-x-hidden '>
            <div className='w-96 flex flex-col gap-3'>
                {/* left box */}
                <h1 className='text-7xl font-bold text-white'>Express </h1>
                <h1 className='text-7xl font-bold text-yellowish w-max'>Home Delivery</h1>
                <p className='text-white '>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                <button className='px-5 py-5 w-60 text-lg font-semibold text-blackish bg-yellowish rounded-full'>Read More</button>
            </div>
            <div>
                {/* right box */}
                <img src={courier} alt='logo' className={`w-[1000px] mt-20 translate-x-[1000px] ${showbike && "translate-x-0 transition-all duration-1000"}`} />
            </div>
        </div>
    )
}

export default Hero
