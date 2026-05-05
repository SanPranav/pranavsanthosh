import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/work', label: 'Work' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          PRANAV.SANTHOSH
        </Link>

        <button 
          className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Backdrop for floating modal menu on mobile */}
        {isMenuOpen && <div className="navbar__backdrop" onClick={toggleMenu} />}

        <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`} role="dialog" aria-modal={isMenuOpen}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
