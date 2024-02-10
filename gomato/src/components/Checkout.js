import React, { useEffect } from 'react'
import Header from './Header'
import Heromedical from './Medical Supplies/Heromedical'

const Checkout = () => {
    useEffect(() => {
        document.title = 'Checkout- GoMoto Delivery '
    }, [])
    return (
        <div>
            <Header />
            <Heromedical name={'CHECKOUT'} bg={'https://images.pexels.com/photos/6289028/pexels-photo-6289028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />

        </div>
    )
}
const AddressForm = () => {
    return <div>
        <h1>Billing Details</h1>
        <div className='flex '>
            <input type='text' placeholder='Enter First Name ' />
            <input type='text' placeholder='Enter Last Name ' />
        </div>

        <input type='text' placeholder='Enter Full Address' />
        <input type='text' placeholder='Enter Landmark' />
        <input type='text' placeholder='Enter Town/City' />
        <input type='text' placeholder='Enter Pin Code' />

    </div>
}
export default Checkout
