import React from 'react';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import About from './About';

import './Home.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-page__content">
        <h2>Welcome to MyApp</h2>
        <p>Your one-stop solution for managing everything!</p>
      </div>
      <About />
      <ContactUs />
    </div>
  );
};

export default HomePage;
