import React, { useEffect } from 'react'
import Header from './Header'
import Heromedical from './Medical Supplies/Heromedical'
import Products from './Medical Supplies/Products'
import { pizza } from '../utils/__mocks__'
import Footer from './Footer'
const Pizza = () => {
    useEffect(() => {
        document.title = 'Pizza Delivery - GoMoto'
    }, [])
    return (
        <div>
            <Header />
            <Heromedical name={'PIZZA'} bg={'http://gomoto.like-themes.com/wp-content/uploads/2020/05/SLIDE_pizza_02.jpg'} />
            <Products products={pizza}/>
            <Footer/>
        </div>
    )
}

export default Pizza
