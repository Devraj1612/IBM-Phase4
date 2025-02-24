import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      name: "Full stack Web development",
      issuer: "Dev Minds",
      date: "2023",
      link: "https://drive.google.com/file/d/1ycn_Uc9rcGbGz8_9aO2dBykvvHwDpybC/view"
    },
    {
      name: "Foundation of Cyber Security",
      issuer: "Google",
      date: "2023",
      link: "https://drive.google.com/file/d/1wAzg28lTQdGn90rsvBYpyTDNTJmcHQvY/view"
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon",
      date: "2023",
      link: "https://drive.google.com/file/d/1wVBO7S2O8FnLg7rxb6wFuLtWXnvn0rGp/view"
    },
    {
      name: "Machine Learning",
      issuer: "Vemana Institute of Technology",
      date: "2023",
      link: "https://drive.google.com/file/d/1wP3-1eC7c0ecRqF9wz2dvGE8MqznmH4M/view"
    },
    {
      name: "Communication skills",
      issuer: "Wadhwani Foundation",
      date: "2023",
      link: "https://drive.google.com/file/d/1w5KN_Mo6M48Dd9FIUcFXNwswY8ZC_kAt/view"
    },
    {
      name: "C Programming",
      issuer: "Vemana Institute of Technology",
      date: "2022",
      link: "https://drive.google.com/file/d/1wBtiQb3ff0eGLnPO8s4OBoO8KuAcl2Xy/view"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-6  text-white">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-blue-900/50 p-3 rounded-lg">
                  <Award size={24} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-100">{cert.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-sm">{cert.issuer}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}