import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';
import Books from './Ui/books';
import Categories from './Ui/categories';
import './style.css';
import '@fontsource/roboto-slab';
/* eslint-disable react/jsx-key */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Books />} />
          <Route path="/categories" exact element={<Categories />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
