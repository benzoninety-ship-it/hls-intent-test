import React, { useState } from 'react';
import { PollOption } from '../types';
import { Flame, CheckCircle2, BarChart2, MessageSquare, ThumbsUp } from 'lucide-react';

export const FanPollSection: React.FC = () => {
  const [options, setOptions] = useState<PollOption[]>([
    { id: 'p1', text: 'Koffi Olamide (King Koffi)', votes: 14200 },
    { id: 'p2', text: 'Amaka Zenith (Queen Zeta)', votes: 18900 },
    { id: 'p3', text: 'Chioma Grace (Chichi Star)', votes: 16500 },
    { id: 'p4', text: 'Tunde Babs (Captain T)', votes: 9400 }
  ]);
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  const handleVote = (id: string) => {
    if (hasVoted) return;
    setOptions(prev =>
      prev.map(opt => (opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt))
    );
    setSelectedId(id);
    setHasVoted(true);
  };

  return (
    <section className="py-16 bg-[#050505] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                <Flame className="w-3.5 h-3.5 text-red-500" />
                <span>Live Fan Prediction Poll</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase mt-1">
                Who will survive this week's eviction?
              </h3>
            </div>

            <div className="text-[10px] text-white/50 font-mono bg-[#050505] px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
              Total Poll Votes: <span className="text-[#D4AF37] font-bold">{totalVotes.toLocaleString()}</span>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {options.map((opt) => {
              const percentage = Math.round((opt.votes / totalVotes) * 100) || 0;
              const isSelected = selectedId === opt.id;

              return (
                <div key={opt.id} className="relative space-y-1">
                  <button
                    disabled={hasVoted}
                    onClick={() => handleVote(opt.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between relative overflow-hidden ${
                      isSelected
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                        : 'border-white/10 bg-[#050505] hover:border-white/20'
                    }`}
                  >
                    {/* Progress Bar Background */}
                    {hasVoted && (
                      <div
                        className="absolute inset-y-0 left-0 bg-[#D4AF37]/20 transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />
                    )}

                    <span className="font-bold text-xs uppercase tracking-wider text-white relative z-10 flex items-center gap-2">
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />}
                      {opt.text}
                    </span>

                    {hasVoted && (
                      <span className="font-mono text-xs font-black text-[#D4AF37] relative z-10">
                        {percentage}% ({opt.votes.toLocaleString()})
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {hasVoted && (
            <p className="text-xs text-emerald-400 font-bold text-center uppercase tracking-wider animate-in fade-in">
              ✓ Vote recorded! Tune into StreamPulse on Sunday to see the official live eviction results.
            </p>
          )}

        </div>

      </div>
    </section>
  );
};
