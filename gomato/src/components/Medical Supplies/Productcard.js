import React from 'react'

const Productcard = ({logo,product_name,price}) => {
    return (
        <div>
            <div><img src={logo} alt='logo' /></div>
            <div>{product_name}</div>
            <div>{price}</div>
            <button>Add To Cart</button>
        </div>
    )
}

export default Productcard
