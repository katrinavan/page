import React from 'react';
import memberImage from '../images/Untitled_Artwork.png';
import './MemberPage.css';

const MemberPage = () => {
    return (
      <div className="member-page">
        <h1>Our Team</h1>
        <img src={memberImage} alt="Cute mascot" className="member-image"/>
        {/* ... other member content ... */}
      </div>
    );
  };
  
  export default MemberPage;