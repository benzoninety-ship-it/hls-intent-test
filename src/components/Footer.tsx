import React from 'react';
import { Eye, Play, Download, Smartphone, ExternalLink, ShieldCheck } from 'lucide-react';
import { BBN_STREAM_CONFIG } from '../data/bbnaijaData';

interface FooterProps {
  onOpenStreamModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStreamModal }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#F9E29C] to-[#B8860B] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white uppercase tracking-wider">
                  BBN<span className="text-[#D4AF37]">AIJA</span>
                </span>
                <span className="text-[10px] text-white/40 block font-mono uppercase tracking-widest">StreamPulse Companion</span>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Official landing page for streaming 24/7 Big Brother Naija live feeds on Android devices via StreamPulse Video Player.
            </p>

            <div className="bg-white/5 border border-white/10 p-3 rounded-2xl font-mono text-[10px] text-white/70">
              <span className="text-white/40 block text-[9px] uppercase font-sans font-bold tracking-widest">Android Package ID:</span>
              <span className="text-[#D4AF37] select-all font-bold break-all">{BBN_STREAM_CONFIG.packageName}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Live Broadcast</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">Install StreamPulse</a>
              </li>
              <li>
                <a href="#housemates" className="hover:text-white transition-colors">Housemates Directory</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">Weekly Schedule</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ &amp; Help</a>
              </li>
            </ul>
          </div>

          {/* Stream CTA */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Launch Player
            </h4>
            
            <button
              id="footer-watch-now-btn"
              onClick={onOpenStreamModal}
              className="w-full py-3 px-4 rounded-full font-bold text-xs uppercase tracking-wider bg-[#D4AF37] text-black hover:bg-[#e0be4d] flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 active:scale-95"
            >
              <Play className="w-4 h-4 fill-black text-black" />
              <span>Watch on StreamPulse</span>
            </button>

            <a
              href={BBN_STREAM_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-full font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/10 flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4 text-[#D4AF37]" />
              <span>Google Play Store</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/50" />
            </a>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/40 gap-4 uppercase tracking-widest font-mono">
          <p>© 2026 Big Brother Naija Broadcast Portal.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-white/60">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              HLS Protocol Verified
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
