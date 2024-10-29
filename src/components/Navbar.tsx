import React from 'react';
import Button from './Button.tsx';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Sweet-Home</h1>
      <ul className="navbar__links">
        <li className="navbar__item">
          <a href="/#about">About</a>
        </li>
        <li className="navbar__item">
          <a href="/#contact">Contact</a>
        </li>
        <li>
          <Button text="Login" onClick={() => navigate('/login')} type="button" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
