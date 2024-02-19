import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'count',
    initialState: {
        count: 0
    },
    reducers: {
        increment(state, action) {
            state.count += 1
        },
        decrement(state, action) {
            state.count -= 1
        }
    }
})

export const {increment, decrement} = countSlice.actions
export default countSlice.reducer