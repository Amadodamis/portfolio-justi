import { useState } from 'react';
import './Proyectos.css';
import Cards from '../Cards/Cards';
import { projectsData } from '../../JS/database';
import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";
import Modal from "../Modal/Modal"; // 👈 importa el modal

function Proyectos({ texts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null); // 👈 estado modal
  const itemsPerPage = 6;

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = projectsData.slice(startIndex, endIndex);

  const placeholders = Array(itemsPerPage - currentItems.length).fill(null);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const alignArrows = currentItems.length < 3;

  return (
    <section id="projects" className="proyectos-section">
      <h2>{texts.nav.projects}</h2>

      <div className="proyectos-wrapper">
        <img src={arrowLeft} alt="icon-arrow-left-alt"
          className={`icon-arrow ${alignArrows ? 'align-end' : ''}`}
          onClick={handlePrev}
        />

        <div className="proyectos-container">
          {currentItems.map((item, index) => (
            <div key={index} onClick={() => setSelectedProject(item)}>
              <Cards
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}

          {placeholders.map((_, idx) => (
            <div key={`ph-${idx}`} className="placeholder"></div>
          ))}
        </div>

        <img src={arrowRight} alt="icon-arrow-right-alt"
          className={`icon-arrow ${alignArrows ? 'align-end' : ''}`}
          onClick={handleNext}
        />
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

export default Proyectos;
