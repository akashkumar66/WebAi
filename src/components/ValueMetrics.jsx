import React from 'react';
import { motion } from 'framer-motion';

const ValueMetrics = () => {
  return (
    <section className="section theme-light bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Why Learn <span className="text-accent">AI Web Dev?</span></h2>
          <p className="section-subtitle">The landscape has changed. Traditional coding is slow. AI augmented developers are the new standard.</p>
        </div>
        
        <div className="grid-cards text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card hover-fill-blue"
            style={{ padding: '3rem 2rem' }}
          >
            <h2 style={{ fontSize: '3.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>10x</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 600 }}>Development Speed</p>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Build full React apps in days, not months, using Cursor and Copilot.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card hover-fill-blue"
            style={{ padding: '3rem 2rem' }}
          >
            <h2 style={{ fontSize: '3.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Zero</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 600 }}>Design Block</p>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Generate stunning UI layouts and assets instantly with AI models.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card hover-fill-blue"
            style={{ padding: '3rem 2rem' }}
          >
            <h2 style={{ fontSize: '3.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>High</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 600 }}>Income Potential</p>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Package your new speed as a premium agency service to clients.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueMetrics;
