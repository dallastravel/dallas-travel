import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LeadershipSection } from './components/LeadershipSection';
import { AboutLegality } from './components/AboutLegality';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { SpiritualJourney } from './components/SpiritualJourney';
import { MentorsSection } from './components/MentorsSection';
import { BranchesDirectory } from './components/BranchesDirectory';
import { PartnersSection } from './components/PartnersSection';
import { InteractiveDashboard } from './components/InteractiveDashboard';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { PackageTier } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'landing' | 'dashboard'>('landing');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<string | undefined>(undefined);
  const [selectedScheduleForModal, setSelectedScheduleForModal] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (pkgId?: string) => {
    setSelectedPackageForModal(pkgId);
    setIsConsultationOpen(true);
  };

  const handleSelectPackage = (pkg: PackageTier) => {
    // Scroll to dashboard calculator with this package preselected
    const dashElem = document.getElementById('dashboard-section');
    if (dashElem) {
      dashElem.scrollIntoView({ behavior: 'smooth' });
    }
    handleOpenConsultation(pkg.id);
  };

  const handleBookSchedule = (scheduleId: string) => {
    setSelectedScheduleForModal(scheduleId);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1E293B] flex flex-col font-sans-clean selection:bg-[#C5A059]/30 selection:text-[#0E2A47]">
      
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'landing' ? (
          <>
            {/* 1. Hero Section */}
            <Hero
              onOpenConsultation={() => handleOpenConsultation()}
              onOpenDashboard={() => {
                const dashElem = document.getElementById('dashboard-section');
                if (dashElem) {
                  dashElem.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setActiveTab('dashboard');
                }
              }}
            />

            {/* 2. Sambutan Komisaris & Direktur Utama */}
            <ScrollReveal delay={100} direction="up">
              <LeadershipSection />
            </ScrollReveal>

            {/* 3. Mukadimah & Legalitas Kemenag RI PPIU/PIHK */}
            <ScrollReveal delay={100} direction="up">
              <AboutLegality />
            </ScrollReveal>

            {/* 4. Layanan Inti & Authentic Indonesian Culinary */}
            <ScrollReveal delay={100} direction="up">
              <ServicesSection
                onSelectService={(serviceId) => {
                  handleOpenConsultation(serviceId);
                }}
              />
            </ScrollReveal>

            {/* 5. Katalog Paket Umroh & Haji Khusus + Komparasi Essential vs Premium */}
            <ScrollReveal delay={100} direction="up">
              <PackagesSection
                onSelectPackage={handleSelectPackage}
                onOpenDashboardCalculator={() => {
                  const dashElem = document.getElementById('dashboard-section');
                  if (dashElem) dashElem.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </ScrollReveal>

            {/* 6. Makkah & Madinah Spiritual Experience */}
            <ScrollReveal delay={100} direction="up">
              <SpiritualJourney />
            </ScrollReveal>

            {/* 7. Dewan Pembimbing Ibadah & Tim Medis IDI */}
            <ScrollReveal delay={100} direction="up">
              <MentorsSection />
            </ScrollReveal>

            {/* 8. Dashboard Interaktif (Kalkulator Biaya, 3D Flip KPI Cards, Live Seat, Status Visa & Visualisasi Data) */}
            <ScrollReveal delay={100} direction="up">
              <InteractiveDashboard
                onOpenConsultation={() => handleOpenConsultation()}
                onBookSchedule={handleBookSchedule}
              />
            </ScrollReveal>

            {/* 9. Jaringan 21 Kantor Cabang & Perwakilan Nasional */}
            <ScrollReveal delay={100} direction="up">
              <BranchesDirectory />
            </ScrollReveal>

            {/* 10. Kemitraan Maskapai & Muassasah Saudi */}
            <ScrollReveal delay={100} direction="up">
              <PartnersSection />
            </ScrollReveal>
          </>
        ) : (
          /* Dedicated Dashboard Mode */
          <div className="pt-24 min-h-[90vh]">
            <InteractiveDashboard
              onOpenConsultation={() => handleOpenConsultation()}
              onBookSchedule={handleBookSchedule}
            />
          </div>
        )}
      </main>

      {/* Quiet Corporate Footer */}
      <Footer />

      {/* Booking & Consultation Modal */}
      <BookingModal
        isOpen={isConsultationOpen}
        onClose={() => {
          setIsConsultationOpen(false);
          setSelectedPackageForModal(undefined);
          setSelectedScheduleForModal(undefined);
        }}
        preselectedPackage={selectedPackageForModal}
        preselectedSchedule={selectedScheduleForModal}
      />
    </div>
  );
}
