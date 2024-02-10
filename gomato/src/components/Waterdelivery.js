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
            <Heromedical name='WATER DELIVERY' bg='https://images.pexels.com/photos/928854/pexels-photo-928854.jpeg?cs=srgb&dl=pexels-stephan-m%C3%BCller-928854.jpg&fm=jpg' />
            <Products products={waterDelivery} />
            <Footer/>
        </div>
    )
}

export default Waterdelivery
