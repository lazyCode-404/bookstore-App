import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../Redux/books/books';

const Books = (props) => {
  const dispatch = useDispatch();
  const {
    book: {
      title,
      author,
      id,
      category,
    },

  } = props;

  return (
    <>
      <li key={id} className="books-content">
        {title}
        {' by '}
        {author}
        {' - '}
        {category}
      </li>
      <button type="button" id={id} onClick={() => dispatch(deleteBook(id))}>Remove</button>
    </>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
