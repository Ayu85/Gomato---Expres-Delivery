import React from 'react'
import Headings from './Headings'
import Foodcontainer from './Foodcontainer'
import { useDispatch, useSelector } from 'react-redux'
const Quickpick = () => {
    const dispatch = useDispatch();
    const currentItem=useSelector(store=>store.currentitem.item)
    return (
        <div className='flex justify-center mt-5 flex-col'>
            <Headings />
            <Foodcontainer />
        </div>
    )
}

export default Quickpick
