import React, { useEffect } from 'react'
import Header from './Header'
import Heromedical from './Medical Supplies/Heromedical'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
    const items = useSelector(store => store.cartSlice.items)
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'Checkout- GoMoto Delivery '
        window.scrollTo(0,0)
        items.length === 0 && navigate('/asianfood')
    }, [])
    return (
        <div>
            <Header />
            <Heromedical name={'CHECKOUT'} bg={'https://images.pexels.com/photos/6289028/pexels-photo-6289028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
            <div className='flex bg-white py-14 flex-wrap lg:flex-nowrap justify-between px-2 items-start  gap-10 '>
                <AddressForm />
                <BillingDetails />
            </div>
            <Footer />

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
    const totalPrice = useSelector(store => store.cartSlice.totalPrice)

    return <div className='flex flex-col gap-3  w-full items-center h-full'>
        <h1 className='text-3xl text-blackish font-semibold pl-3'>Your Order</h1>
        <div className='flex border border-[#cfcfcf] w-[300px] justify-between px-2 text-lg bg-blackish text-white py-3 rounded-t-2xl'>
            <h1 >Name</h1>
            <h1>Price</h1>
        </div>
        {items.map((prod) => {
            return <div className='flex border-l border-r border-[#cfcfcf] w-[300px] justify-between px-2 text-lg   '>
                <h1 className='font-semibold'>{prod.name}</h1>
                <h1 className='font-semibold'>💲{prod.price}</h1>
            </div>
        })
        }
        <div className='flex border border-[#cfcfcf] w-[300px] justify-between px-2 text-lg bg-blackish text-white py-3 rounded-b-2xl'>
            <h1 className='font-semibold'>Total: </h1>
            <h1 className='font-semibold'>💲{totalPrice.toFixed(2)}</h1>
        </div>
    </div>
}
export default Checkout
