import React, { useState } from 'react';
import { Calendar, Users, Heart, ArrowRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { RESORT_INFO, ACCOMMODATIONS } from '../data/glampingData';
import heroImage from '../assets/images/hero_glamping_refugio_vista_1790113577665.jpg';

interface HeroProps {
  currency: 'COP' | 'USD';
  onQuickBook: (params: { checkIn: string; checkOut: string; unitId: string; guests: number; pets: number }) => void;
  onExploreVista: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currency, onQuickBook, onExploreVista }) => {
  // Default dates: tomorrow and day after tomorrow
  const today = new Date();
  const defaultCheckIn = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];
  const defaultCheckOut = new Date(today.setDate(today.getDate() + 2)).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [selectedUnit, setSelectedUnit] = useState('domo-1a');
  const [guests, setGuests] = useState(2);
  const [pets, setPets] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickBook({
      checkIn,
      checkOut,
      unitId: selectedUnit,
      guests,
      pets,
    });
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Proof Strip (Clean unboxed metadata without pill boxes) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#635A50] mb-4 font-medium">
          <span className="text-[#C27D56] font-semibold flex items-center gap-1">
            ★ 5.0 en Google
          </span>
          <span aria-hidden="true" className="text-[#BDB2A4]">·</span>
          <span>{RESORT_INFO.googleReviewsCount} opiniones verificadas</span>
          <span aria-hidden="true" className="text-[#BDB2A4]">·</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#85796E]" />
            La Calera, Cundinamarca (45 min de Bogotá)
          </span>
          <span aria-hidden="true" className="text-[#BDB2A4]">·</span>
          <span className="text-[#3B4D3C] font-semibold">100% Pet Friendly</span>
        </div>

        {/* Main Title & Subtitle */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#24211D] leading-[1.12] mb-5 text-balance">
            El silencio de la montaña con vista infinita al <span className="italic font-medium text-[#A65E38]">Valle de Sopó</span>.
          </h1>
          <p className="text-base sm:text-lg text-[#5E554B] leading-relaxed max-w-2xl">
            Domos térmicos de madera andina con malla catamarán suspendida, desayuno campesino artesanal
            y recorrido por nuestra granja agroecológica. Un refugio natural a minutos de la ciudad.
          </p>
        </div>

        {/* Main Hero Visual Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E3DBD0] mb-10 group">
          <div className="aspect-[16/9] w-full bg-[#E5DDCF] relative overflow-hidden">
            <img
              src={heroImage}
              alt="Glamping el Refugio en La Calera con vista panorámica al Valle de Sopó y malla catamarán"
              className="w-full h-full object-cover transform duration-700 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Gradient Scrim for subtle contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            {/* Floating Visual Caption & Action on Image */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
              <div className="max-w-lg">
                <span className="text-xs font-mono tracking-widest text-[#E6C2A3] uppercase mb-1 block">
                  Vereda San José · 2.750 m.s.n.m.
                </span>
                <p className="text-base sm:text-xl font-serif text-white/95 leading-snug drop-shadow-xs">
                  "Despertar entre nubes flotando sobre el valle, con el aroma del café de origen recién colado."
                </p>
              </div>

              <button
                type="button"
                onClick={onExploreVista}
                className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-4 py-2 rounded-md transition-colors whitespace-nowrap"
              >
                <span>Explorar la vista 360°</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Direct Booking Search Bar */}
        <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#E2DAD0] shadow-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Check-in */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-[#70665B] uppercase tracking-wider">
                Llegada (Check-in)
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD3C7] rounded-md px-3 py-2 text-sm text-[#2C2926] font-medium focus:ring-2 focus:ring-[#C27D56] focus:outline-hidden"
                  required
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-[#70665B] uppercase tracking-wider">
                Salida (Check-out)
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD3C7] rounded-md px-3 py-2 text-sm text-[#2C2926] font-medium focus:ring-2 focus:ring-[#C27D56] focus:outline-hidden"
                  required
                />
              </div>
            </div>

            {/* Accommodation Select */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-[#70665B] uppercase tracking-wider">
                Alojamiento
              </label>
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#DDD3C7] rounded-md px-3 py-2 text-sm text-[#2C2926] font-medium focus:ring-2 focus:ring-[#C27D56] focus:outline-hidden"
              >
                {ACCOMMODATIONS.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Guests & Pets */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-[#70665B] uppercase tracking-wider">
                Huéspedes & Mascotas
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="bg-[#FAF8F5] border border-[#DDD3C7] rounded-md px-2 py-2 text-sm text-[#2C2926] font-medium focus:ring-2 focus:ring-[#C27D56] focus:outline-hidden"
                >
                  <option value={1}>1 Huésped</option>
                  <option value={2}>2 Huéspedes</option>
                  <option value={3}>3 Huéspedes</option>
                  <option value={4}>4 Huéspedes</option>
                  <option value={5}>5 Huéspedes</option>
                </select>

                <select
                  value={pets}
                  onChange={(e) => setPets(Number(e.target.value))}
                  className="bg-[#FAF8F5] border border-[#DDD3C7] rounded-md px-2 py-2 text-sm text-[#2C2926] font-medium focus:ring-2 focus:ring-[#C27D56] focus:outline-hidden"
                >
                  <option value={0}>0 Mascotas</option>
                  <option value={1}>1 Mascota 🐶</option>
                  <option value={2}>2 Mascotas 🐶</option>
                </select>
              </div>
            </div>

            {/* Submit CTA Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#C27D56] hover:bg-[#B06B45] text-white font-medium px-4 py-2.5 rounded-md shadow-xs transition-colors flex items-center justify-center gap-2 text-sm whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Consultar Reserva</span>
              </button>
            </div>
          </form>

          {/* Value inclusions quiet line */}
          <div className="mt-4 pt-3 border-t border-[#EBE3D8] flex flex-wrap items-center justify-between gap-3 text-xs text-[#70665B]">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3B4D3C]" /> Desayuno campesino incluido
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3B4D3C]" /> Malla catamarán privada
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3B4D3C]" /> Recorrido por la granja
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3B4D3C]" /> Mascotas gratis
              </span>
            </div>
            <span className="text-[#96897C] font-mono">Reserva directa garantizada</span>
          </div>
        </div>
      </div>
    </section>
  );
};
