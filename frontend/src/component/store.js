import { configureStore } from "@reduxjs/toolkit";
import  bookSlice from "./slices/books";
import counterSlice from "./slices/counterSlice";
export  const store= configureStore({
    reducer:{
        book:bookSlice,
        counter:counterSlice
    }
});