import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data';

export default function ThemeLight() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 selection:bg-red-100 selection:text-red-900 pb-32 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-gray-900 tracking-tight">
            {portfolioData.name}
          </a>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-red-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#projects" className="hover:text-red-600 transition-colors">Case Studies</a>
            <a href="#contact" className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-red-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
            Available for new projects
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Professional AI & <br/>
            <span className="text-red-600">Content Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            I help brands and creators scale their digital presence through intelligent automation, SEO optimization, and viral content strategies.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#contact" className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors shadow-md shadow-red-600/20">
              Hire Me
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 font-medium px-6 py-3 transition-colors flex items-center">
              See Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Background</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            {portfolioData.about}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Services & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
                <skill.icon className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-600 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Case Studies</h2>
        <div className="space-y-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-900 p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <ExternalLink className="w-24 h-24 text-white" />
                </div>
                <div className="relative z-10 text-red-400 font-bold text-lg mb-2">Results</div>
                <div className="relative z-10 text-white text-2xl font-light">{project.metric}</div>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto mt-12 bg-white rounded-3xl shadow-sm border border-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's discuss your next project</h2>
        <p className="text-gray-600 mb-10 max-w-lg mx-auto">
          Whether you need content strategy, AI tool integration, or SEO optimization, I'm here to help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={`mailto:${portfolioData.email}`} className="flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
            <Mail className="w-5 h-5 mr-2" /> Email Me
          </a>
          <a href={portfolioData.linkedin} className="flex items-center justify-center px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            <Linkedin className="w-5 h-5 mr-2" /> Connect on LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
