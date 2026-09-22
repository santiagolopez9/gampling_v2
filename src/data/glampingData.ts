import heroVistaImg from '../assets/images/hero_glamping_refugio_vista_1790113577665.jpg';
import domoInteriorImg from '../assets/images/domo_interior_cozy_1790113588461.jpg';
import mallaCatamaranImg from '../assets/images/malla_catamaran_experience_1790113598317.jpg';
import desayunoImg from '../assets/images/desayuno_campesino_terraza_1790113607741.jpg';
import granjaImg from '../assets/images/granja_agroecologica_refugio_1790113616920.jpg';

export interface Accommodation {
  id: string;
  name: string;
  tagline: string;
  description: string;
  priceCOP: number;
  priceUSD: number;
  capacity: string;
  bedType: string;
  size: string;
  image: string;
  gallery: string[];
  features: string[];
  included: string[];
  highlight?: string;
}

export interface VistaScene {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  description: string;
  ambientNote: string;
  image: string;
  accentColor: string;
}

export interface ExperienceAddon {
  id: string;
  name: string;
  description: string;
  priceCOP: number;
  priceUSD: number;
  iconName: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  tag: string;
  verifiedGoogle: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'reserva' | 'llegada' | 'servicios' | 'mascotas';
}

export const RESORT_INFO = {
  name: 'Glamping el Refugio',
  location: 'Vereda San José, La Calera, Cundinamarca',
  fullAddress: 'Predio El Refugio, Vereda San José, La Calera, Cundinamarca, Colombia',
  distanceBogota: '45 minutos desde Bogotá (Calle 85 / Patios)',
  distanceLaCalera: '20 minutos del casco urbano de La Calera',
  phone: '+57 320 3338606',
  phoneDisplay: '320 3338606',
  whatsappUrl: 'https://wa.me/573203338606',
  instagram: '@glampingelrefugio',
  instagramUrl: 'https://www.instagram.com/glampingelrefugio',
  googleRating: 5.0,
  googleReviewsCount: 74,
  currencyExchangeRate: 4000, // 1 USD = ~4,000 COP
  checkIn: '3:00 PM',
  checkOut: '11:00 AM',
};

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: 'domo-1a',
    name: 'Glamping 1A El Refugio (Domo Insignia)',
    tagline: 'Malla catamarán suspendida y vista frontal infinita al Valle de Sopó',
    description:
      'Nuestro domo de madera más aclamado. Construcción artesanal térmica sobre la cresta de la montaña con ventanal panorámico de 180 grados, terraza privada de madera nativa y la icónica malla catamarán suspendida para flotar sobre el abismo verde del valle.',
    priceCOP: 380000,
    priceUSD: 95,
    capacity: '2 - 3 Personas',
    bedType: 'Cama King Size ortopédica + plumón térmico',
    size: '42 m² + terraza exterior',
    image: heroVistaImg,
    gallery: [heroVistaImg, domoInteriorImg, mallaCatamaranImg, desayunoImg],
    features: [
      'Malla catamarán suspendida al vacío',
      'Terraza privada con mesa y sillas rústicas',
      'Agua caliente presurizada 24/7',
      'Wi-Fi de alta velocidad en montaña',
      'Equipo de sonido Bluetooth envolvente',
      'Nevera / minibar surtido',
      'Cafetera de goteo con café especial de origen',
      'Zona de fogata privada en terraza',
      'Pet Friendly (bienvenidas tus mascotas sin costo)',
    ],
    included: [
      'Desayuno campesino artesanal para 2 personas',
      'Recorrido guiado por la granja agroecológica',
      'Parqueadero privado vigilado',
      'Leña de cortesía para la primera fogata',
    ],
    highlight: 'El más reservado',
  },
  {
    id: 'domo-cedro-deluxe',
    name: 'Domo Cedro Deluxe con Tina de Hidromasaje',
    tagline: 'Relajación absoluta con tina caliente de montaña y mirador estelar',
    description:
      'Una experiencia de intimidad y lujo rústico. Cuenta con una tina de madera tipo ofuro artesanal en la terraza privada con agua caliente permanente, perfecta para sumergirse con una copa de vino mientras el sol desciende sobre las montañas de Sopó.',
    priceCOP: 480000,
    priceUSD: 120,
    capacity: '2 Personas (Exclusivo parejas)',
    bedType: 'Cama King Size con dosel y lencería premium',
    size: '48 m² + terraza con tina',
    image: domoInteriorImg,
    gallery: [domoInteriorImg, heroVistaImg, mallaCatamaranImg, desayunoImg],
    features: [
      'Tina de hidromasaje en madera exterior con vista',
      'Malla catamarán doble con cojines térmicos',
      'Chimenea de leña interior / estufa nórdica',
      'Terraza privada panorámica ampliada',
      'Agua caliente instantánea de alta presión',
      'Wi-Fi y sonido Bluetooth premium',
      'Cafetera italiana y estación de té de hierbas de la huerta',
      'Nevera y amenidades orgánicas de baño',
      'Pet Friendly',
    ],
    included: [
      'Desayuno campesino gourmet a la terraza',
      'Botella de vino tinto o blanco de cortesía',
      'Recorrido guiado por la granja agroecológica',
      'Kit de sales minerales para la tina',
      'Parqueadero privado',
    ],
    highlight: 'Ideal para aniversarios y parejas',
  },
  {
    id: 'cabana-san-jose',
    name: 'Cabaña Campestre San José',
    tagline: 'Espacio cálido en madera de dos niveles para familias o amigos',
    description:
      'Para quienes buscan el encanto rústico de una cabaña andina con mayor espacio. Dos niveles con estructura de ciprés, chimenea de piedra natural en la sala, cocina de campo y amplio balcón con vista al valle y a los corrales de la granja.',
    priceCOP: 550000,
    priceUSD: 138,
    capacity: 'Hasta 5 Personas',
    bedType: '1 Cama Queen + 3 Camas individuales confort',
    size: '75 m² en dos plantas',
    image: granjaImg,
    gallery: [granjaImg, domoInteriorImg, desayunoImg, heroVistaImg],
    features: [
      'Chimenea tradicional de leña en piedra',
      'Balcón mirador al valle y a la huerta orgánica',
      'Cocineta equipada con nevera, cafetera y vajilla',
      'Mesa de comedor rústica de roble',
      'Agua caliente en ducha y lavamanos',
      'Wi-Fi de alta velocidad',
      'Equipo de sonido para reuniones tranquilas',
      '100% Pet Friendly con jardín privado',
    ],
    included: [
      'Desayuno campesino para todos los huéspedes',
      'Paseo guiado a la granja con interacción animal',
      'Cesta de leña seca para chimenea',
      'Parqueadero privado',
    ],
  },
];

