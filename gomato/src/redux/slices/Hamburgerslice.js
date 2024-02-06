import { createSlice } from "@reduxjs/toolkit";

const HamBurgerslice = createSlice({
    name: 'hamburger',
    initialState: {
        isShown: false
    },
    reducers: {
        toogleHamburger: (state) => {
            state.isShown = !state.isShown
        }
    }
})
export default HamBurgerslice.reducer;
export const { toogleHamburger } = HamBurgerslice.actions