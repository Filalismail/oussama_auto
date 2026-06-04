import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-primary">
      <div className="container">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center gap-md">
          <div className="footer-logo">
            <span className="text-xl font-bold">OUSSAMA <span className="text-gold">AUTO</span></span>
          </div>
          
          <div className="footer-social flex gap-md">
            <a href="https://www.instagram.com/auto_confiance05/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/people/Autoconfiance05/61575493228483/" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@auto_confiance" className="social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3v12.55A4 4 0 1 0 13 19V8h4V5h-4V3z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom text-center text-muted mt-8 pt-8 border-t border-white/10">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
