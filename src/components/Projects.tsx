import React from 'react';
import { motion } from 'motion/react';
import { FolderGit2, CheckCircle2, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Projects: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`py-24 relative border-t transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100 border-slate-800/80' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`text-xs font-semibold uppercase tracking-[0.3em] mb-2 font-mono ${
            isDark ? 'text-sky-400' : 'text-blue-600'
          }`}>
            Engineering & Automation
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-serif" style={{ fontFamily: 'Georgia, serif' }}>
            Key <span className={`italic font-normal ${isDark ? 'text-sky-400' : 'text-blue-600'}`}>Projects</span>
          </h2>
          <p className={`text-xs sm:text-sm mt-3 font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Infrastructure automation, workflow optimization, live monitoring dashboards, and hardware automation systems.
          </p>
          <div className={`w-16 h-px mx-auto mt-4 ${isDark ? 'bg-sky-500/50' : 'bg-blue-500/50'}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-[32px] overflow-hidden transition-all duration-300 flex flex-col h-full border shadow-xl ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800/80 hover:border-sky-500/40'
                  : 'bg-white border-slate-200 hover:border-blue-300'
              }`}
            >
              {/* Project Banner Image */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className={`absolute inset-0 ${
                  isDark
                    ? 'bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent'
                    : 'bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent'
                }`} />
                <div className={`absolute top-4 right-4 backdrop-blur-md px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 ${
                  isDark ? 'bg-slate-900/80 border-slate-700 text-sky-400' : 'bg-white/90 border-slate-200 text-blue-600'
                }`}>
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Key Project</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className={`text-xl sm:text-2xl font-light italic font-serif mb-3 transition-colors ${
                  isDark ? 'group-hover:text-sky-400' : 'group-hover:text-blue-600'
                }`} style={{ fontFamily: 'Georgia, serif' }}>
                  {project.title}
                </h3>

                {/* Tech Summary Badge if available */}
                {project.techSummary && (
                  <p className={`text-[11px] font-mono font-semibold mb-4 pb-3 border-b ${
                    isDark ? 'border-slate-800 text-sky-400' : 'border-slate-100 text-blue-600'
                  }`}>
                    <span className={`block text-[9px] uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Tech Stack:</span>
                    {project.techSummary}
                  </p>
                )}

                {/* Bullets */}
                <div className="space-y-2.5 mb-6 flex-grow">
                  {Array.isArray(project.description) ? (
                    project.description.map((bullet, bIdx) => (
                      <div key={bIdx} className={`flex items-start gap-2.5 text-xs sm:text-sm font-light leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                        <span>{bullet}</span>
                      </div>
                    ))
                  ) : (
                    <p className={`text-xs sm:text-sm font-light leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{project.description}</p>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-[10px] font-mono border ${
                        isDark
                          ? 'bg-slate-800/60 text-sky-300 border-slate-700'
                          : 'bg-slate-100 text-blue-700 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* External link */}
                <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-colors ${
                      isDark ? 'text-sky-400 hover:text-sky-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    <span>View Repository / Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
