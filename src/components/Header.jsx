import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, Phone } from 'lucide-react';
import './Header.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const navLinks = [
    { name: t('header.cars'), href: '#cars' },
    { name: t('header.whyUs'), href: '#why-us' },
    { name: t('header.faq'), href: '#faq' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#">OUSSAMA <span className="text-gold">AUTO</span></a>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list flex items-center gap-md">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions flex items-center gap-sm">
          <button className="lang-switcher flex items-center gap-xs" onClick={toggleLanguage} aria-label="Toggle language">
            <Globe size={20} />
            <span className="lang-text">{i18n.language === 'fr' ? 'العربية' : 'Français'}</span>
          </button>
          
          <a href="#cars" className="btn btn-primary header-cta">
            <Phone size={18} />
            <span>{t('header.bookNow')}</span>
          </a>

          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list flex flex-col gap-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
