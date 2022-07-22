import React from 'react';

const AddBook = () => (
  <>
    <div className="add-container">
      <h2>ADD NEW BOOK</h2>
      <form action="#" method="post">
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Book Author" />
        <button type="button">Add Book</button>
      </form>

    </div>
  </>
);

export default AddBook;
