import React from 'react';
import { motion } from 'motion/react';
import { Server, MapPin, ShieldAlert, Zap, Cpu, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const highlights = [
    {
      icon: Server,
      title: 'Enterprise Infrastructure',
      desc: '1,300+ physical hosts & 330+ cloud-hosted Linux servers across Windows, Linux (RHEL), and Azure.',
    },
    {
      icon: Zap,
      title: 'Automation & Workflows',
      desc: 'Ansible playbooks, Power Automate flows, Python, and Bash scripts streamlining operations & reporting.',
    },
    {
      icon: Database,
      title: 'Virtualization & Storage',
      desc: 'Nutanix AHV, VMware vSphere, NetApp ONTAP, Cohesity, IBM TSM, and Veeam backup & recovery.',
    },
    {
      icon: ShieldAlert,
      title: '100% SLA Compliance',
      desc: 'Maintaining 100% SLA compliance, 24x7 operations, root-cause analysis, and vulnerability mitigation.',
    },
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-300 relative border-t ${
      isDark ? 'bg-slate-950 text-slate-100 border-slate-800/80' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`text-xs font-semibold uppercase tracking-[0.3em] mb-2 font-mono ${
            isDark ? 'text-sky-400' : 'text-blue-600'
          }`}>
            System Profile
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-serif" style={{ fontFamily: 'Georgia, serif' }}>
            About <span className={`italic font-normal ${isDark ? 'text-sky-400' : 'text-blue-600'}`}>{personalInfo.name}</span>
          </h2>
          <div className={`w-16 h-px mx-auto mt-4 ${isDark ? 'bg-sky-500/50' : 'bg-blue-500/50'}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Card / Avatar Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center text-center"
          >
            <div className="relative group mb-6">
              <div className={`absolute -inset-1 rounded-[36px] blur-xl opacity-50 transition duration-500 ${
                isDark ? 'bg-gradient-to-r from-sky-500 to-indigo-500' : 'bg-gradient-to-r from-blue-400 to-indigo-400'
              }`} />
              <div className={`relative w-64 h-80 sm:w-72 sm:h-96 rounded-[32px] overflow-hidden border p-2 ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
              }`}>
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-[24px]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-light italic font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                {personalInfo.name}
              </h3>
              <p className={`text-xs font-mono tracking-wider ${isDark ? 'text-sky-400' : 'text-blue-600'}`}>
                {personalInfo.title}
              </p>
              <div className={`flex items-center justify-center gap-1.5 text-xs font-mono uppercase tracking-widest mt-2 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                <span>{personalInfo.contact.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Text Summary & Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className={`p-8 rounded-[32px] border ${
              isDark ? 'bg-slate-900/60 border-slate-800/80 shadow-2xl' : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <h3 className="text-xl font-light italic font-serif mb-4 flex items-center gap-3" style={{ fontFamily: 'Georgia, serif' }}>
                <Cpu className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                <span>Professional Summary</span>
              </h3>
              <p className={`leading-relaxed text-sm sm:text-base font-light ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {personalInfo.summary}
              </p>
            </div>

            {/* Quick Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-colors ${
                      isDark 
                        ? 'bg-slate-900/40 border-slate-800/80 hover:border-sky-500/30' 
                        : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 mb-2.5 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                    <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                    <p className={`text-xs font-light leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
