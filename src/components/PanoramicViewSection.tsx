import React, { useState } from 'react';
import { Maximize2, Compass, SunMedium, CloudFog, Eye, Sparkles, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { VISTA_SCENES, VistaScene } from '../data/glampingData';

interface PanoramicViewSectionProps {
  onOpenBooking: () => void;
}

export const PanoramicViewSection: React.FC<PanoramicViewSectionProps> = ({ onOpenBooking }) => {
  const [activeSceneId, setActiveSceneId] = useState<string>(VISTA_SCENES[0].id);
  const [modalOpen, setModalOpen] = useState(false);

  const activeScene = VISTA_SCENES.find((s) => s.id === activeSceneId) || VISTA_SCENES[0];
  const activeIndex = VISTA_SCENES.findIndex((s) => s.id === activeSceneId);

  const nextScene = () => {
    const nextIdx = (activeIndex + 1) % VISTA_SCENES.length;
    setActiveSceneId(VISTA_SCENES[nextIdx].id);
  };

  const prevScene = () => {
    const prevIdx = (activeIndex - 1 + VISTA_SCENES.length) % VISTA_SCENES.length;
    setActiveSceneId(VISTA_SCENES[prevIdx].id);
  };

  return (
    <section id="vista" className="py-20 bg-[#F4EFEA] border-y border-[#E5DDD2] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#A65E38] uppercase mb-2">
            <Eye className="w-3.5 h-3.5" />
            <span>Mirador Natural El Refugio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] tracking-tight leading-snug mb-4 text-balance">
            La vista al Valle de Sopó en cada momento del día.
          </h2>
          <p className="text-base sm:text-lg text-[#5E554B] leading-relaxed">
            Nuestra ubicación privilegiada sobre la Vereda San José en La Calera ofrece una panorámica abierta hacia los valles andinos. Elige una hora para descubrir la atmósfera:
          </p>
        </div>

        {/* Time of Day Interactive Segmented Control */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {VISTA_SCENES.map((scene) => {
            const isActive = scene.id === activeSceneId;
            return (
              <button
                key={scene.id}
                onClick={() => setActiveSceneId(scene.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#2C2926] text-white border-[#2C2926] shadow-sm'
                    : 'bg-white text-[#5E554B] border-[#DDD3C7] hover:border-[#B8AB9B] hover:text-[#2C2926]'
                }`}
              >
                <span className="font-mono text-xs opacity-75">{scene.time}</span>
                <span aria-hidden="true" className="opacity-40">|</span>
                <span>{scene.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#E3DBD0] shadow-sm">
          {/* Visual Display */}
          <div className="lg:col-span-7 relative group rounded-xl overflow-hidden shadow-xs bg-[#EAE2D6]">
            <div className="aspect-[4/3] w-full relative overflow-hidden">
              <img
                src={activeScene.image}
                alt={activeScene.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* View Fullscreen Action */}
              <button
                onClick={() => setModalOpen(true)}
                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/70 backdrop-blur-md text-white rounded-md transition-colors"
                title="Ampliar fotografía"
                aria-label="Ver fotografía completa"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Image Footer Tag */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between text-xs">
                <span className="font-mono bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
                  {activeScene.time} · Vista Real
                </span>
                <span className="text-white/80 italic font-serif text-sm">
                  {activeScene.subtitle}
                </span>
              </div>
            </div>
          </div>

          {/* Sensory Narrative & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A65E38] uppercase tracking-wider mb-2">
                <span>Momento Seleccionado</span>
                <span>·</span>
                <span>{activeScene.time}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D] mb-3">
                {activeScene.title}
              </h3>
              <p className="text-sm sm:text-base text-[#5E554B] leading-relaxed mb-5">
                {activeScene.description}
              </p>

              {/* Ambient quote box */}
              <div className="border-l-2 border-[#C27D56] pl-4 py-1.5 my-4 bg-[#FAF8F5] rounded-r-md">
                <p className="text-xs sm:text-sm text-[#4E463E] italic">
                  "{activeScene.ambientNote}"
                </p>
              </div>

              {/* Geographic Data Points */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#EFE8DE] text-xs text-[#73685C]">
                <div>
                  <span className="block font-medium text-[#2C2926]">Orientación</span>
                  <span>Noroccidente hacia Valle de Sopó</span>
                </div>
                <div>
                  <span className="block font-medium text-[#2C2926]">Altitud</span>
                  <span className="font-mono">2.750 m sobre el nivel del mar</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#EFE8DE]">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#C27D56] hover:bg-[#B06B45] text-white text-sm font-medium rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar con esta vista</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={prevScene}
                  className="p-2 border border-[#DDD3C7] hover:border-[#2C2926] rounded-md transition-colors text-[#5E554B] hover:text-[#2C2926]"
                  aria-label="Momento anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#8C8072]">
                  {activeIndex + 1} / {VISTA_SCENES.length}
                </span>
                <button
                  onClick={nextScene}
                  className="p-2 border border-[#DDD3C7] hover:border-[#2C2926] rounded-md transition-colors text-[#5E554B] hover:text-[#2C2926]"
                  aria-label="Siguiente momento"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-5 rounded-xl border border-[#E3DBD0]">
            <h4 className="font-serif text-lg text-[#24211D] mb-1">Malla Catamarán Suspendida</h4>
            <p className="text-xs sm:text-sm text-[#635A50] leading-relaxed">
              Estructura tensada de grado náutico de alta seguridad. Diseñada para acostarse a leer, descansar o ver el atardecer con vista aérea al valle.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[#E3DBD0]">
            <h4 className="font-serif text-lg text-[#24211D] mb-1">Terraza Privada & Fogata</h4>
            <p className="text-xs sm:text-sm text-[#635A50] leading-relaxed">
              Cada unidad cuenta con su propio deck independiente de madera, mesa campestre y zona de fogata con leña incluida para las noches estrelladas.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-[#E3DBD0]">
            <h4 className="font-serif text-lg text-[#24211D] mb-1">Cero Ruido Urbano</h4>
            <p className="text-xs sm:text-sm text-[#635A50] leading-relaxed">
              Ubicado en la parte alta de la Vereda San José. Solo se escucha el viento andino, las ramas de los eucaliptos y las aves del bosque nativo.
            </p>
          </div>
        </div>
      </div>

      {/* High-Resolution Modal View */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-[#1F1B18] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={activeScene.image}
                alt={activeScene.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
                aria-label="Cerrar vista"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-[#25201C] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#E6C2A3] uppercase block mb-1">
                  {activeScene.time} · Glamping el Refugio La Calera
                </span>
                <h4 className="text-xl font-serif">{activeScene.title}</h4>
                <p className="text-xs text-white/70 mt-1 max-w-xl">
                  {activeScene.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setModalOpen(false);
                    onOpenBooking();
                  }}
                  className="px-4 py-2 bg-[#C27D56] hover:bg-[#B06B45] text-white text-xs font-medium rounded-md transition-colors"
                >
                  Reservar este Domo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
