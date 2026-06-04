import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Info } from 'lucide-react';
import './CarCard.css';

export default function CarCard({ car, onClick, onBook }) {
  const { t } = useTranslation();

  return (
    <div className="car-card" onClick={() => onClick(car)}>
      <div className="car-card-image-wrapper">
        <img 
          src={car.image1 || 'https://via.placeholder.com/600x400?text=No+Image'} 
          alt={car.name} 
          className="car-card-image"
          loading="lazy"
        />
        {car.category && (
          <span className="car-card-category">{car.category}</span>
        )}
      </div>
      
      <div className="car-card-content">
        <div className="car-card-header">
          <h3 className="car-card-title">{car.name}</h3>
          <div className="car-card-price">{car.price} <span className="text-muted text-sm">{t('card.pricePerDay')}</span></div>
        </div>
        
        <p className="car-card-desc">{car.description}</p>
        
        <div className="car-card-actions">
          <button className="btn btn-outline flex-1" onClick={(e) => { e.stopPropagation(); onClick(car); }}>
            <Info size={18} />
            <span>{t('card.details')}</span>
          </button>
          <button className="btn btn-primary flex-1" onClick={(e) => { e.stopPropagation(); onBook(car); }}>
            <MessageCircle size={18} />
            <span>{t('card.book')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
