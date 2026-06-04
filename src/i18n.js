import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// French translations
const translationFR = {
  header: {
    cars: "Nos Voitures",
    whyUs: "Pourquoi Nous",
    faq: "FAQ",
    bookNow: "Réserver",
  },
  hero: {
    title: "Le Luxe à Votre Portée",
    subtitle: "Louez des voitures de prestige pour votre mariage et vos événements exceptionnels.",
    viewCars: "Voir les Véhicules",
    bookWhatsapp: "Réserver via WhatsApp"
  },
  featured: {
    title: "Véhicules en Vedette",
    subtitle: "Notre sélection premium pour votre grand jour"
  },
  allCars: {
    title: "Notre Flotte",
    search: "Rechercher un véhicule...",
    filterCategory: "Toutes les catégories",
    sortTitle: "Trier par :",
    sortAsc: "Prix croissant",
    sortDesc: "Prix décroissant"
  },
  card: {
    pricePerDay: "DA / jour",
    book: "Réserver",
    details: "Détails"
  },
  whyUs: {
    title: "Pourquoi Choisir Oussama Auto ?",
    item1Title: "Véhicules Premium",
    item1Desc: "Une flotte de voitures de luxe méticuleusement entretenues.",
    item2Title: "Service Professionnel",
    item2Desc: "Une expérience fluide et élégante du début à la fin.",
    item3Title: "Prix Transparents",
    item3Desc: "Aucun frais caché, la qualité au meilleur prix."
  },
  faq: {
    title: "Questions Fréquentes",
    q1: "Comment puis-je réserver une voiture ?",
    a1: "Vous pouvez réserver directement en cliquant sur le bouton WhatsApp du véhicule souhaité. Nous confirmerons la disponibilité avec vous.",
    q2: "Puis-je réserver à l'avance ?",
    a2: "Oui, nous recommandons de réserver plusieurs semaines à l'avance pour garantir la disponibilité de la voiture de votre choix.",
    q3: "Quels sont les modes de paiement acceptés ?",
    a3: "Nous acceptons les paiements en espèces, par virement bancaire et via les applications de paiement locales.",
    q4: "Fournissez-vous des chauffeurs ?",
    a4: "Oui, la plupart de nos locations pour mariages incluent un chauffeur professionnel."
  },
  error: {
    loadFailed: "Impossible de charger les véhicules actuellement. Veuillez réessayer plus tard.",
    empty: "Aucun véhicule trouvé."
  },
  whatsapp: {
    greeting: "Bonjour,%0A%0AJe souhaite réserver ce véhicule chez OUSSAMA AUTO.%0A%0AVéhicule : {{name}}%0APrix : {{price}}%0ADescription : {{description}}"
  },
  footer: {
    rights: "© 2026 Oussama Auto. Tous droits réservés."
  }
};

// Arabic translations
const translationAR = {
  header: {
    cars: "سياراتنا",
    whyUs: "لماذا نحن",
    faq: "الأسئلة الشائعة",
    bookNow: "احجز الآن",
  },
  hero: {
    title: "الفخامة بين يديك",
    subtitle: "استأجر سيارات فخمة لحفل زفافك ومناسباتك الاستثنائية.",
    viewCars: "عرض السيارات",
    bookWhatsapp: "احجز عبر واتساب"
  },
  featured: {
    title: "سيارات مميزة",
    subtitle: "اختيارنا الفاخر ليومك الكبير"
  },
  allCars: {
    title: "أسطولنا",
    search: "ابحث عن سيارة...",
    filterCategory: "جميع الفئات",
    sortTitle: "ترتيب حسب:",
    sortAsc: "السعر: من الأقل للأعلى",
    sortDesc: "السعر: من الأعلى للأقل"
  },
  card: {
    pricePerDay: "د.ج / يوم",
    book: "احجز الآن",
    details: "التفاصيل"
  },
  whyUs: {
    title: "لماذا تختار أسامة أوتو؟",
    item1Title: "سيارات فاخرة",
    item1Desc: "أسطول من السيارات الفاخرة التي تتم صيانتها بعناية.",
    item2Title: "خدمة احترافية",
    item2Desc: "تجربة سلسة وأنيقة من البداية إلى النهاية.",
    item3Title: "أسعار شفافة",
    item3Desc: "بدون رسوم خفية، الجودة بأفضل سعر."
  },
  faq: {
    title: "الأسئلة الشائعة",
    q1: "كيف يمكنني حجز سيارة؟",
    a1: "يمكنك الحجز مباشرة بالضغط على زر واتساب للسيارة المطلوبة. سنؤكد التوفر معك.",
    q2: "هل يمكنني الحجز مسبقاً؟",
    a2: "نعم، نوصي بالحجز قبل عدة أسابيع لضمان توفر السيارة التي تختارها.",
    q3: "ما هي طرق الدفع المقبولة؟",
    a3: "نقبل الدفع نقداً، والتحويلات البنكية، وتطبيقات الدفع المحلية.",
    q4: "هل توفرون سائقين؟",
    a4: "نعم، معظم إيجاراتنا لحفلات الزفاف تشمل سائقاً محترفاً."
  },
  error: {
    loadFailed: "تعذر تحميل السيارات حالياً، يرجى المحاولة لاحقاً.",
    empty: "لم يتم العثور على سيارات."
  },
  whatsapp: {
    greeting: "السلام عليكم،%0A%0Aأرغب في حجز هذه السيارة لدى OUSSAMA AUTO.%0A%0Aالسيارة : {{name}}%0Aالسعر : {{price}}%0Aالوصف : {{description}}"
  },
  footer: {
    rights: "© 2026 أسامة أوتو. جميع الحقوق محفوظة."
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: translationFR },
      ar: { translation: translationAR }
    },
    lng: "fr", // default language
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
