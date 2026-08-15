import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Experience: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className={`py-24 relative border-t transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100 border-slate-800/80' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`text-xs font-semibold uppercase tracking-[0.3em] mb-2 font-mono ${
            isDark ? 'text-sky-400' : 'text-blue-600'
          }`}>
            Career Timeline
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-serif" style={{ fontFamily: 'Georgia, serif' }}>
            Work <span className={`italic font-normal ${isDark ? 'text-sky-400' : 'text-blue-600'}`}>Experience</span>
          </h2>
          <p className={`text-xs sm:text-sm mt-3 font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Professional track record administering enterprise systems and cloud operations.
          </p>
          <div className={`w-16 h-px mx-auto mt-4 ${isDark ? 'bg-sky-500/50' : 'bg-blue-500/50'}`} />
        </div>

        <div className={`max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l space-y-12 ${
          isDark ? 'border-slate-800' : 'border-slate-300'
        }`}>
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className={`absolute -left-[37px] sm:-left-[53px] top-1 w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-md ${
                isDark
                  ? 'bg-slate-950 border-sky-500/50 text-sky-400 group-hover:bg-sky-500/10'
                  : 'bg-white border-blue-300 text-blue-600 group-hover:bg-blue-50'
              }`}>
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className={`p-8 rounded-[32px] border transition-all shadow-xl ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/30'
                  : 'bg-white border-slate-200 hover:border-blue-300'
              }`}>
                <div className={`flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-5 border-b ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <div>
                    <span className={`text-xs font-mono font-semibold uppercase tracking-widest ${
                      isDark ? 'text-sky-400' : 'text-blue-600'
                    }`}>
                      {item.company}
                    </span>
                    <h3 className="text-2xl font-light italic font-serif mt-1" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                    <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border ${
                      isDark ? 'bg-slate-800/60 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                      <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                      <span>{item.period}</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border ${
                      isDark ? 'bg-slate-800/60 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                      <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3.5">
                  {item.description.map((bullet, bIdx) => (
                    <li key={bIdx} className={`flex items-start gap-3 text-xs sm:text-sm font-light leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <ChevronRight className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
