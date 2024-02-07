import React from 'react'
import pizza from "../assets/pizza.png"
const PizzaAd = () => {
    return (
        <div className='bg-yellowish mt-14 flex py-10 items-center gap-20 justify-center lg:flex-nowrap flex-wrap '>
            <div className='w-1/2 flex flex-col gap-3 pl-4  items-center text-center lg:text-start lg:items-start' >
                {/* left div */}
                <h1 className='text-7xl font-bold text-white tracking-tight'>Always</h1>
                <h1 className='text-7xl font-bold tracking-tight text-blackish'>the Hottest</h1>
                <h1 className='text-7xl font-bold tracking-tight text-blackish'>Pizza</h1>
                <p>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                <button className={` px-5  mt-10 py-5 w-60 text-lg font-semibold text-white bg-blackish rounded-full `}>Read More</button>

            </div>
            <div className='w-max  flex items-center justify-center py-2 -mr-48'>
                {/* right div */}
                <img src={pizza} alt='logo' className='w-[100vw] ' />
            </div>
        </div>
    )
}

export default PizzaAd
