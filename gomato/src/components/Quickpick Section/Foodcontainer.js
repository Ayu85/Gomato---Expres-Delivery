import React from 'react'
import Foodcard from './Foodcard'
import burger1 from "../../assets/food items/item_01.jpg"
import burger2 from "../../assets/food items/item_02.jpg"
import burger3 from "../../assets/food items/item_03.jpg"
import burger4 from "../../assets/food items/item_04.jpg"
import pizza1 from "../../assets/food items/pizza_01-1024x1024.jpg"
import pizza2 from "../../assets/food items/pizza_02-1024x1024.jpg"
import pizza3 from "../../assets/food items/pizza_03-1024x1024.jpg"
import pizza4 from "../../assets/food items/pizza_04-1024x1024.jpg"
import asian1 from "../../assets/food items/sushi_01-1024x1024.jpg"
import asian2 from "../../assets/food items/sushi_02-1024x1024.jpg"
import asian3 from "../../assets/food items/sushi_03-1024x1024.jpg"
import asian4 from "../../assets/food items/sushi_04-1024x1024.jpg"
import meat1 from "../../assets/food items/meat_01-1024x1024.jpg"
import meat2 from "../../assets/food items/meat_02-1024x1024.jpg"
import meat3 from "../../assets/food items/meat_03-1024x1024.jpg"
import meat4 from "../../assets/food items/meat_04-1024x1024.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { motion, useScroll } from 'framer-motion'
const Foodcontainer = () => {
    const dispatch = useDispatch();
    const currentItem = useSelector(store => store.currentitem.item)

    return (
        <div >
            {/* burger food */}
            {currentItem === 'burger' && <motion.div initial={{ translateY: 200 }} whileInView={{ translateY: 0 }} transition={{ duration: 0.5 }} className='pt-5 overflow-hidden flex flex-wrap  justify-center lg:justify-between gap-5 px-7 sm:flex-wrap sm:justify-center md:justify-center lg:flex-nowrap'><Foodcard name={'Cheeseburger with Salad'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={burger1} price={19.20} />
                <Foodcard name={'Black Gamburger with Fishcake'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={burger2} price={19.20} />
                <Foodcard name={'Classic Bacon Hamburger'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={burger3} price={19.20} />
                <Foodcard name={'Royal Cheeseburger with Bacon'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={burger4} price={19.20} />
            </motion.div>}
            {/* pizza food */}
            {currentItem === 'pizza' && <motion.div initial={{ translateY: 200 }} whileInView={{ translateY: 0 }} transition={{ duration: 0.5 }} className='pt-5 flex flex-wrap  justify-center lg:justify-between gap-5 px-7 sm:flex-wrap sm:justify-center md:justify-center lg:flex-nowrap'>
                <Foodcard name={'Shrimp and Olive Pizza'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={pizza1} price={16.20} />
                <Foodcard name={'Seafood Pizza'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={pizza2} price={23.20} />
                <Foodcard name={'Vegetarian Pizza'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={pizza3} price={19.20} />
                <Foodcard name={'Pizza With Mushrooms'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={pizza4} price={17.20} />
            </motion.div>}
            {/* asian food */}
            {currentItem === 'asian' && < motion.div initial={{ translateY: 200 }} whileInView={{ translateY: 0 }} transition={{ duration: 0.5 }} className='pt-5 flex flex-wrap  justify-center lg:justify-between gap-5 px-7 sm:flex-wrap sm:justify-center md:justify-center lg:flex-nowrap'>
                <Foodcard name={'Red Fish Roll'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={asian1} price={23.20} />
                <Foodcard name={'Seafood '} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={asian2} price={33.20} />
                <Foodcard name={'Octopus Roll'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={asian3} price={30.20} />
                <Foodcard name={'Shrimp Roll'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={asian4} price={25.20} />
            </motion.div>}
            {/* raw meat food */}
            {currentItem === 'meat' && <motion.div initial={{ translateY: 200 }} whileInView={{ translateY: 0 }} transition={{ duration: 0.5 }} className='pt-5 flex flex-wrap  justify-center lg:justify-between gap-5 px-7 sm:flex-wrap sm:justify-center md:justify-center lg:flex-nowrap'>
                <Foodcard name={'Whole Chicken'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={meat1} price={23.20} />
                <Foodcard name={'Boiled Pork With Spices'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={meat2} price={33.20} />
                <Foodcard name={'Chicken Breast'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={meat3} price={30.20} />
                <Foodcard name={'Herb Chicken'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={meat4} price={25.20} />
            </motion.div>}
        </div >
    )
}

export default Foodcontainer
