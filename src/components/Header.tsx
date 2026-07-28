import React, { useState } from 'react';
import { Eye, Tv, Menu, X, Smartphone, Play, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenStreamModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenStreamModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#050505]/90 border-b border-white/10 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Matching Elegant Dark theme */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#F9E29C] to-[#B8860B] p-0.5 shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300 border border-white/20">
            <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-600 rounded-full border-2 border-[#050505] animate-ping" />
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-600 rounded-full border-2 border-[#050505]" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tighter text-white uppercase">
                BBN<span className="text-[#D4AF37]">AIJA</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded bg-red-600 text-white shadow-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Live
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Official Stream
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/60">
          <a href="#hero" className="hover:text-white transition-colors">
            Live 24/7
          </a>
          <a href="#how-it-works" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-[#D4AF37]" />
            Setup Guide
          </a>
          <a href="#housemates" className="hover:text-white transition-colors">
            Housemates
          </a>
          <a href="#schedule" className="hover:text-white transition-colors">
            Schedule
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            Help
          </a>
        </nav>

        {/* Header Action CTA - Gold Pill Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="header-watch-now-btn"
            onClick={onOpenStreamModal}
            className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#e0be4d] text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#D4AF37]/20"
          >
            <span className="flex items-center justify-center w-5 h-5 bg-black/10 rounded-full">
              <Play className="w-3 h-3 fill-black text-black" />
            </span>
            <span>Watch on StreamPulse</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050505]/95 backdrop-blur-2xl px-4 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:bg-white/5 rounded-lg flex items-center justify-between"
            >
              <span>Live Broadcast</span>
              <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-mono">24/7 HLS</span>
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-[#D4AF37]" />
              <span>Install StreamPulse Guide</span>
            </a>
            <a
              href="#housemates"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:bg-white/5 rounded-lg"
            >
              Housemates & Drama
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:bg-white/5 rounded-lg"
            >
              Weekly Schedule
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:bg-white/5 rounded-lg"
            >
              FAQ & Package Info
            </a>
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              id="mobile-drawer-watch-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStreamModal();
              }}
              className="w-full py-3 px-4 rounded-full font-bold bg-[#D4AF37] text-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 active:scale-98"
            >
              <Play className="w-4 h-4 fill-black text-black" />
              <span>Open StreamPulse App</span>
            </button>
            <p className="text-center text-[10px] uppercase tracking-widest text-white/40 mt-3 font-mono">
              Package: com.streampulse...vpxm
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
