import { configureStore } from '@reduxjs/toolkit'
import Hamburgerslice from './slices/Hamburgerslice';
import Currentfooditem from './slices/Currentfooditem';
const store = configureStore({
    reducer: {
        Hamburger: Hamburgerslice,
        currentitem: Currentfooditem
    }
})
export default store;