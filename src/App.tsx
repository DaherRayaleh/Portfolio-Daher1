import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Stages from './pages/Stages';

// Blank Pages for Projects
const DotNetProject = () => <div className="min-h-screen pt-24 px-[9%]"></div>;
const GSBProject = () => <div className="min-h-screen pt-24 px-[9%]"></div>;
const VeilleTechno = () => <div className="min-h-screen pt-24 px-[9%]"></div>;
const TableauSynthese = () => <div className="min-h-screen pt-24 px-[9%]"></div>;

// Blank Pages for Certifications
const HTML5Cert = () => <div className="min-h-screen pt-24 px-[9%]"></div>;
const CSS3Cert = () => <div className="min-h-screen pt-24 px-[9%]"></div>;

// Blank Pages for Internships
const Stage1 = () => <div className="min-h-screen pt-24 px-[9%]"></div>;
const Stage2 = () => <div className="min-h-screen pt-24 px-[9%]"></div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1f242d]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/stages" element={<Stages />} />
          <Route path="/projets" element={<Projects />} />
          
          {/* Project Routes */}
          <Route path="/projets/dotnet" element={<DotNetProject />} />
          <Route path="/projets/gsb" element={<GSBProject />} />
          <Route path="/projets/veille" element={<VeilleTechno />} />
          <Route path="/projets/synthese" element={<TableauSynthese />} />
          
          {/* Certification Routes */}
          <Route path="/certifications/html5" element={<HTML5Cert />} />
          <Route path="/certifications/css3" element={<CSS3Cert />} />
          
          {/* Internship Routes */}
          <Route path="/stages/premiere-annee" element={<Stage1 />} />
          <Route path="/stages/deuxieme-annee" element={<Stage2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;