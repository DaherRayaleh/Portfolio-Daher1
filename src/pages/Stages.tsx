import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap } from 'lucide-react';

const Stages = () => {
  const stages = [
    {
      title: 'Stage Première Année',
      description: 'Cette section sera bientôt mise à jour avec mes expériences de stage de première année.',
      icon: GraduationCap,
      date: '2023',
      link: '/stages/premiere-annee'
    },
    {
      title: 'Stage Deuxième Année',
      description: 'Cette section sera bientôt mise à jour avec mes expériences de stage de deuxième année.',
      icon: Briefcase,
      date: '2024',
      link: '/stages/deuxieme-annee'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-[9%]">
      <h1 className="text-4xl font-bold mb-12 text-center">Mes Stages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stages.map((stage, index) => (
          <Link to={stage.link} key={index} className="certification-card">
            <stage.icon className="w-12 h-12 mb-4 text-[var(--primary-color)]" />
            <h3 className="text-2xl font-semibold mb-2">{stage.title}</h3>
            <p className="text-gray-300 mb-4">{stage.description}</p>
            <span className="text-sm text-[var(--primary-color)]">{stage.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stages;