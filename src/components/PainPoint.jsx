import React from 'react';
import { motion } from 'framer-motion';

const PainPoint = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section" 
      style={{ 
        padding: '6rem 0', 
        backgroundColor: '#0A0E17',
        boxShadow: '0 -15px 40px -5px rgba(255, 255, 255, 0.15)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container text-center">
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 700, 
            fontFamily: 'Inter, sans-serif',
            color: '#FFFFFF',
            lineHeight: 1.2,
            letterSpacing: '-1px'
          }}>
            You've watched AI tutorials.
          </h2>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 700, 
            fontFamily: 'Inter, sans-serif',
            color: '#FFFFFF',
            lineHeight: 1.2,
            letterSpacing: '-1px'
          }}>
            You've tried generating code.
          </h2>
          <h3 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 600, 
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'italic',
            color: '#94A3B8',
            lineHeight: 1.2,
            letterSpacing: '-1px',
            marginTop: '0.5rem'
          }}>
            But turning it into a high-paying skill still feels unclear.
          </h3>
        </div>
      </div>
    </motion.section>
  );
};

export default PainPoint;
