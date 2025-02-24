import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
 
  const experiences = [
    {
      company: "Rooman Technologies",
      position: "Intern",
      period: "2024/09 – present",
      location: "Bangalore, India",
      responsibilities: [
        "Web Development Training:",
        "Learn front-end and back-end technologies (HTML, CSS, JavaScript, React, Node.js).",
        "Develop responsive and user-friendly websites.",
        "Gain hands-on experience with industry-standard tools and frameworks.",
        "IBM Course:",
        "Training on IBM Cloud, Watson AI, and other IBM technologies.",
        "Practical application of concepts through real-time scenarios.",
        "Communication Skills Training Wadhwani:",
        "Improve verbal and written communication skills.",
        "Participate in role-playing and presentation activities."
      ]
    },
    {
      company: "Dev Mind's",
      position: "Intern",
      period: "2023/10 – 2023/11",
      location: "Bangalore, India",
      responsibilities: [
        "Explored new technologies and approaches to streamline processes",
        "Prepared project presentation and reports to assist senior staff",
        "Facilitated successful completion of project from concept to launch",
        "Contact: Yuvraj Raj Singh Chouhan"
      ]
    }
  ];

  return (
    <section className="py-12">
      
      <h2 className="text-3xl font-bold mb-6 ">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 hover:bg-gray-800/80 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-100">{exp.company}</h3>
                <p className="text-blue-400">{exp.position}</p>
              </div>
              <div className="text-right text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}