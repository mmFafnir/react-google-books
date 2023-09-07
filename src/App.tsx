import {Routes, Route} from 'react-router-dom'
import { FC } from 'react';

import Header from './components/Header';
import Main from './Page/Main';

import './assets/scss/App.css';
import Book from './Page/Book';

const App:FC = () => {
  return (
    <div className="App">
      <div className="book-store">
        <Header />
        <Routes >
          <Route path='/' element={<Main />}/>
          <Route path='/books/:id' element={<Book />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
