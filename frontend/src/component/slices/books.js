import { createSlice } from "@reduxjs/toolkit";
import { GetBooks } from "../middleware/bookMiddleware";

export const initialState={
    books:[],
    loading:false,
    error:null
}

export const bookSlice= createSlice({
    name:"book",
    initialState:initialState,
    extraReducers:{
        [GetBooks.fulfilled]:(state,action)=>{
            state.books=action.payload.data.books
        },
        [GetBooks.rejected]:(state,action)=>{
            state.books=[]
        },
    }
})

export default bookSlice.reducer