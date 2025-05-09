import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navBarStyle = {
    width: '100%', // Ensure the navbar takes full width
    position: 'fixed', // Fix the navbar to the top
    top: '0', // Position it at the top
    left: '0', // Ensure it aligns to the left
    zIndex: '1000', // Keeps navbar above other content
    fontFamily: '"Poppins", sans-serif',
  };

  const navBarLinksStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px', // Adjust padding as needed
    backgroundColor: 'black', 
    color: 'white',
    fontSize: '18px',
    width: '100%', // Full width
  };

  const brandTextStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: 'white',
    textDecoration: 'none',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 16px',
    margin: '0 10px',
    fontWeight: '500',
  };
  const hoverStyle = {
    ...linkStyle,
    color: 'yellow', // Change color to yellow on hover
  };
 
  const linkHoverStyle = {
    color: '#FFEB3B', 
  };

  return (
    <div style={navBarStyle}>
      <div style={navBarLinksStyle}>
        <Link to="/" style={brandTextStyle}>Snack Sprint</Link>
        <nav>
          <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0,justifyContent: 'space-between', width: '100%'  }}>
            <li>
              <Link to="/" style={linkStyle} 
                    onMouseEnter={e => e.target.style.color = '#FFEB3B'} 
                    onMouseLeave={e => e.target.style.color = 'white'}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={linkStyle}
                    onMouseEnter={e => e.target.style.color = '#FFEB3B'}
                    onMouseLeave={e => e.target.style.color = 'white'}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" style={linkStyle}
                    onMouseEnter={e => e.target.style.color = '#FFEB3B'}
                    onMouseLeave={e => e.target.style.color = 'white'}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" style={linkStyle}
                    onMouseEnter={e => e.target.style.color = '#FFEB3B'}
                    onMouseLeave={e => e.target.style.color = 'white'}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" style={linkStyle}
                    onMouseEnter={e => e.target.style.color = '#FFEB3B'}
                    onMouseLeave={e => e.target.style.color = 'white'}>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
