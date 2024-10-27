import React from 'react';

import './ContactUs.scss';

const ContactUs = () => {
  return (
    <div className="contact-us"  id="contact">

      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?..."
          title="Google Map"
          className="map-iframe"
          allowFullScreen
        ></iframe>
      </div>
      <div className="contact-info">
        <h2>Meet us</h2>
        <ul>
          <li><span role="img" aria-label="phone">📞</span>+91 8935802137</li>
          <li><span role="img" aria-label="email">📧</span>kumarrituraj2000@gmail.com</li>
          <li><span role="img" aria-label="location">📍</span> Sai Darshan Pg, Griwal Socity, Lane no - 2, Pune, Maharastra. 411014</li>
        </ul>
      </div>
      <div className="pitch-form">
        <h2>Pitch us</h2>
        <form>
          <p>
            Hello, my name is <input type="text" placeholder="your name" /> and
            my e-mail address is <input type="email" placeholder="your e-mail" />.
            I would like to discuss about <input type="text" placeholder="this project" />.
          </p>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
