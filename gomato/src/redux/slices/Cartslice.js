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
            for (let i = 0; i < state.items.length; i++) {
                state.totalPrice += state.items[i].price
            }
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items = []
        }

    }
})
export const { addItem, removeItem, clearCart } = cart.actions;
export default cart.reducer;