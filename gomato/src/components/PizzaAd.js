import React from 'react'
import pizza from "../assets/pizza.png"
const PizzaAd = () => {
    return (
        <div className='bg-yellowish flex py-10 items-center '>
            <div className='w-1/2 flex flex-col gap-3 pl-4' >
                {/* left div */}
                <h1 className='text-7xl font-bold text-white tracking-tight'>Always</h1>
                <h1 className='text-7xl font-bold tracking-tight text-blackish'>the Hottest</h1>
                <h1 className='text-7xl font-bold tracking-tight text-blackish'>Pizza</h1>
                <p>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                <button className={` px-5 sm:mt-10 lg:mt-2 mt-10 py-5 w-60 text-lg font-semibold text-white bg-blackish rounded-full `}>Read More</button>

            </div>
            <div>
                {/* right div */}
                <img src={pizza} alt='logo' />
            </div>
        </div>
    )
}

export default PizzaAd
