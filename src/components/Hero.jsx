import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      
      {/* Fallback luxury background image - ideally a dark elegant wedding car */}
      <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549314466-9eb10ba24f4b?q=80&w=2000&auto=format&fit=crop')" }}></div>

      <div className="container hero-content flex flex-col items-center justify-center text-center">
        <motion.span 
          className="hero-badge text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          OUSSAMA AUTO
        </motion.span>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div 
          className="hero-actions flex gap-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#cars" className="btn btn-primary">
            {t('hero.viewCars')}
          </a>
          <a href="https://wa.me/213655188078" target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center gap-xs">
            <MessageCircle size={20} />
            {t('hero.bookWhatsapp')}
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <a href="#featured">
          <ChevronDown size={32} className="animate-bounce text-gold" />
        </a>
      </motion.div>
    </section>
  );
}
