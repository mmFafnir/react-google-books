import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";
import { EnumFilterCategories, TFilter } from "../../../types/Filter";
import GoogleBook from "../../../types/GoogleBook";




 interface IFetchBooks {
    totalItems: number,
    items: GoogleBook[],
    full: boolean
}   

const getAsyncBooks = async (params:TFilter) => {
    const startIndex = (params.page - 1) * params.limit;
    let search = params.search + ' ' + 'subject:';
    if(params.categories !== EnumFilterCategories.ALL) {
        search = search + params.categories
    }
    
    const { data } = await axios.get('/', {
        params: {
            q: search, 
            orderBy: params.sortBy,
            startIndex,
            maxResults: params.limit,   
            key: process.env.GOOGLE_API_KEY
        }
    })
    if(!data.items) return {...data, items: [], full: true};
    return {...data, full: false}            
}


export const fetchBooks = createAsyncThunk<IFetchBooks, TFilter>(
    'books/fetchBooks', 
    getAsyncBooks
)



