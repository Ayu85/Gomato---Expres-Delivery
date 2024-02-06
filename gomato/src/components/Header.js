import React from 'react'
import logo from "../assets/logo.png"
import { PiPhoneCallFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

const Header = () => {
    return (
        <div className='bg-blackish py-6 px-5 flex justify-between items-center text-lg'>
            <div>
                {/* logo box */}
                <img src={logo} alt='logo' />
            </div>
            <div>
                {/* menus box */}
                <ul className='flex list-none text-white gap-4 '>
                    <li className='flex items-center '>Home<MdNavigateNext />
                    </li>
                    <li className='flex items-center '>About us<MdNavigateNext />
                    </li>
                    <li className='flex items-center '>Catalog<MdNavigateNext />
                    </li>
                    <li className='flex items-center '>Blog<MdNavigateNext />
                    </li>
                    <li className='flex items-center '>Contacts<MdNavigateNext />
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-9 text-white'>
                <div className='flex items-center gap-2 text-yellowish font-semibold'><PiPhoneCallFill className='text-white' />
                    +91-9005676379</div>
                <div><FaUserAlt />
                </div>
                <div><IoCart />
                </div>
            </div>

        </div>
    )
}

export default Header
