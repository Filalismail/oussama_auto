import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import './CarDetailsModal.css';

export default function CarDetailsModal({ car, onClose, onBook }) {
  const { t } = useTranslation();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!car) return null;

  const images = [car.image1, car.image2, car.image3].filter(Boolean);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBookClick = () => {
    onBook(car);
  };

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={28} />
          </button>

          <div className="modal-grid grid grid-cols-2">
            <div className="modal-gallery">
              <div className="modal-main-image">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImgIndex}
                    src={images[currentImgIndex]} 
                    alt={`${car.name} view ${currentImgIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                
                {images.length > 1 && (
                  <div className="gallery-nav">
                    <button onClick={handlePrev} className="gallery-btn"><ChevronLeft size={24} /></button>
                    <button onClick={handleNext} className="gallery-btn"><ChevronRight size={24} /></button>
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="gallery-thumbnails flex gap-sm">
                  {images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`thumbnail ${idx === currentImgIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImgIndex(idx)}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-info flex flex-col justify-center">
              {car.category && <span className="text-gold uppercase tracking-wider text-sm mb-2 block">{car.category}</span>}
              <h2 className="modal-title">{car.name}</h2>
              <div className="modal-price text-gold mb-6">{car.price} <span className="text-muted text-sm">{t('card.pricePerDay')}</span></div>
              
              <div className="modal-desc">
                <p>{car.description}</p>
              </div>

              <div className="modal-actions mt-8">
                <button className="btn btn-primary w-full" onClick={handleBookClick}>
                  <MessageCircle size={20} />
                  <span>{t('card.book')}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
