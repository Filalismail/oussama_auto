import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Clock } from 'lucide-react';
import './WhyUsSection.css';

export default function WhyUsSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Star size={40} className="text-gold" />,
      title: t('whyUs.item1Title'),
      desc: t('whyUs.item1Desc')
    },
    {
      icon: <ShieldCheck size={40} className="text-gold" />,
      title: t('whyUs.item2Title'),
      desc: t('whyUs.item2Desc')
    },
    {
      icon: <Clock size={40} className="text-gold" />,
      title: t('whyUs.item3Title'),
      desc: t('whyUs.item3Desc')
    }
  ];

  return (
    <section id="why-us" className="section bg-primary relative overflow-hidden">
      <div className="why-us-bg-glow"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="section-header text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-4xl mb-4">{t('whyUs.title')}</h2>
          <div className="title-separator"></div>
        </motion.div>

        <div className="grid grid-cols-3 gap-lg text-center">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc text-muted">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
