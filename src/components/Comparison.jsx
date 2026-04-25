import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Comparison = () => {
  const [hovered, setHovered] = useState(null); // 'left' or 'right'

  const leftBg = '#F8FAFC';
  const rightBg = '#0A0F1C';
  const leftText = '#0F172A';
  const rightText = '#FFFFFF';

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="comparison-section" 
      style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        width: '100%',
        transition: 'background-color 0.5s ease'
      }}
    >
      {/* Left Side - The Old Way */}
      <div 
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
        style={{ 
          flex: '1 1 50%', 
          backgroundColor: hovered === 'left' ? rightBg : leftBg, 
          padding: '6rem 4rem',
          color: hovered === 'left' ? rightText : leftText,
          minWidth: '300px',
          transition: 'all 0.5s ease',
          cursor: 'pointer'
        }}
      >
        <div style={{ maxWidth: '500px', marginLeft: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ height: '1px', width: '30px', backgroundColor: hovered === 'left' ? 'var(--accent-primary)' : '#CBD5E1' }}></div>
            <span style={{ 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              letterSpacing: '2px', 
              color: hovered === 'left' ? 'var(--accent-primary)' : '#64748B', 
              textTransform: 'uppercase' 
            }}>The Old Way</span>
          </div>
          
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '3rem', letterSpacing: '-1px' }}>
            Unstructured learning.
          </h2>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
            {[
              "Random YouTube coding tutorials",
              "Struggling with CSS and bugs for hours",
              "No feedback, no progression",
              "Building standard, slow websites"
            ].map((item, idx) => (
              <li key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                fontSize: '1.1rem', 
                color: hovered === 'left' ? '#E2E8F0' : '#475569' 
              }}>
                <span style={{ color: hovered === 'left' ? 'var(--accent-primary)' : '#CBD5E1' }}>—</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - The IconsBase System */}
      <div 
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
        style={{ 
          flex: '1 1 50%', 
          backgroundColor: hovered === 'left' ? leftBg : rightBg, 
          padding: '6rem 4rem',
          color: hovered === 'left' ? leftText : rightText,
          minWidth: '300px',
          position: 'relative',
          transition: 'all 0.5s ease',
          cursor: 'pointer'
        }}
      >
        {/* The center overlapping circle thing from the image */}
        <div className="comparison-circle" style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: hovered === 'left' ? rightBg : leftBg,
          zIndex: 10,
          transition: 'background-color 0.5s ease'
        }}>
          <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-primary)', borderRadius: '50%' }}></div>
        </div>

        <div style={{ maxWidth: '500px', marginRight: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ height: '1px', width: '30px', backgroundColor: 'var(--accent-primary)' }}></div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>The AI WebDev System</span>
          </div>
          
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '3rem', letterSpacing: '-1px' }}>
            Structured progression.
          </h2>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
            {[
              "Agency-built AI curriculum",
              "Generate layouts and fix bugs instantly",
              "Mentor feedback every week",
              "Direct path to high-paying client work"
            ].map((item, idx) => (
              <li key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                fontSize: '1.1rem', 
                color: hovered === 'left' ? '#475569' : '#E2E8F0' 
              }}>
                <span style={{ color: 'var(--accent-primary)' }}>—</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .comparison-circle {
            top: 0 !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
        }
      `}} />
    </motion.section>
  );
};

export default Comparison;
