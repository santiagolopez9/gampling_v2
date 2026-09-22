import React from 'react';
import { MessageCircle } from 'lucide-react';
import { RESORT_INFO } from '../data/glampingData';

export const WhatsAppFloatingButton: React.FC = () => {
  const message = encodeURIComponent(
    'Hola Glamping El Refugio La Calera, quisiera consultar disponibilidad y precios para hospedaje.'
  );

  return (
    <aside aria-label="Contacto directo" className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#24211D] text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap pointer-events-none">
        ¿Dudas? Escríbenos al 320 3338606
      </div>

      <a
        href={`${RESORT_INFO.whatsappUrl}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp con Glamping El Refugio"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BE5B] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-108 active:scale-95"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
};
