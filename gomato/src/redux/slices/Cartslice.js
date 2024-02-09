import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)

        },
        addPrice: (state, action) => {
            state.totalPrice += action.payload
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
        }

    }
})
export const { addItem, removeItem, clearCart, addPrice } = cart.actions;
export default cart.reducer;