import React from 'react';
import './EmployeeCarousel.css';

const EmployeeCarousel = () => {
  const teamDetails = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      description: 'Leads the company with a vision to innovate and transform the real estate industry.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      description: 'Oversees the development of cutting-edge technology to enhance user experience.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      role: 'CFO',
      description: 'Manages financial strategies to ensure sustainable growth and profitability.',
    },
    {
      id: 4,
      name: 'Bob Brown',
      role: 'COO',
      description: 'Ensures operational excellence and seamless execution of business strategies.',
    },
  ];

  return (
    <div className="employee-carousel">
      <h2>Meet Our Team</h2>
      <div className="carousel-container">
        {teamDetails.map((member) => (
          <div key={member.id} className="employee-card">
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCarousel;