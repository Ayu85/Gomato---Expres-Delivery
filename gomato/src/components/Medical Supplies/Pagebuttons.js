import React from 'react'
import { toogleIndex } from '../../redux/slices/Currentproductindex'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
const Pagebuttons = () => {
    const dispatch = useDispatch();
    const currentIndex = useSelector(store => store.currentProductIndex.value)

    return (
        <div className='flex gap-3 items-center justify-center  py-10'>
            <button onClick={() => {
                dispatch(toogleIndex(0))
            }} className={`${currentIndex === 0 && 'bg-yellowish transition-all'} ${currentIndex === 0 ? 'hover:bg-yellowish ' : "hover:bg-blackish hover:text-white"}  transition-all duration-200 bg-ghee text-blackish text-lg px-6 py-4 mx-2 font-semibold rounded-full`}>1</button>
            <button onClick={() => {
                dispatch(toogleIndex(1))
            }} className={`${currentIndex === 1 && 'bg-yellowish transition-all'} ${currentIndex === 1 ? 'hover:bg-yellowish ' : "hover:bg-blackish hover:text-white"}  transition-all duration-200 bg-ghee text-blackish text-lg px-6 py-4 mx-2 font-semibold rounded-full`}>2</button>
            <button onClick={() => {
                dispatch(toogleIndex(2))
            }} className={`${currentIndex === 2 && 'bg-yellowish transition-all'} ${currentIndex === 2 ? 'hover:bg-yellowish ' : "hover:bg-blackish hover:text-white"}  transition-all duration-200 bg-ghee text-blackish text-lg px-6 py-4 mx-2 font-semibold rounded-full`}>3</button>
            <button onClick={() => {
                dispatch(toogleIndex(3))
            }} className={` ${currentIndex === 3 && 'bg-yellowish transition-all'} ${currentIndex === 3 ? 'hover:bg-yellowish ' : "hover:bg-blackish hover:text-white"}  transition-all duration-200 text-blackish text-lg bg-ghee font-semibold px-6 py-4 mx-2 rounded-full`}>4</button>
        </div>
    )
}

export default Pagebuttons
