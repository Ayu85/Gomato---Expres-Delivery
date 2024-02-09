import React, { useEffect } from 'react'
import Header from './Header'
import Heromedical from '../components/Medical Supplies/Heromedical'
import { useSelector } from 'react-redux'
import emptycart from '../assets/emptycart.png'
import sad from '../assets/sad.png'
const Cart = () => {
    const items = useSelector(store => store.cartSlice.items)
    useEffect(() => {
        document.title = 'Cart - GoMoto Delivery'
    }, [])
    return (
        <div>
            <Header />
            <Heromedical name={"CART"} bg={'https://img.freepik.com/free-photo/black-friday-concept-with-cart-basket_23-2147696392.jpg?w=996&t=st=1707486962~exp=1707487562~hmac=46456e50b1e0c3bb8bd86ac5e23d31a988207edf53bc91904bede0fd721be5e8'} />
            <div className='flex justify-center items-center mt-20  '>
                <div>
                    {
                        items.length !== 0 ? items.map((product) => {
                            return <div className='flex  items-center justify-center gap-5 w-[550px] border border-[#c9c9c9] '>
                                <div className=' w-28 h-28'>
                                    <img src={product.logo} alt='logo' className='' />
                                </div>
                                <div className='font-semibold w-[300px] h-max '>{product.name}</div>
                                <div className='font-semibold '>💲{product.price}</div>
                            </div>
                        }) : <div className='flex flex-col gap-3 items-center justify-center'>
                            <img src={sad} alt='logo' className='w-52' />
                            <h1 className='text-3xl text-blackish font-semibold'>Cart empty</h1>
                            <img src={emptycart} alt='logo' className='w-72' />
                            
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default Cart
