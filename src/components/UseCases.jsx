import React from 'react';
import { motion } from 'framer-motion';

const UseCases = () => {
  const cases = [
    { title: "Startup Founders", desc: "Validate your ideas in hours instead of weeks. Generate a landing page and start collecting emails immediately." },
    { title: "Portfolio Creators", desc: "Stand out to recruiters with a unique, custom-coded portfolio that doesn't look like every other template." },
    { title: "Business Owners", desc: "Digitize your local business with an SEO-optimized site without hiring an expensive agency." }
  ];

  return (
    <section id="use-cases" className="section bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Built for Your Success</h2>
        </div>

        <div className="grid-cards">
          {cases.map((useCase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card"
              style={{ borderTop: '4px solid var(--accent-primary)' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{useCase.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{useCase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
