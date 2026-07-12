import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, ChevronDown, ExternalLink, Moon, Sun } from 'lucide-react';
import { portfolioData } from '../data';

export default function ThemeClassic() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 selection:bg-[#00D9FF]/20 selection:text-[#00D9FF] min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
            {portfolioData.firstName.toUpperCase()}<span className="text-[#00D9FF]">.</span>
          </a>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#about" className="hover:text-[#00D9FF] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#00D9FF] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#00D9FF] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#00D9FF] transition-colors">Contact</a>
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#07121D] text-white p-8 md:p-16 md:py-24 rounded-3xl shadow-2xl flex flex-col items-start justify-center relative overflow-hidden min-h-[500px]"
        >
          <div className="relative z-10 w-full md:max-w-[55%]">
            <h2 className="text-[#00D9FF] font-semibold tracking-widest uppercase mb-4 text-sm">Hello, I am</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              {portfolioData.firstName} <br/>{portfolioData.lastName}<span className="text-[#00D9FF]">.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              {portfolioData.role}, building systems and content that scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-[#00D9FF] hover:bg-[#00BFFF] text-[#07121D] px-8 py-3 rounded-full font-bold transition-all flex items-center group shadow-lg shadow-[#00D9FF]/20">
                View Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border border-white/20 hover:border-white text-white px-8 py-3 rounded-full font-medium transition-all">
                Contact Me
              </a>
            </div>
          </div>
          
          {portfolioData.ownerImage && (
            <div className="absolute inset-y-0 right-0 w-full md:w-[50%] h-full pointer-events-none overflow-hidden flex justify-end">
                {/* Subtle blue glow behind portrait */}
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#00BFFF] blur-[140px] opacity-30 rounded-full"></div>
                
                {/* Image */}
                <img 
                  src={portfolioData.ownerImage} 
                  alt={portfolioData.firstName} 
                  className="absolute inset-0 w-full h-full object-cover object-[center_right] contrast-[1.15] brightness-[1.05] saturate-[1.1]" 
                  style={{
                     maskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
                     WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)'
                  }}
                />

                {/* Left/Bottom Background Blending Overlays */}
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#07121D] via-[#07121D]/50 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#07121D] to-transparent"></div>

                {/* Soft blue neon light streak across face */}
                <div className="absolute inset-0 mix-blend-color-dodge opacity-50" 
                  style={{
                    background: 'linear-gradient(110deg, transparent 40%, rgba(0, 217, 255, 0.3) 45%, rgba(0, 191, 255, 0.7) 50%, transparent 55%)'
                  }}
                ></div>
                <div className="absolute inset-0 mix-blend-overlay opacity-40" 
                  style={{
                    background: 'linear-gradient(to right, transparent 30%, rgba(0, 217, 255, 0.3) 100%)'
                  }}
                ></div>
            </div>
          )}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center transition-colors duration-300"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="w-16 h-1 bg-[#00D9FF] mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: portfolioData.about.replace('2+ years of experience', '<span class="text-gray-900 dark:text-white font-semibold">2+ years of experience</span>').replace('WordPress SEO', '<span class="text-gray-900 dark:text-white font-semibold">WordPress SEO</span>') }} />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">My Expertise</h2>
          <div className="w-16 h-1 bg-[#00D9FF] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#00D9FF]/50 dark:hover:border-[#00D9FF]/50 hover:shadow-lg transition-all group duration-300"
            >
              <div className="w-12 h-12 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00D9FF]/10 transition-colors">
                <skill.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-[#00D9FF] transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <div className="w-16 h-1 bg-[#00D9FF] mx-auto"></div>
        </div>
        <div className="space-y-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col md:flex-row group transition-colors duration-300"
            >
              <div className="md:w-1/2 bg-gray-900 relative overflow-hidden flex flex-col justify-end min-h-[240px]">
                {project.images && project.images.length > 0 && (
                   <div className="absolute inset-0 w-full h-full flex">
                     {project.images.map((img, i) => (
                       <div key={i} className="flex-1 relative overflow-hidden">
                         <img src={img} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-110 group-hover:opacity-80 transition-all duration-700" />
                       </div>
                     ))}
                   </div>
                )}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <ExternalLink className="w-24 h-24 text-white" />
                </div>
                <div className="relative z-10 p-8 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent pt-12">
                  <div className="text-[#00D9FF] font-bold text-sm uppercase tracking-wider mb-2">Metric</div>
                  <div className="text-white text-2xl font-light leading-tight">{project.metric}</div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{project.desc}</p>
                <div>
                  <span className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-[#00D9FF] transition-colors cursor-pointer">
                    Explore Details <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto mt-12 bg-black text-white rounded-3xl shadow-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's work <br/>together<span className="text-[#00D9FF]">.</span></h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
            Interested in collaborating on a project or need help optimizing your content strategy? Reach out anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <a href={`mailto:${portfolioData.email}`} className="flex items-center text-gray-300 hover:text-white transition-colors group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-[#00D9FF] transition-colors">
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-gray-900" />
              </div>
              <span className="text-lg font-medium">{portfolioData.email}</span>
            </a>
            <a href={`https://wa.me/${portfolioData.phone}`} target="_blank" rel="noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-[#00D9FF] transition-colors">
                <Phone className="w-5 h-5 text-gray-300 group-hover:text-gray-900" />
              </div>
              <span className="text-lg font-medium">{portfolioData.phone}</span>
            </a>
            <div className="flex items-center text-gray-300 group p-4 rounded-xl">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6">
                <MapPin className="w-5 h-5 text-gray-300" />
              </div>
              <span className="text-lg font-medium">{portfolioData.location}</span>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-6 px-4">Connect on Social</h3>
            <a 
              href={portfolioData.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 group"
            >
              <div className="flex items-center">
                <Linkedin className="w-8 h-8 text-[#0A66C2] mr-4" />
                <div>
                  <div className="font-semibold text-lg text-white">LinkedIn</div>
                  <div className="text-gray-400 text-sm">@mueenuddinai</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#00D9FF] transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-transparent text-gray-500 dark:text-gray-400 pt-12 pb-32 border-t border-gray-200 dark:border-gray-800 text-center mt-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {portfolioData.firstName} {portfolioData.lastName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
