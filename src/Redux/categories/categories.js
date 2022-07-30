const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const checkStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export const checkStatus = () => ({ type: CHECK_STATUS });
export default checkStatusReducer;
