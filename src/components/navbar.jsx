import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/"><h1>Hacker News App</h1></Link>
        <Link to="/bookmarks">Bookmarks</Link>
        <button>Notifications</button>
      </nav>
    </header>
  )
}

export default NavBar;
