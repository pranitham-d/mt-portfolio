import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t relative transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-400 border-slate-800/80' : 'bg-slate-100 text-slate-600 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
              isDark ? 'bg-sky-500/10 border border-sky-400/30 text-sky-400' : 'bg-blue-600 text-white shadow-sm'
            }`}>
              <span className="font-bold font-mono text-xs">PD</span>
            </div>
            <div>
              <span className={`text-base font-light italic font-serif block ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`} style={{ fontFamily: 'Georgia, serif' }}>
                {personalInfo.name}
              </span>
              <span className={`text-[10px] font-mono tracking-widest uppercase block ${
                isDark ? 'text-sky-400' : 'text-blue-600'
              }`}>
                IT Systems Engineer & Administrator
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className={`text-[11px] text-center md:text-right font-mono ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
              <p className="mt-0.5 opacity-80">
                Source: <a href="https://pranitham.netlify.app/" target="_blank" rel="noopener noreferrer" className={`hover:underline ${
                  isDark ? 'text-sky-400' : 'text-blue-600'
                }`}>pranitham.netlify.app</a>
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className={`p-3 rounded-full border transition-all ${
                isDark
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:border-sky-500/50 hover:text-sky-400'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600 shadow-sm'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
