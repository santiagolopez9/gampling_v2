import React from 'react';
import { MapPin, Phone, Instagram, MessageSquare, ArrowUp, Heart } from 'lucide-react';
import { RESORT_INFO } from '../data/glampingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#201C19] text-[#E0D8CE] pt-16 pb-12 border-t border-[#362F2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#362F2A]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-2xl font-serif font-semibold text-white tracking-tight block">
              {RESORT_INFO.name}
            </span>
            <p className="text-xs sm:text-sm text-[#A89E92] leading-relaxed max-w-sm">
              Hospedaje campestre y de naturaleza en la Vereda San José, La Calera, Cundinamarca.
              Domos de madera nativa con vista panorámica al Valle de Sopó, desayuno campesino y granja agroecológica.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E6C2A3] font-mono pt-2">
              <span>★ 5.0 en Google</span>
              <span>·</span>
              <span>{RESORT_INFO.googleReviewsCount} opiniones</span>
              <span>·</span>
              <span>Pet Friendly</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-[#B5ABA0]">
              <li>
                <a href="#vista" className="hover:text-[#E6C2A3] transition-colors">
                  La Vista Panorámica
                </a>
              </li>
              <li>
                <a href="#alojamientos" className="hover:text-[#E6C2A3] transition-colors">
                  Domos & Cabañas
                </a>
              </li>
              <li>
                <a href="#comodidades" className="hover:text-[#E6C2A3] transition-colors">
                  Comodidades
                </a>
              </li>
              <li>
                <a href="#granja" className="hover:text-[#E6C2A3] transition-colors">
                  Granja Agroecológica
                </a>
              </li>
              <li>
                <a href="#experiencias" className="hover:text-[#E6C2A3] transition-colors">
                  Planes & Pasadías
                </a>
              </li>
              <li>
                <a href="#como-llegar" className="hover:text-[#E6C2A3] transition-colors">
                  Cómo Llegar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Contacto & Reservas
            </h4>
            <div className="space-y-2 text-xs text-[#B5ABA0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C27D56] shrink-0 mt-0.5" />
                <span>{RESORT_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C27D56] shrink-0" />
                <span>Tel / WhatsApp: +57 320 3338606</span>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={RESORT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#2D2622] hover:bg-[#C27D56] text-white rounded-md transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={RESORT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#2D2622] hover:bg-[#25D366] text-white rounded-md transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Stay Info & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Horarios
            </h4>
            <div className="text-xs text-[#B5ABA0] space-y-1.5">
              <div>
                <span className="text-white block font-medium">Check-in:</span>
                <span>3:00 PM en adelante</span>
              </div>
              <div>
                <span className="text-white block font-medium">Check-out:</span>
                <span>11:00 AM</span>
              </div>
              <div className="pt-1">
                <span className="text-white block font-medium">Desayuno campesino:</span>
                <span>7:30 AM a 10:30 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7F73]">
          <div>
            © {new Date().getFullYear()} {RESORT_INFO.name}. Todos los derechos reservados.
            <span className="hidden sm:inline mx-2">·</span>
            <span className="text-[#A39688]">La Calera, Cundinamarca, Colombia.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
