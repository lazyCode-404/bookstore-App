import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import BookContent from './Book';

const BookContainer = () => {
  const data = useSelector((state) => state.booksReducer);
  const books = data;
  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
