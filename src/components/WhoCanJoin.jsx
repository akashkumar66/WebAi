import React from 'react';
import { motion } from 'framer-motion';

const WhoCanJoin = () => {
  const categories = [
    {
      title: "College Students",
      desc: "Aiming for a digital marketing career? Join our merit batch with paid internship and placement guarantee.",
      tags: ["Merit Selection", "Paid Internship", "Placement Guarantee"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Job Seekers",
      desc: "Land your first digital marketing job. Get hands-on experience, a paid internship, and guaranteed placement support.",
      tags: ["Job-Ready Skills", "Paid Internship", "Placement Guarantee"],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Working Professionals",
      desc: "Want to upskill or switch to marketing? Our flexible Concept + Agency Day model fits your schedule.",
      tags: ["Flexible Learning", "Career Transition", "Industry Skills"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="section theme-light" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Who Can Join <span style={{ color: 'var(--accent-primary)' }}>IconsBase</span></h2>
          <p className="section-subtitle">Our hybrid AI & Digital Marketing program is designed for freshers, professionals, entrepreneurs, and career re-starters seeking flexible, high-income skills with guaranteed outcomes.</p>
        </div>

        <div className="grid-cards">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card hover-fill-white"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              whileHover="hover"
            >
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <motion.img 
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.4 }}
                  src={cat.image} 
                  alt={cat.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{cat.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{cat.desc}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {cat.tags.map((tag, i) => (
                    <span key={i} className="skill-tag" style={{ 
                      fontSize: '0.75rem', 
                      background: 'rgba(0,0,0,0.05)', 
                      padding: '0.4rem 0.8rem', 
                      borderRadius: '4px',
                      fontWeight: 600,
                      transition: 'color 0.4s ease'
                    }}>{tag}</span>
                  ))}
                </div>

                <motion.button 
                  className="btn" 
                  style={{ 
                    width: '100%', 
                    marginTop: 'auto', 
                    background: '#0A0F1C', 
                    color: 'white',
                    border: '1px solid transparent',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    borderColor: '#0A0F1C'
                  }}
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hover-fill-white:hover .skill-tag {
          color: #000000 !important;
        }
      `}} />
    </section>
  );
};

export default WhoCanJoin;
