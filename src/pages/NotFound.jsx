import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-center px-4">
      <h1 className="text-gold text-8xl font-bold mb-4">404</h1>
      <h2 className="text-3xl mb-8">Page Not Found / Page Introuvable</h2>
      <Link to="/" className="btn btn-primary">
        <Home size={20} />
        <span>Return Home / Retour à l'accueil</span>
      </Link>
    </div>
  );
}
