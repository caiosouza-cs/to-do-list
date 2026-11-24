import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div>
        <h1 className="logo">to-do List</h1>
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="register">Cadastre-se</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
