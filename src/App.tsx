import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InstallationGuide } from './components/InstallationGuide';
import { HousematesSection } from './components/HousematesSection';
import { ScheduleSection } from './components/ScheduleSection';
import { FanPollSection } from './components/FanPollSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StreamPulseModal } from './components/StreamPulseModal';
import { Play } from 'lucide-react';

export default function App() {
  const [isStreamModalOpen, setIsStreamModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Header */}
      <Header onOpenStreamModal={() => setIsStreamModalOpen(true)} />

      {/* Main Page Sections */}
      <main>
        <HeroSection onOpenStreamModal={() => setIsStreamModalOpen(true)} />
        <InstallationGuide onOpenStreamModal={() => setIsStreamModalOpen(true)} />
        <HousematesSection onOpenStreamModal={() => setIsStreamModalOpen(true)} />
        <ScheduleSection onOpenStreamModal={() => setIsStreamModalOpen(true)} />
        <FanPollSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenStreamModal={() => setIsStreamModalOpen(true)} />

      {/* StreamPulse App Launch / Instructions Modal */}
      <StreamPulseModal
        isOpen={isStreamModalOpen}
        onClose={() => setIsStreamModalOpen(false)}
      />

      {/* Floating Action Button for Instant Mobile Launch */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          id="floating-watch-btn"
          onClick={() => setIsStreamModalOpen(true)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-2xl shadow-amber-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-slate-950"
          aria-label="Stream Live BBNaija"
        >
          <Play className="w-6 h-6 fill-slate-950" />
          <span className="absolute right-full mr-3 bg-slate-900 border border-slate-800 text-amber-300 font-bold text-xs px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Stream in StreamPulse
          </span>
        </button>
      </div>

    </div>
  );
}
