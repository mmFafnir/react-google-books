
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TBook } from '../../types/Book';
import { convertGoogleBookToBook } from '../../assets/scripts/ConvertGoogleBookToBook';

import axios from '../../axios';


import './style.scss'

const Book:FC = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [book, setBook] = useState<TBook|null>(null)

    const createMarkup = (str: string) =>  {return {__html: str}};

    useEffect(() => {
        axios.get(`/${id}`).then(res => {
            const book = convertGoogleBookToBook(res.data)
            setBook(book)
        }).catch(err => {
            alert('Book not found')  
            navigate('/')         
        })
    }, [])

    if(!book) return <div className='book-store-element-loading'><p className='spinner'></p></div> 
    return (
        <div className='book-store-element'>
            <div className="container">
                <button className='link-back' onClick={() => navigate(-1)}>Сome back</button>
            </div>
            <div className="book-store-element__wrapper container">
                <div className="book-store-element__img">
                    <div>
                        <img src={book.image} alt="" />
                    </div>
                </div>
                <div className="book-store-element__desc">
                    <h1>{book.title}</h1>
                    {
                        book.categories ? (
                            <div className="book-store-element__categories">
                                <p>Categories:</p>
                                {
                                    book.categories && book.categories.map((category, index) => (
                                        <p>{category}{index+1 == book.categories?.length ? '' : ','}</p>
                                    ))
                                }
                            </div>
                        ) : null
                    }
                    {
                        book.authors ? (
                            <div className="book-store-element__authors">
                                <p>
                                    {book.authors.length > 1 ? 'Authors' : 'Author'}:
                                </p>
                                {
                                    book.authors.map((author, index) => (
                                        <p>{author}{index+1 == book.authors?.length ? '' : ','}</p>
                                    ))
                                }
                            </div>
                        ) : null
                    }
                    <div className="book-store-element__text">
                        {
                            book.description ? (
                                <div dangerouslySetInnerHTML={createMarkup(book.description)} />
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;