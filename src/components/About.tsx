import React from 'react';

import './About.scss';

const About = () => {
  return (
    <section className="about" id='about'>
      <div className="about__container">
        <h2 className="about__title">About Us</h2>
        <p className="about__description">
          Welcome to Sweet-Home! Our mission is to provide comfortable, affordable, and modern living spaces. 
          Whether you are looking to rent an apartment or find your dream home, we are here to help. 
          Our platform is designed to simplify your search and provide detailed information about each property.
        </p>
        <p className="about__mission">
          At Sweet-Home, we believe in offering exceptional service and a seamless experience for all our users. 
          Our team is dedicated to ensuring that you find a place you can truly call home.
        </p>
        <p className="about__vision">
          With years of experience in the real estate market, our goal is to bring innovation and efficiency to the 
          property rental industry. Join us in our journey to redefine home renting and buying experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
