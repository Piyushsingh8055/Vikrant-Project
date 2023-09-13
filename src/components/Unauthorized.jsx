import React from 'react';

const Unauthorized = () => {
  const containerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const headingStyle = {
    color: 'red',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Unauthorized Access</h1>
      <p style={paragraphStyle}>You don't have permission to access this page.</p>
      {/* Add any other content or components you want */}
    </div>
  );
};

export default Unauthorized;
