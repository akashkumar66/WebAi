import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, GraduationCap, TrendingUp, MessageSquare, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = ({ onApplyClick }) => {
  const [text, setText] = useState("");
  const fullText = "Website Development";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section text-center">
      {/* Animated AI Background Elements */}
      <motion.div
        className="ai-orb orb-1"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ai-orb orb-2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="blinking-dots-container">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              "--duration": `${2 + Math.random() * 4}s`
            }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge">
            <span className="pulsing-dot"></span> Enrollment Open • Cohort #4
          </div>
          <h1 className="hero-title">
            Master AI-Driven <br />
            <span className="text-accent" style={{ display: 'inline-block', minHeight: '1.2em' }}>
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                style={{ marginLeft: '4px', display: 'inline-block', width: '3px', height: '1em', backgroundColor: 'var(--accent-primary)', verticalAlign: 'middle' }}
              />
            </span>
          </h1>
          <p className="hero-subtitle">
            Turn prompt engineering and AI tools into a high-income skill. Learn to build premium, production-ready websites 10x faster in our intensive 4-week agency-led cohort.
          </p>

          <div className="hero-cta-group">
            <button className="btn btn-primary hero-btn-main" onClick={onApplyClick}>
              Are you eligible? <ArrowRight size={20} />
            </button>
            <a href="#curriculum" className="hero-btn-secondary">
              <span className="play-icon-wrapper">
                <Play size={18} fill="currentColor" />
              </span>
              View Curriculum
            </a>
          </div>

          <div className="hero-stats">
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card hover-fill-white">
              <GraduationCap className="stat-icon" size={32} />
              <strong>Merit Cohorts</strong>
              <span>Top 30 Only</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="stat-card hover-fill-white">
              <TrendingUp className="stat-icon" size={32} />
              <strong>Paid Internship</strong>
              <span>Placement Support</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="stat-card hover-fill-white">
              <MessageSquare className="stat-icon" size={32} />
              <strong>AI-First Curriculum</strong>
              <span>Agency-Linked</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="stat-card hover-fill-white">
              <Sparkles className="stat-icon" size={32} />
              <strong>Shipped Portfolios</strong>
              <span>Your Proof-of-Work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
