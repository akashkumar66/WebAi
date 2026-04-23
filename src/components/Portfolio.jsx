import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Wishtune",
      category: "Generated in 6 Hours",
      image: "/wishtune.png",
      link: "https://wishtune.com"
    },
    {
      title: "McRaygor",
      category: "Generated in 2 Hours",
      image: "/Mcraygor.png",
      link: "https://mcraygor.com"
    },
    {
      title: "Anantham",
      category: "Generated in 3 Hours",
      image: "/Anantham.png",
      link: "https://ananthamprojects.com"
    }
  ];

  return (
    <section id="portfolio" className="section bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Checkout Our <span className="text-accent">Students' Work</span></h2>
          <p className="section-subtitle">Real production-ready websites built by our alumni using the AI-first framework taught in this cohort.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                borderColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 10px 40px rgba(255, 255, 255, 0.15)",
                y: -5
              }}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                group: 'true',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-primary)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease'
              }}
              className="portfolio-card"
            >
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{project.title}</h3>
                  {/* <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600 }}>{project.category}</p> */}
                </div>
                <a href={project.link} target="_blank" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
