import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import CarCard from './CarCard';
import CarDetailsModal from './CarDetailsModal';
import BookingModal from './BookingModal';

export default function FeaturedCarsSection({ cars }) {
  const { t } = useTranslation();
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingCar, setBookingCar] = useState(null);

  const featuredCars = cars.filter(car => car.featured);

  if (featuredCars.length === 0) return null;

  return (
    <section id="featured" className="section bg-secondary">
      <div className="container">
        <motion.div 
          className="section-header text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-4xl mb-4 text-gold">{t('featured.title')}</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-4">{t('featured.subtitle')}</p>
          <div className="title-separator"></div>
        </motion.div>

        <div className="grid grid-cols-3 gap-lg">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <CarCard 
                car={car} 
                onClick={setSelectedCar} 
                onBook={(c) => { setBookingCar(c); setSelectedCar(null); }} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCar && (
        <CarDetailsModal 
          car={selectedCar} 
          onClose={() => setSelectedCar(null)} 
          onBook={(c) => { setBookingCar(c); setSelectedCar(null); }} 
        />
      )}

      {bookingCar && (
        <BookingModal car={bookingCar} onClose={() => setBookingCar(null)} />
      )}
    </section>
  );
}
