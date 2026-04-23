import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import PainPoint from './components/PainPoint';
import ValueMetrics from './components/ValueMetrics';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import TargetUsers from './components/TargetUsers';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import OurClients from './components/OurClients';
import Connect from './components/Connect';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import ApplicationModal from './components/ApplicationModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <motion.div 
      className="app-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <Navbar 
        onLoginClick={() => setIsLoginOpen(true)} 
        onApplyClick={() => setIsApplyOpen(true)} 
      />
      <main>
        <Hero onApplyClick={() => setIsApplyOpen(true)} />
        <ValueMetrics />
        <Features />
        <TrustedBrands />
        <Portfolio />
        <TargetUsers />
        <Curriculum />
        <Testimonials />
        <Comparison />
        <OurClients />
        <PainPoint />
        <Connect />
        <FAQ />
      </main>
      <Footer />
      
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
      {isApplyOpen && <ApplicationModal onClose={() => setIsApplyOpen(false)} />}
    </motion.div>
  );
}

export default App;
