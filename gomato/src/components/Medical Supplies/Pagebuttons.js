import React from 'react'

const Pagebuttons = () => {
    return (
        <div className='flex gap-3 items-center justify-center  py-10'>
            <button className='hover:bg-blackish hover:text-white transition-all duration-200 bg-ghee text-blackish text-lg px-6 py-4 mx-2 font-semibold rounded-full'>1</button>
            <button className='hover:bg-blackish hover:text-white transition-all duration-200 bg-ghee text-blackish text-lg px-6 py-4 mx-2 font-semibold rounded-full'>2</button>
            <button className='hover:bg-blackish hover:text-white transition-all duration-200 bg-ghee text-blackish text-lg px-6 py-4 mx-2 font-semibold rounded-full'>3</button>
            <button className=' hover:bg-blackish hover:text-white transition-all duration-200 text-blackish text-lg bg-ghee font-semibold px-6 py-4 mx-2 rounded-full'>4</button>
        </div>
    )
}

export default Pagebuttons
