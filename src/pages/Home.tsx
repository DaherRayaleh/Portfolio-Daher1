import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Home = () => {
  return (
    <section className="home-section">
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4">Kahin DAHER RAYALEH</h1>
        <h2 className="text-3xl mb-6 typing-text">
          Je suis{' '}
          <span style={{ '--i': 4 } as React.CSSProperties} data-text="Etudiant">Etudiant</span>
          <span style={{ '--i': 3 } as React.CSSProperties} data-text="Développeur Web">Développeur Web</span>
          <span style={{ '--i': 2 } as React.CSSProperties} data-text="Déterminé">Déterminé</span>
          <span style={{ '--i': 1 } as React.CSSProperties} data-text="Passionné">Passionné</span>
        </h2>
        <p className="text-lg mb-8">
          Voici tout ce que j'ai réalisé durant mes deux années de BTS SIO : Bloc 1,
          Bloc 2 (incluant le projet GSBFrais),
          Bloc 3, certifications, projet DotNet.
          Et également mon rapport de stage et ma veille technologique.
        </p>
        <div className="flex items-center gap-6">
          <a href="/cv.pdf" className="btn" target="_blank" rel="noopener noreferrer">CV</a>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;