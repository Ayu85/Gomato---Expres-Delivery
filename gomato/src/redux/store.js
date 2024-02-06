import { configureStore } from '@reduxjs/toolkit'
import Hamburgerslice from './slices/Hamburgerslice';
const store = configureStore({
    reducer: {
        Hamburger: Hamburgerslice
    }
})
export default store;