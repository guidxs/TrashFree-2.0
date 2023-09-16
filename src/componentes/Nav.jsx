import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <header>
      <img className="logo" src="./assets/logo.png" alt="logo" />
      <nav className="navigation">
        <Link to="/">PÁGINA INICIAL</Link>
        <Link to="/aplicativo">APLICATIVO</Link>
        <Link to="/projeto">PROJETO</Link>
        <Link to="/sobre">SOBRE NÓS</Link>
        <Link to="/login">LOGIN</Link>
      </nav>
    </header>
  );
}

export default Nav;