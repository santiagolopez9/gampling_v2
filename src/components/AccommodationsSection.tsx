import React, { useState } from 'react';
import { Wifi, Flame, Coffee, Waves, Music, Dog, Check, ChevronRight, Maximize2, X, Calendar } from 'lucide-react';
import { ACCOMMODATIONS, Accommodation } from '../data/glampingData';

interface AccommodationsSectionProps {
  currency: 'COP' | 'USD';
  onSelectUnit: (unitId: string) => void;
}

export const AccommodationsSection: React.FC<AccommodationsSectionProps> = ({
  currency,
  onSelectUnit,
}) => {
  const [activeGalleryModal, setActiveGalleryModal] = useState<Accommodation | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const formatPrice = (priceCOP: number, priceUSD: number) => {
    if (currency === 'USD') {
      return `$${priceUSD} USD`;
    }
    return `$${priceCOP.toLocaleString('es-CO')} COP`;
  };

  const openGallery = (unit: Accommodation, photoIndex: number = 0) => {
    setActiveGalleryModal(unit);
    setActivePhotoIdx(photoIndex);
  };

  return (
    <section id="alojamientos" className="py-24 bg-[#FAF8F5] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-[#A65E38] uppercase block mb-2">
              Hospedaje de Montaña
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] tracking-tight mb-4 text-balance">
              Domos de madera nativa y cabañas campestres.
            </h2>
            <p className="text-base text-[#5E554B] leading-relaxed">
              Diseñados en armonía con el paisaje andino, con ventanales hacia el Valle de Sopó,
              calefacción natural, lencería premium y desayuno campesino incluido.
            </p>
          </div>

          <div className="text-xs text-[#7A7165] border-l-2 border-[#D9CFC1] pl-4 max-w-xs">
            <span className="font-semibold text-[#24211D] block">Tarifa transparente</span>
            Todos los valores incluyen desayuno para dos, recorrido de granja, leña y parqueadero privado.
          </div>
        </div>

        {/* Units Cards Grid */}
        <div className="space-y-12">
          {ACCOMMODATIONS.map((unit, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={unit.id}
                className="bg-white rounded-2xl border border-[#E3DBD0] overflow-hidden shadow-xs hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-6 relative overflow-hidden bg-[#ECE4D8] ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:h-full w-full group">
                    <img
                      src={unit.image}
                      alt={unit.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Highlight Badge */}
                    {unit.highlight && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#24211D]/85 backdrop-blur-xs text-white text-xs font-mono font-medium px-3 py-1 rounded">
                          {unit.highlight}
                        </span>
                      </div>
                    )}

                    {/* View Gallery Button */}
                    <button
                      onClick={() => openGallery(unit, 0)}
                      className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-md transition-colors"
                      aria-label={`Ver fotos de ${unit.name}`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Ver galería ({unit.gallery.length} fotos)</span>
                    </button>
                  </div>

                  {/* Micro Thumbnails Strip */}
                  <div className="grid grid-cols-4 gap-1 p-2 bg-[#F3EFEA] border-t border-[#E3DBD0]">
                    {unit.gallery.map((photo, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => openGallery(unit, pIdx)}
                        className="aspect-[4/3] rounded overflow-hidden border border-[#D9CFC1] hover:opacity-80 transition-opacity"
                        aria-label={`Foto ${pIdx + 1} de ${unit.name}`}
                      >
                        <img
                          src={photo}
                          alt={`${unit.name} foto ${pIdx + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                    isReversed ? 'lg:order-1' : ''
                  }`}
                >
                  <div>
                    {/* Unboxed Metadata Strip */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#786E63] font-mono mb-2">
                      <span>{unit.capacity}</span>
                      <span aria-hidden="true">·</span>
                      <span>{unit.size}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#3B4D3C] font-semibold">Pet Friendly</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D] mb-2 leading-tight">
                      {unit.name}
                    </h3>

                    {/* Subtitle / Tagline */}
                    <p className="text-xs sm:text-sm text-[#A65E38] font-medium mb-4">
                      {unit.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#5E554B] leading-relaxed mb-6">
                      {unit.description}
                    </p>

                    {/* Key Amenities Checklist */}
                    <div className="mb-6">
                      <span className="text-xs font-semibold text-[#24211D] uppercase tracking-wider block mb-3">
                        Comodidades del Alojamiento
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A433B]">
                        {unit.features.slice(0, 6).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#3B4D3C] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Included in Rate */}
                    <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EAE3D8] mb-6 text-xs text-[#5E554B]">
                      <span className="font-semibold text-[#2C2926] block mb-1">
                        Incluido con tu reserva directa:
                      </span>
                      <ul className="list-disc list-inside space-y-0.5 text-[#635A50]">
                        {unit.included.map((inc, iIdx) => (
                          <li key={iIdx}>{inc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Price & CTA Block */}
                  <div className="pt-5 border-t border-[#EAE3D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-[#8A7E72] block">Precio por noche</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#24211D] tabular-nums">
                          {formatPrice(unit.priceCOP, unit.priceUSD)}
                        </span>
                        <span className="text-xs text-[#7A7165]">/ noche</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectUnit(unit.id)}
                      className="px-6 py-3 bg-[#C27D56] hover:bg-[#B06B45] text-white text-sm font-medium rounded-md shadow-xs transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Reservar este domo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery Modal Lightbox */}
      {activeGalleryModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#201C19] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={activeGalleryModal.gallery[activePhotoIdx]}
                alt={`${activeGalleryModal.name} foto`}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Close Button */}
              <button
                onClick={() => setActiveGalleryModal(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image index counter */}
              <div className="absolute top-4 left-4 bg-black/60 text-white font-mono text-xs px-3 py-1 rounded-full">
                {activePhotoIdx + 1} / {activeGalleryModal.gallery.length}
              </div>
            </div>

            {/* Gallery Thumbnails & Info */}
            <div className="p-5 bg-[#2A2420] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg">{activeGalleryModal.name}</h4>
                <p className="text-xs text-white/70">{activeGalleryModal.bedType}</p>
              </div>

              {/* Navigation Thumbnails */}
              <div className="flex items-center gap-2 overflow-x-auto">
                {activeGalleryModal.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`w-14 h-10 rounded overflow-hidden border-2 transition-all shrink-0 ${
                      activePhotoIdx === idx ? 'border-[#C27D56]' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  const id = activeGalleryModal.id;
                  setActiveGalleryModal(null);
                  onSelectUnit(id);
                }}
                className="px-4 py-2 bg-[#C27D56] hover:bg-[#B06B45] text-white text-xs font-medium rounded-md whitespace-nowrap"
              >
                Reservar Alojamiento
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
