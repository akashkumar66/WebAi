import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';

const CoursePricing = () => {
  const plans = [
    {
      title: "Self-Paced",
      price: "₹14,999",
      period: "/ course",
      duration: "Lifetime",
      description: "Master AI-powered web development at your own speed with recorded content.",
      features: [
        "Recorded Video Lectures",
        "AI Integration Basics",
        "React & Next.js Foundation",
        "Community Discord Access",
        "Course Projects Source Code",
        "Lifetime Course Updates"
      ],
      isFeatured: false,
      buttonText: "Start Learning"
    },
    {
      title: "Professional Cohort",
      price: "₹24,999",
      period: "/ course",
      duration: "12 Weeks",
      description: "Join the live cohort for hands-on mentorship and industry-ready skills.",
      features: [
        "Everything in Self-Paced",
        "Live Weekend Classes",
        "Paid Internship Opportunity",
        "1-on-1 Code Reviews",
        "Placement Assistance",
        "Advanced AI Workflows",
        "Personal Branding Module",
        "Client Acquisition Strategy"
      ],
      isFeatured: true,
      buttonText: "Join Cohort"
    },
    {
      title: "Elite Mentorship",
      price: "₹49,999",
      period: "/ course",
      duration: "16 Weeks",
      description: "Direct 1-on-1 mentorship to build your own AI-first agency.",
      features: [
        "Everything in Pro Cohort",
        "Direct WhatsApp Access",
        "Custom Agency Roadmap",
        "Freelance Client Leads",
        "Co-building 2 Live Projects",
        "Lifetime Personal Mentorship",
        "Business Strategy Calls",
        "Equity Opportunities"
      ],
      isFeatured: false,
      buttonText: "Apply Now"
    }
  ];

  return (
    <section className="section theme-light bg-secondary" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our AI <span className="text-accent">Website Development</span> Course</h2>
          <p className="section-subtitle">The most comprehensive curriculum designed to turn you into a 10x AI developer.</p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                borderColor: '#2563eb',
                boxShadow: '0 30px 60px rgba(37, 99, 235, 0.2)'
              }}
              className={`card ${plan.isFeatured ? 'featured-card' : ''}`}
              style={{
                maxWidth: '340px',
                width: '100%',
                padding: 0,
                overflow: 'hidden',
                boxShadow: plan.isFeatured ? '0 25px 50px rgba(37, 99, 235, 0.15)' : '0 20px 40px rgba(0,0,0,0.05)',
                borderRadius: '24px',
                border: plan.isFeatured ? '2px solid #2563eb' : '1px solid rgba(0,0,0,0.05)',
                background: '#FFFFFF',
                position: 'relative',
                transform: plan.isFeatured ? 'scale(1.05)' : 'none',
                zIndex: plan.isFeatured ? 2 : 1
              }}
            >
              {plan.isFeatured && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#2563eb',
                  color: 'white',
                  padding: '0.25rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  zIndex: 10
                }}>
                  MOST POPULAR
                </div>
              )}
              {/* Header */}
              <div style={{
                background: plan.isFeatured ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
                padding: '2.5rem 2rem 2rem',
                color: plan.isFeatured ? 'white' : 'var(--text-main)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: plan.isFeatured ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.05)',
                  padding: '0.4rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Clock size={14} /> {plan.duration}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{plan.title}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>{plan.price}</span>
                  <span style={{ opacity: 0.8 }}>{plan.period}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '2rem' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem', minHeight: '2.5rem' }}>
                  {plan.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', minHeight: '260px' }}>
                  {plan.features.map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: '1.4' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`btn ${plan.isFeatured ? 'btn-primary ' : 'btn-outline hover:bg-white'}`}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    border: plan.isFeatured ? 'none' : '1px solid #2563eb',
                    color: plan.isFeatured ? 'white' : '#2563eb',
                    background: plan.isFeatured ? '#2563eb' : 'transparent'
                  }}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Trust Badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-color)'
        }}>
          {[
            { icon: <ShieldCheck size={20} />, text: "100% Job Assistance" },
            { icon: <Clock size={20} />, text: "Lifetime Access" },
            { icon: <Award size={20} />, text: "Industry Certification" }
          ].map((badge, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              fontWeight: 600
            }}>
              <span style={{ color: '#10B981' }}>{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePricing;
