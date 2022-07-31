const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0rEygoqQl0ydZM9Udgpd/books';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  const {
    id, title, author, category,
  } = payload;
  if (id !== '' && title !== '' && category !== '' && author !== '') {
    const request = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        author,
        title,
        category,
      }),
    });
    if (request.status === 201) {
      dispatch({
        type: ADD_BOOK,
        payload,
      });
    }
  }
};

export const removeBook = (payload) => async (dispatch) => {
  const request = await fetch(`${BASE_URL}/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (request.status === 201) {
    dispatch({
      type: REMOVE_BOOK,
      payload,
    });
  }
};

export const getBooks = async (dispatch) => {
  const request = await fetch(BASE_URL);
  if (request.status === 200) {
    const items = await request.json();
    const payload = [];
    Object.keys(items).forEach((id) => {
      const { category, title, author } = items[id][0];
      payload.push({
        id, title, author, category,
      });
    });
    dispatch({
      type: GET_BOOKS,
      payload,
    });
  }
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case GET_BOOKS: return action.payload;
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
};

export default booksReducer;
