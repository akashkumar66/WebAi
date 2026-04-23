import React from 'react';

const Comparison = () => {
  return (
    <section className="comparison-section" style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
      {/* Left Side - The Old Way */}
      <div style={{ 
        flex: '1 1 50%', 
        backgroundColor: '#F8FAFC', 
        padding: '6rem 4rem',
        color: '#0F172A',
        minWidth: '300px'
      }}>
        <div style={{ maxWidth: '500px', marginLeft: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ height: '1px', width: '30px', backgroundColor: '#CBD5E1' }}></div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', color: '#64748B', textTransform: 'uppercase' }}>The Old Way</span>
          </div>
          
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '3rem', letterSpacing: '-1px' }}>
            Unstructured learning.
          </h2>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
            {[
              "Random YouTube coding tutorials",
              "Struggling with CSS and bugs for hours",
              "No feedback, no progression",
              "Building standard, slow websites"
            ].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#475569' }}>
                <span style={{ color: '#CBD5E1' }}>—</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - The IconsBase System */}
      <div style={{ 
        flex: '1 1 50%', 
        backgroundColor: '#0A0F1C', 
        padding: '6rem 4rem',
        color: '#FFFFFF',
        minWidth: '300px',
        position: 'relative'
      }}>
        {/* The center overlapping circle thing from the image */}
        <div className="comparison-circle" style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0F1C',
          zIndex: 10
        }}>
          <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-primary)', borderRadius: '50%' }}></div>
        </div>

        <div style={{ maxWidth: '500px', marginRight: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ height: '1px', width: '30px', backgroundColor: 'var(--accent-primary)' }}></div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>The AI WebDev System</span>
          </div>
          
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '3rem', letterSpacing: '-1px' }}>
            Structured progression.
          </h2>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
            {[
              "Agency-built AI curriculum",
              "Generate layouts and fix bugs instantly",
              "Mentor feedback every week",
              "Direct path to high-paying client work"
            ].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#E2E8F0' }}>
                <span style={{ color: 'var(--accent-primary)' }}>—</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .comparison-circle {
            top: 0 !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
        }
      `}} />
    </section>
  );
};

export default Comparison;
