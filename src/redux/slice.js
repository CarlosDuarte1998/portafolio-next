import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: "valores",
    initialState: {
        counter: 0,
    },
    reducers: {
        guardarCounter: (state, action) => {
            state.counter = state.counter + 1;
        }
    }

});

export const { guardarCounter } = Slice.actions;