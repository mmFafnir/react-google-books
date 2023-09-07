import { FC } from 'react';

import SearchForm from '../../components/SearchForm';
import BooksList from '../../components/BooksList';

import './style.scss';

const Main:FC = () => {
    return (
        <div className="book-store-main">
            <div className="book-store-main__header">
                <img src="https://phonoteka.org/uploads/posts/2021-04/1617682426_2-p-knizhnii-fon-2.jpg" className='book-store-main__header_bg' />
                <SearchForm/>
            </div>
            <div className="book-store-main__body container">
                <BooksList />
            </div>
        </div>
    );
};

export default Main;