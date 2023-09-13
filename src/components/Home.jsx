import React, { useState } from 'react';

const Home = () => {
  const containerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    fontSize: '15px',
    margin: '10px',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
    textAlign: 'center',
    border: '1px solid #fff',
    borderRadius: '25px',
    padding: '10px',
    width: '200px',
    backgroundColor: '#333',
  };

  const listItemHoverStyle = {
    backgroundColor: '#555',
    cursor: 'default',
  };

  const role = localStorage.getItem('roles');
  const rolesArray = JSON.parse(role);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to the Vikrant Forge</h1>
      <p style={paragraphStyle}>You have permission to manage the following:</p>
      <ul style={listStyle}>
        {rolesArray && rolesArray.map(role => {
          const [isHovered, setIsHovered] = useState(false);

          const handleMouseEnter = () => {
            setIsHovered(true);
          };

          const handleMouseLeave = () => {
            setIsHovered(false);
          };

          const mergedItemStyle = {
            ...listItemStyle,
            ...(isHovered && listItemHoverStyle),
          };

          return (
            <li
              key={role}
              style={mergedItemStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {role.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
