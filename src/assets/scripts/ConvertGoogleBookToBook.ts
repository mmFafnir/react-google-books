import { TBook } from "../../types/Book";
import GoogleBook from "../../types/GoogleBook";



export const convertGoogleBookToBook = (book: GoogleBook): TBook => {
    let image = 'https://via.placeholder.com/150';
    if (book.volumeInfo.imageLinks) {
        image = book.volumeInfo.imageLinks.extraLarge;
        if (typeof image === 'undefined') {
            image = book.volumeInfo.imageLinks.large;
        }
        if (typeof image === 'undefined') {
            image = book.volumeInfo.imageLinks.medium;
        }
        if (typeof image === 'undefined') {
            image = book.volumeInfo.imageLinks.small;
        }
        if (typeof image === 'undefined') {
            image = book.volumeInfo.imageLinks.smallThumbnail;
        }
        if (typeof image === 'undefined') {
            image = book.volumeInfo.imageLinks.thumbnail;
        }
    }

    const bookRes:TBook = {
        id: book.id,
        authors: book.volumeInfo.authors ? book.volumeInfo.authors : [],
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        publisher: book.volumeInfo.publisher,
        publishedDate: book.volumeInfo.publishedDate,
        image,
        link: book.volumeInfo.infoLink,
        rating: book.volumeInfo.averageRating,
        description: book.volumeInfo.description
    }
    if(book.volumeInfo.categories) {
        bookRes['categories'] = book.volumeInfo.categories;  
    }

    return bookRes;
}


export const convertGoogleBookToBookArray = (items:GoogleBook[]): TBook[] => {
    const books:TBook[] = [];
    if(items.length === 0) return books;
    items.forEach(item => {
        books.push(
            convertGoogleBookToBook(item)
        )
    })
    return books
}