import React, { useState } from 'react';
import { Star, MessageSquarePlus, Camera, CheckCircle2, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS, RESORT_INFO, Review } from '../data/glampingData';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pareja' | 'mascota' | 'naturaleza'>('all');

  const filteredReviews = GOOGLE_REVIEWS.filter((rev) => {
    if (filter === 'all') return true;
    if (filter === 'pareja') return rev.tag.toLowerCase().includes('pareja') || rev.tag.toLowerCase().includes('aniversario');
    if (filter === 'mascota') return rev.tag.toLowerCase().includes('mascota');
    if (filter === 'naturaleza') return rev.tag.toLowerCase().includes('desconexión') || rev.tag.toLowerCase().includes('campestre');
    return true;
  });

  const googleReviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Glamping el Refugio La Calera')}`;

  return (
    <section id="opiniones" className="py-24 bg-[#F4EFEA] border-y border-[#E5DDD2] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with Google 5.0 Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#A65E38] uppercase mb-2">
              <Star className="w-3.5 h-3.5 fill-[#C27D56] text-[#C27D56]" />
              <span>Reseñas Verificadas en Google</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] tracking-tight mb-2">
              Experiencias de quienes ya vivieron El Refugio.
            </h2>
            <p className="text-sm sm:text-base text-[#5E554B]">
              Calificación perfecta de 5.0 estrellas basada en {RESORT_INFO.googleReviewsCount} opiniones auténticas en Google Maps.
            </p>
          </div>

          {/* Action buttons as specified in prompt: Escribir opinión, Agregar fotos */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white hover:bg-[#FAF8F5] text-[#2C2926] border border-[#DDD3C7] text-xs font-medium rounded-md shadow-2xs transition-colors flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-[#C27D56]" />
              <span>Escribir una opinión</span>
              <ExternalLink className="w-3 h-3 text-[#8A7E72]" />
            </a>

            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white hover:bg-[#FAF8F5] text-[#2C2926] border border-[#DDD3C7] text-xs font-medium rounded-md shadow-2xs transition-colors flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5 text-[#3B4D3C]" />
              <span>Agregar fotos</span>
            </a>
          </div>
        </div>

        {/* Aggregate Score Highlight Strip (Unboxed, clean) */}
        <div className="bg-white rounded-xl p-5 border border-[#E3DBD0] mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#24211D] tabular-nums">
              5.0
            </div>
            <div>
              <div className="flex items-center text-[#C27D56] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#C27D56]" />
                ))}
              </div>
              <span className="text-xs text-[#73685C]">
                Puntuación perfecta sobre {RESORT_INFO.googleReviewsCount} opiniones de viajeros
              </span>
            </div>
          </div>

          {/* Interactive filter tabs (clean segmented buttons) */}
          <div className="flex items-center gap-1 bg-[#F4EFEA] p-1 rounded-lg border border-[#E3DBD0] text-xs font-medium overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-[#2C2926] shadow-2xs font-semibold'
                  : 'text-[#635A50] hover:text-[#2C2926]'
              }`}
            >
              Todas las reseñas
            </button>
            <button
              onClick={() => setFilter('pareja')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                filter === 'pareja'
                  ? 'bg-white text-[#2C2926] shadow-2xs font-semibold'
                  : 'text-[#635A50] hover:text-[#2C2926]'
              }`}
            >
              Parejas & Aniversarios
            </button>
            <button
              onClick={() => setFilter('mascota')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                filter === 'mascota'
                  ? 'bg-white text-[#2C2926] shadow-2xs font-semibold'
                  : 'text-[#635A50] hover:text-[#2C2926]'
              }`}
            >
              Con Mascotas
            </button>
            <button
              onClick={() => setFilter('naturaleza')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                filter === 'naturaleza'
                  ? 'bg-white text-[#2C2926] shadow-2xs font-semibold'
                  : 'text-[#635A50] hover:text-[#2C2926]'
              }`}
            >
              Desconexión & Vista
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-xl border border-[#E0D8CC] shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Header: Author & Rating */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-serif text-base text-[#24211D] font-semibold">
                      {rev.author}
                    </h4>
                    <span className="text-2xs text-[#8A7E72] font-mono">
                      {rev.date} · Opinión de Google
                    </span>
                  </div>
                  <div className="flex items-center text-[#C27D56] gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#C27D56]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#52493E] leading-relaxed italic mb-4">
                  "{rev.text}"
                </p>
              </div>

              {/* Tag Footer */}
              <div className="pt-3 border-t border-[#F2ECE3] flex items-center justify-between text-2xs text-[#786D62]">
                <span className="font-medium text-[#3B4D3C] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#3B4D3C]" /> Estancia verificada
                </span>
                <span className="text-[#8F8274]">{rev.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
