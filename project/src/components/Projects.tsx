import React from 'react';
import { ExternalLink, Database, Dumbbell, ShoppingCart, Music } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Traffic management-DBMS",
      icon: <Database className="w-12 h-12 text-blue-600" />,
      description: "Traffic Management using DBMS is a project designed to streamline traffic data handling. It utilizes a relational database to store and manage vehicle records, traffic violations, and route optimization.",
      tags: ["Database", "SQL", "Analytics", "Optimization"]
    },
    {
      title: "Workout Buddy",
      icon: <Dumbbell className="w-12 h-12 text-blue-600" />,
      description: "Workout Buddy is a dynamic web application developed with React.js, HTML, CSS, and JavaScript, using MongoDB for its database. It allows users to create, track, and manage personalized workout routines.",
      tags: ["React", "MongoDB", "Authentication", "Real-time"]
    },
    {
      title: "Ecom website automation",
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      description: "E-commerce Website Automation is a Python-based project that automates key tasks like product scraping, inventory updates, and order management.",
      tags: ["Python", "Selenium", "Web Scraping", "Automation"]
    },
    {
      title: "Music Player-Spotify Clone",
      icon: <Music className="w-12 h-12 text-blue-600" />,
      description: "Music Player - Spotify Clone is an Android application developed using Android Studio and Visual Studio IDE. Designed for Android OS, it integrates external APIs for streaming.",
      tags: ["Android", "APIs", "UI/UX", "Mobile Dev"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {project.icon}
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
                <ExternalLink size={20} className="text-blue-600" />
              </div>
              
              <p className="text-gray-700 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}