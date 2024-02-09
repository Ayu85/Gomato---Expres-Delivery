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
            <div className='flex justify-center items-center'>
                <div>
                    {
                        items.length !== 0 ? items.map((product) => {
                            return <div>
                                <div>
                                    <img src={product.logo} alt='logo' className='w-28' />
                                </div>
                                <div>{product.name}</div>
                                <div>{product.price}</div>
                            </div>
                        }) : <h1>cart empty</h1>
                    }
                </div>

            </div>
        </div>
    )
}

export default Cart
