import { createSlice } from "@reduxjs/toolkit";

const Currentproductindex = createSlice({
    name: "currentindex",
    initialState: {
        value: 0
    },
    reducers: {
        toogleIndex: (state, action) => {
            state.value = action.payload
        }
    }
})
export default Currentproductindex.reducer;
export const { toogleIndex } = Currentproductindex.actions