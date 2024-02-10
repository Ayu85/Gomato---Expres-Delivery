import React, { useEffect } from 'react'
import Header from './Header'
import Heromedical from './Medical Supplies/Heromedical'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const items = useSelector(store => store.cartSlice.items)

    useEffect(() => {
        document.title = 'Checkout- GoMoto Delivery '
    }, [])
    return (
        <div>
            <Header />
            <Heromedical name={'CHECKOUT'} bg={'https://images.pexels.com/photos/6289028/pexels-photo-6289028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
            <div className='flex flex-wrap lg:flex-nowrap justify-between px-2 items-start my-10 gap-10 h-[58vh]'>
                <AddressForm />
                <BillingDetails />
            </div>
        </div>
    )
}
const AddressForm = () => {
    return <div className='flex flex-col gap-3 w-[800px] '>
        <h1 className='text-3xl text-blackish font-semibold pl-3'>Billing Details</h1>
        <div className='flex w-full gap-3'>
            <input type='text' placeholder='Enter First Name ' className='border border-[#cfcfcf] py-5 w-[400px] rounded-full pl-2' />
            <input type='text' placeholder='Enter Last Name ' className='border border-[#cfcfcf] py-5 w-[400px] rounded-full pl-2' />
        </div>

        <input type='text' placeholder='Enter Full Address' className='border border-[#cfcfcf] py-5 w-full rounded-full pl-2' />
        <input type='text' placeholder='Enter Landmark' className='border border-[#cfcfcf] py-5 w-full rounded-full pl-2' />
        <input type='text' placeholder='Enter Town/City' className='border border-[#cfcfcf] py-5 w-full rounded-full pl-2' />
        <input type='text' placeholder='Enter Pin Code' className='border border-[#cfcfcf] py-5 w-full rounded-full pl-2' />

    </div>
}
const BillingDetails = () => {
    const items = useSelector(store => store.cartSlice.items)
    return <div className='flex flex-col gap-3  w-full items-center h-full'>
        <h1 className='text-3xl text-blackish font-semibold pl-3'>Your Order</h1>
        <div className='flex border border-[#cfcfcf] w-[300px] justify-between px-2 text-lg bg-blackish text-white py-3 rounded-t-2xl'>
            <h1 >Name</h1>
            <h1>Price</h1>
        </div>
        {items.map((prod) => {
            return <div className='flex  border-[#cfcfcf] w-[300px] justify-between px-2 text-lg  py-3 '>
                <h1 className='font-semibold'>{prod.name}</h1>
                <h1 className='font-semibold'>💲{prod.price}</h1>
            </div>
        })
        }

    </div>
}
export default Checkout
