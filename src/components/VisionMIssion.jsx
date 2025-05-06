import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <div className="vision-mission">
      <h2>Our Vision & Mission</h2>
      <div className="vision">
        <h3>Vision</h3>
        <p>
          To revolutionize the real estate industry by providing a transparent, efficient, and innovative platform for property transactions. 
          We aim to empower individuals and businesses to make informed decisions by leveraging cutting-edge technology and data-driven insights.
        </p>
        <p>
          Our vision is to create a seamless and trustworthy ecosystem where buyers, sellers, and investors can connect and thrive in a dynamic marketplace.
        </p>
      </div>
      <div className="mission">
        <h3>Mission</h3>
        <p>
          To connect buyers and sellers seamlessly, ensuring trust, transparency, and satisfaction in every transaction. 
          We are committed to delivering exceptional value through unparalleled customer service, advanced tools, and a user-friendly experience.
        </p>
        <p>
          Our mission is to foster long-term relationships by prioritizing integrity, innovation, and excellence in every aspect of our business.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;