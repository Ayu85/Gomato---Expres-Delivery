import React, { useEffect } from 'react'
import Header from './Header'
import Heromedical from '../components/Medical Supplies/Heromedical'
import { useSelector } from 'react-redux'
import emptycart from '../assets/emptycart.png'
import sad from '../assets/sad.png'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
    const items = useSelector(store => store.cartSlice.items)
    const totalPrice = useSelector(store => store.cartSlice.totalPrice)
    const navigate = useNavigate()
    useEffect(() => {
        document.title = 'Cart - GoMoto Delivery';
        if (items.length === 0) document.getElementById("checkoutbutton").disabled = true
        else
            document.getElementById("checkoutbutton").classList.add("bg_slider")
    }, [])
    return (
        <div>
            <Header />
            <Heromedical name={"CART"} bg={'https://img.freepik.com/free-photo/black-friday-concept-with-cart-basket_23-2147696392.jpg?w=996&t=st=1707486962~exp=1707487562~hmac=46456e50b1e0c3bb8bd86ac5e23d31a988207edf53bc91904bede0fd721be5e8'} />
            <div className='flex flex-col gap-6 justify-center items-center mt-20  '>
                <div>
                    <div className='flex items-center justify-center px-10 gap-5 bg-blackish text-white py-6 rounded-t-xl md:w-[550px] lg:w-[550px] w-[350px] '>
                        <div className=' '>
                            <h1 className='font-semibold'>PRODUCT</h1>
                        </div>
                        <div className='font-semibold w-[300px] h-max '>NAME</div>
                        <div className='font-semibold '>PRICE</div></div>
                    {
                        items.length !== 0 ? items.map((product) => {
                            return <div className='flex  items-center justify-center gap-5 py-2 md:w-[550px] lg:w-[550px] w-[350px] border border-[#c9c9c9] '>
                                <div className=' w-28 h-28'>
                                    <img src={product.logo} alt='logo' className='' />
                                </div>
                                <div className='font-semibold w-[300px] h-max '>{product.name}</div>
                                <div className='font-semibold text-yellowish'>💲{product.price}</div>
                            </div>
                        }) : <div className='flex flex-col gap-3 items-center justify-center'>
                            <img src={sad} alt='logo' className='w-52' />
                            <h1 className='text-3xl text-blackish font-semibold'>Cart empty</h1>
                            <img src={emptycart} alt='logo' className='w-72' />
                        </div>
                    }
                    <div className='flex items-center justify-between px-10 gap-5 md:w-[550px] lg:w-[550px] w-[350px] bg-blackish text-white py-6 rounded-b-xl '>
                        <div className=' '>
                            <h1 className='font-semibold'>TOTAL</h1>
                        </div>
                        <div className='flex items-center gap-1 bg-[#ff2727] px-2 py-1 rounded-lg text-lg cursor-pointer active:scale-110 transition-all '>Clear Cart<MdDeleteForever className='text-2xl text-white' />
                        </div>
                        <div className='font-semibold text-yellowish text-xl '>$ {totalPrice}</div></div>

                </div>
                <button onClick={() => {
                    navigate('/checkout')
                }} className={` px-7 py-3 cursor-pointer rounded-xl mb-10 disabled:bg-gray disabled:cursor-not-allowed`} id='checkoutbutton'>Proceed To Checkout</button>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
