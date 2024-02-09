import React, { useEffect } from 'react'
import Header from './Header'
import Heromedical from '../components/Medical Supplies/Heromedical'
import { useSelector } from 'react-redux'
const Cart = () => {
    const items = useSelector(store => store.cartSlice.items)
    useEffect(() => {
        document.title = 'Cart - GoMoto Delivery'
    }, [])
    return (
        <div>
            <Header />
            <Heromedical name={"CART"} bg={'https://img.freepik.com/free-photo/black-friday-concept-with-cart-basket_23-2147696392.jpg?w=996&t=st=1707486962~exp=1707487562~hmac=46456e50b1e0c3bb8bd86ac5e23d31a988207edf53bc91904bede0fd721be5e8'} />
            <div className='flex justify-center items-center mt-20'>
                <div>
                    {
                        items.length !== 0 ? items.map((product) => {
                            return <div className='flex border-gray border items-center justify-center gap-5 w-[550px] '>
                                <div className='w-[100px]'>
                                    <img src={product.logo} alt='logo' className='w-28' />
                                </div>
                                <div className='font-semibold w-[300px]'>{product.name}</div>
                                <div className='font-semibold'>💲{product.price}</div>
                            </div>
                        }) : <h1>cart empty</h1>
                    }
                </div>

            </div>
        </div>
    )
}

export default Cart
