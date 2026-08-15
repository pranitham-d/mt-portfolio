import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowDown, Server, Cloud, ShieldCheck, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ThreeCanvas } from './ThreeCanvas';
import { useTheme } from '../context/ThemeContext';

export const Hero: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* 3D Three.js Interactive Background Canvas */}
      <ThreeCanvas />

      {/* Background radial ambient glows */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          background: isDark
            ? 'radial-gradient(circle at 70% 30%, #0f172a 0%, transparent 60%), radial-gradient(circle at 20% 80%, #0369a1 0%, transparent 50%)'
            : 'radial-gradient(circle at 70% 30%, #e0f2fe 0%, transparent 60%), radial-gradient(circle at 20% 80%, #e0e7ff 0%, transparent 50%)', 
          filter: 'blur(80px)', 
          opacity: isDark ? 0.6 : 0.7 
        }} 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-8 shadow-sm backdrop-blur-md border ${
            isDark
              ? 'bg-slate-900/80 border-sky-500/30 text-sky-400'
              : 'bg-white border-blue-200 text-blue-700 shadow-sm'
          }`}
        >
          <span className={`w-2 h-2 rounded-full animate-pulse ${
            isDark ? 'bg-sky-400 shadow-[0_0_8px_#38bdf8]' : 'bg-blue-600 shadow-[0_0_8px_#2563eb]'
          }`} />
          <span>{personalInfo.headline}</span>
        </motion.div>

        {/* Hero Georgia Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.1] mb-6 font-serif"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {personalInfo.name.split(' ')[0]}{' '}
          <span className={`italic font-normal ${
            isDark ? 'text-sky-400' : 'text-blue-600'
          }`}>
            {personalInfo.name.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base sm:text-xl font-mono tracking-wider uppercase mb-6 font-medium ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {personalInfo.title}
        </motion.p>

        {/* Summary Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-10 font-light ${
            isDark ? 'text-slate-300/80' : 'text-slate-600'
          }`}
        >
          {personalInfo.summary}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToContact}
            className={`group flex items-center space-x-4 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-md ${
              isDark
                ? 'bg-sky-500 text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:bg-sky-400'
                : 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
            }`}
          >
            <span>Get in Touch</span>
            <div className={`w-6 h-px group-hover:w-10 transition-all ${isDark ? 'bg-slate-950' : 'bg-white'}`} />
          </button>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold uppercase text-xs tracking-widest border transition-all ${
              isDark
                ? 'bg-slate-900/60 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100 shadow-sm'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Operational Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className={`p-5 rounded-2xl transition-all ${
            isDark
              ? 'bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40'
              : 'bg-white border border-slate-200 hover:border-blue-300 shadow-sm'
          }`}>
            <Server className={`w-6 h-6 mb-2 mx-auto ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
            <span className="text-2xl sm:text-3xl font-light font-serif block" style={{ fontFamily: 'Georgia, serif' }}>1,300+</span>
            <span className={`text-[10px] font-mono uppercase tracking-widest mt-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Physical Hosts</span>
          </div>

          <div className={`p-5 rounded-2xl transition-all ${
            isDark
              ? 'bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40'
              : 'bg-white border border-slate-200 hover:border-blue-300 shadow-sm'
          }`}>
            <Cloud className={`w-6 h-6 mb-2 mx-auto ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
            <span className="text-2xl sm:text-3xl font-light font-serif block" style={{ fontFamily: 'Georgia, serif' }}>330+</span>
            <span className={`text-[10px] font-mono uppercase tracking-widest mt-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Cloud Servers</span>
          </div>

          <div className={`p-5 rounded-2xl transition-all ${
            isDark
              ? 'bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40'
              : 'bg-white border border-slate-200 hover:border-blue-300 shadow-sm'
          }`}>
            <ShieldCheck className={`w-6 h-6 mb-2 mx-auto ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
            <span className="text-2xl sm:text-3xl font-light font-serif block" style={{ fontFamily: 'Georgia, serif' }}>100%</span>
            <span className={`text-[10px] font-mono uppercase tracking-widest mt-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>SLA Compliance</span>
          </div>

          <div className={`p-5 rounded-2xl transition-all ${
            isDark
              ? 'bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40'
              : 'bg-white border border-slate-200 hover:border-blue-300 shadow-sm'
          }`}>
            <Activity className={`w-6 h-6 mb-2 mx-auto ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span className="text-2xl sm:text-3xl font-light font-serif block" style={{ fontFamily: 'Georgia, serif' }}>2+ Yrs</span>
            <span className={`text-[10px] font-mono uppercase tracking-widest mt-1 block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Enterprise Ops</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 inline-block"
        >
          <button
            onClick={scrollToAbout}
            className={`p-3 rounded-full border transition-all ${
              isDark ? 'border-slate-800 text-slate-400 hover:text-white hover:border-slate-700' : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
            }`}
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
