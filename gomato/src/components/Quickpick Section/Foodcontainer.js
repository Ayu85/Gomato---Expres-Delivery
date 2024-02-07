import React from 'react'
import Foodcard from './Foodcard'
import burger1 from "../../assets/food items/item_01.jpg"
import burger2 from "../../assets/food items/item_02.jpg"
import burger3 from "../../assets/food items/item_03.jpg"
import burger4 from "../../assets/food items/item_04.jpg"
const Foodcontainer = () => {
    return (
        <div className='pt-5 flex flex-wrap  justify-center lg:justify-between gap-5 px-7 sm:flex-wrap sm:justify-center md:justify-center lg:flex-nowrap'>
            <Foodcard name={'Cheeseburger with Salad'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={burger1} price={19.20} />
            <Foodcard name={'Black Gamburger with Fishcake'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={burger2} price={19.20} />
            <Foodcard name={'Classic Bacon Hamburger'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={burger3} price={19.20} />
            <Foodcard name={'Royal Cheeseburger with Bacon'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={burger4} price={19.20} />
        </div>
    )
}

export default Foodcontainer
