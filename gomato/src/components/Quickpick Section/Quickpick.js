import React from 'react'
import Headings from './Headings'
import Foodcontainer from './Foodcontainer'

const Quickpick = () => {
    return (
        <div className='flex justify-center mt-5 flex-col'>
            <Headings />
            <Foodcontainer/>
        </div>
    )
}

export default Quickpick
