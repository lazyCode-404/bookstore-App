import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../Redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const postBook = () => {
    const booksData = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(booksData));
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <div className="add-container">
        <h2>ADD NEW BOOK</h2>
        <form>
          <input type="text" placeholder="Book Title" onChange={handleTitle} />
          <input type="text" placeholder="Book Author" onChange={handleAuthor} />
          <input type="text" placeholder="Category" onChange={handleCategory} />
          <button type="button" onClick={postBook}>Add Book</button>
        </form>

      </div>
    </>
  );
};

export default AddBook;
