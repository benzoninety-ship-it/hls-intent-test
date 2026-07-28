import React, { useState } from 'react';
import { SAMPLE_HOUSEMATES } from '../data/bbnaijaData';
import { Housemate } from '../types';
import { Crown, Heart, Flame, ShieldAlert, Sparkles, Filter, Award } from 'lucide-react';

interface HousematesSectionProps {
  onOpenStreamModal: () => void;
}

export const HousematesSection: React.FC<HousematesSectionProps> = ({ onOpenStreamModal }) => {
  const [housemates, setHousemates] = useState<Housemate[]>(SAMPLE_HOUSEMATES);
  const [filter, setFilter] = useState<'all' | 'head_of_house' | 'nominated' | 'active'>('all');
  const [cheeredIds, setCheeredIds] = useState<Record<string, boolean>>({});

  const handleCheer = (id: string) => {
    setHousemates(prev =>
      prev.map(hm => (hm.id === id ? { ...hm, votesCount: hm.votesCount + 1 } : hm))
    );
    setCheeredIds(prev => ({ ...prev, [id]: true }));
  };

  const filteredHousemates = housemates.filter(hm => {
    if (filter === 'all') return true;
    return hm.status === filter;
  });

  return (
    <section id="housemates" className="py-20 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Season 10 Contenders</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Housemates <span className="text-[#D4AF37]">&amp; Fan Buzz</span>
            </h2>
            <p className="text-white/60 text-sm mt-2">
              Catch all housemate conversations, diary room confessions, and alliances live 24/7 on StreamPulse.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-wider ${
                filter === 'all'
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              All ({housemates.length})
            </button>
            <button
              onClick={() => setFilter('head_of_house')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 uppercase tracking-wider ${
                filter === 'head_of_house'
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              Head of House
            </button>
            <button
              onClick={() => setFilter('nominated')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 uppercase tracking-wider ${
                filter === 'nominated'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
              Nominated
            </button>
          </div>
        </div>

        {/* Housemate Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHousemates.map(hm => (
            <div
              key={hm.id}
              className="bg-white/5 rounded-3xl border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#050505]">
                  <img
                    src={hm.avatarUrl}
                    alt={hm.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    {hm.status === 'head_of_house' && (
                      <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                        <Crown className="w-3.5 h-3.5 fill-black" />
                        Head of House
                      </span>
                    )}
                    {hm.status === 'nominated' && (
                      <span className="px-3 py-1 rounded-full bg-red-600 text-white font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-lg animate-pulse">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        Nominated
                      </span>
                    )}
                    {hm.status === 'active' && (
                      <span className="px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 font-bold text-[10px] uppercase tracking-wider">
                        Active Housemate
                      </span>
                    )}
                  </div>

                  {/* Trending Tag */}
                  <div className="absolute bottom-3 right-4 bg-[#050505]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#D4AF37] border border-[#D4AF37]/20 uppercase tracking-widest">
                    {hm.trendingTag}
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{hm.name}</h3>
                      <p className="text-xs text-[#D4AF37] font-semibold">{hm.nickname} • {hm.age} yrs • {hm.state}</p>
                    </div>
                  </div>

                  <p className="text-xs text-white/60 leading-relaxed font-normal">
                    {hm.bio}
                  </p>

                  <div className="italic text-xs text-white/80 bg-[#050505] p-3 rounded-2xl border border-white/10">
                    "{hm.quote}"
                  </div>
                </div>
              </div>

              {/* Card Footer: Vote / Cheer */}
              <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest block">Fan Support</span>
                  <span className="text-xs font-black text-white font-mono">
                    {hm.votesCount.toLocaleString()} Cheers
                  </span>
                </div>

                <button
                  onClick={() => handleCheer(hm.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 uppercase tracking-wider ${
                    cheeredIds[hm.id]
                      ? 'bg-red-600/20 text-red-400 border border-red-500/30'
                      : 'bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${cheeredIds[hm.id] ? 'fill-red-400 text-red-400' : 'text-[#D4AF37]'}`} />
                  <span>{cheeredIds[hm.id] ? 'Cheered!' : 'Cheer'}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Watch Housemates Live CTA */}
        <div className="mt-16 text-center bg-white/5 border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
            Never Miss a Second of House Drama
          </h3>
          <p className="text-white/60 text-xs mt-2 max-w-xl mx-auto">
            Watch the 24/7 unedited multi-camera feed on StreamPulse on your Android phone.
          </p>
          <button
            onClick={onOpenStreamModal}
            className="mt-6 px-8 py-3.5 rounded-full bg-[#D4AF37] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#e0be4d] transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch BBNaija Live on StreamPulse</span>
          </button>
        </div>

      </div>
    </section>
  );
};
