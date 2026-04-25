import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, PenTool, Lightbulb, Building2 } from 'lucide-react';

const TargetUsers = () => {
  const users = [
    { icon: <Terminal size={40} />, label: "Traditional Developers" },
    { icon: <PenTool size={40} />, label: "UI/UX Designers" },
    { icon: <Lightbulb size={40} />, label: "Entrepreneurs" },
    { icon: <Building2 size={40} />, label: "Agency Owners" }
  ];

  return (
    <section className="section theme-light bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Who is this cohort for?</h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          textAlign: 'center'
        }}>
          {users.map((user, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                borderColor: 'rgba(0, 0, 0, 0.2)'
              }}
              className="card hover-circle-fill"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                padding: '3rem 2rem',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div style={{ color: 'var(--accent-primary)' }}>{user.icon}</div>
              <h3 style={{ fontSize: '1.25rem' }}>{user.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;
