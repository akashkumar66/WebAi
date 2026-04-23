import React from 'react';
import { motion } from 'framer-motion';

const TrustedBrands = () => {
  const brands = [
    { name: "Google", domain: "google.com", color: "#4285F4", logos: "/google.png" },
    { name: "Microsoft", domain: "microsoft.com", color: "#00A4EF", logos: "/microsoft.png" },
    { name: "Amazon", domain: "amazon.com", color: "#FF9900", logos: "/amazon.png" },
    { name: "Meta", domain: "meta.com", color: "#0668E1", logos: "/meta.png" },
    { name: "Netflix", domain: "netflix.com", color: "#E50914", logos: "/netflix.png" },
    { name: "Apple", domain: "apple.com", color: "#40b3ddff", logos: "/apple.png" }
  ];

  return (
    <section className="section theme-light bg-secondary" style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2rem' }}>
          Our Alumni Work At
        </p>

        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1.5rem',
          padding: '1.5rem 1rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }} className="no-scrollbar">

          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                borderColor: brand.color,
                boxShadow: `0 12px 30px ${brand.color}22`,
                y: -5
              }}
              style={{
                display: 'flex',
                flexDirection: 'row', // Explicitly left to right
                alignItems: 'center',
                gap: '1.5rem', // Space between logo and text
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
                  src={brand.logos}
                  alt={`${brand.name} logo`}
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
                {brand.name}
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

export default TrustedBrands;
