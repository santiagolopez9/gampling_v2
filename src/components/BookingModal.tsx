import React, { useState, useEffect } from 'react';
import { X, Calendar, Check, Users, Dog, Heart, Car, UtensilsCrossed, Flame, Sparkles, ChevronRight, Phone, MessageSquare, Download, Share2, Printer, MapPin, CheckCircle2 } from 'lucide-react';
import { ACCOMMODATIONS, EXPERIENCE_ADDONS, RESORT_INFO, Accommodation, ExperienceAddon } from '../data/glampingData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'COP' | 'USD';
  initialUnitId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
  initialPets?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialUnitId = 'domo-1a',
  initialCheckIn,
  initialCheckOut,
  initialGuests = 2,
  initialPets = 0,
}) => {
  // Today and tomorrow calculation
  const today = new Date();
  const defIn = initialCheckIn || new Date(today.setDate(today.getDate() + 2)).toISOString().split('T')[0];
  const defOut = initialCheckOut || new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedUnitId, setSelectedUnitId] = useState<string>(initialUnitId);
  const [checkIn, setCheckIn] = useState<string>(defIn);
  const [checkOut, setCheckOut] = useState<string>(defOut);
  const [adults, setAdults] = useState<number>(initialGuests);
  const [pets, setPets] = useState<number>(initialPets);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  // Guest Form Details
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  // Generated Booking Code
  const [bookingCode, setBookingCode] = useState('');

  useEffect(() => {
    if (initialUnitId) {
      setSelectedUnitId(initialUnitId);
    }
  }, [initialUnitId]);

  useEffect(() => {
    // Generate a clean reservation reference code once
    const randomCode = `REF-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(randomCode);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentUnit = ACCOMMODATIONS.find((u) => u.id === selectedUnitId) || ACCOMMODATIONS[0];

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = Math.max(1, dOut.getTime() - dIn.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Calculate pricing
  const accommodationTotalCOP = currentUnit.priceCOP * nights;
  const accommodationTotalUSD = currentUnit.priceUSD * nights;

  const addonsTotalCOP = selectedAddons.reduce((sum, addonId) => {
    const addon = EXPERIENCE_ADDONS.find((a) => a.id === addonId);
    return sum + (addon ? addon.priceCOP : 0);
  }, 0);

  const addonsTotalUSD = selectedAddons.reduce((sum, addonId) => {
    const addon = EXPERIENCE_ADDONS.find((a) => a.id === addonId);
    return sum + (addon ? addon.priceUSD : 0);
  }, 0);

  const totalCOP = accommodationTotalCOP + addonsTotalCOP;
  const totalUSD = accommodationTotalUSD + addonsTotalUSD;

  const formatPrice = (cop: number, usd: number) => {
    if (currency === 'USD') return `$${usd} USD`;
    return `$${cop.toLocaleString('es-CO')} COP`;
  };

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    const addonNames = selectedAddons
      .map((id) => EXPERIENCE_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const msg = `¡Hola Glamping El Refugio La Calera! 🌿
Deseo realizar la siguiente reserva directa:

📌 *Código*: ${bookingCode}
🏕️ *Alojamiento*: ${currentUnit.name}
📅 *Check-in*: ${checkIn} (3:00 PM)
📅 *Check-out*: ${checkOut} (11:00 AM)
🌙 *Noches*: ${nights}
👥 *Huéspedes*: ${adults} adultos${pets > 0 ? `, ${pets} mascota(s) 🐶` : ''}
${addonNames ? `✨ *Adicionales*: ${addonNames}\n` : ''}
👤 *Titular*: ${guestName || 'Huésped'}
📱 *Teléfono*: ${guestPhone || 'Sin especificar'}
📧 *Email*: ${guestEmail || 'Sin especificar'}
${specialRequest ? `📝 *Observaciones*: ${specialRequest}\n` : ''}
💰 *Total Estimado*: $${totalCOP.toLocaleString('es-CO')} COP (~$${totalUSD} USD)

¿Me confirman la disponibilidad para transferir el anticipo bancario (Nequi/Bancolombia)? ¡Muchas gracias!`;

    return encodeURIComponent(msg);
  };

  // Google Calendar Link
  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Estadía en Glamping El Refugio (${currentUnit.name})`);
    const details = encodeURIComponent(
      `Reserva ${bookingCode}\nCheck-in: 3:00 PM\nTel: +57 320 3338606\nDirección: Predio El Refugio, Vereda San José, La Calera.`
    );
    const location = encodeURIComponent('Glamping El Refugio, Vereda San José, La Calera, Cundinamarca');
    const start = checkIn.replace(/-/g, '') + 'T150000Z';
    const end = checkOut.replace(/-/g, '') + 'T110000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  };

  // Download iCal (.ics)
  const downloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Glamping El Refugio//Reservas//ES
BEGIN:VEVENT
UID:${bookingCode}@glampingelrefugio.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${checkIn.replace(/-/g, '')}T150000
DTEND:${checkOut.replace(/-/g, '')}T110000
SUMMARY:Estadía Glamping El Refugio (${currentUnit.name})
DESCRIPTION:Reserva código ${bookingCode}. Check-in 3:00 PM. Desayuno campesino incluido. Tel: +57 320 3338606
LOCATION:Predio El Refugio, Vereda San José, La Calera, Cundinamarca
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Reserva-${bookingCode}-ElRefugio.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E0D7CC] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="bg-[#24211D] text-white px-6 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
          <div>
            <span className="text-2xs font-mono text-[#E6C2A3] uppercase tracking-wider block">
              Sistema de Reserva Directa
            </span>
            <h2 className="text-lg font-serif font-medium text-white">
              {RESORT_INFO.name} · La Calera
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Cerrar ventana de reserva"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Clean, non-pill text with separators) */}
        <div className="bg-[#F0EAE1] px-6 py-3 border-b border-[#E2DAD0] flex items-center justify-between text-xs text-[#6B6155] shrink-0 overflow-x-auto">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setStep(1)}
              className={`font-medium transition-colors ${
                step === 1 ? 'text-[#24211D] font-semibold underline underline-offset-4' : 'hover:text-[#24211D]'
              }`}
            >
              1. Fechas & Alojamiento
            </button>
            <span aria-hidden="true" className="text-[#C2B5A5]">/</span>
            <button
              onClick={() => setStep(2)}
              className={`font-medium transition-colors ${
                step === 2 ? 'text-[#24211D] font-semibold underline underline-offset-4' : 'hover:text-[#24211D]'
              }`}
            >
              2. Experiencias
            </button>
            <span aria-hidden="true" className="text-[#C2B5A5]">/</span>
            <button
              onClick={() => setStep(3)}
              className={`font-medium transition-colors ${
                step === 3 ? 'text-[#24211D] font-semibold underline underline-offset-4' : 'hover:text-[#24211D]'
              }`}
            >
              3. Datos Huésped
            </button>
            <span aria-hidden="true" className="text-[#C2B5A5]">/</span>
            <span
              className={`font-medium ${
                step === 4 ? 'text-[#C27D56] font-semibold' : 'text-[#8A7F72]'
              }`}
            >
              4. Confirmación
            </span>
          </div>

          <span className="font-mono text-xs text-[#8A7F72] hidden sm:block">
            Ref: {bookingCode}
          </span>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: Accommodation, Dates & Guests */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-[#24211D] mb-1">
                  1. Selecciona tu alojamiento y fechas
                </h3>
                <p className="text-xs text-[#6E6357]">
                  Todos los domos incluyen desayuno campesino, malla catamarán y recorrido por la granja.
                </p>
              </div>

              {/* Units Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {ACCOMMODATIONS.map((unit) => {
                  const isSelected = unit.id === selectedUnitId;
                  return (
                    <div
                      key={unit.id}
                      onClick={() => setSelectedUnitId(unit.id)}
                      className={`cursor-pointer rounded-xl border p-3.5 transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-white border-[#C27D56] ring-2 ring-[#C27D56]/20 shadow-xs'
                          : 'bg-[#FAF8F5] border-[#E0D7CC] hover:bg-white'
                      }`}
                    >
                      <div>
                        <div className="aspect-[16/10] rounded-lg overflow-hidden mb-2.5 bg-[#EAE2D5]">
                          <img
                            src={unit.image}
                            alt={unit.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="font-serif text-sm font-semibold text-[#24211D] mb-1">
                          {unit.name}
                        </h4>
                        <span className="text-2xs text-[#706558] block mb-2">
                          {unit.bedType} · {unit.capacity}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-[#EAE2D5] flex items-center justify-between text-xs">
                        <span className="font-mono font-semibold text-[#24211D]">
                          {formatPrice(unit.priceCOP, unit.priceUSD)}/n
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#C27D56] border-[#C27D56] text-white'
                              : 'border-[#BDB0A0]'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-white rounded-xl border border-[#E3DBD0]">
                <div>
                  <label className="block text-2xs font-medium uppercase text-[#73685C] tracking-wider mb-1">
                    Check-in (3:00 PM)
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D9CFC1] rounded-md px-3 py-2 text-xs font-medium text-[#24211D] focus:ring-1 focus:ring-[#C27D56]"
                  />
                </div>

                <div>
                  <label className="block text-2xs font-medium uppercase text-[#73685C] tracking-wider mb-1">
                    Check-out (11:00 AM)
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D9CFC1] rounded-md px-3 py-2 text-xs font-medium text-[#24211D] focus:ring-1 focus:ring-[#C27D56]"
                  />
                </div>

                <div>
                  <label className="block text-2xs font-medium uppercase text-[#73685C] tracking-wider mb-1">
                    Huéspedes
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-[#FAF8F5] border border-[#D9CFC1] rounded-md px-3 py-2 text-xs font-medium text-[#24211D]"
                  >
                    <option value={1}>1 Huésped</option>
                    <option value={2}>2 Huéspedes</option>
                    <option value={3}>3 Huéspedes</option>
                    <option value={4}>4 Huéspedes</option>
                    <option value={5}>5 Huéspedes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-2xs font-medium uppercase text-[#73685C] tracking-wider mb-1">
                    Mascotas (Gratis 🐶)
                  </label>
                  <select
                    value={pets}
                    onChange={(e) => setPets(Number(e.target.value))}
                    className="w-full bg-[#FAF8F5] border border-[#D9CFC1] rounded-md px-3 py-2 text-xs font-medium text-[#24211D]"
                  >
                    <option value={0}>0 Mascotas</option>
                    <option value={1}>1 Mascota</option>
                    <option value={2}>2 Mascotas</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Optional Experiences & Add-ons */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-[#24211D] mb-1">
                  2. Personaliza tu experiencia en la montaña
                </h3>
                <p className="text-xs text-[#6E6357]">
                  Puedes añadir servicios especiales a tu reserva. Si no deseas adicionales, puedes continuar al siguiente paso.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EXPERIENCE_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                        isChecked
                          ? 'bg-white border-[#C27D56] ring-1 ring-[#C27D56] shadow-xs'
                          : 'bg-[#FAF8F5] border-[#E3DBD0] hover:bg-white'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                          isChecked
                            ? 'bg-[#C27D56] border-[#C27D56] text-white'
                            : 'border-[#BDB0A0] bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-serif text-sm font-semibold text-[#24211D]">
                            {addon.name}
                          </h4>
                          <span className="font-mono text-xs font-semibold text-[#A65E38] whitespace-nowrap ml-2">
                            +{formatPrice(addon.priceCOP, addon.priceUSD)}
                          </span>
                        </div>
                        <p className="text-xs text-[#635A50] leading-relaxed">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Guest Details Form */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-[#24211D] mb-1">
                  3. Datos del titular de la reserva
                </h3>
                <p className="text-xs text-[#6E6357]">
                  Con estos datos nuestro equipo en La Calera preparará tu domo y te contactará por WhatsApp para darte la bienvenida.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E3DBD0] space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#4A433B] mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Laura Gómez"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC1] rounded-md px-3 py-2 text-sm text-[#24211D] focus:ring-1 focus:ring-[#C27D56]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4A433B] mb-1">
                      WhatsApp o Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      placeholder="Ej: +57 310 123 4567"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#D9CFC1] rounded-md px-3 py-2 text-sm text-[#24211D] focus:ring-1 focus:ring-[#C27D56]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A433B] mb-1">
                    Correo Electrónico (para voucher digital) *
                  </label>
                  <input
                    type="email"
                    placeholder="Ej: laura@ejemplo.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D9CFC1] rounded-md px-3 py-2 text-sm text-[#24211D] focus:ring-1 focus:ring-[#C27D56]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A433B] mb-1">
                    Observaciones o Peticiones Especiales (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="¿Es celebración de aniversario, cumpleaños o vienes con un perrito específico? Cuéntanos para prepararte sorpresas."
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D9CFC1] rounded-md px-3 py-2 text-xs text-[#24211D] focus:ring-1 focus:ring-[#C27D56]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Confirmation, Direct WhatsApp Link & Digital Voucher */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="bg-[#FAF4EC] p-4 sm:p-5 rounded-xl border border-[#E8DEC8] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3B4D3C] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#24211D] font-semibold">
                    ¡Pre-reserva generada con éxito! (Código: {bookingCode})
                  </h4>
                  <p className="text-xs text-[#6B6053]">
                    Envía los detalles a nuestro WhatsApp para asegurar tu fecha en La Calera y coordinar el anticipo bancario.
                  </p>
                </div>
              </div>

              {/* Digital Voucher Card */}
              <div className="bg-white rounded-2xl border border-[#E0D7CC] p-6 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EFE8DE] pb-4 gap-2">
                  <div>
                    <span className="text-2xs font-mono text-[#A65E38] uppercase">
                      Voucher de Estadía
                    </span>
                    <h3 className="font-serif text-xl text-[#24211D]">
                      {currentUnit.name}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-2xs text-[#7A7165] block font-mono">Código Oficial</span>
                    <span className="text-sm font-mono font-bold text-[#24211D]">
                      {bookingCode}
                    </span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#52493E]">
                  <div>
                    <span className="text-[#8A7F72] block">Check-in</span>
                    <strong className="text-[#24211D]">{checkIn}</strong>
                    <span className="text-2xs text-[#706558] block">3:00 PM</span>
                  </div>
                  <div>
                    <span className="text-[#8A7F72] block">Check-out</span>
                    <strong className="text-[#24211D]">{checkOut}</strong>
                    <span className="text-2xs text-[#706558] block">11:00 AM</span>
                  </div>
                  <div>
                    <span className="text-[#8A7F72] block">Estadía</span>
                    <strong className="text-[#24211D]">{nights} noche(s)</strong>
                    <span className="text-2xs text-[#706558] block">{adults} huéspedes · {pets} mascotas</span>
                  </div>
                  <div>
                    <span className="text-[#8A7F72] block">Titular</span>
                    <strong className="text-[#24211D]">{guestName || 'Por confirmar'}</strong>
                    <span className="text-2xs text-[#706558] block">{guestPhone || RESORT_INFO.phoneDisplay}</span>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE3D8] space-y-2 text-xs">
                  <div className="flex justify-between text-[#5C5347]">
                    <span>Alojamiento ({nights} noche{nights > 1 ? 's' : ''}):</span>
                    <span className="font-mono font-medium">
                      {formatPrice(accommodationTotalCOP, accommodationTotalUSD)}
                    </span>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="flex justify-between text-[#5C5347]">
                      <span>Servicios adicionales ({selectedAddons.length}):</span>
                      <span className="font-mono font-medium">
                        {formatPrice(addonsTotalCOP, addonsTotalUSD)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#3B4D3C] pt-1">
                    <span>Desayuno campesino & Granja agroecológica:</span>
                    <span className="font-medium">Incluido ($0)</span>
                  </div>

                  <div className="flex justify-between text-base font-serif font-bold text-[#24211D] pt-2 border-t border-[#DFD5C7]">
                    <span>Total a Pagar:</span>
                    <span className="tabular-nums text-[#C27D56]">
                      {formatPrice(totalCOP, totalUSD)}
                    </span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href={`${RESORT_INFO.whatsappUrl}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20BE5B] text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Confirmar Reserva por WhatsApp (+57 320 3338606)</span>
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href={generateGoogleCalendarUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 bg-white hover:bg-[#FAF8F5] text-[#2C2926] border border-[#DDD3C7] rounded-md text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-4 h-4 text-[#C27D56]" />
                      <span>Añadir a Google Calendar</span>
                    </a>

                    <button
                      onClick={downloadICS}
                      className="py-2.5 px-4 bg-white hover:bg-[#FAF8F5] text-[#2C2926] border border-[#DDD3C7] rounded-md text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-4 h-4 text-[#3B4D3C]" />
                      <span>Descargar Recordatorio (.ics)</span>
                    </button>
                  </div>
                </div>

                {/* Important notice */}
                <div className="text-2xs text-[#7A7165] space-y-1">
                  <p>
                    * Para garantizar el bloqueo de tu fecha, se requiere el anticipo del 50% transferible por Nequi, Daviplata o Bancolombia. El saldo restante se cancela al momento del Check-in en el glamping.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Sticky Summary & Navigation */}
        <div className="bg-[#FAF8F5] px-6 py-4 border-t border-[#E3DBD0] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          {/* Subtotal Preview */}
          <div className="flex items-baseline gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-xs text-[#706558]">Total ({nights} n):</span>
            <span className="text-xl font-serif font-bold text-[#24211D] tabular-nums">
              {formatPrice(totalCOP, totalUSD)}
            </span>
          </div>

          {/* Stepper Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {step > 1 && step < 4 && (
              <button
                onClick={() => setStep((step - 1) as any)}
                className="px-4 py-2 text-xs font-medium text-[#5E5448] hover:text-[#24211D] transition-colors"
              >
                Volver
              </button>
            )}

            {step < 3 && (
              <button
                onClick={() => setStep((step + 1) as any)}
                className="px-5 py-2.5 bg-[#C27D56] hover:bg-[#B06B45] text-white text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Continuar</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {step === 3 && (
              <button
                onClick={() => {
                  if (!guestName || !guestPhone) {
                    alert('Por favor indica tu nombre y teléfono para procesar la reserva.');
                    return;
                  }
                  setStep(4);
                }}
                className="px-6 py-2.5 bg-[#C27D56] hover:bg-[#B06B45] text-white text-xs font-medium rounded-md shadow-xs transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Finalizar y Ver Resumen</span>
                <Check className="w-4 h-4" />
              </button>
            )}

            {step === 4 && (
              <button
                onClick={onClose}
                className="px-5 py-2 bg-[#24211D] hover:bg-[#38332E] text-white text-xs font-medium rounded-md transition-colors"
              >
                Cerrar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
