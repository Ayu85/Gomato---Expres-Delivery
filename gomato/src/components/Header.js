import React from 'react'
import logo from "../assets/logo.png"
import { PiPhoneCallFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { toogleHamburger } from '../redux/slices/Hamburgerslice';

const Header = () => {
    const showHamburger = useSelector(store => store.Hamburger.isShown)
    const dispatch = useDispatch()
    return (
        <div className='bg-blackish py-6 px-5 flex justify-between items-center text-lg border-b border-dashed border-gray'>
            <div>
                {/* logo box */}
                <img src={logo} alt='logo' />
            </div>
            <div className='hidden lg:block'>
                {/* menus box */}
                <ul className='flex list-none text-white gap-4 '>
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Home<MdNavigateNext />
                    </li>
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>About us<MdNavigateNext />
                    </li>
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Catalog<MdNavigateNext />
                    </li>
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Blog<MdNavigateNext />
                    </li>
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Contacts<MdNavigateNext />
                    </li>
                </ul>
            </div>
            <div className=' items-center gap-9 text-white hidden lg:flex'>
                <div className='flex items-center gap-2 text-yellowish font-semibold'><PiPhoneCallFill className='text-white' />
                    +91-9005676379</div>
                <div><FaUserAlt />
                </div>
                <div><IoCart />
                </div>
            </div>
            <div className='flex sm:flex md:flex lg:hidden'>
                {showHamburger ? <RxCross1 className='text-3xl text-white font-bold cursor-pointer' onClick={() => {
                    dispatch(toogleHamburger())
                }} /> : <RxHamburgerMenu className='text-white text-3xl cursor-pointer' onClick={() => {
                    dispatch(toogleHamburger())
                }} />}
            </div>

        </div>
    )
}

export default Header
