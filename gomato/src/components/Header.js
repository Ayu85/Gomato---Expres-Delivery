import React from 'react'
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className='bg-blackish py-6 px-3 flex justify-evenly'>
            <div>
                {/* logo box */}
                <img src={logo} alt='logo' />
            </div>
            <div>
                {/* menus box */}
                <ul className='flex list-none text-white gap-4 '>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Catalog</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div>
                <div>+91-9005676379</div>
            </div>

        </div>
    )
}

export default Header
