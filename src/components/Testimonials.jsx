import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Freelance Designer",
      text: "I used to hand off my Figma designs. Now, with Cursor and the prompting techniques I learned here, I build the full React site myself and charge triple.",
      stars: 5
    },
    {
      name: "David M.",
      role: "Agency Owner",
      text: "This cohort completely transformed our agency's workflow. We are outputting higher quality websites in a fraction of the time. The ROI is insane.",
      stars: 5
    },
    {
      name: "Elena R.",
      role: "Frontend Developer",
      text: "I thought I knew how to use Copilot, but this course showed me I was barely scratching the surface. The advanced interaction module is worth the price alone.",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="section theme-light bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Student <span className="text-accent">Success Stories</span></h2>
        </div>

        <div className="grid-cards">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', gap: '0.25rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                {[...Array(test.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontStyle: 'italic', flexGrow: 1, marginBottom: '1.5rem' }}>
                "{test.text}"
              </p>
              <div>
                <h4 style={{ fontSize: '1.1rem' }}>{test.name}</h4>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{test.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
