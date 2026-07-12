import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, ArrowDownRight } from 'lucide-react';
import { portfolioData } from '../data';

export default function ThemeBrutalist() {
  return (
    <div className="font-sans bg-white text-black selection:bg-black selection:text-white pb-32">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="text-2xl font-black uppercase tracking-tighter">
            {portfolioData.name}
          </a>
          <div className="hidden md:flex space-x-8 font-bold uppercase text-sm">
            <a href="#about" className="hover:bg-red-600 hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">About</a>
            <a href="#skills" className="hover:bg-red-600 hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">Skills</a>
            <a href="#projects" className="hover:bg-red-600 hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">Projects</a>
            <a href="#contact" className="hover:bg-red-600 hover:text-white px-2 py-1 border-2 border-transparent hover:border-black transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-red-600 text-black border-b-8 border-black pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="border-8 border-black bg-white p-10 md:p-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
          >
            <h1 className="text-6xl md:text-9xl font-black uppercase leading-none mb-6">
              {portfolioData.firstName}<br/>{portfolioData.lastName}
            </h1>
            <p className="text-xl md:text-3xl font-bold uppercase mb-10 max-w-2xl leading-tight border-l-8 border-red-600 pl-6">
              {portfolioData.role}
            </p>
            <a href="#projects" className="inline-flex items-center bg-black text-white px-8 py-4 text-xl font-bold uppercase border-4 border-black hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(220,38,38,1)]">
              View Work <ArrowDownRight className="ml-4 w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-b-8 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 border-b-4 border-black pb-4">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.skills.map((skill, index) => (
              <div key={index} className="border-4 border-black p-8 bg-red-600 text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <skill.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">{skill.name}</h3>
                <p className="font-bold text-sm leading-relaxed bg-white/90 p-4 border-2 border-black">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-b-8 border-black bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 border-b-4 border-black pb-4 text-red-600">Projects</h2>
          <div className="space-y-12">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="border-4 border-black bg-white flex flex-col md:flex-row shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="p-10 flex-1 border-b-4 md:border-b-0 md:border-r-4 border-black bg-red-600 text-black">
                  <div className="inline-block bg-white border-2 border-black font-bold uppercase px-4 py-2 mb-6">
                    {project.metric}
                  </div>
                  <h3 className="text-4xl font-black uppercase">{project.title}</h3>
                </div>
                <div className="p-10 flex-1 bg-white text-black flex flex-col justify-center">
                  <p className="text-xl font-bold leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-8xl font-black uppercase mb-12 text-red-600">Hit Me Up</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-2xl font-bold uppercase">
            <a href={`mailto:${portfolioData.email}`} className="border-4 border-white px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center">
              <Mail className="mr-4 w-8 h-8" /> Email
            </a>
            <a href={portfolioData.linkedin} className="border-4 border-white px-8 py-4 hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors flex items-center">
              <Linkedin className="mr-4 w-8 h-8" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
