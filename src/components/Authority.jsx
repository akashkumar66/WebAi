import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Lock } from 'lucide-react';

const Authority = () => {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Powered by <span className="text-accent">Advanced ML</span></h2>
          <p className="section-subtitle">Our AI Engine combines GPT-4 for logic and proprietary ML models for UI/UX rendering.</p>
        </div>

        <div className="grid-cards text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <Cpu size={48} color="var(--accent-primary)" style={{ margin: '0 auto 1.5rem auto' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>GPT-4 Integration</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Advanced reasoning for copy, layout structure, and SEO optimization.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card"
          >
            <Server size={48} color="var(--accent-primary)" style={{ margin: '0 auto 1.5rem auto' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Edge Rendering</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Instant previews powered by edge computing for zero latency.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <Lock size={48} color="var(--accent-primary)" style={{ margin: '0 auto 1.5rem auto' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Secure Code Export</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Clean, vulnerability-free React source code generated on the fly.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
