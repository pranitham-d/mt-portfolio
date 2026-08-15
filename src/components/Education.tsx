import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Compass, Star } from 'lucide-react';
import { educationData, interestsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Education: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="education" className={`py-24 relative border-t transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100 border-slate-800/80' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`text-xs font-semibold uppercase tracking-[0.3em] mb-2 font-mono ${
            isDark ? 'text-sky-400' : 'text-blue-600'
          }`}>
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-serif" style={{ fontFamily: 'Georgia, serif' }}>
            Education & <span className={`italic font-normal ${isDark ? 'text-sky-400' : 'text-blue-600'}`}>Interests</span>
          </h2>
          <p className={`text-xs sm:text-sm mt-3 font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Formal degree, academic achievements, and personal technical pursuits.
          </p>
          <div className={`w-16 h-px mx-auto mt-4 ${isDark ? 'bg-sky-500/50' : 'bg-blue-500/50'}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-7 p-8 rounded-[32px] border shadow-xl flex flex-col justify-between ${
              isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200'
            }`}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3.5 rounded-2xl border shrink-0 ${
                  isDark ? 'bg-sky-500/10 text-sky-400 border-sky-500/20' : 'bg-blue-50 text-blue-600 border-blue-200'
                }`}>
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest block ${
                    isDark ? 'text-sky-400' : 'text-blue-600'
                  }`}>
                    {educationData.period}
                  </span>
                  <h3 className="text-2xl font-light italic font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                    {educationData.degree}
                  </h3>
                  <p className={`text-xs font-mono mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {educationData.field}
                  </p>
                </div>
              </div>

              <div className={`space-y-3 pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className={isDark ? 'text-slate-400 font-light' : 'text-slate-500 font-light'}>Institution:</span>
                  <span className="font-medium">{educationData.institution}, {educationData.location}</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className={isDark ? 'text-slate-400 font-light' : 'text-slate-500 font-light'}>Academic Grade:</span>
                  <span className={`font-mono font-bold px-3 py-1 rounded-full border ${
                    isDark ? 'bg-sky-500/10 text-sky-400 border-sky-500/20' : 'bg-blue-50 text-blue-600 border-blue-200'
                  }`}>
                    CGPA: {educationData.cgpa}
                  </span>
                </div>
              </div>
            </div>

            <div className={`mt-8 pt-4 border-t flex items-center gap-2 text-xs ${
              isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
            }`}>
              <Star className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
              <span>Comprehensive coursework in Information Technology & Operating Systems</span>
            </div>
          </motion.div>

          {/* Personal Interests Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-5 p-8 rounded-[32px] border shadow-xl flex flex-col justify-between ${
              isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200'
            }`}
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`p-3.5 rounded-2xl border shrink-0 ${
                  isDark ? 'bg-teal-500/10 text-teal-400 border-teal-500/20' : 'bg-teal-50 text-teal-600 border-teal-200'
                }`}>
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest block ${
                    isDark ? 'text-teal-400' : 'text-teal-600'
                  }`}>
                    Beyond Operations
                  </span>
                  <h3 className="text-xl font-light italic font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                    Personal Interests
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {interestsData.map((interest, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-colors ${
                      isDark ? 'bg-slate-800/40 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-sky-400 shadow-[0_0_8px_#38bdf8]' : 'bg-blue-600'}`} />
                    <span className="text-xs sm:text-sm font-light">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className={`mt-8 text-[11px] font-mono text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Continuous Learning & Hardware Exploration
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
