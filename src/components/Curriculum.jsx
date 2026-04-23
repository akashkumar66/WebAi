import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Rocket } from 'lucide-react';

const weeks = [
  {
    week: "Week 1",
    title: "AI Foundations & Environment Setup",
    lessons: ["Mastering Cursor IDE", "Prompt Engineering for Code", "Setting up a React/Vite architecture instantly"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  },
  {
    week: "Week 2",
    title: "Generative Design & Layouts",
    lessons: ["Prompting for UI/UX assets", "Implementing complex CSS Grids with AI", "Building a scalable design system"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop"
  },
  {
    week: "Week 3",
    title: "Advanced Interactions",
    lessons: ["AI-assisted GSAP & Framer Motion", "Complex state management", "Debugging like a senior engineer"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  },
  {
    week: "Week 4",
    title: "Agency Operations & Sales",
    lessons: ["Packaging your AI dev services", "Finding high-paying clients", "Final Portfolio Project Presentation"],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop"
  }
];

const Curriculum = () => {
  const containerRef = useRef(null);

  // Track scroll progress within the curriculum section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to a percentage for the icon's top position
  const iconTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Map scroll progress to the height of the filled line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="curriculum" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">The 4-Week <span className="text-accent">Curriculum</span></h2>
          <p className="section-subtitle">A rigorous, step-by-step path from a standard developer to an elite AI web architect.</p>
        </div>

        <div
          ref={containerRef}
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '6rem',
            marginTop: '4rem',
            paddingBottom: '2rem'
          }}
        >
          {/* Central Timeline Background Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transform: 'translateX(-50%)',
            borderRadius: '4px',
            display: 'none', // Will show on desktop via media query logic below or just inline style hacks
          }} className="timeline-line hidden-mobile" />

          {/* Central Timeline Filled Line (Animated) */}
          <motion.div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            height: lineHeight,
            width: '4px',
            backgroundColor: 'var(--accent-primary)',
            transform: 'translateX(-50%)',
            borderRadius: '4px',
            display: 'none',
            zIndex: 5
          }} className="timeline-line hidden-mobile" />

          {/* Scrolling Icon (Rocket) */}
          <motion.div style={{
            position: 'absolute',
            left: '50%',
            top: iconTop,
            transform: 'translate(-50%, -50%)',
            width: '48px',
            height: '48px',
            backgroundColor: 'var(--bg-primary)',
            border: '2px solid var(--accent-primary)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            color: 'var(--accent-primary)',
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
          }} className="timeline-icon hidden-mobile">
            <Rocket size={24} style={{ transform: 'rotate(180deg)' }} />
          </motion.div>

          {weeks.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="curriculum-row"
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  gap: '4rem',
                  position: 'relative'
                }}
              >
                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  style={{ flex: '1 1 45%', width: '100%' }}
                >
                  <div style={{ display: 'inline-block', background: 'rgba(255, 215, 0, 0.1)', color: 'var(--accent-primary)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>
                    {item.week}
                  </div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>{item.title}</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {item.lessons.map((lesson, lIdx) => (
                      <li key={lIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        <CheckCircle2 size={24} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Spacer for desktop central line */}
                <div className="hidden-mobile" style={{ width: '48px', flexShrink: 0 }}></div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  style={{ flex: '1 1 45%', width: '100%' }}
                >
                  <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    border: '1px solid var(--border-color)',
                    position: 'relative'
                  }}>
                    {/* Dark overlay to match theme */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(rgba(10,10,10,0.2), rgba(10,10,10,0.6))', pointerEvents: 'none', zIndex: 1 }}></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 992px) {
          .timeline-line { display: block !important; }
          .timeline-icon { display: flex !important; }
        }
        @media (max-width: 991px) {
          .curriculum-row {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
      `}} />
    </section>
  );
};

export default Curriculum;
