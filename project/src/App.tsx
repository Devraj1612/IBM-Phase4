import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-between items-center">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Contact</h3>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:devrajm865@gmail.com" className="hover:text-blue-400">devrajm865@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+919071674839" className="hover:text-blue-400">+91 907-167-4839</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>42/2,p2/5,2nd floor, Bangalore</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Devraj1612" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/devraj-m-33984a231" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;