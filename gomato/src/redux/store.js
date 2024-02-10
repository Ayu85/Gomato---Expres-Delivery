import { configureStore } from '@reduxjs/toolkit'
import Hamburgerslice from './slices/Hamburgerslice';
import Currentfooditem from './slices/Currentfooditem';
import Currentproductindex from './slices/Currentproductindex'
import Productslide from './slices/Productslide';
import cart from './slices/Cartslice'
import user from './slices/Userslice';
const store = configureStore({
    reducer: {
        Hamburger: Hamburgerslice,
        currentitem: Currentfooditem,
        currentProductIndex: Currentproductindex,
        productSlider: Productslide,
        cartSlice: cart,
        userSlice: user
    }
})
export default store;