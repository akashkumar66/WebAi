import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lokesh",
      role: "Digital Marketing Executive",
      text: "IconsBase helped me transform into a confident Digital Marketing Executive. The practical campaigns, real analytics, and step-by-step guidance made me industry-ready. I gained clarity, skills, and the confidence to handle real client projects from day one.",
      stars: 5
    },
    {
      name: "Lalit",
      role: "Video Editor",
      text: "IconsBase elevated my editing skills from basic cuts to professional storytelling. The hands-on projects built a strong portfolio for me, and the guidance I received shaped my creative vision. It was the boost my video editing career truly needed.",
      stars: 5
    },
    {
      name: "Hardik",
      role: "Web Developer",
      text: "IconsBase completely changed my career. In just 14 weeks, I went from retail to becoming a confident web developer. The practical training and constant support made all the difference.",
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
              className="card hover-fill-blue"
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
