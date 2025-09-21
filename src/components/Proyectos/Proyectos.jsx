import React from 'react';
import './Proyectos.css';
import Cards from '../Cards/Cards';
import { projectsData } from '../../JS/database';

function Proyectos({ texts }) {
  return (
    <section id="projects" className="proyectos-section">
      <h2>{texts.nav.projects}</h2>
      <div className="proyectos-container">
        {projectsData.map((item, index) => (
          <Cards
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;