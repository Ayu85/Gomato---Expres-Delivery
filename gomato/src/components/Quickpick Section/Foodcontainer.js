import React from 'react'
import Foodcard from './Foodcard'
import burger1 from "../../assets/food items/item_01.jpg"
const Foodcontainer = () => {
    return (
        <div className='pt-5'>
            <Foodcard name={'Cheeseburger with salad'} about={'A burger fully loaded with cheese and salad for better health , enjoy the taste of cheese and health together'} img={burger1} price={19.20} />
        </div>
    )
}

export default Foodcontainer
