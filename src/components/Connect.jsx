import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this is where you'd send the data to your backend
  };

  return (
    <section id="connect" className="section theme-light">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Connect With <span className="text-accent">Us</span></h2>
          <p className="section-subtitle">Interested in the cohort? Have questions? Drop us a message below and our mentorship team will get back to you.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="connect-name" style={{ fontWeight: 600 }}>Full Name</label>
                  <input 
                    id="connect-name" 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ padding: '1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-main)', fontFamily: 'Inter', fontSize: '1rem' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="connect-email" style={{ fontWeight: 600 }}>Email Address</label>
                  <input 
                    id="connect-email" 
                    type="email" 
                    required 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ padding: '1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-main)', fontFamily: 'Inter', fontSize: '1rem' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="connect-message" style={{ fontWeight: 600 }}>How can we help you?</label>
                  <textarea 
                    id="connect-message" 
                    required 
                    placeholder="I'm interested in the next cohort but I want to know if my current experience level is enough..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ padding: '1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-main)', fontFamily: 'Inter', fontSize: '1rem', minHeight: '150px', resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem', fontSize: '1.1rem' }}>
                  <Send size={20} /> Send Message
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center', padding: '2rem 0' }}
              >
                <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thanks for reaching out, {formData.name}. Our team will review your message and reply to {formData.email} shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
