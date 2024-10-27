import React from 'react';
import Navbar from './Navbar.tsx'
import './Home.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-page__content">
        <h2>Welcome to MyApp</h2>
        <p>Your one-stop solution for managing everything!</p>
      </div>
    </div>
  );
};

export default HomePage;