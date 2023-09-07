import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./Slices/booksSlice";
import filterSlice from "./Slices/filterSlice";



export const store = configureStore({
    reducer: {
        books: booksSlice,
        filter: filterSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;