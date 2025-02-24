import React from 'react';
import { Github, Linkedin, Mail, Download, Code, BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="animate-gradient bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-40 h-40 rounded-full bg-gray-800 p-2 shadow-xl">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                <span className="text-4xl font-bold">DM</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl font-bold mb-4 tracking-tight">Devraj M</h1>
              <p className="text-2xl font-light mb-8">Full Stack Developer</p>
              
              <div className="flex gap-6 justify-center mb-8">
                <a href="https://github.com/Devraj1612" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="transform hover:scale-110 transition-all duration-300">
                  <div className="bg-gray-800/50 backdrop-blur-md p-4 rounded-lg hover:bg-gray-700/50">
                    <Github size={24} />
                  </div>
                </a>
                <a href="https://linkedin.com/in/devraj-m-33984a231" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="transform hover:scale-110 transition-all duration-300">
                  <div className="bg-gray-800/50 backdrop-blur-md p-4 rounded-lg hover:bg-gray-700/50">
                    <Linkedin size={24} />
                  </div>
                </a>
                <a href="mailto:devrajm865@gmail.com"
                   className="transform hover:scale-110 transition-all duration-300">
                  <div className="bg-gray-800/50 backdrop-blur-md p-4 rounded-lg hover:bg-gray-700/50">
                    <Mail size={24} />
                  </div>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                <Code className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-semibold">Developer</h3>
                <p className="text-sm text-gray-300">Full Stack Development</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                <BookOpen className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-semibold">Projects</h3>
                <p className="text-sm text-gray-300">4+ Completed</p>
              </div>
            </div>

            <button className="bg-gray-800/50 backdrop-blur-md text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              <Download size={20} />
              <span className="font-semibold">Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}