import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PanoramicViewSection } from './components/PanoramicViewSection';
import { AccommodationsSection } from './components/AccommodationsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { AgroecologicalFarmSection } from './components/AgroecologicalFarmSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { HowToGetThereSection } from './components/HowToGetThereSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [currency, setCurrency] = useState<'COP' | 'USD'>('COP');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  
  // Pre-filled reservation state
  const [bookingParams, setBookingParams] = useState<{
    unitId: string;
    checkIn?: string;
    checkOut?: string;
    guests: number;
    pets: number;
  }>({
    unitId: 'domo-1a',
    guests: 2,
    pets: 0,
  });

  const handleOpenBooking = (unitId: string = 'domo-1a') => {
    setBookingParams((prev) => ({ ...prev, unitId }));
    setBookingModalOpen(true);
  };

  const handleQuickBook = (params: {
    checkIn: string;
    checkOut: string;
    unitId: string;
    guests: number;
    pets: number;
  }) => {
    setBookingParams(params);
    setBookingModalOpen(true);
  };

  const handleAddExperienceToBooking = (addonId: string) => {
    setBookingModalOpen(true);
  };

  const handleScrollToVista = () => {
    const el = document.getElementById('vista');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2926]">
      {/* Top Bar Header */}
      <Header
        currency={currency}
        onCurrencyToggle={(c) => setCurrency(c)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currency={currency}
          onQuickBook={handleQuickBook}
          onExploreVista={handleScrollToVista}
        />

        {/* Panoramic View Section */}
        <PanoramicViewSection onOpenBooking={() => handleOpenBooking()} />

        {/* Accommodations Showcase */}
        <AccommodationsSection
          currency={currency}
          onSelectUnit={(unitId) => handleOpenBooking(unitId)}
        />

        {/* Amenities & Comfort */}
        <AmenitiesSection />

        {/* Agroecological Farm Experience */}
        <AgroecologicalFarmSection onOpenBooking={() => handleOpenBooking()} />

        {/* Experiences & Addons */}
        <ExperiencesSection
          currency={currency}
          onAddExperienceToBooking={handleAddExperienceToBooking}
        />

        {/* How to Get There & Map Guidance */}
        <HowToGetThereSection />

        {/* Google Reviews Showcase */}
        <ReviewsSection />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Direct Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        currency={currency}
        initialUnitId={bookingParams.unitId}
        initialCheckIn={bookingParams.checkIn}
        initialCheckOut={bookingParams.checkOut}
        initialGuests={bookingParams.guests}
        initialPets={bookingParams.pets}
      />

      {/* Floating Concierge */}
      <WhatsAppFloatingButton />
    </div>
  );
}
