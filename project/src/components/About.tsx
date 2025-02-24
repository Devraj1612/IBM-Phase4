import React from 'react';
import { Target, Zap, Brain } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mission-Driven</h3>
            <p className="text-gray-600">Passionate about creating impactful solutions that make a difference.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
            <Zap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Learner</h3>
            <p className="text-gray-600">Quick to adapt and master new technologies and methodologies.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
            <Brain className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-gray-600">Analytical thinker with a knack for innovative solutions.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
          <p className="text-gray-700 leading-relaxed text-lg">
            Driven and innovative, I honed my full-stack development and project management skills at DevMinds, where I
            streamlined processes and led a project from inception to launch. My proficiency in Amazon Web Services,
            cybersecurity skills gained through Coursera, and adeptness in MS Excel and PowerPoint facilitated notable efficiency
            improvements.
          </p>
        </div>
      </div>
    </section>
  );
}