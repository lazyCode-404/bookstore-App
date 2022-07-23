import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
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
      <button type="button" id={id}>Remove</button>
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
