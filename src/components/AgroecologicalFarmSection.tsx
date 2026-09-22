import React from 'react';
import { Sprout, Heart, Sun, Sparkles, CheckCircle2, Footprints, Users } from 'lucide-react';
import granjaImage from '../assets/images/granja_agroecologica_refugio_1790113616920.jpg';

interface AgroecologicalFarmSectionProps {
  onOpenBooking: () => void;
}

export const AgroecologicalFarmSection: React.FC<AgroecologicalFarmSectionProps> = ({ onOpenBooking }) => {
  const farmHighlights = [
    {
      title: 'Huerta Orgánica & Permacultura',
      desc: 'Cultivos limpios de lechugas, acelgas, aromáticas y fresas de montaña cultivadas sin agroquímicos con abonos orgánicos propios.',
    },
    {
      title: 'Interacción con Animales de Granja',
      desc: 'Conoce a nuestras ovejas, cabritas y gallinas felices en pastoreo libre. Una experiencia relajante y educativa para adultos y niños.',
    },
    {
      title: 'Cuidado Ambiental Consciente',
      desc: 'Manejo de aguas lluvias, compostaje de residuos orgánicos del restaurante y preservación de la flora nativa del bosque altoandino.',
    },
    {
      title: 'Senderos Ecológicos y Miradores',
      desc: 'Caminatas suaves guiadas por el predio para avistar aves nativas (colibríes, mirlos, azulejos) y respirar aire puro de páramo.',
    },
  ];

  return (
    <section id="granja" className="py-24 bg-[#FAF8F5] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo & Badge */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E3DBD0] shadow-sm bg-[#EAE3D8] group">
              <img
                src={granjaImage}
                alt="Granja agroecológica de Glamping el Refugio La Calera"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-mono text-[#E6C2A3] uppercase block mb-1">
                  Experiencia Incluida
                </span>
                <p className="font-serif text-lg text-white">
                  Recorrido guiado de granja para todos nuestros huéspedes
                </p>
              </div>
            </div>

            {/* Float Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-4 rounded-xl border border-[#E0D7CC] shadow-md max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EAF2EB] text-[#3B4D3C] flex items-center justify-center shrink-0">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#24211D] block">100% Agroecológico</span>
                  <span className="text-2xs text-[#70665B]">Producción limpia y bienestar animal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#3B4D3C] uppercase mb-2">
              <Sprout className="w-4 h-4" />
              <span>Conexión con la Tierra</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] tracking-tight mb-4 text-balance">
              Nuestra granja agroecológica: vida de campo en la alta montaña.
            </h2>
            <p className="text-base text-[#5E554B] leading-relaxed mb-6">
              En El Refugio creemos que el verdadero descanso viene de reconectar con la naturaleza viva. Por eso, tu estadía incluye un recorrido guiado por nuestros sembradíos sostenibles y espacios de interacción con animales.
            </p>

            {/* List of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {farmHighlights.map((feat, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-lg border border-[#E5DDD2]">
                  <h4 className="font-serif text-sm text-[#24211D] mb-1 font-semibold">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[#6B6155] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3 bg-[#3B4D3C] hover:bg-[#2F3E30] text-white text-sm font-medium rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Planear mi estadía con recorrido</span>
              </button>

              <span className="text-xs text-[#786E63]">
                Horarios del recorrido: 10:30 AM y 4:00 PM todos los días
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
