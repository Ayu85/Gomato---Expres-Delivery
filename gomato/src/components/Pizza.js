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
            <Heromedical name={'PIZZA'} bg={'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <Products products={pizza}/>
            <Footer/>
        </div>
    )
}

export default Pizza
