import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [
        {
            id: 1,
            counter: 0
        },
        {
            id: 2,
            counter: 0
        },
        {
            id: 3,
            counter: 0
        },
        {
            id: 4,
            counter: 0
        },
        {
            id: 5,
            counter: 0
        },
        {
            id: 6,
            counter: 0
        },
        {
            id: 7,
            counter: 0
        },
        {
            id: 8,
            counter: 0
        },
        {
            id: 9,
            counter: 0
        },
        {
            id: 10,
            counter: 0
        },
    ],
    totalItems: 0
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value.map(value => {
                if (value.id == action.payload) {
                    value.counter += 1;
                    state.totalItems +=1;
                }
            })
        },
        decrement: (state, action) => {
            state.value.map(value => {
                if (value.id == action.payload) {
                    if (value.counter != 0) {
                        value.counter -= 1;
                        state.totalItems -= 1;
                    }
                }

            })
        },
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer