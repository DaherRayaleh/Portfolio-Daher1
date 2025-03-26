import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Portfolio</Link>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={location.pathname === '/certifications' ? 'active' : ''}>
          <Link to="/certifications">Certifications</Link>
        </li>
        <li className={location.pathname === '/stages' ? 'active' : ''}>
          <Link to="/stages">Stages</Link>
        </li>
        <li className={location.pathname === '/projets' ? 'active' : ''}>
          <Link to="/projets">Projets</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;