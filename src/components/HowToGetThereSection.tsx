import React from 'react';
import { MapPin, Navigation, Car, Bus, Phone, Compass, ThermometerSun, AlertCircle } from 'lucide-react';
import { RESORT_INFO } from '../data/glampingData';

export const HowToGetThereSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Glamping el Refugio La Calera Cundinamarca')}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('Glamping el Refugio La Calera')}`;

  return (
    <section id="como-llegar" className="py-24 bg-[#FAF8F5] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono tracking-widest text-[#A65E38] uppercase block mb-2">
            Ubicación & Acceso
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] tracking-tight mb-4 text-balance">
            Cómo llegar a Glamping El Refugio.
          </h2>
          <p className="text-base text-[#5E554B] leading-relaxed">
            Ubicados en la Vereda San José en La Calera, Cundinamarca. A tan solo 45 minutos de los cerros de Bogotá y 20 minutos del parque principal de La Calera.
          </p>
        </div>

        {/* 2-Column Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Detailed Routes Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E3DBD0] shadow-xs space-y-8">
            {/* Route 1: Private Car */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#FAF2EB] text-[#C27D56] flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#24211D] font-semibold">
                    En Carro Particular (45 min desde Bogotá)
                  </h3>
                  <span className="text-xs text-[#7A7064]">
                    Ruta más rápida por la Vía a La Calera (Patios / Calle 85)
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#5E554B] leading-relaxed pl-11">
                Sube por Patios hacia el municipio de La Calera. Antes de entrar al casco urbano o cruzándolo hacia la salida a Sopó/Guatavita, tomas el desvío señalizado hacia la <strong className="text-[#2C2926]">Vereda San José</strong>. El camino final está afirmado y en buen estado; sube cualquier tipo de vehículo (sedán bajo, camioneta o motocicleta).
              </p>
            </div>

            {/* Route 2: Public Transport */}
            <div className="space-y-3 pt-6 border-t border-[#EFE8DE]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#EAF2EB] text-[#3B4D3C] flex items-center justify-center shrink-0">
                  <Bus className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#24211D] font-semibold">
                    En Transporte Público o Intermunicipal
                  </h3>
                  <span className="text-xs text-[#7A7064]">
                    Flotas desde Calle 72 o Portal Norte
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#5E554B] leading-relaxed pl-11">
                Toma la flota a La Calera en la Calle 72 con Cra 13 o en el Portal Norte de Transmilenio (frecuencia cada 10 minutos). Al llegar al pueblo de La Calera, puedes tomar un taxi local o camioneta veredal hasta la entrada del Predio El Refugio (aproximadamente $15.000 a $20.000 COP). También ofrecemos servicio de recogida coordinada con anticipación.
              </p>
            </div>

            {/* Map Action Buttons */}
            <div className="pt-6 border-t border-[#EFE8DE] flex flex-wrap items-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#2C2926] hover:bg-[#1E1C1A] text-white text-xs font-medium rounded-md transition-colors flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Abrir en Google Maps</span>
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#33CCFF]/15 hover:bg-[#33CCFF]/25 text-[#006E99] border border-[#33CCFF]/30 text-xs font-medium rounded-md transition-colors flex items-center gap-2"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Navegar con Waze</span>
              </a>

              <a
                href={`${RESORT_INFO.whatsappUrl}?text=${encodeURIComponent('Hola Glamping El Refugio, voy en camino y quisiera confirmar la ruta a la Vereda San José')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#EAF2EB] hover:bg-[#D5E5D7] text-[#25522B] border border-[#C5DAC8] text-xs font-medium rounded-md transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Asistencia en Ruta (+57 320 3338606)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Tips & Info Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Quick Stats */}
            <div className="bg-[#FAF4EC] rounded-2xl p-6 border border-[#E8DEC8]">
              <div className="flex items-center gap-2 text-[#A65E38] font-mono text-xs uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Dirección Exacta</span>
              </div>
              <h4 className="font-serif text-lg text-[#24211D] mb-1 font-semibold">
                Predio El Refugio
              </h4>
              <p className="text-xs sm:text-sm text-[#61574B] mb-4">
                Vereda San José, La Calera, Cundinamarca, Colombia.
              </p>

              <div className="space-y-2 text-xs text-[#52493E] pt-3 border-t border-[#DFD3BA]">
                <div className="flex justify-between py-1">
                  <span className="text-[#7A7064]">Distancia desde Bogotá:</span>
                  <span className="font-mono font-medium">~24 km (45 minutos)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#7A7064]">Distancia de La Calera:</span>
                  <span className="font-mono font-medium">~6 km (20 minutos)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#7A7064]">Parqueadero:</span>
                  <span className="font-medium text-[#3B4D3C]">Privado & Vigilado (Gratis)</span>
                </div>
              </div>
            </div>

            {/* Weather & Recommendations Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E3DBD0] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#3B4D3C] uppercase tracking-wider">
                <ThermometerSun className="w-4 h-4" />
                <span>Clima Andino & Recomendaciones</span>
              </div>
              <h4 className="font-serif text-base text-[#24211D] font-semibold">
                ¿Qué ropa empacar para tu visita?
              </h4>
              <p className="text-xs text-[#635A50] leading-relaxed">
                El día suele ser templado y luminoso (18°C a 20°C), ideal para estar en camiseta en la terraza. En la noche el frío de montaña desciende (9°C a 12°C). Te recomendamos traer:
              </p>
              <ul className="text-xs text-[#52493E] space-y-1 list-disc list-inside">
                <li>Chaqueta abrigada o ruana para la noche junto a la fogata.</li>
                <li>Calzado cómodo con agarre para caminar por la granja y senderos.</li>
                <li>Bloqueador solar para el día y ropa cómoda para relajarte en la malla.</li>
                <li>Correa y camita para tu mascota si vienes con ella.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
