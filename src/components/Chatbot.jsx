import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 How can I help you with the AI Web Dev cohort today?", sender: 'bot' }
  ]);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              width: '350px',
              height: '450px',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              marginBottom: '1rem',
              border: '1px solid #e2e8f0'
            }}
          >
            {/* Header */}
            <div style={{ 
              backgroundColor: '#0A0F1C', 
              padding: '1.5rem', 
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '10px', height: '10px', backgroundColor: '#10B981', borderRadius: '50%' }}></div>
                <span style={{ fontWeight: 600 }}>Mentorship Assistant</span>
              </div>
              <X size={20} style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
            </div>

            {/* Messages */}
            <div style={{ flexGrow: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ 
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'user' ? '#2563eb' : '#f1f5f9',
                  color: msg.sender === 'user' ? 'white' : '#0f172a',
                  padding: '0.75rem 1rem',
                  borderRadius: msg.sender === 'user' ? '15px 15px 0 15px' : '15px 15px 15px 0',
                  fontSize: '0.9rem',
                  maxWidth: '80%'
                }}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div style={{ padding: '1rem', borderTop: '1px solid #e2e8h0', display: 'flex', gap: '0.5rem' }}>
              <input 
                type="text" 
                placeholder="Type a message..." 
                style={{ flexGrow: 1, padding: '0.5rem 1rem', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.target.value) {
                    setMessages([...messages, { text: e.target.value, sender: 'user' }]);
                    e.target.value = '';
                    setTimeout(() => {
                      setMessages(prev => [...prev, { text: "Thanks for your message! One of our mentors will get back to you shortly.", sender: 'bot' }]);
                    }, 1000);
                  }
                }}
              />
              <button style={{ backgroundColor: '#0A0F1C', color: 'white', border: 'none', borderRadius: '10px', padding: '0.5rem' }}>
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#0A0F1C',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginLeft: 'auto'
        }}
      >
        <MessageCircle size={30} />
      </motion.button>
    </div>
  );
};

export default Chatbot;
