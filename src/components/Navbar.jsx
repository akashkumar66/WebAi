import React, { useState, useEffect } from 'react';
import { Clock, Phone, Laptop, Users, ChevronDown } from 'lucide-react';
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
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <Clock size={14} className="top-icon" />
              <span>Institute Visit Time: 9am-6pm, Mon-Sat</span>
            </div>
            <div className="top-bar-item">
              <Phone size={14} className="top-icon" />
              <span>+91 7030400090</span>
            </div>
          </div>
          <div className="top-bar-right">
            <div className="top-bar-item">
              <Laptop size={14} className="top-icon" />
              <span>Online Batch - 5/Jan</span>
            </div>
            <div className="top-bar-item">
              <Users size={14} className="top-icon" />
              <span>Offline Batch - 7/Jan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav">
        <div className="container nav-container">
          <a href="#" onClick={scrollToTop} className="logo" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="IconsBase Logo"
              style={{ height: '60px', width: 'auto' }}
            />
          </a>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="#portfolio">Placements</a>
            <a href="#curriculum">Journey</a>
            <a href="#testimonials">About Us</a>
            <a href="#connect" className="more-link">
              More <ChevronDown size={14} />
            </a>
          </div>

          <div className="nav-actions">
            <button className="btn demo-btn" onClick={onApplyClick}>
              BOOK DEMO CLASS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
