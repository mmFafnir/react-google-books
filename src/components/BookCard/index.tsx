import { FC } from 'react';

import { TBook } from '../../types/Book';
import { Link } from 'react-router-dom';

import './style.scss'

interface IProps {
    item: TBook
}

const BookCard:FC<IProps> = ({item}) => {
    

    return (
        <div className="book-card">
            <div className="book-card__wrapper">
                <div className="book-card__img">
                    <Link to={'/books/' + item.id}>
                        <img src={item.image} alt={item.title} />
                    </Link>
                </div>
                <div className="book-card__title">
                    <h3>
                        <Link to={'/books/' + item.id}>
                            {item.title.substring(0, 64) }{item.title.length > 64 ? '...' : ''}
                        </Link>
                    </h3>
                </div>
                {item.authors.length !== 0 ? (
                    <div className="book-card__author">
                        <p>Author: {item.authors.join(',')}</p>
                    </div>
                ) : null}
                {item.categories ? (
                    <div className="book-card__category">
                        <p>
                            Categories: {item.categories[0]}
                        </p>
                    </div>
                ) : null} 
            </div>
        </div>
    );
};

export default BookCard;