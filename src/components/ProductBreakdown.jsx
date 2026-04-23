import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, ShoppingBag, PieChart, PanelTop } from 'lucide-react';

const ProductBreakdown = () => {
  const products = [
    { title: "Landing Pages", desc: "High-converting single pages tailored for specific campaigns.", icon: <PanelTop size={32} /> },
    { title: "Portfolio Sites", desc: "Showcase your work with stunning, interactive galleries.", icon: <LayoutTemplate size={32} /> },
    { title: "E-commerce Templates", desc: "Ready-to-sell storefronts with cart integrations.", icon: <ShoppingBag size={32} /> },
    { title: "SaaS Dashboards", desc: "Complex admin panels and user portals generated instantly.", icon: <PieChart size={32} /> }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What can you build?</h2>
          <p className="section-subtitle">Our AI understands different structural patterns for various industries.</p>
        </div>

        <div className="grid-cards">
          {products.map((prod, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card"
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
            >
              <div style={{ color: 'var(--accent-primary)', flexShrink: 0, background: 'rgba(255, 215, 0, 0.1)', padding: '1rem', borderRadius: '12px' }}>
                {prod.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{prod.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{prod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBreakdown;
