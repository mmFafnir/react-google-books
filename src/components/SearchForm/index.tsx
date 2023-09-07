import { FC, FormEvent, useState,useRef, useEffect } from 'react';

import { useTypeDispatch } from '../../hooks/useTypeDispatch';
import { EnumFilterCategories, EnumFilterSortBy } from '../../types/Filter';

import Select from '../UI/Select';

import './style.scss'
import { setFilterSort, setSearch } from '../../store/Slices/filterSlice';
import { useTypeSelector } from '../../hooks/useTypeSelector';


const listCategories = [
    EnumFilterCategories.ALL,
    EnumFilterCategories.ART,
    EnumFilterCategories.BIOGRAPHY,
    EnumFilterCategories.COMPUTERS,
    EnumFilterCategories.HISTORY,
    EnumFilterCategories.MEDICAL,
    EnumFilterCategories.POETRY
]

const listSortBy = [
    EnumFilterSortBy.RELEVANCE,
    EnumFilterSortBy.NEWEST,
]

const SearchForm:FC = () => {

    const dispatch = useTypeDispatch();
    
    const { search, sortBy, categories} = useTypeSelector(state => state.filter);

    const refSearchInput = useRef<HTMLInputElement>(null);
    const [categoriesCurrent, setCategoriesCurrent] = useState<EnumFilterCategories>(categories);
    const [sortByCurrent, setSortByCurrent] = useState<EnumFilterSortBy>(sortBy);

    
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const search = refSearchInput.current ? refSearchInput.current.value : '';
        dispatch(setSearch(search))
    }

    useEffect(() => {
        dispatch(setFilterSort({
            categories: categoriesCurrent,
            sortBy:sortByCurrent
        }))
    }, [sortByCurrent, categoriesCurrent])

    return (
        <div className='search-form'>
            <div className="search-form__wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="input-search">
                        <input 
                            ref={refSearchInput}
                            type="text"
                            placeholder='Search books...'
                            defaultValue={search}
                         />
                         <button type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                         </button>
                    </div>
                    <div className="search-form__sort">
                        <Select  
                            state={categoriesCurrent}
                            title={'Caregories'}
                            setState={(value: string) => setCategoriesCurrent(value as EnumFilterCategories)} 
                            list={listCategories}
                        />  
                        <Select 
                            state={sortByCurrent}
                            title={'Sort by'}
                            setState={(value: string) => setSortByCurrent(value as EnumFilterSortBy)} 
                            list={listSortBy}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;