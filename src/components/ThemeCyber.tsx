import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Terminal, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data';

export default function ThemeCyber() {
  return (
    <div className="font-mono bg-[#0a0a0a] text-red-500 selection:bg-red-500 selection:text-black pb-32 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/90 border-b border-red-500/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-widest uppercase flex items-center">
            <Terminal className="w-5 h-5 mr-2" />
            {portfolioData.firstName}_SYS
          </a>
          <div className="hidden md:flex space-x-6 text-sm uppercase">
            <a href="#about" className="hover:text-white hover:bg-red-500 px-2 transition-colors">./About</a>
            <a href="#skills" className="hover:text-white hover:bg-red-500 px-2 transition-colors">./Skills</a>
            <a href="#projects" className="hover:text-white hover:bg-red-500 px-2 transition-colors">./Projects</a>
            <a href="#contact" className="hover:text-white hover:bg-red-500 px-2 transition-colors">./Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="border border-red-500/30 bg-[#111] p-6 md:p-12 relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0 opacity-50"></div>
          <p className="text-red-500/60 text-sm mb-4">LOG: Connection established. User verified.</p>
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-6 tracking-tight text-white">
            &gt; {portfolioData.firstName.toUpperCase()}<br/>
            &gt; {portfolioData.lastName.toUpperCase()}
          </h1>
          <p className="text-xl text-red-400 mb-8 max-w-2xl">
            [ROLE]: {portfolioData.role.toUpperCase()}
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-red-500 text-black px-6 py-2 uppercase font-bold hover:bg-white transition-colors">
              EXECUTE: View_Work
            </a>
            <a href="#contact" className="border border-red-500 px-6 py-2 uppercase font-bold hover:bg-red-500 hover:text-black transition-colors">
              INITIATE: Contact
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <ChevronRight className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold uppercase">system.about()</h2>
        </div>
        <div className="border border-red-500/30 p-6 bg-[#111]">
          <p className="leading-relaxed text-red-200">
            {portfolioData.about}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <ChevronRight className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold uppercase">system.skills[]</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="border border-red-500/30 p-6 bg-[#111] hover:bg-red-500/10 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold uppercase text-white group-hover:text-red-500">{skill.name}</h3>
                <skill.icon className="w-5 h-5 opacity-50" />
              </div>
              <p className="text-sm text-red-400">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <ChevronRight className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold uppercase">system.projects[]</h2>
        </div>
        <div className="space-y-6">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="border border-red-500/30 p-6 bg-[#111] flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="text-xs text-red-500/50 mb-1">OUTPUT_METRIC</div>
                <div className="text-white font-bold">{project.metric}</div>
              </div>
              <div className="md:w-2/3 border-l border-red-500/30 pl-6">
                <h3 className="text-xl font-bold uppercase mb-2 text-white">{project.title}</h3>
                <p className="text-red-300 text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <ChevronRight className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold uppercase">system.connect()</h2>
        </div>
        <div className="border border-red-500/30 p-8 bg-[#111] text-center">
          <p className="mb-8 text-white">STATUS: AWAITING_INPUT</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`mailto:${portfolioData.email}`} className="border border-red-500 px-6 py-3 uppercase hover:bg-red-500 hover:text-black transition-colors flex items-center justify-center">
              <Mail className="w-4 h-4 mr-2" /> {portfolioData.email}
            </a>
            <a href={portfolioData.linkedin} className="border border-red-500 px-6 py-3 uppercase hover:bg-red-500 hover:text-black transition-colors flex items-center justify-center">
              <Linkedin className="w-4 h-4 mr-2" /> NETWORK_LINK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
