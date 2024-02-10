import React from 'react'
import Header from '../components/Header'
import Heromedical from '../components/Medical Supplies/Heromedical'
import Products from './Medical Supplies/Products'
import { waterDelivery } from '../utils/__mocks__'
import Footer from './Footer'
import { FaSliders } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { toogleBar } from '../redux/slices/Productslide'

const Waterdelivery = () => {
    const barStatus = useSelector(store => store.productSlider.value)
    const dispatch = useDispatch();
    return (
        <div className='relative'>
            <Header />
            <Heromedical name='WATER DELIVERY' bg='http://gomoto.like-themes.com/wp-content/uploads/2020/04/water-about-bg.jpg' />
            <Products products={waterDelivery} />
            {!barStatus && <div onClick={() => {
                dispatch(toogleBar())
            }} className='absolute lg:hidden  left-0 z-[999] top-[50%] bg-yellowish rounded-r-full px-3 py-2 cursor-pointer'><FaSliders className='text-2xl' />
            </div>}
            <Footer />
        </div>
    )
}

export default Waterdelivery
