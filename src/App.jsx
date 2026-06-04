import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';
import { useCarsData } from './hooks/useCarsData';

import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCarsSection from './components/FeaturedCarsSection';
import AllCarsSection from './components/AllCarsSection';
import WhyUsSection from './components/WhyUsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import NotFound from './pages/NotFound';

function HomePage() {
  const { cars, loading, error } = useCarsData();
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
        <Loader2 className="animate-spin text-gold mb-4" size={48} />
        <p className="text-muted">Loading premium vehicles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-center px-4">
        <h2 className="text-2xl text-red-400 mb-4">{t('error.loadFailed')}</h2>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedCarsSection cars={cars} />
        <WhyUsSection />
        <AllCarsSection cars={cars} />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
