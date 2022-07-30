import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import Header from '../components/header';
/* eslint-disable react/jsx-key */
const Books = () => (
  <div>
    <Header />
    <BookList />
    <BookForm />
  </div>
);

export default Books;
