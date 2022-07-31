import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
/* eslint-disable react/jsx-key */
const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const submitBookToStore = () => {
    const id = uuidv4();
    const newBook = {
      id,
      author,
      title,
      category,
    };
    dispatch(addBook(newBook));
  };

  const setCategoryState = (e) => {
    setCategory(e);
  };

  return (
    <div className="form">
      <h3>ADD NEW BOOK</h3>
      <form className="book-form d-flex">
        <input type="text" onChange={(e) => setAuthor(e.target.value)} placeholder="author" />
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="enter book name" />
        <select className="select" onChange={(e) => setCategoryState(e.target.value)}>
          <option value="">Select</option>
          <option value="Novel">Novel</option>
          <option value="romance">Romance</option>
          <option value="action">Action</option>
          <option value="Godly">Bible Story book</option>
        </select>
        <button className="bg-blue add-button" onClick={submitBookToStore} type="button">Add</button>
      </form>
    </div>
  );
};

export default BookForm;
