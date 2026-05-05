import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);
  const rafId = useRef(null);
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

  useEffect(() => {
    const scrollThreshold = 8;

    const updateNavbarVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 0) {
        setIsNavbarVisible(true);
      } else if (Math.abs(scrollDelta) >= scrollThreshold) {
        if (scrollDelta > 0) {
          setIsNavbarVisible(false);
        } else {
          setIsNavbarVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
      rafId.current = null;
    };

    const handleScroll = () => {
      if (rafId.current !== null) {
        return;
      }

      rafId.current = window.requestAnimationFrame(updateNavbarVisibility);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsNavbarVisible(true);
    }
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isNavbarVisible ? 'navbar--visible' : 'navbar--hidden'} ${isMenuOpen ? 'navbar--menu-open' : ''}`}>
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          PRANAV.SANTHOSH
        </Link>

        <button 
          className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
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
