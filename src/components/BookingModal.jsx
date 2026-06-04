import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, User, ArrowRight, AlertCircle } from 'lucide-react';
import { generateBookingMessage } from '../utils/whatsapp';
import './BookingModal.css';

export default function BookingModal({ car, onClose }) {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    eventDate: '',
    location: ''
  });
  const [error, setError] = useState('');

  if (!car) return null;

  const isRtl = i18n.language === 'ar';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.eventDate || !formData.location.trim()) {
      setError(i18n.language === 'fr' 
        ? 'Veuillez remplir tous les champs obligatoires.' 
        : 'يرجى تعبئة جميع الحقول الإلزامية.');
      return;
    }

    const link = generateBookingMessage(car, formData);
    window.open(link, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="booking-backdrop" onClick={onClose}>
        <motion.div 
          className="booking-modal"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="booking-close" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="booking-header">
            <h2 className="booking-title">
              {i18n.language === 'fr' ? 'Réserver' : 'حجز'} {car.name}
            </h2>
            <p className="booking-subtitle">
              {i18n.language === 'fr' 
                ? 'Veuillez fournir vos informations pour continuer.' 
                : 'يرجى تقديم معلوماتك للمتابعة.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            {error && (
              <motion.div 
                className="booking-error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <AlertCircle size={18} />
                <span>{error}</span>
              </motion.div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">
                  <User size={16} />
                  {i18n.language === 'fr' ? 'Nom' : 'الاسم'}
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={i18n.language === 'fr' ? 'Votre nom' : 'الاسم الأول'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">
                  <User size={16} />
                  {i18n.language === 'fr' ? 'Prénom' : 'اللقب'}
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={i18n.language === 'fr' ? 'Votre prénom' : 'اسم العائلة'}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="eventDate">
                <Calendar size={16} />
                {i18n.language === 'fr' ? 'Date' : 'تاريخ المناسبة'}
              </label>
              <input 
                type="date" 
                id="eventDate" 
                name="eventDate" 
                value={formData.eventDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">
                <MapPin size={16} />
                {i18n.language === 'fr' ? 'Localisation' : 'مكان المناسبة'}
              </label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                value={formData.location}
                onChange={handleChange}
                placeholder={i18n.language === 'fr' ? 'Ville, Salle des fêtes...' : 'المدينة، قاعة الحفلات...'}
              />
            </div>

            <div className="booking-actions">
              <button type="submit" className="btn btn-primary w-full flex justify-center items-center gap-sm mt-4">
                <span>{i18n.language === 'fr' ? 'Continuer sur WhatsApp' : 'المتابعة عبر واتساب'}</span>
                <ArrowRight size={20} className={isRtl ? 'rotate-180' : ''} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
