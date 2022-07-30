import { Link } from 'react-router-dom';
import { ImMan } from 'react-icons/im';
/* eslint-disable react/jsx-key */
const Header = () => (
  <div className="nav-card d-flex">
    <div className="nav-content d-flex">
      <h3>Bookstore CMS</h3>
      <ul className="navbar d-flex">
        <li className="menu-item">
          <Link className="active-nav" to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link className="non-active-nav" to="/categories">Categories</Link>
        </li>
      </ul>
      <div className="icon-div">
        <ImMan className="icon" />
      </div>
    </div>
  </div>

);

export default Header;
