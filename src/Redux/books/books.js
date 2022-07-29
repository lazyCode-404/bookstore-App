const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const GET_BOOKS = 'books/GET_BOOKS';

const initialState = [];

// Actions

export const addBook = (payload) => ({ type: ADD_BOOK, payload });

export const getBook = (payload) => ({ type: ADD_BOOK, payload });

export const deleBook = (bookId) => (
  {
    type: REMOVE_BOOK,
    id: bookId,
  });

// Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case GET_BOOKS:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};
  // export default reducer;
export default reducer;
