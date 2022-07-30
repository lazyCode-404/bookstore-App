import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getBooks, removeBook } from '../redux/books/books';
/* eslint-disable react/jsx-key */
const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks);
  }, []);
  const books = useSelector((state) => state.booksReducer);
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    books.map(({
      category, title, author, id, number = Math.floor(Math.random() * 100),
    }) => (
      <div key={id} className="item-card">
        <div className="item-start">
          <div className="item-main">
            <p className="title">{title}</p>
            <p className="author">{author}</p>
            <p className="blue-text">{category}</p>
          </div>
          <ul className="options-list">
            <li className="item">
              <button className="item-button blue-text" type="button">Comments</button>
            </li>
            <li className="item remove">
              <div className="vertical-separator" />
              <button className=" item-button blue-text" type="button" onClick={() => removeBookFromStore(id)}>Remove</button>
              <div className="vertical-separator" />
            </li>
            <li className="item">
              <button className="item-button blue-text" type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className="item-middle">
          <div className="progress-bar">
            <CircularProgressbar value={number} />
          </div>
          <p>
            <span className="pecent-text">
              {number}
              %
            </span>
            <br />
            <span className="grey completed">
              Completed
            </span>
          </p>
        </div>
        <div className="item-end">
          <p className="light-grey">CURRENT CHAPTER</p>
          <p className="grey">CHAPTER 17</p>
          <button className="update-button bg-blue" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    ))
  );
};

export default BookList;
