import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { RESORT_INFO } from '../data/glampingData';

interface HeaderProps {
  currency: 'COP' | 'USD';
  onCurrencyToggle: (curr: 'COP' | 'USD') => void;
  onOpenBooking: (unitId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onCurrencyToggle,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D7] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-[#2C2926] hover:text-[#C27D56] transition-colors"
        >
          {RESORT_INFO.name}
        </a>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A453E]">
          <a
            href="#vista"
            className="hover:text-[#C27D56] transition-colors underline-offset-4 hover:underline"
          >
            La Vista
          </a>
          <a
            href="#alojamientos"
            className="hover:text-[#C27D56] transition-colors underline-offset-4 hover:underline"
          >
            Domos & Cabañas
          </a>
          <a
            href="#comodidades"
            className="hover:text-[#C27D56] transition-colors underline-offset-4 hover:underline"
          >
            Comodidades
          </a>
          <a
            href="#granja"
            className="hover:text-[#C27D56] transition-colors underline-offset-4 hover:underline"
          >
            Granja Agroecológica
          </a>
          <a
            href="#como-llegar"
            className="hover:text-[#C27D56] transition-colors underline-offset-4 hover:underline"
          >
            Cómo Llegar
          </a>
          <a
            href="#opiniones"
            className="hover:text-[#C27D56] transition-colors underline-offset-4 hover:underline"
          >
            Opiniones
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Currency Switcher */}
          <div className="flex items-center bg-[#EFEAE2] rounded-md p-0.5 text-xs font-mono font-medium text-[#5A534B]">
            <button
              onClick={() => onCurrencyToggle('COP')}
              className={`px-2 py-1 rounded transition-colors ${
                currency === 'COP'
                  ? 'bg-white text-[#2C2926] shadow-2xs font-semibold'
                  : 'text-[#6C6359] hover:text-[#2C2926]'
              }`}
              title="Precios en Pesos Colombianos"
            >
              COP
            </button>
            <button
              onClick={() => onCurrencyToggle('USD')}
              className={`px-2 py-1 rounded transition-colors ${
                currency === 'USD'
                  ? 'bg-white text-[#2C2926] shadow-2xs font-semibold'
                  : 'text-[#6C6359] hover:text-[#2C2926]'
              }`}
              title="Precios en Dólares Estadounidenses"
            >
              USD
            </button>
          </div>

          {/* Primary CTA Button */}
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#C27D56] hover:bg-[#B06B45] rounded-md shadow-xs transition-colors whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservar Ahora</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#4A453E] hover:text-[#2C2926] hover:bg-[#EFEAE2] rounded-md transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E1D7] px-6 py-5 mt-2 space-y-4 shadow-md">
          <div className="flex flex-col space-y-3 text-base font-medium text-[#38332E]">
            <a
              href="#vista"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C27D56]"
            >
              La Vista Panorámica
            </a>
            <a
              href="#alojamientos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C27D56]"
            >
              Domos y Cabañas
            </a>
            <a
              href="#comodidades"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C27D56]"
            >
              Servicios y Comodidades
            </a>
            <a
              href="#granja"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C27D56]"
            >
              Granja Agroecológica
            </a>
            <a
              href="#como-llegar"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C27D56]"
            >
              Cómo Llegar (Ruta)
            </a>
            <a
              href="#opiniones"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C27D56]"
            >
              Opiniones de Huéspedes
            </a>
          </div>

          <div className="pt-3 border-t border-[#E8E1D7] flex items-center justify-between">
            <span className="text-xs text-[#7A7165]">Predio El Refugio, La Calera</span>
            <span className="text-xs font-mono font-medium text-[#C27D56]">
              ★ 5.0 en Google
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
