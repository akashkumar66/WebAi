import React, { useState, useEffect } from 'react';
import logo from '../iconsbase-logo.png';
import './Navbar.css';

const Navbar = ({ onLoginClick, onApplyClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" onClick={scrollToTop} className="logo" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="IconsBase Logo" 
            style={{ height: '45px', width: 'auto' }} 
          />
        </a>

        <div className="nav-links">
          <a href="#curriculum">Curriculum</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#connect">Connect</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="nav-actions">
          <button className="btn btn-outline" onClick={onLoginClick}>Log In</button>
          <button className="btn btn-primary" onClick={onApplyClick}>
            Join Cohort
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
