import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
    name : "result",
    initialState : {
        value : 0
    },
    reducers : {
        plus : (state,action) => {
            state.value += action.payload
        },
        minus : (state,action) => {
            state.value -= action.payload
        },
        multiply : (state,action) => {
            state.value *= action.payload
        },
        divide : (state,action) => {
            state.value /= action.payload
        }
    }

});

export const {plus,minus,multiply,divide} = resultSlice.actions;

export const selectResult = (state) => state.result.value;

export default resultSlice.reducer;