export const VISTA_SCENES: VistaScene[] = [
  {
    id: 'tarde-catamaran',
    title: 'La Malla Catamarán sobre el Abismo',
    subtitle: 'Flotar sobre el verde infinito del Valle de Sopó',
    time: '3:30 PM',
    description:
      'La experiencia insignia de El Refugio. Acostarse en la resistente malla suspendida al vacío, sintiendo la brisa limpia de la cordillera andina mientras el valle se abre bajo tus pies con su mosaico de fincas, bosques nativos y cielos despejados.',
    ambientNote: 'Sensación de ingravidez, silencio de montaña y aire 100% puro.',
    image: mallaCatamaranImg,
    accentColor: '#4A5D4E',
  },
  {
    id: 'atardecer-dorado',
    title: 'Atardecer Dorado & Luz Crepuscular',
    subtitle: 'El valle se tiñe de ocres, dorados y violetas',
    time: '5:45 PM',
    description:
      'A esta hora el sol desciende suavemente tras las colinas de Cundinamarca. La luz dorada baña los domos de madera y la bruma del páramo comienza a acariciar los senderos mientras se enciende la fogata en la terraza.',
    ambientNote: 'El momento mágico para brindar con un vino caliente o café recién colado.',
    image: heroVistaImg,
    accentColor: '#C27D56',
  },
  {
    id: 'amanecer-campesino',
    title: 'Amanecer con Canto de Aves & Desayuno',
    subtitle: 'La niebla matutina se disipa con el primer café',
    time: '7:00 AM',
    description:
      'Despertar con el canto de los mirlos y colibríes. La bruma baja llena el valle asemejando un océano de nubes blancas. Disfruta tu desayuno con arepa caliente, huevos campesinos y café de origen en la terraza privada.',
    ambientNote: 'Desconexión total a solo 45 minutos del caos de Bogotá.',
    image: desayunoImg,
    accentColor: '#B08850',
  },
  {
    id: 'granja-agroecologica',
    title: 'Granja Agroecológica & Vida de Campo',
    subtitle: 'Conexión consciente con la tierra y los animales',
    time: '10:00 AM',
    description:
      'El recorrido guiado por nuestra granja permacultural te permite recolectar hortalizas frescas de la huerta, alimentar a las ovejas y gallinas felices, y aprender sobre el cultivo orgánico sostenible en alta montaña.',
    ambientNote: 'Una actividad entrañable incluida en todas las estadías, ideal para todas las edades.',
    image: granjaImg,
    accentColor: '#3B4D3C',
  },
];

