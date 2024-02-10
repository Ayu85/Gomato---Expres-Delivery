import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addItem, addPrice } from '../../redux/slices/Cartslice'
const Productcard = ({ logo, product_name, price }) => {
    const [btnclicked, setbtnclicked] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return (
        < motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='w-72  flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:scale-105 transition-all shadow-gray border-ghee border rounded-xl py-5 px-5' >
            <div><img src={logo} alt='logo' className='w-72' /></div>
            <div className='text-blackish text-lg font-semibold text-center'>{product_name}</div>
            <div className='text-lg font-semibold text-gray'>💲{price}</div>
            {!btnclicked ? <button onClick={() => {
                dispatch(addItem({ 'name': product_name, 'price': price, 'logo': logo }))
                dispatch(addPrice(price))
                setbtnclicked(true)
            }} id='cart_btn ' className=' bg_slider px-5 py-2 rounded-full'>Add To Cart</button> : <button onClick={() => {
                navigate('/cart')
            }} id='cart_btn ' className=' bg-blackish text-yellowish px-5 py-2 rounded-full'>View Cart</button>}
        </motion.div >
    )
}

export default Productcard
