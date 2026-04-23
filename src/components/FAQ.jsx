import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Do I need prior coding experience?",
    a: "While complete beginners can take this course, having a basic understanding of HTML and CSS will help you move much faster. We focus on using AI to write code, but knowing how to read it is important."
  },
  {
    q: "Will I have access to the recordings?",
    a: "Yes! All live sessions are recorded and you will have lifetime access to them, along with all written materials and prompts."
  },
  {
    q: "What tools do I need to buy?",
    a: "You will need a subscription to ChatGPT Plus (or Claude Pro) and Cursor IDE. We will provide extended trials and student discounts where possible."
  },
  {
    q: "Is there a refund policy?",
    a: "We offer a 7-day money-back guarantee. If you complete the first week's assignments and feel the course isn't for you, we will issue a full refund."
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Frequently Asked <span className="text-accent">Questions</span></h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card"
              style={{ padding: '1.5rem', cursor: 'pointer' }}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{faq.q}</h3>
                <ChevronDown 
                  size={20} 
                  style={{ 
                    transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0)', 
                    transition: 'transform 0.3s ease',
                    color: 'var(--accent-primary)'
                  }} 
                />
              </div>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
