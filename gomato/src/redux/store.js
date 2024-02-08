import { configureStore } from '@reduxjs/toolkit'
import Hamburgerslice from './slices/Hamburgerslice';
import Currentfooditem from './slices/Currentfooditem';
import Currentproductindex from './slices/Currentproductindex'
const store = configureStore({
    reducer: {
        Hamburger: Hamburgerslice,
        currentitem: Currentfooditem,
        currentProductIndex: Currentproductindex
    }
})
export default store;