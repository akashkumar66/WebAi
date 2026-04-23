import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Rocket } from 'lucide-react';
import './Modal.css';

const ApplicationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', experience: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="modal-overlay">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="modal-content modal-content-large"
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="modal-header">
                <Rocket size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem auto' }} />
                <h2 className="modal-title">Join Cohort #4</h2>
                <p className="modal-subtitle">We carefully review every application to ensure a high-quality learning environment.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input 
                      id="name" type="text" className="modal-input" required 
                      placeholder="John Doe"
                      value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="app-email">Email Address</label>
                    <input 
                      id="app-email" type="email" className="modal-input" required 
                      placeholder="john@example.com"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="experience">Current Experience Level</label>
                  <select 
                    id="experience" className="modal-input" required
                    value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    style={{ appearance: 'none', backgroundColor: 'var(--bg-primary)' }}
                  >
                    <option value="" disabled>Select your level...</option>
                    <option value="beginner">Complete Beginner (No code experience)</option>
                    <option value="intermediate">Intermediate (Know some HTML/CSS/JS)</option>
                    <option value="advanced">Advanced (Professional Developer)</option>
                    <option value="designer">Designer (Figma/UI/UX)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="goals">Why do you want to join this cohort?</label>
                  <textarea 
                    id="goals" className="modal-input modal-textarea" required
                    placeholder="I want to learn how to build websites 10x faster for my agency..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary modal-btn">Submit Application</button>
              </form>
            </motion.div>
          ) : (
            <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="success-state" style={{ padding: '3rem 0' }}>
              <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 1.5rem auto' }} />
              <h2 className="modal-title" style={{ fontSize: '2rem' }}>Application Received!</h2>
              <p className="modal-subtitle" style={{ marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem auto' }}>
                Thank you for applying, {formData.name || 'Applicant'}! Our team will review your profile and email you at {formData.email} within 24 hours with next steps.
              </p>
              <button className="btn btn-outline modal-btn" style={{ maxWidth: '200px' }} onClick={onClose}>Return to Home</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ApplicationModal;
