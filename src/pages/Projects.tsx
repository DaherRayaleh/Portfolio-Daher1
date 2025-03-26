import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Database, BookOpen, ClipboardList } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Projet DotNet',
      description: 'Application développée en C# .NET avec architecture MVC, intégrant une base de données SQL Server et des fonctionnalités de gestion complètes.',
      icon: Code2,
      technologies: ['C#', '.NET', 'SQL Server', 'MVC'],
      link: '/projets/dotnet'
    },
    {
      title: 'GSB Frais',
      description: 'Application web de gestion des frais de déplacement pour les visiteurs médicaux, développée avec PHP et MySQL.',
      icon: Database,
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      link: '/projets/gsb'
    },
    {
      title: 'Veille Technologique',
      description: 'Suivi et analyse des dernières tendances et innovations technologiques dans le domaine du développement web.',
      icon: BookOpen,
      technologies: ['Recherche', 'Analyse', 'Documentation'],
      link: '/projets/veille'
    },
    {
      title: 'Tableau de Synthèse',
      description: 'Documentation détaillée des compétences acquises et des projets réalisés pendant la formation.',
      icon: ClipboardList,
      technologies: ['Documentation', 'Analyse', 'Synthèse'],
      link: '/projets/synthese'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-[9%]">
      <h1 className="text-4xl font-bold mb-12 text-center">Mes Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link to={project.link} key={index} className="project-card">
            <project.icon className="w-12 h-12 mb-4 text-[var(--primary-color)]" />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-[var(--primary-color)]/20 rounded-full text-sm text-[var(--primary-color)]">
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;