import React from 'react';
import { Code2, Database, Shield, Cloud, FileSpreadsheet } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={24} />,
      name: "Development",
      skills: ["Full-Stack Development", "React", "Node.js", "HTML/CSS"]
    },
    {
      icon: <Shield size={24} />,
      name: "Security",
      skills: ["Cyber security basics", "Network Security", "Security Best Practices"]
    },
    {
      icon: <Cloud size={24} />,
      name: "Cloud",
      skills: ["Amazon Web Services", "Cloud Architecture", "Deployment"]
    },
    {
      icon: <FileSpreadsheet size={24} />,
      name: "Tools",
      skills: ["MS Excel", "MS Word", "PowerPoint"]
    }
  ];

  return (
    <section className="py-20">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="text-blue-600 mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}