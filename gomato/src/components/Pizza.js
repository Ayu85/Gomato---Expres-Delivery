import React, { useEffect } from 'react'
import Header from './Header'
import Heromedical from './Medical Supplies/Heromedical'
import Products from './Medical Supplies/Products'
import { pizza } from '../utils/__mocks__'
import Footer from './Footer'
import { FaSliders } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { toogleBar } from '../redux/slices/Productslide'
const Pizza = () => {
    const barStatus = useSelector(store => store.productSlider.value)
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = 'Pizza Delivery - GoMoto'
        window.scrollTo(0,0)
        

    }, [])
    return (
        <div className='relative'>
            <Header />
            <Heromedical name={'PIZZA'} bg={'http://gomoto.like-themes.com/wp-content/uploads/2020/05/SLIDE_pizza_02.jpg'} />
            <Products products={pizza} />
            {!barStatus && <div onClick={() => {
                dispatch(toogleBar())
            }} className='absolute lg:hidden  left-0 z-[999] top-[50%] bg-yellowish rounded-r-full px-3 py-2 cursor-pointer'><FaSliders className='text-2xl' />
            </div>}
            <Footer />
        </div>
    )
}

export default Pizza
