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
  const [activeTab, setActiveTab] = useState<'landing' | 'dashboard' | 'gallery'>('landing');
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
                }
              }} 
            />
            
            <LeadershipSection />
            <AboutLegality />
            <ServicesSection />
            <PackagesSection onSelectPackage={handleSelectPackage} />
            <SpiritualJourney />
            <MentorsSection />
            <BranchesDirectory />

            {/* Dashboard Interaktif di Bagian Bawah Landing */}
            <div id="dashboard-section">
              <InteractiveDashboard />
            </div>

            <PartnersSection />
            <Footer />
          </>
        ) : activeTab === 'dashboard' ? (
          <div className="pt-24 min-h-[90vh]">
            <InteractiveDashboard />
          </div>
        ) : (
          /* Halaman Khusus Galeri */
          <div className="pt-24 min-h-[90vh] bg-gray-900 text-white flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">✨ Galeri Foto Jamaah</h2>
              <p className="text-gray-400">Konten galeri sedang ditampilkan di sini.</p>
            </div>
          </div>
        )}
      </main>

      <BookingModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
        initialPackageId={selectedPackageForModal}
      />
    </div>
  );
}
