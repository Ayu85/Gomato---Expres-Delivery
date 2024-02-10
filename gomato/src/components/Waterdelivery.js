import React from 'react'
import Header from '../components/Header'
import Heromedical from '../components/Medical Supplies/Heromedical'
import Products from './Medical Supplies/Products'
import { waterDelivery } from '../utils/__mocks__'
import Footer from './Footer'
const Waterdelivery = () => {
    return (
        <div>
            <Header />
            <Heromedical name='WATER DELIVERY' bg='http://gomoto.like-themes.com/wp-content/uploads/2020/04/water-about-bg.jpg' />
            <Products products={waterDelivery} />
            <Footer/>
        </div>
    )
}

export default Waterdelivery
