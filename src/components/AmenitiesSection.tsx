import React from 'react';
import { Coffee, Wifi, Flame, Sparkles, Dog, Utensils, Music, ShieldCheck, HeartHandshake, Compass, Trees, ShowerHead } from 'lucide-react';
import desayunoImage from '../assets/images/desayuno_campesino_terraza_1790113607741.jpg';

export const AmenitiesSection: React.FC = () => {
  const amenities = [
    {
      icon: Coffee,
      title: 'Desayuno Campesino Incluido',
      desc: 'Ingredientes frescos de la región: arepas artesanales, huevos al gusto, fruta fresca y café colombiano recién colado servido a tu terraza.',
    },
    {
      icon: Trees,
      title: 'Malla Catamarán Panorámica',
      desc: 'Flota sobre el Valle de Sopó en la icónica red suspendida. Ideal para relajarse, leer o contemplar los atardeceres andinos.',
    },
    {
      icon: ShowerHead,
      title: 'Agua Caliente 24/7 Garantizada',
      desc: 'Sistema térmico presurizado de alta capacidad para disfrutar de una ducha reconfortante en cualquier hora del día o de la noche.',
    },
    {
      icon: Dog,
      title: '100% Pet Friendly',
      desc: 'Tus mascotas son parte de la aventura. Senderos abiertos y bienvenida especial sin ningún costo adicional.',
    },
    {
      icon: Wifi,
      title: 'Wi-Fi de Alta Velocidad',
      desc: 'Conectividad estable de montaña para teletrabajo o streaming mientras estás inmerso en la serenidad del bosque.',
    },
    {
      icon: Music,
      title: 'Equipo de Sonido Bluetooth & Nevera',
      desc: 'Crea tu propia atmósfera musical en el domo y mantén tus bebidas y snacks frescos en tu minibar privado.',
    },
    {
      icon: Flame,
      title: 'Terraza Privada & Fogata de Leña',
      desc: 'Cada domo tiene su propio deck independiente con leña de cortesía para encender la fogata bajo el manto de estrellas.',
    },
    {
      icon: Utensils,
      title: 'Restaurante Campestre & Bar',
      desc: 'Platos típicos andinos, cortes al carbón, vinos seleccionados, coctelería y servicio a la habitación disponible.',
    },
  ];

  return (
    <section id="comodidades" className="py-20 bg-[#F4EFEA] border-t border-[#E5DDD2] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-[#A65E38] uppercase block mb-2">
            Confort en la Naturaleza
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] tracking-tight mb-4 text-balance">
            Todo lo necesario para desconectar sin perder la comodidad.
          </h2>
          <p className="text-base text-[#5E554B] leading-relaxed">
            Pensamos cada detalle para que tu estancia en El Refugio sea cálida, acogedora y sin preocupaciones.
          </p>
        </div>

        {/* Bento Grid layout with image feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#E2DAD0] shadow-2xs hover:border-[#C27D56]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] text-[#A65E38] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#24211D] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#635A50] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Banner: Desayuno campesino */}
        <div className="mt-10 bg-white rounded-2xl border border-[#E2DAD0] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto">
            <img
              src={desayunoImage}
              alt="Desayuno campesino en la terraza de El Refugio"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
            <span className="text-xs font-mono text-[#A65E38] uppercase tracking-wider mb-2">
              Tradición & Sabor de La Calera
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D] mb-3">
              Desayunos con café de origen y productos de la huerta.
            </h3>
            <p className="text-sm sm:text-base text-[#5E554B] leading-relaxed mb-4">
              Cada mañana preparamos el desayuno campesino con huevos de gallinas de campo, pan recién horneado, queso campesino fresco, arepas calientes y café especial de fincas colombianas. Servido caliente en tu terraza privada a la hora que indiques.
            </p>
            <div className="flex items-center gap-6 text-xs text-[#70665B] font-mono">
              <span>Horario: 7:30 AM a 10:30 AM</span>
              <span>·</span>
              <span className="text-[#3B4D3C] font-medium">Incluido en todas las reservas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
