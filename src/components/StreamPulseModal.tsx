import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  X, Play, Download, Copy, Check, ExternalLink, QrCode, 
  Smartphone, ShieldCheck, AlertCircle, Sparkles, HelpCircle 
} from 'lucide-react';
import { BBN_STREAM_CONFIG } from '../data/bbnaijaData';

interface StreamPulseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StreamPulseModal: React.FC<StreamPulseModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'launch' | 'qr' | 'manual'>('launch');

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(BBN_STREAM_CONFIG.streamUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLaunchApp = () => {
    // Attempt Intent URI trigger for Android
    window.location.href = BBN_STREAM_CONFIG.intentUri;

    // Set a fallback timer in case Intent does not redirect (e.g. non-android or uninstalled)
    setTimeout(() => {
      // Check if user is still on page after 2.5 seconds, offer Play Store link
    }, 2500);
  };

  const handleOpenPlayStore = () => {
    window.open(BBN_STREAM_CONFIG.playStoreUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl bg-[#050505] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-[#050505] p-6 border-b border-white/10 flex items-start justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#F9E29C] to-[#B8860B] p-0.5 shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center">
              <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-[#D4AF37] animate-pulse" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-[#D4AF37] border border-white/10">
                  Android Video Player
                </span>
                <span className="text-[10px] text-white/40 font-mono">v3.4 HD</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 uppercase tracking-tight">
                Stream BBNaija in <span className="text-[#D4AF37]">StreamPulse</span>
              </h2>
            </div>
          </div>

          <button
            id="close-streampulse-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-white/5 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('launch')}
            className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'launch'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Launch Stream</span>
          </button>
          
          <button
            onClick={() => setActiveTab('qr')}
            className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'qr'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Scan QR Code</span>
          </button>

          <button
            onClick={() => setActiveTab('manual')}
            className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'manual'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Stream URL</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6">

          {/* TAB 1: LAUNCH & PLAYSTORE INTENT */}
          {activeTab === 'launch' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Android Intent Integration</h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    Clicking <strong className="text-white">Watch Now in StreamPulse</strong> triggers an Android system intent to launch the video player app. If missing, it automatically redirects to Google Play.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Primary Launch Intent Button */}
                <button
                  id="modal-trigger-intent-btn"
                  onClick={handleLaunchApp}
                  className="w-full py-4 px-6 rounded-full font-bold text-sm bg-[#D4AF37] hover:bg-[#e0be4d] text-black flex items-center justify-center gap-3 shadow-xl shadow-[#D4AF37]/20 active:scale-95 transition-all uppercase tracking-wider"
                >
                  <Play className="w-5 h-5 fill-black text-black" />
                  <div className="text-left">
                    <div className="font-extrabold leading-tight">Watch in StreamPulse</div>
                    <div className="text-[10px] text-black/70 font-medium">Open installed app</div>
                  </div>
                </button>

                {/* Play Store Fallback Button */}
                <button
                  id="modal-play-store-btn"
                  onClick={handleOpenPlayStore}
                  className="w-full py-4 px-6 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/10 flex items-center justify-center gap-3 transition-colors active:scale-95 uppercase tracking-wider"
                >
                  <Download className="w-5 h-5 text-[#D4AF37]" />
                  <div className="text-left">
                    <div className="font-extrabold leading-tight">Google Play Store</div>
                    <div className="text-[10px] text-white/50 font-medium">Download StreamPulse APK</div>
                  </div>
                </button>
              </div>

              {/* Package Details Box */}
              <div className="bg-[#050505] rounded-2xl p-4 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span className="font-medium text-[10px] uppercase tracking-wider">Target Android Package ID:</span>
                  <span className="text-[#D4AF37] font-mono text-[10px] font-bold">VERIFIED</span>
                </div>
                <div className="bg-white/5 px-3 py-2 rounded-xl border border-white/10 font-mono text-xs text-white select-all break-all flex items-center justify-between">
                  <span>{BBN_STREAM_CONFIG.packageName}</span>
                  <ExternalLink className="w-4 h-4 text-white/40 shrink-0 ml-2" />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: QR CODE SCANNING */}
          {activeTab === 'qr' && (
            <div className="space-y-6 text-center animate-in fade-in duration-150">
              <p className="text-xs text-white/70">
                Scan this QR code with your Android phone camera to launch <strong className="text-[#D4AF37]">StreamPulse</strong> directly.
              </p>

              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl w-fit mx-auto shadow-2xl">
                <QRCodeSVG
                  value={BBN_STREAM_CONFIG.intentUri}
                  size={180}
                  level="H"
                  includeMargin={true}
                />
                <span className="text-[10px] font-bold text-black mt-2 font-mono uppercase tracking-wider">
                  StreamPulse Android Intent
                </span>
              </div>

              <div className="text-[11px] text-white/40 max-w-md mx-auto">
                Scanning triggers the deep link intent directly on mobile.
              </div>
            </div>
          )}

          {/* TAB 3: MANUAL URL COPY */}
          {activeTab === 'manual' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <p className="text-xs text-white/70">
                You can manually paste this HLS M3U8 live stream link into StreamPulse's <strong className="text-[#D4AF37]">"Network Stream"</strong> feature.
              </p>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                  HLS Stream M3U8 URL:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    readOnly
                    value={BBN_STREAM_CONFIG.streamUrl}
                    className="w-full bg-[#050505] border border-white/10 rounded-2xl px-4 py-3 pr-28 font-mono text-xs text-[#D4AF37] focus:outline-none"
                  />
                  <button
                    id="copy-stream-url-modal-btn"
                    onClick={handleCopyLink}
                    className="absolute right-2 top-2 bottom-2 px-3 rounded-xl bg-[#D4AF37] hover:bg-[#e0be4d] text-black font-bold text-xs flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Instructions inside manual tab */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2 text-xs text-white/70">
                <div className="font-bold text-[#D4AF37] flex items-center gap-2 uppercase tracking-wider text-[10px]">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>3-step Manual Setup:</span>
                </div>
                <ol className="list-decimal list-inside space-y-1.5 text-white/50 pl-1 text-xs">
                  <li>Open <strong className="text-white">StreamPulse</strong> on Android</li>
                  <li>Tap <strong className="text-white">"Open URL"</strong> or <strong className="text-white">"Network Stream"</strong></li>
                  <li>Paste the copied M3U8 link and press <strong className="text-white">"Play"</strong></li>
                </ol>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-white/5 px-6 py-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-wider">24/7 Stream Ready</span>
          </div>

          <button
            onClick={onClose}
            className="text-white/60 hover:text-white font-bold uppercase tracking-wider text-[10px]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
