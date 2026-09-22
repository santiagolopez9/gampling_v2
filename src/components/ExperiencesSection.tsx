import React from 'react';
import { Heart, UtensilsCrossed, Car, Flame, Sun, Sparkles, Check, ArrowRight } from 'lucide-react';
import { EXPERIENCE_ADDONS, ExperienceAddon } from '../data/glampingData';

interface ExperiencesSectionProps {
  currency: 'COP' | 'USD';
  onAddExperienceToBooking: (addonId: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  currency,
  onAddExperienceToBooking,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Heart':
        return Heart;
      case 'UtensilsCrossed':
        return UtensilsCrossed;
      case 'Car':
        return Car;
      case 'Flame':
        return Flame;
      case 'Sun':
        return Sun;
      default:
        return Sparkles;
    }
  };

  const formatPrice = (priceCOP: number, priceUSD: number) => {
    if (currency === 'USD') return `$${priceUSD} USD`;
    return `$${priceCOP.toLocaleString('es-CO')} COP`;
  };

  return (
    <section id="experiencias" className="py-20 bg-[#F4EFEA] border-t border-[#E5DDD2] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono tracking-widest text-[#A65E38] uppercase block mb-2">
            Planes & Servicios Adicionales
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] tracking-tight mb-4 text-balance">
            Personaliza tu estancia o vive un plan de pasadía.
          </h2>
          <p className="text-base text-[#5E554B] leading-relaxed">
            Agrega momentos inolvidables a tu reserva: decoración romántica para aniversarios, cenas a la luz de las velas, transporte privado desde Bogotá o disfruta de un día de campo completo.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCE_ADDONS.map((addon) => {
            const Icon = getIcon(addon.iconName);

            return (
              <div
                key={addon.id}
                className="bg-white p-6 rounded-xl border border-[#E0D8CC] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF5EE] text-[#C27D56] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    {addon.popular && (
                      <span className="text-2xs font-mono font-medium px-2 py-0.5 bg-[#FAF1EA] text-[#A65E38] border border-[#ECD9CE] rounded">
                        Muy Solicitado
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg text-[#24211D] mb-2 font-semibold leading-snug">
                    {addon.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#635A50] leading-relaxed mb-6">
                    {addon.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE8DE] flex items-center justify-between">
                  <div>
                    <span className="text-2xs text-[#8A7E72] block">Valor adicional</span>
                    <span className="font-serif text-lg font-semibold text-[#24211D] tabular-nums">
                      {formatPrice(addon.priceCOP, addon.priceUSD)}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddExperienceToBooking(addon.id)}
                    className="px-3.5 py-2 text-xs font-medium text-[#C27D56] hover:text-white bg-[#FAF2EC] hover:bg-[#C27D56] border border-[#E8D4C7] hover:border-[#C27D56] rounded-md transition-all flex items-center gap-1.5"
                  >
                    <span>Incluir en Reserva</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
