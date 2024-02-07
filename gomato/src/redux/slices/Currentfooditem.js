import { createSlice } from '@reduxjs/toolkit'
const CurrentFooditem = createSlice({
    name: "currentitem",
    initialState: {
        item: 'burger'
    },
    reducers: {
        changeItem: (state, action) => {
            state.item = action.payload
        }
    }
})
export const { changeItem } = CurrentFooditem.actions
export default CurrentFooditem.reducer