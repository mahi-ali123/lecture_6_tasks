import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data';

export default function ThemeDark() {
  return (
    <div className="font-sans bg-zinc-950 text-zinc-300 selection:bg-red-500 selection:text-white pb-32 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="text-xl font-medium tracking-wide text-white">
            {portfolioData.name}
          </a>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#skills" className="hover:text-red-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-red-400 transition-colors">Work</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">{portfolioData.role}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            Building scalable <br />
            <span className="font-medium text-red-500">AI content systems.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
            I am a content creator and technical operator with over two years of experience leveraging AI to drive millions of views.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#projects" className="text-white border-b border-red-500 hover:text-red-400 hover:border-red-400 pb-1 transition-all flex items-center group">
              View selected work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-900">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl text-white font-medium mb-4">Core Capabilities</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">Specialized in operating AI tools, optimizing performance, and engineering viral content pipelines.</p>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
            {portfolioData.skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="mb-4 text-zinc-600 group-hover:text-red-500 transition-colors">
                  <skill.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg text-white mb-2">{skill.name}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-900">
        <h2 className="text-2xl text-white font-medium mb-16">Selected Work</h2>
        <div className="space-y-16">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative block"
            >
              <div className="absolute -inset-4 bg-zinc-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                <div className="md:w-1/3">
                  <span className="text-red-500 text-sm font-medium tracking-wide">{project.metric}</span>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl text-white font-medium mb-4 flex items-center">
                    {project.title} <ExternalLink className="ml-3 w-5 h-5 text-zinc-600 group-hover:text-red-500 transition-colors" />
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-900 text-center">
        <h2 className="text-3xl text-white font-medium mb-8">Ready to scale?</h2>
        <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center justify-center bg-white text-black hover:bg-red-500 hover:text-white px-8 py-3 rounded-full text-sm font-medium transition-all">
          Get in touch
        </a>
        <div className="mt-16 flex justify-center space-x-6 text-zinc-500">
          <a href={portfolioData.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
          <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition-colors">Email</a>
        </div>
      </section>
    </div>
  );
}
