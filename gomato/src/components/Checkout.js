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
            <div>
                <AddressForm />
            </div>
        </div>
    )
}
const AddressForm = () => {
    return <div className='flex flex-col gap-3 w-[800px] '>
        <h1 className='text-3xl text-blackish font-semibold pl-3'>Billing Details</h1>
        <div className='flex w-full gap-3'>
            <input type='text' placeholder='Enter First Name '  className='border border-gray py-5 w-[400px] rounded-full pl-2'/>
            <input type='text' placeholder='Enter Last Name ' className='border border-gray py-5 w-[400px] rounded-full pl-2'/>
        </div>

        <input type='text' placeholder='Enter Full Address' className='border border-gray py-5 w-full rounded-full pl-2'/>
        <input type='text' placeholder='Enter Landmark' className='border border-gray py-5 w-full rounded-full pl-2'/>
        <input type='text' placeholder='Enter Town/City' className='border border-gray py-5 w-full rounded-full pl-2'/>
        <input type='text' placeholder='Enter Pin Code' className='border border-gray py-5 w-full rounded-full pl-2'/>

    </div>
}
export default Checkout
