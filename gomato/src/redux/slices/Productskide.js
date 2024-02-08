import { createSlice } from "@reduxjs/toolkit";

const Productslide = createSlice({
    name: 'productslide',
    initialState: {
        value: false
    },
    reducers: {
        toogleBar: (state) => {
            state.value = !state.value
        }
    }
})
export const { toogleBar } = Productslide.actions;
export default Productslide.reducer;