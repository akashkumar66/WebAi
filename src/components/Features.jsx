import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Palette, Zap, Briefcase } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BrainCircuit size={32} />,
      title: "AI-Powered Coding",
      desc: "Master tools like Cursor and GitHub Copilot to write, debug, and refactor React code instantly."
    },
    {
      icon: <Palette size={32} />,
      title: "Generative UI Design",
      desc: "Learn to prompt Midjourney and DALL-E to create custom, premium assets for your clients."
    },
    {
      icon: <Zap size={32} />,
      title: "Advanced Animations",
      desc: "Use AI to generate complex Framer Motion and GSAP animations without the math headache."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Client Acquisition",
      desc: "Learn how to package your new 10x speed as an agency service and command premium pricing."
    }
  ];

  return (
    <section id="features" className="section" style={{ position: 'relative' }}>
      <div className="dots-bg">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="dot-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header text-center">
          <h2 className="section-title">What You'll <span className="text-accent">Learn</span></h2>
          <p className="section-subtitle">We don't just teach code. We teach you how to leverage AI to build better, faster, and more beautifully.</p>
        </div>

        <div className="grid-cards">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card hover-fill-white"
            >
              <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
