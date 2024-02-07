import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Foodbuttons from './Foodbuttons'
import Quickpick from './Quickpick Section/Quickpick'

const Body = () => {
    return (
        <div >
            <Header />
            <Hero />
            <Foodbuttons/>
            <Quickpick/>
        </div>
    )
}

export default Body
