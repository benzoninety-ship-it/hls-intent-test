import React, { useState } from 'react';
import { 
  Download, Play, Copy, Check, Smartphone, ArrowRight, 
  ExternalLink, ShieldCheck, CheckCircle2, PlayCircle, Tv, Info, QrCode
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { BBN_STREAM_CONFIG, INSTALL_STEPS } from '../data/bbnaijaData';

interface InstallationGuideProps {
  onOpenStreamModal: () => void;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({ onOpenStreamModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(BBN_STREAM_CONFIG.streamUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLaunchIntent = () => {
    window.location.href = BBN_STREAM_CONFIG.intentUri;
  };

  return (
    <section id="how-it-works" className="py-20 bg-[#050505] relative overflow-hidden border-y border-white/10">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em]">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Setup Instructions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            How to Watch BBNaija in <br />
            <span className="text-[#D4AF37]">StreamPulse Android App</span>
          </h2>

          <p className="text-white/60 text-base leading-relaxed">
            Follow these 4 simple steps to launch the official 24/7 stream in StreamPulse (Package: <code className="text-[#D4AF37] font-mono text-xs">com.streampulse...vpxm</code>).
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTALL_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 rounded-3xl p-6 relative flex flex-col justify-between shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-black text-sm flex items-center justify-center border border-[#D4AF37]/30">
                    0{item.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Step {item.step}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-white/60 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-[#D4AF37] font-semibold group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner with Intent Launch & Play Store links */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Verified Android Package Target
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                StreamPulse Player Details & Specs
              </h3>

              <div className="bg-[#050505] p-4 rounded-2xl border border-white/10 space-y-2 font-mono text-xs text-white/70">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">App Name:</span>
                  <span className="text-[#D4AF37] font-bold">StreamPulse Video Player</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">Package ID:</span>
                  <span className="text-white select-all font-mono break-all">{BBN_STREAM_CONFIG.packageName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Supported Streams:</span>
                  <span className="text-white/80">HLS (.m3u8), MP4, RTSP, DASH</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="guide-trigger-intent-btn"
                  onClick={handleLaunchIntent}
                  className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#D4AF37] text-black hover:bg-[#e0be4d] shadow-lg shadow-[#D4AF37]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-black text-black" />
                  <span>Test Launch Intent Now</span>
                </button>

                <button
                  id="guide-copy-stream-btn"
                  onClick={handleCopyLink}
                  className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/10 flex items-center gap-2 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Stream URL Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#D4AF37]" />
                      <span>Copy M3U8 Stream URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right QR Code Column */}
            <div className="lg:col-span-5 bg-[#050505] p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
                Scan with Phone Camera
              </span>

              <div className="p-4 bg-white rounded-2xl shadow-xl">
                <QRCodeSVG
                  value={BBN_STREAM_CONFIG.intentUri}
                  size={140}
                  level="H"
                  includeMargin={true}
                />
              </div>

              <p className="text-[11px] text-white/50 mt-3 max-w-xs">
                Scanning triggers <code className="text-[#D4AF37] font-mono">com.streampulse...vpxm</code> intent directly on Android.
              </p>

              <button
                id="guide-copy-link-btn"
                onClick={handleCopyLink}
                className="mt-4 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/10 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#D4AF37]" />}
                <span>{copied ? 'HLS Link Copied!' : 'Copy HLS Stream URL'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
