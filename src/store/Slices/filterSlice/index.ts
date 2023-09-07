import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EnumFilterCategories, EnumFilterSortBy, TFilter } from "../../../types/Filter";




const initialState:TFilter = {
    search: '',
    categories: EnumFilterCategories.ALL,
    sortBy: EnumFilterSortBy.RELEVANCE,
    limit: 30,
    page: 1
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<Omit<TFilter, 'limit'|'page'>>) => {
            state.search = action.payload.search;
            state.categories = action.payload.categories;
            state.sortBy = action.payload.sortBy;
        },
        setFilterSort: (state, actions: PayloadAction<Omit<TFilter, 'limit'|'page'|'search'>>) => {
            state.categories = actions.payload.categories;
            state.sortBy = actions.payload.sortBy;
        },

        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },

        clearFilter: (state) => {
            state.search = '';
            state.categories = EnumFilterCategories.ALL;
            state.sortBy = EnumFilterSortBy.RELEVANCE;
            state.limit = 30;
            state.page = 1;
        }
    }
})

export const { setFilter, setFilterSort, setSearch, setPage, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;