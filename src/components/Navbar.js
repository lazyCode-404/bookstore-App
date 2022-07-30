import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="navbar">
      <h1 className="nav-heading">Bookstore CMS</h1>
      <div className="nav-links">
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </div>
    </div>
  </>
);

export default Navbar;
