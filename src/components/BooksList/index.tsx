import { FC, useEffect, useState } from 'react';
import { useTypeDispatch } from '../../hooks/useTypeDispatch';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchBooks } from '../../store/Slices/booksSlice/asyncAction';
import { setPage } from '../../store/Slices/filterSlice';
import { clearBooksState } from '../../store/Slices/booksSlice';
import { Status } from '../../types/Status';

import SkeletonBook from '../BookCard/SkeletonBook';
import BookCard from '../../components/BookCard';

import './style.scss';

const BooksList:FC = () => {

    const { search, sortBy, categories, limit, page } = useTypeSelector(state => state.filter);
    const { items, status, totalItems, full } = useTypeSelector(state => state.books);

    const dispatch = useTypeDispatch();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleLoadMoreBooks = () => {
        const nextPage = page+1;
        dispatch(setPage(nextPage));
        dispatch(fetchBooks({
            search, sortBy, categories, limit, page: nextPage
        }))
    } 

    useEffect(() => {
        setIsLoading(true)
        if(search.trim().length == 0) {
            dispatch(clearBooksState());
            return
        }
        dispatch(fetchBooks({
            search, sortBy, categories, limit, page
        })).then(res => {
            setIsLoading(false)
        })
    }, [search, sortBy, categories, limit]);



    return (
            <div className='book-list'>
                {search.trim().length == 0 ? (
                    <h2 className='start-read'>Search, read, develop</h2>
                ) : (<>

                    <p className="total-search-books">
                        {status === Status.LOADING ? 'Loading...' :
                         (status === Status.SUCCESS && items.length > 0) ? `${totalItems} books found` : 
                            'Nothing found, try again'}
                    </p>
                    
                    {!isLoading ? (items.map((item, index) => (
                        <BookCard key={index + item.id} item={item}/>
                    ))) : (
                        [1,2,3,4,5,6,7,8,9,10].map(index => (
                            <SkeletonBook key={index}/>
                        ))
                    )}
                    {(!full && !isLoading && items.length > 0) && (
                        <div className="load-more">
                            <button className={status === Status.LOADING ? 'loading' : ''} onClick={handleLoadMoreBooks}>
                                {status === Status.LOADING ? (
                                    <span className='spinner'></span>
                                ) : (
                                    <span>Load more</span> 
                                )}
                            </button>
                        </div>
                    )}
                </>)}   
            </div>
    );
};

export default BooksList;