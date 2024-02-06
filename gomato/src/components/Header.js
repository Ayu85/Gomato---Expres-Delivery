import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { PiPhoneCallFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { toogleHamburger } from '../redux/slices/Hamburgerslice';

const Header = () => {
    const [showHome, setShowhome] = useState(false)
    const [showAbout, setShowabout] = useState(false)
    const [showCatalog, setShowcatalog] = useState(false)
    const [showBlog, setShowblog] = useState(false)
    const showHamburger = useSelector(store => store.Hamburger.isShown)
    const dispatch = useDispatch()
    const handleHome = () => {
        setShowhome(!showHome)
    }
    const handleAbout = () => {
        setShowabout(!showAbout)
    }
    return (
        <div className='bg-blackish py-6 px-5 flex justify-between items-center text-lg border-b border-dashed border-gray'>
            <div>
                {/* logo box */}
                <img src={logo} alt='logo' />
            </div>
            <div className='hidden lg:block'>
                {/* menus box */}
                <ul className='flex list-none text-white gap-4 text-[1.05rem] relative'>
                    <li onMouseEnter={() => {
                        handleHome()
                    }} onMouseLeave={() => {
                        handleHome()
                    }} className='flex items-center cursor-pointer hover:text-yellowish'>Home<MdNavigateNext />
                    </li>
                    {showHome && <div className='absolute top-10 z-30 -left-14 rounded-xl bg-white text-blackish px-5 py-4'>home dropdown</div>
                    }
                    <li onMouseEnter={() => {
                        handleAbout()
                    }} onMouseLeave={() => {
                        handleAbout()
                    }} className='flex items-center cursor-pointer hover:text-yellowish'>About us<MdNavigateNext />
                    </li>
                    {showAbout && <div className='absolute top-10 z-30 left-10 rounded-xl bg-white text-blackish px-5 py-4'> About dropdown</div>
                    }
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Catalog<MdNavigateNext />
                    </li>
                    {showCatalog && <div className='absolute top-10 z-30 left-32 rounded-xl bg-white text-blackish px-5 py-4'> Cataloge dropdown</div>
                    }
                    <li className='flex items-center cursor-pointer hover:text-yellowish'>Blog<MdNavigateNext />
                    </li>
                    {showBlog && <div className='absolute top-10 z-30 left-52 rounded-xl bg-white text-blackish px-5 py-4'> Blog dropdown</div>
                    }
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
