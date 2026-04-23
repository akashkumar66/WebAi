import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import './GeneratorModal.css';

const GeneratorModal = ({ initialPrompt, onClose }) => {
  const [step, setStep] = useState(1); // 1: Form, 2: Loading, 3: Success
  const [email, setEmail] = useState("");
  const [prompt, setPrompt] = useState(initialPrompt);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && prompt) {
      setStep(2);
      // Simulate backend generation delay
      setTimeout(() => {
        setStep(3);
      }, 3500);
    }
  };

  return (
    <div className="modal-overlay">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="modal-content card"
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-step"
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Generate Your Site</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Enter your details to generate a full website with AI.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontWeight: 600 }}>Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="you@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="modal-input"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="prompt" style={{ fontWeight: 600 }}>Website Prompt</label>
                  <textarea 
                    id="prompt"
                    placeholder="Describe the website you want to build..." 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                    className="modal-input modal-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Generate Now
                </button>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-step text-center"
              style={{ padding: '4rem 0' }}
            >
              <Loader2 size={64} color="var(--accent-primary)" className="spinner" style={{ margin: '0 auto 2rem auto' }} />
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>AI is working...</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Writing copy, designing layout, and compiling React components...
              </p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="modal-step text-center"
              style={{ padding: '2rem 0' }}
            >
              <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 2rem auto' }} />
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Website Generated!</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Your custom website is ready. Check your email ({email}) for the preview link and source code export.
              </p>
              <button className="btn btn-outline" style={{ width: '100%' }} onClick={onClose}>
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default GeneratorModal;