export const EXPERIENCE_ADDONS: ExperienceAddon[] = [
  {
    id: 'plan-romantico',
    name: 'Decoración Romántica & Velada Especial',
    description:
      'Camino de velas aromáticas, pétalos de rosas naturales en la cama y terraza, botella de vino tinto o blanco reserva, chocolates artesanales y leña para fogata íntima.',
    priceCOP: 120000,
    priceUSD: 30,
    iconName: 'Heart',
    popular: true,
  },
  {
    id: 'cena-campestre',
    name: 'Cena Especial en la Terraza (2 Personas)',
    description:
      'Menú gourmet de montaña servido caliente en tu terraza privada. Incluye entrada artesanal, plato fuerte (opción corte de carne magra al carbón, trucha andina o risotto de hongos orgánicos de la huerta) y postre casero.',
    priceCOP: 110000,
    priceUSD: 28,
    iconName: 'UtensilsCrossed',
    popular: true,
  },
  {
    id: 'transporte-bogota',
    name: 'Servicio de Transporte Privado Bogotá - El Refugio',
    description:
      'Vehículo privado y conductor de confianza puerta a puerta desde Bogotá (Salitre, Zona Rosa, Calle 85 o Chapinero) directo al glamping, ida o regreso.',
    priceCOP: 140000,
    priceUSD: 35,
    iconName: 'Car',
  },
  {
    id: 'kit-fogata-malvaviscos',
    name: 'Cesta Fogata Nocturna & Malvaviscos',
    description:
      'Cesta con leña de roble seco de combustión lenta, mechero natural, pinchos de madera, malvaviscos gigantes y 2 chocolates calientes campesinos con clavos y canela.',
    priceCOP: 45000,
    priceUSD: 12,
    iconName: 'Flame',
  },
  {
    id: 'plan-pasadia',
    name: 'Plan Pasadía & Picnic Campestre (Sin hospedaje nocturno)',
    description:
      'Uso de áreas comunes, malla catamarán de día, almuerzo campestre, recorrido guiado por la granja agroecológica y café de la tarde. (10:00 AM a 5:00 PM).',
    priceCOP: 85000,
    priceUSD: 22,
    iconName: 'Sun',
  },
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Camila Montoya & Felipe Restrepo',
    date: 'Hace 2 semanas',
    rating: 5,
    text: '¡Una experiencia 10 de 10! La vista al Valle de Sopó desde la malla catamarán es sencillamente indescriptible. El domo es super calientito, el agua sale hirviendo (cosa que en La Calera se agradece un montón), y el desayuno campesino con café recién hecho nos encantó. Nuestro perrito estuvo libre y feliz en la granja. ¡Volveremos pronto!',
    tag: 'Estadía en Pareja con Mascota',
    verifiedGoogle: true,
  },
  {
    id: 'rev-2',
    author: 'Dr. Santiago Vargas',
    date: 'Hace 1 mes',
    rating: 5,
    text: 'A tan solo 45 minutos de mi apartamento en Chapinero encontré este oasis de paz. La atención de los anfitriones es impecable y de una calidez humana que ya no se ve. El recorrido por la granja agroecológica es muy bonito y educativo. El Wi-Fi funciona genial por si necesitas revisar algo de trabajo en medio del bosque.',
    tag: 'Desconexión de fin de semana',
    verifiedGoogle: true,
  },
  {
    id: 'rev-3',
    author: 'Valentina Osorio',
    date: 'Hace 3 semanas',
    rating: 5,
    text: 'Celebramos nuestro aniversario acá y pedimos el paquete de decoración con la cena en la terraza. El atardecer con las velas y la fogata fue de película. La cama es comodísima con cobijas térmicas excelentes. Se nota el amor y cuidado con el que han construido cada detalle de El Refugio.',
    tag: 'Aniversario Romántico',
    verifiedGoogle: true,
  },
  {
    id: 'rev-4',
    author: 'Andrés Gómez Borda',
    date: 'Hace 2 meses',
    rating: 5,
    text: 'El mejor glamping de La Calera sin duda alguna. Las fotos se quedan cortas con lo imponente que es el paisaje real. Subimos en automóvil normal sin problemas siguiendo las indicaciones de la vereda San José. La noche estrellada junto a la fogata no tiene precio.',
    tag: 'Hospedaje Campestre',
    verifiedGoogle: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: '¿A qué distancia queda de Bogotá y cómo es la carretera?',
    answer:
      'Queda en la Vereda San José de La Calera, a solo 45 minutos saliendo por los cerros orientales (Calle 85 / Vía a Patios) y a 20 minutos del parque principal de La Calera. La vía está pavimentada en su gran mayoría y el tramo final es carreteable destapado en buen estado, completamente apto para automóviles sedan estándar, camionetas y motos.',
    category: 'llegada',
  },
  {
    question: '¿Qué incluye la tarifa de hospedaje por noche?',
    answer:
      'Todas nuestras tarifas incluyen: noche de alojamiento en el domo o cabaña seleccionada, desayuno campesino completo servido a la terraza o restaurante, recorrido guiado por nuestra granja agroecológica, uso exclusivo de la terraza privada y malla catamarán, leña de cortesía para la fogata, Wi-Fi ilimitado y parqueadero privado vigilado.',
    category: 'servicios',
  },
  {
    question: '¿Las mascotas son bienvenidas? ¿Hay algún cobro extra?',
    answer:
      '¡Sí, somos 100% Pet Friendly! Creemos que los peludos son parte de la familia. No cobramos tarifa adicional por su ingreso. Contamos con amplias zonas verdes seguras y senderos donde pueden pasear con correa para respetar el hábitat de las aves y los animales de la granja.',
    category: 'mascotas',
  },
  {
    question: '¿Cómo es el clima y hace frío en la noche?',
    answer:
      'El clima en el día es fresco y soleado (17°C a 21°C), ideal para la terraza y la malla catamarán. En la noche la temperatura baja a unos 9°C a 12°C. Para garantizar tu confort total, nuestros domos cuentan con aislamiento térmico de madera, camas vestidas con plumones nórdicos y mantas andinas, y duchas con agua caliente presurizada las 24 horas.',
    category: 'servicios',
  },
  {
    question: '¿Cuáles son los horarios de Check-in y Check-out?',
    answer:
      'El Check-in inicia a las 3:00 PM y el Check-out es a las 11:00 AM. Si deseas llegar más temprano para disfrutar de la granja o almorzar en el restaurante campestre antes del ingreso a tu domo, puedes coordinarlo previamente sin costo.',
    category: 'reserva',
  },
  {
    question: '¿Cómo se confirma la reserva y qué métodos de pago aceptan?',
    answer:
      'Puedes reservar directamente en esta web eligiendo tus fechas. Tu solicitud se confirma inmediatamente vía WhatsApp con nuestro equipo de recepción. Aceptamos transferencias Bancolombia, Nequi, Daviplata, tarjetas de crédito (vía link de pago seguro) y efectivo en pesos colombianos.',
    category: 'reserva',
  },
];
