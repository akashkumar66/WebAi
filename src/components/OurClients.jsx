import React from 'react';
import { motion } from 'framer-motion';

const OurClients = () => {
  const clients = [
    { name: "Anantham", domain: "ananthamprojects.com", color: "#96bf48", logo: '/ananthamL.png' },
    { name: "McRaygor", domain: "mcraygor.com", color: "#635bff", logo: '/mcraygorL.png' },
    { name: "Wishtune", domain: "wishtune.com", color: "#4a154b", logo: '/wishtuneL.png' },
    { name: "Oxxy", domain: "oxxy.in", color: "#ff5a5f", logo: '/oxxyL.png' },
  ];

  return (
    <section className="section theme-light bg-secondary" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our <span className="text-accent">Clients</span></h2>
          <p className="section-subtitle">Agencies and companies that have hired our AI-augmented developers.</p>
        </div>

        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1.5rem',
          padding: '1.5rem 1rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }} className="no-scrollbar">

          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{
                scale: 1.05,
                borderColor: client.color || "rgba(0,0,0,0.2)",
                boxShadow: `0 12px 30px ${client.color ? client.color + '22' : 'rgba(0,0,0,0.08)'}`,
                y: -5
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.25rem 2rem',
                minWidth: '260px',
                flexShrink: 0,
                cursor: 'pointer',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Logo on the Left */}
              <div style={{ flexShrink: 0, width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>

              {/* Name on the Right */}
              <span style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                color: 'var(--text-main)',
                whiteSpace: 'nowrap'
              }}>
                {client.name}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default OurClients;
