import React from 'react';
import { SCHEDULE_EVENTS } from '../data/bbnaijaData';
import { Calendar, Clock, Tv, Sparkles, Radio } from 'lucide-react';

interface ScheduleSectionProps {
  onOpenStreamModal: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onOpenStreamModal }) => {
  return (
    <section id="schedule" className="py-20 bg-[#050505] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Show Timetable</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Weekly Broadcast <span className="text-[#D4AF37]">Schedule</span>
          </h2>

          <p className="text-white/60 text-base">
            All key events are streamed live on <strong className="text-white">StreamPulse</strong> Android App in 1080p high definition.
          </p>
        </div>

        {/* Timeline Events List */}
        <div className="mt-12 max-w-4xl mx-auto space-y-6">
          {SCHEDULE_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 rounded-3xl p-6 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] font-bold flex flex-col items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 mb-0.5" />
                  <span className="text-[9px] uppercase font-mono">{event.day.slice(0, 3)}</span>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold text-[#D4AF37] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                      {event.time}
                    </span>
                    {event.isLive && (
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-600/20 px-2 py-0.5 rounded-full border border-red-500/30 animate-pulse">
                        <Radio className="w-3 h-3 text-red-500" />
                        Live Show
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-[#D4AF37] transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <button
                  onClick={onOpenStreamModal}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white font-bold text-xs transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Tv className="w-3.5 h-3.5" />
                  <span>Stream Live</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
