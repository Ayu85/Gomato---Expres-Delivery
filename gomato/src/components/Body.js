import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Foodbuttons from './Foodbuttons'
import Quickpick from './Quickpick Section/Quickpick'
import Recommendation from './Recommendation'
import PizzaAd from './PizzaAd'
import Footer from './Footer'
    
const Body = () => {
    return (
        <div className='overflow-hidden'>
            <Header />
            <Hero />
            <Foodbuttons />
            <Quickpick />
            <Recommendation />
            <PizzaAd />
            <Footer/>
        </div>
    )
}

export default Body
