import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeItem } from "../../redux/slices/Currentfooditem"
const Headings = () => {
    const dispatch = useDispatch();
    const currentItem = useSelector(store => store.currentitem.item)

    return (
        <div className='flex flex-col justify-center gap-3 items-center py-4'>
            <h1 className='text-yellowish font-semibold text-lg'>Quick Picks</h1>
            <h1 className='text-4xl text-blackish font-semibold'>Popular Goods</h1>
            <div className='flex justify-center items-center gap-6 text-[1.03rem] font-semibold'>
                <button className='border-b border-blackish border-dashed pb-1 hover:text-yellowish' onClick={() => {
                    dispatch(changeItem('burger'))
                }}>Fast Food</button>
                <button onClick={() => {
                    dispatch(changeItem('pizza'))
                }} className='border-b border-blackish border-dashed pb-1  hover:text-yellowish'>Hot Pizza</button>
                <button onClick={() => {
                    dispatch(changeItem('asian'))
                }} className='border-b border-blackish border-dashed pb-1 hover:text-yellowish'>Asian Food</button>
                <button onClick={() => {
                    dispatch(changeItem('meat'))
                }} className='border-b border-blackish border-dashed pb-1 hover:text-yellowish'>Raw Meat</button>
            </div>

        </div>
    )
}

export default Headings
