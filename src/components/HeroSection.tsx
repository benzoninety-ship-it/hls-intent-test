import React, { useState, useEffect } from 'react';
import { Play, Download, Smartphone, Eye, Sparkles, Copy, Check, Radio, Flame, ShieldAlert, ChevronDown } from 'lucide-react';
import { BBN_STREAM_CONFIG } from '../data/bbnaijaData';

interface HeroSectionProps {
  onOpenStreamModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenStreamModal }) => {
  const [copied, setCopied] = useState(false);
  const [viewerCount, setViewerCount] = useState(1482930);

  // Countdown to Sunday Live Eviction
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 11, minutes: 34, seconds: 20 });

  useEffect(() => {
    // Simulate live viewer fluctuations
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 41) - 18);
    }, 4000);

    // Countdown timer tick
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timer);
    };
  }, []);

  const handleCopyQuickLink = () => {
    navigator.clipboard.writeText(BBN_STREAM_CONFIG.streamUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#050505] py-16 lg:py-24">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Call to Action */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Live 24/7 Official Stream
              </span>
              <span className="text-white/20">|</span>
              <span className="text-xs text-white/60 font-mono flex items-center gap-1">
                <Radio className="w-3.5 h-3.5 text-red-500" />
                {viewerCount.toLocaleString()} Viewers
              </span>
            </div>

            {/* Main Headline - Elegant Dark style */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.85] text-white">
                BIG BROTHER<br />
                <span className="text-[#D4AF37]">NAIJA</span>
              </h1>
              
              <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Experience the drama, the alliances, and pure reality broadcasted non-stop 24/7 directly to your Android device using <strong className="text-white font-semibold">StreamPulse Video Player</strong>.
              </p>
            </div>

            {/* Primary Action Buttons - Gold Pill Button matching theme */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-2">
              <button
                id="hero-watch-now-primary-btn"
                onClick={onOpenStreamModal}
                className="group relative w-full sm:w-auto flex items-center justify-center gap-4 bg-[#D4AF37] hover:bg-[#e6c148] text-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-extrabold text-lg tracking-wide hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#D4AF37]/20"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-black/10 rounded-full group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-black text-black" />
                </span>
                <span>WATCH ON STREAMPULSE</span>
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-7 py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center gap-2 transition-colors"
              >
                <Smartphone className="w-4 h-4 text-[#D4AF37]" />
                <span>Installation Guide</span>
              </a>
            </div>

            {/* M3U8 Link Quick Copy Bar */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-xl mx-auto lg:mx-0 shadow-2xl space-y-2">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span className="font-medium text-white/80 flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Direct HLS Stream Link (M3U8):
                </span>
                <span className="text-[10px] font-mono text-[#D4AF37] font-bold">1080p @ 60fps</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={BBN_STREAM_CONFIG.streamUrl}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-3 py-2 font-mono text-xs text-[#D4AF37] truncate focus:outline-none"
                />
                <button
                  id="hero-copy-m3u8-btn"
                  onClick={handleCopyQuickLink}
                  className="shrink-0 px-4 py-2 rounded-xl bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-[#D4AF37] font-bold text-xs border border-[#D4AF37]/30 transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Package Badge Notice */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[10px] uppercase tracking-widest text-white/40 pt-1 font-mono">
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Smartphone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Package: com.streampulse...vpxm</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Flame className="w-3.5 h-3.5 text-red-500" />
                <span>24/7 Uninterrupted Feed</span>
              </div>
            </div>

          </div>

          {/* Right Column: BBN Studio Status & Eviction Countdown */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Elegant Dark Stream Status Card */}
            <div className="bg-gradient-to-br from-[#D4AF37]/20 via-white/5 to-transparent border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Top Status */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-1">
                  Current Stream Status
                </p>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  High Quality Live Feed
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  1080p @ 60fps Active Broadcast
                </p>
              </div>

              {/* Big Brother Glowing Eye Visual */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#050505] border border-white/10 flex flex-col items-center justify-center p-6 shadow-inner">
                <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#F9E29C] to-[#B8860B] p-0.5 shadow-2xl shadow-[#D4AF37]/30">
                  <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                    <Eye className="w-12 h-12 text-[#D4AF37] animate-pulse" />
                  </div>
                </div>

                <button
                  onClick={onOpenStreamModal}
                  className="mt-4 px-6 py-2 rounded-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e0be4d] transition-colors flex items-center gap-2 shadow-lg"
                >
                  <Play className="w-3.5 h-3.5 fill-black text-black" />
                  <span>Launch in StreamPulse</span>
                </button>
              </div>

              {/* Eviction Countdown Box */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    Sunday Eviction Night
                  </span>
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    LIVE SHOW
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-[#050505] p-2.5 rounded-2xl border border-white/10">
                    <div className="text-xl font-black text-[#D4AF37] font-mono">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Days</div>
                  </div>
                  <div className="bg-[#050505] p-2.5 rounded-2xl border border-white/10">
                    <div className="text-xl font-black text-[#D4AF37] font-mono">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Hours</div>
                  </div>
                  <div className="bg-[#050505] p-2.5 rounded-2xl border border-white/10">
                    <div className="text-xl font-black text-[#D4AF37] font-mono">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Mins</div>
                  </div>
                  <div className="bg-[#050505] p-2.5 rounded-2xl border border-white/10">
                    <div className="text-xl font-black text-[#D4AF37] font-mono">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Secs</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
