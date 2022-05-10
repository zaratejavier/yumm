import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Yumm</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;
