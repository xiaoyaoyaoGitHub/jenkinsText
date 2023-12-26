import { createSlice } from "@reduxjs/toolkit"

const countStore = createSlice({
    name: 'count',
    initialState: {
        count: 0,
        msg: 'Hello world'
    },
    reducers: {
        addNumber(state, { payload }) {
            state.count = state.count + payload
        },
        subNumber(state, { payload }) {
            state.count = state.count - payload
        },
        changeMessageAction(state, { payload }) {
            state.msg = payload
        }
    }
});

export const { addNumber, subNumber, changeMessageAction } = countStore.actions
export default countStore.reducer