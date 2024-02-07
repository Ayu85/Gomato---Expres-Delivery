import React from 'react'

const Headings = () => {
    return (
        <div className='flex flex-col justify-center gap-3 items-center'>
            <h1 className='text-yellowish font-semibold text-lg'>Quick Picks</h1>
            <h1 className='text-4xl text-blackish font-semibold'>Popular Goods</h1>
            <div className='flex justify-center items-center gap-6'>
                <button>Fast Food</button>
                <button>Hot Pizza</button>
                <button>Asian Food</button>
                <button>Raw Meat</button>
            </div>

        </div>
    )
}

export default Headings
