import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown } from 'lucide-react';
import CarCard from './CarCard';
import CarDetailsModal from './CarDetailsModal';
import BookingModal from './BookingModal';
import './CarsSection.css';

export default function AllCarsSection({ cars }) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('none');
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingCar, setBookingCar] = useState(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(cars.map(c => c.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [cars]);

  // Filter and sort cars
  const filteredAndSortedCars = useMemo(() => {
    let result = [...cars];

    // Search
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(c => c.name.toLowerCase().includes(lowerTerm));
    }

    // Category
    if (selectedCategory !== 'all') {
      result = result.filter(c => c.category === selectedCategory);
    }

    // Sort
    if (sortOrder === 'asc') {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOrder === 'desc') {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    return result;
  }, [cars, searchTerm, selectedCategory, sortOrder]);

  return (
    <section id="cars" className="section bg-primary">
      <div className="container">
        <motion.div 
          className="section-header text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-4xl mb-4">{t('allCars.title')}</h2>
          <div className="title-separator"></div>
        </motion.div>

        <div className="filters-bar flex flex-col md:flex-row justify-between items-center gap-md mb-12">
          <div className="search-box">
            <Search className="search-icon text-muted" size={20} />
            <input 
              type="text" 
              placeholder={t('allCars.search')} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-controls flex gap-sm">
            <div className="select-wrapper">
              <Filter className="select-icon text-gold" size={18} />
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="custom-select"
              >
                <option value="all">{t('allCars.filterCategory')}</option>
                {categories.filter(c => c !== 'all').map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="select-arrow" size={18} />
            </div>

            <div className="select-wrapper">
              <select 
                value={sortOrder} 
                onChange={(e) => setSortOrder(e.target.value)}
                className="custom-select"
              >
                <option value="none" disabled>{t('allCars.sortTitle')}</option>
                <option value="asc">{t('allCars.sortAsc')}</option>
                <option value="desc">{t('allCars.sortDesc')}</option>
              </select>
              <ChevronDown className="select-arrow" size={18} />
            </div>
          </div>
        </div>

        {filteredAndSortedCars.length > 0 ? (
          <div className="grid grid-cols-3 gap-md">
            {filteredAndSortedCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CarCard 
                  car={car} 
                  onClick={setSelectedCar} 
                  onBook={(c) => { setBookingCar(c); setSelectedCar(null); }} 
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="empty-state text-center py-12">
            <p className="text-xl text-muted">{t('error.empty')}</p>
          </div>
        )}
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
