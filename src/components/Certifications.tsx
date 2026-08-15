import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Certifications: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="certifications" className={`py-24 relative border-t transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100 border-slate-800/80' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`text-xs font-semibold uppercase tracking-[0.3em] mb-2 font-mono ${
            isDark ? 'text-sky-400' : 'text-blue-600'
          }`}>
            Professional Credentials
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-serif" style={{ fontFamily: 'Georgia, serif' }}>
            Certifications & <span className={`italic font-normal ${isDark ? 'text-sky-400' : 'text-blue-600'}`}>Learning</span>
          </h2>
          <p className={`text-xs sm:text-sm mt-3 font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Industry certifications and formal training programs in Linux, Security, Python, and Web Technologies.
          </p>
          <div className={`w-16 h-px mx-auto mt-4 ${isDark ? 'bg-sky-500/50' : 'bg-blue-500/50'}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-6 rounded-[28px] border transition-all shadow-lg flex flex-col justify-between group ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/40'
                  : 'bg-white border-slate-200 hover:border-blue-300'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-2xl border transition-all shrink-0 ${
                    isDark
                      ? 'bg-sky-500/10 text-sky-400 border-sky-500/20 group-hover:bg-sky-500 group-hover:text-slate-950'
                      : 'bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                    isDark ? 'text-sky-400' : 'text-blue-600'
                  }`}>
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg font-light italic font-serif leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                  {cert.name}
                </h3>
              </div>

              <div className={`mt-6 pt-4 border-t flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider ${
                isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                <span>Verified Credential</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
