import React from 'react';
import './HomePage.css';
import berkeleyImage from '../images/berkeley.jpg';

const HomePage = () => {
    return (
      <div className="home-container">
        <div className="home">
          <h1>Welcome to Noteworthy</h1>
          <p>This is the home of the Noteworthy acapella group.</p>
        </div>
        {/* The image will appear underneath the blue element */}
        <img src={berkeleyImage} alt="Description" className="home-image" />
      </div>
    );
  };

export default HomePage;
