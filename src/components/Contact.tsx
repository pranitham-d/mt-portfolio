import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Send, Linkedin, Github, FileText, Globe, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className={`py-24 relative border-t transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100 border-slate-800/80' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`text-xs font-semibold uppercase tracking-[0.3em] mb-2 font-mono ${
            isDark ? 'text-sky-400' : 'text-blue-600'
          }`}>
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight font-serif" style={{ fontFamily: 'Georgia, serif' }}>
            Contact <span className={`italic font-normal ${isDark ? 'text-sky-400' : 'text-blue-600'}`}>Pranitham</span>
          </h2>
          <p className={`text-xs sm:text-sm mt-3 font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Interested in collaboration or infrastructure opportunities? Let's connect!
          </p>
          <div className={`w-16 h-px mx-auto mt-4 ${isDark ? 'bg-sky-500/50' : 'bg-blue-500/50'}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className={`p-8 rounded-[32px] border shadow-xl ${
              isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200'
            }`}>
              <h3 className="text-xl font-light italic font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Direct Contact
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-light ${
                isDark ? 'text-slate-300/80' : 'text-slate-600'
              }`}>
                Feel free to reach out directly via email or social profiles. I typically respond within 24 hours.
              </p>

              {/* Email Card with Copy button */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between mb-4 ${
                isDark ? 'bg-slate-800/40 border-slate-700/80' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    isDark ? 'bg-sky-500/10 text-sky-400 border-sky-500/20' : 'bg-blue-50 text-blue-600 border-blue-200'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className={`text-[10px] block font-mono uppercase tracking-widest ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>Email Address</span>
                    <span className="text-xs font-semibold truncate block">
                      {personalInfo.contact.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`p-2 rounded-full transition-colors shrink-0 ml-2 ${
                    isDark ? 'text-slate-400 hover:text-white bg-slate-800' : 'text-slate-600 hover:text-slate-900 bg-slate-200'
                  }`}
                  title="Copy email address"
                >
                  {copied ? <Check className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Live Netlify Site Reference */}
              <a
                href={personalInfo.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl border flex items-center justify-between transition-colors group mb-6 ${
                  isDark ? 'bg-slate-800/40 border-slate-700/80 hover:border-sky-500/40' : 'bg-slate-50 border-slate-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    isDark ? 'bg-teal-500/10 text-teal-400 border-teal-500/20' : 'bg-teal-50 text-teal-600 border-teal-200'
                  }`}>
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`text-[10px] block font-mono uppercase tracking-widest ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>Original Portfolio</span>
                    <span className={`text-xs font-semibold transition-colors ${
                      isDark ? 'group-hover:text-sky-400' : 'group-hover:text-blue-600'
                    }`}>
                      pranitham.netlify.app
                    </span>
                  </div>
                </div>
                <ExternalLink className={`w-4 h-4 transition-colors ${
                  isDark ? 'text-slate-500 group-hover:text-sky-400' : 'text-slate-400 group-hover:text-blue-600'
                }`} />
              </a>

              {/* Links */}
              <div className={`space-y-3 pt-5 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                    isDark ? 'bg-slate-800/30 border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                    <span className="text-xs font-semibold uppercase tracking-wider">LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                    isDark ? 'bg-slate-800/30 border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Github className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                    <span className="text-xs font-semibold uppercase tracking-wider">GitHub Repository</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                    isDark ? 'bg-slate-800/30 border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-white' : 'bg-slate-50 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FileText className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-blue-600'}`} />
                    <span className="text-xs font-semibold uppercase tracking-wider">Download Full PDF Resume</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className={`p-8 rounded-[32px] border shadow-xl ${
              isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200'
            }`}>
              <h3 className="text-xl font-light italic font-serif mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                Send Message
              </h3>

              {submitted ? (
                <div className={`p-8 text-center rounded-2xl border ${
                  isDark ? 'bg-sky-500/10 border-sky-500/30 text-sky-300' : 'bg-blue-50 border-blue-200 text-blue-900'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    isDark ? 'bg-sky-500/20 text-sky-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-light italic font-serif mb-1" style={{ fontFamily: 'Georgia, serif' }}>Message Sent!</h4>
                  <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Thank you for reaching out. I will respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-[10px] font-mono mb-2 uppercase tracking-widest ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3.5 rounded-2xl border text-xs focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-slate-800/50 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-sky-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-[10px] font-mono mb-2 uppercase tracking-widest ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3.5 rounded-2xl border text-xs focus:outline-none transition-colors ${
                          isDark
                            ? 'bg-slate-800/50 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-sky-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-[10px] font-mono mb-2 uppercase tracking-widest ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Infrastructure Inquiry / Opportunity"
                      className={`w-full px-4 py-3.5 rounded-2xl border text-xs focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-slate-800/50 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-sky-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[10px] font-mono mb-2 uppercase tracking-widest ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Pranitham, I'd like to discuss..."
                      className={`w-full px-4 py-3.5 rounded-2xl border text-xs focus:outline-none transition-colors resize-none ${
                        isDark
                          ? 'bg-slate-800/50 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-sky-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 px-6 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md ${
                      isDark
                        ? 'bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
