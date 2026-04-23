import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = ({ onApplyClick }) => {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Enroll in <span className="text-accent">Cohort #4</span></h2>
          <p className="section-subtitle">Secure your spot. Spaces are strictly limited to 50 students to ensure high-quality mentorship.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Split Pay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Split Payment</h3>
            <div style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Poppins', marginBottom: '2rem' }}>$499<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/mo</span></div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic' }}>2 monthly payments of $499</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, marginBottom: '2rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Check size={20} color="var(--accent-primary)" /> Full Cohort Access</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Check size={20} color="var(--accent-primary)" /> Private Discord Community</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Check size={20} color="var(--accent-primary)" /> Weekly Live Q&A Calls</li>
            </ul>
            <button className="btn btn-outline" style={{ width: '100%' }} onClick={onApplyClick}>
              Apply with Split Pay
            </button>
          </motion.div>

          {/* Pay In Full */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card"
            style={{ display: 'flex', flexDirection: 'column', borderColor: 'var(--accent-primary)', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-primary)', color: 'black', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 700 }}>SAVE $100</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Pay In Full</h3>
            <div style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Poppins', marginBottom: '2rem' }}>$898<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/once</span></div>
            <p style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontWeight: 600 }}>Best Value</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, marginBottom: '2rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Check size={20} color="var(--accent-primary)" /> Everything in Split Pay</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Check size={20} color="var(--accent-primary)" /> 1-on-1 Portfolio Review</li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Check size={20} color="var(--accent-primary)" /> Exclusive Agency Templates</li>
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={onApplyClick}>
              Apply in Full
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
