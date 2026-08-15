import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-2xl'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Immersive Style */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
              isDark ? 'bg-sky-500/10 border border-sky-400/30 text-sky-400' : 'bg-blue-600 text-white shadow-md'
            }`}>
              <span className="font-bold font-mono text-sm">PD</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-light tracking-[0.15em] uppercase italic font-serif ${
                isDark ? 'text-slate-100' : 'text-slate-900'
              }`}>
                Pranitham
              </span>
              <span className={`text-[9px] font-mono tracking-widest uppercase font-semibold ${
                isDark ? 'text-sky-400' : 'text-blue-600'
              }`}>
                Systems Administrator
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center space-x-6 text-[11px] font-semibold uppercase tracking-widest px-5 py-2 rounded-full border backdrop-blur-md ${
            isDark 
              ? 'text-slate-400 bg-slate-900/60 border-slate-800/80' 
              : 'text-slate-600 bg-slate-100/80 border-slate-200'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`transition-colors py-1 ${
                  isDark ? 'hover:text-sky-400' : 'hover:text-blue-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Buttons & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-amber-300 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark/light theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`p-2.5 rounded-full transition-colors ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`p-2.5 rounded-full transition-colors ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full text-xs uppercase font-semibold tracking-widest transition-all duration-300 flex items-center gap-2 shadow-sm ${
                isDark
                  ? 'bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                  : 'bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-md'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-amber-300'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
              aria-label="Toggle dark/light theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full ${
                isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-800 hover:bg-slate-200'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-3 p-5 rounded-3xl border shadow-2xl backdrop-blur-xl flex flex-col gap-2 ${
            isDark ? 'bg-slate-950/95 border-slate-800 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-800'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors ${
                  isDark ? 'hover:bg-slate-900 hover:text-sky-400' : 'hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className={`pt-3 border-t flex items-center justify-around ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-widest py-2 hover:opacity-80"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-widest py-2 hover:opacity-80"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                  isDark ? 'bg-sky-500 text-slate-950' : 'bg-blue-600 text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" /> Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
