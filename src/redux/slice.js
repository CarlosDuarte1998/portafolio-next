import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: "itemActive",
    initialState: {
        itemName: '',
    },
    reducers: {
        guardarItem: (state, action) => {
            state.itemName = action.payload;
        }
    }

});

export const { guardarItem } = Slice.actions;