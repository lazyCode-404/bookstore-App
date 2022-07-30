import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import AddBook from './AddBook';

const BookContainer = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="main-container">
      {books.map((book) => (
        <div key={book.id}>
          <li className="books-content">
            {book.title}
            {' by '}
            {book.author}
            {' - '}
            {book.category}
          </li>
          <button type="button" id={book.id}>Remove</button>
        </div>
      ))}
      <AddBook />
    </div>
  );
};
export default BookContainer;
