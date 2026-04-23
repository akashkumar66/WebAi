import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import './Modal.css';

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="modal-overlay">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="modal-content"
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="modal-header">
                <h2 className="modal-title">Welcome Back</h2>
                <p className="modal-subtitle">Log in to access your course dashboard.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input 
                    id="email" type="email" className="modal-input" required 
                    placeholder="student@example.com"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input 
                    id="password" type="password" className="modal-input" required 
                    placeholder="••••••••"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
                  <a href="#" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Forgot Password?</a>
                </div>

                <button type="submit" className="btn btn-primary modal-btn">Log In</button>
              </form>

              <div className="modal-footer">
                Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onClose(); }}>Apply for Cohort</a>
              </div>
            </motion.div>
          ) : (
            <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="success-state">
              <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 1.5rem auto' }} />
              <h2 className="modal-title" style={{ fontSize: '1.5rem' }}>Login Successful</h2>
              <p className="modal-subtitle" style={{ marginBottom: '2rem' }}>Redirecting to your dashboard...</p>
              <button className="btn btn-outline modal-btn" onClick={onClose}>Close</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LoginModal;
