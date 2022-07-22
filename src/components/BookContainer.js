import React from 'react';
import BookContent from './Book';
import AddBook from './AddBook';

const BookContainer = () => {
  const books = [
    {
      title: 'The road to success',
      author: 'Bwalya Nonde',
      id: 1,
      category: 'Business',
    },
    {
      title: 'To Kill a Mockingbird ',
      author: 'Harper Lee',
      id: 2,
      category: 'Novel',
    },
  ];

  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
