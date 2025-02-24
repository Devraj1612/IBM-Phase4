import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "Vemana Institute of technology",
      period: "present",
      location: "Bangalore, India"
    },
    {
      degree: "Diploma",
      institution: "RJS Polytechnic",
      period: "2017 – 2021",
      location: "Bangalore, India"
    },
    {
      degree: "SSLC",
      institution: "Udaya Public School",
      period: "2007/04 – 2017/05",
      location: "Bangalore, India"
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
            <p className="text-blue-600 mb-4">{edu.institution}</p>
            <div className="text-gray-600">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={16} />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}