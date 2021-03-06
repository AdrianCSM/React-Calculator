import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    width: '100vw',
    position: 'fixed',
    top: 0,
    padding: '1rem 0',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  const titleStyle = {
    left: 0,
    fontSize: '3rem',
  };

  const listStyle = {
    listStyleType: 'none',
    display: 'flex',
    fontSize: '1.3rem',
  };

  const itemStyle = {
    padding: '1rem',
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <h1 style={titleStyle}>
          <NavLink to="/math-magicians" rel="noopener noreferrer">Math Magicians Calculator</NavLink>
        </h1>
        <ul style={listStyle}>
          <li style={itemStyle}><NavLink to="/Home" rel="noopener noreferrer">Home</NavLink></li>
          <li style={itemStyle}><NavLink to="/math-magicians" rel="noopener noreferrer">Calculator</NavLink></li>
          <li style={itemStyle}><NavLink to="/Quote" rel="noopener noreferrer">Quote</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
