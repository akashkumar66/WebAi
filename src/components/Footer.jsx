import React from 'react';
import logo from '../iconsbase-logo.png';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="theme-light" style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0 2rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div>
            <a href="#" onClick={scrollToTop} className="logo" style={{ textDecoration: 'none', color: 'inherit', marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <img 
                src={logo} 
                alt="IconsBase Logo" 
                style={{ height: '55px', width: 'auto' }} 
              />
            </a>
            <p style={{ color: 'var(--text-secondary)' }}>
              The premier training program for the next generation of AI-augmented web developers. Build faster, better, smarter.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Program</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li><a href="#curriculum" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Curriculum</a></li>
              <li><a href="#testimonials" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Testimonials</a></li>
              <li><a href="#connect" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Connect</a></li>
              <li><a href="#faq" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Legal</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Terms of Service</a></li>
              <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Privacy Policy</a></li>
              <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          color: 'var(--text-secondary)', 
          fontSize: '0.875rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div>&copy; {new Date().getFullYear()} IconsBase AI Cohort. All rights reserved.</div>
          
          {/* Credit Section */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            borderRadius: '0.375rem',
            padding: '0.25rem 0.5rem',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
          }}>
            <a
              href="https://fabulousmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: '0.25rem',
                padding: '0.125rem',
                opacity: 0.9,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1)'; }}
              aria-label="FabulousMedia"
            >
              <img
                src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                alt="FabulousMedia"
                style={{ height: '0.75rem', width: 'auto', filter: 'invert(1)' }}
                loading="lazy"
              />
            </a>
            <div style={{ height: '0.75rem', width: '1px', backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
            <a
              href="https://gocommercially.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: '0.25rem',
                padding: '0.125rem',
                opacity: 0.9,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1.1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1)'; }}
              aria-label="GoCommercially"
            >
              <img
                src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                alt="GoCommercially"
                style={{ height: '0.75rem', width: 'auto', filter: 'invert(1)' }}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
