import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Server, Cloud, Database, Network, Cpu, BarChart3, Layers } from 'lucide-react';
import { coreCompetencies, skillsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Skills: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Infrastructure', 'Cloud & Virtualization', 'Storage & Backup', 'Networking', 'Automation & Scripting', 'Monitoring & ITSM'];

  const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
    "Server & Systems Administration": Server,
    "Virtualization & Cloud": Cloud,
    "Backup, Storage & Recovery": Database,
    "Networking": Network,
    "Automation & Scripting": Cpu,
    "Monitoring, Reporting & ITSM": BarChart3
  };

  const filteredSkills = activeTab === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className={`py-24 relative border-t transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100 border-slate-800/80' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`text-xs font-semibold uppercase tracking-[0.3em] mb-2 font-mono ${
            isDark ? 'text-sky-400' : 'text-blue-600'
          }`}>
            Technical Stack & Expertise
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-serif" style={{ fontFamily: 'Georgia, serif' }}>
            Core <span className={`italic font-normal ${isDark ? 'text-sky-400' : 'text-blue-600'}`}>Competencies</span>
          </h2>
          <p className={`text-xs sm:text-sm mt-3 font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Comprehensive technical domain expertise spanning enterprise systems, cloud platforms, backup recovery, and automation.
          </p>
          <div className={`w-16 h-px mx-auto mt-4 ${isDark ? 'bg-sky-500/50' : 'bg-blue-500/50'}`} />
        </div>

        {/* 6 Core Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {coreCompetencies.map((comp, idx) => {
            const IconComp = categoryIcons[comp.category] || Server;
            return (
              <motion.div
                key={comp.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 rounded-[28px] border transition-all shadow-lg flex flex-col justify-between group ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/40'
                    : 'bg-white border-slate-200 hover:border-blue-300'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className={`p-3 rounded-2xl border transition-all shrink-0 ${
                      isDark
                        ? 'bg-sky-500/10 text-sky-400 border-sky-500/20 group-hover:bg-sky-500 group-hover:text-slate-950'
                        : 'bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-light italic font-serif tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                      {comp.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {comp.skills.map((item, i) => (
                      <li key={i} className={`flex items-start gap-2.5 text-xs font-light leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Skill Matrix Section */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-light italic font-serif" style={{ fontFamily: 'Georgia, serif' }}>
              Specialized <span className={isDark ? 'text-sky-400' : 'text-blue-600'}>Skills</span>
            </h3>
            <p className={`text-xs font-mono uppercase tracking-widest mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Technologies & Tools Administered Across Daily Operations
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all ${
                  activeTab === cat
                    ? isDark
                      ? 'bg-sky-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                      : 'bg-blue-600 text-white font-bold shadow-md'
                    : isDark
                      ? 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Clean Skill Cards (No Percentages, No Progress Bars) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/40'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl shrink-0 ${
                    isDark ? 'bg-sky-500/10 text-sky-400' : 'bg-blue-50 text-blue-600'
                  }`}>
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className={`font-medium text-xs tracking-wider uppercase ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {skill.name}
                  </span>
                </div>

                {skill.category && (
                  <span className={`text-[9px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-full border ${
                    isDark
                      ? 'bg-slate-800/80 text-sky-300 border-slate-700'
                      : 'bg-slate-100 text-blue-700 border-slate-200'
                  }`}>
                    {skill.category}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
