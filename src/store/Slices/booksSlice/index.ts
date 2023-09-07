
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import GoogleBook from "../../../types/GoogleBook";
import { fetchBooks } from "./asyncAction";
import { Status } from "../../../types/Status";
import { TBook } from "../../../types/Book";
import { convertGoogleBookToBookArray } from "../../../assets/scripts/ConvertGoogleBookToBook";


interface IState {
    totalItems: number,
    items: TBook[],
    full: boolean,
    status: Status
}
const initialState:IState = {
    totalItems: 0,
    items: [],
    full: false,
    status: Status.LOADING
}


const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        clearBooksState: (state) => {
            state = initialState;
        }
    },
    extraReducers: (builder) => {

        //fetch books
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = Status.LOADING;
            state.full = false
        });   
        builder.addCase(fetchBooks.fulfilled, (state, actions) => {
            state.status = Status.SUCCESS;
            state.items = [...state.items, ...convertGoogleBookToBookArray(actions.payload.items)];
            state.full = actions.payload.full;
            state.totalItems = actions.payload.totalItems

        });
        builder.addCase(fetchBooks.rejected, (state) => {
            state.status = Status.ERROR
            alert('Произошла ошибка при загрузке файлов')
        });
   
    }
})


export const { clearBooksState } = booksSlice.actions;
export default booksSlice.reducer;