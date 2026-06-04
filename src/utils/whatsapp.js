import i18n from '../i18n';

const GLOBAL_WHATSAPP_NUMBER = '213655188078';

export const generateWhatsAppLink = (car) => {
  const phone = GLOBAL_WHATSAPP_NUMBER;
  const template = i18n.t('whatsapp.greeting');
  
  let message = template
    .replace('{{name}}', encodeURIComponent(car.name))
    .replace('{{price}}', encodeURIComponent(car.price))
    .replace('{{description}}', encodeURIComponent(car.description || ''));

  return `https://wa.me/${phone}?text=${message}`;
};

export const generateBookingMessage = (car, formData) => {
  const phone = GLOBAL_WHATSAPP_NUMBER;

  const message = `السلام عليكم ورحمة الله وبركاته

أرغب في حجز سيارة من OUSSAMA AUTO.

المعلومات:

الاسم:
${formData.firstName}

اللقب:
${formData.lastName}

تاريخ المناسبة:
${formData.eventDate}

مكان المناسبة:
${formData.location}

السيارة المطلوبة:
${car.name}

السعر:
${car.price}

وصف السيارة:
${car.description || 'لا يوجد وصف'}

يرجى التواصل معي لتأكيد الحجز.

شكراً لكم.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
