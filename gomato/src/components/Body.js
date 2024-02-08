import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Foodbuttons from './Foodbuttons'
import Quickpick from './Quickpick Section/Quickpick'
import Recommendation from './Recommendation'
import PizzaAd from './PizzaAd'

const Body = () => {
    return (
        <div >
            <Header />
            <Hero />
            <Foodbuttons />
            <Quickpick />
            <Recommendation />
            {/* <PizzaAd /> */}
        </div>
    )
}

export default Body
