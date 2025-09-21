import { useState } from 'react';
import './Proyectos.css';
import Cards from '../Cards/Cards';
import { projectsData } from '../../JS/database';
import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";

function Proyectos({ texts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  // Calculate items to display on the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = projectsData.slice(startIndex, endIndex);

  // Calculate placeholders to complete the grid
  const placeholders = Array(itemsPerPage - currentItems.length).fill(null);

  // Arrow functions (circular)
  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Corrected logic: less than 6 items but more than 3
  const alignArrows = currentItems.length < 3;

  return (
    <section id="projects" className="proyectos-section">
      <h2>{texts.nav.projects}</h2>

      <div className="proyectos-wrapper">
        {/* Left arrow */}
        <img
          src={arrowLeft}
          alt="icon-arrow-left-alt"
          //  Applying the conditional class
          className={`icon-arrow ${alignArrows ? 'align-end' : ''}`}
          onClick={handlePrev}
        />

        {/* Cards container */}
        <div className="proyectos-container">
          {currentItems.map((item, index) => (
            <Cards
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}

          {/* Render empty placeholders */}
          {placeholders.map((_, idx) => (
            <div key={`ph-${idx}`} className="placeholder"></div>
          ))}
        </div>

        {/* Right arrow */}
        <img
          src={arrowRight}
          alt="icon-arrow-right-alt"
          className={`icon-arrow ${alignArrows ? 'align-end' : ''}`}
          onClick={handleNext}
        />
      </div>
    </section>
  );
}

export default Proyectos;