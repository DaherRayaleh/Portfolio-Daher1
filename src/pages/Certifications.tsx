import React from 'react';
import { Link } from 'react-router-dom';
import { FileCode2, Globe } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'HTML5',
      description: 'Maîtrise des fondamentaux du HTML5, création de structures de pages web sémantiques, formulaires interactifs et intégration multimédia.',
      icon: FileCode2,
      date: '2023',
      link: '/certifications/html5'
    },
    {
      title: 'CSS3',
      description: 'Expertise en CSS3 avec une forte compréhension des layouts flexbox et grid, animations, transitions et design responsive.',
      icon: Globe,
      date: '2023',
      link: '/certifications/css3'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-[9%]">
      <h1 className="text-4xl font-bold mb-12 text-center">Mes Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <Link to={cert.link} key={index} className="certification-card">
            <cert.icon className="w-12 h-12 mb-4 text-[var(--primary-color)]" />
            <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-300 mb-4">{cert.description}</p>
            <span className="text-sm text-[var(--primary-color)]">{cert.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Certifications;