import React from 'react'
import Header from './Header'
import Heromedical from './Medical Supplies/Heromedical'

const Checkout = () => {
    return (
        <div>
            <Header />
            <Heromedical name={'CHECKOUT'} bg={'https://images.pexels.com/photos/6289028/pexels-photo-6289028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
        </div>
    )
}

export default Checkout
