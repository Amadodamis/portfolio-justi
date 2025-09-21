import { useState } from 'react';
import './Bitacora.css';
import Cards from '../Cards/Cards';
import { bitacoraData } from '../../JS/database';
import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";

function Bitacora({ texts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(bitacoraData.length / itemsPerPage);

  // Calcular los elementos a mostrar en la página actual
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = bitacoraData.slice(startIndex, endIndex);

  // Calcular placeholders para completar la grilla
  const placeholders = Array(itemsPerPage - currentItems.length).fill(null);

  // Funciones de las flechas (circular)
  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Nueva lógica para determinar si hay menos de 6 ítems
  const lessThanSixItems = currentItems.length < itemsPerPage;

  return (
    <section id="bitacora" className="bitacora-section">
      <h2>{texts.nav.bitacora}</h2>

      <div className="bitacora-wrapper">
        {/* Flecha izquierda */}
        <img
          src={arrowLeft}
          alt="icon-arrow-left-alt"
          //  Aplicación de la clase condicional
          className={`icon-arrow ${lessThanSixItems ? 'align-end' : ''}`}
          onClick={handlePrev}
        />

        {/* Contenedor de cards */}
        <div className="bitacora-container">
          {currentItems.map((item, index) => (
            <Cards
              key={index}
              image={item.image}
              title={item.title}
            />
          ))}

          {/* Render de placeholders vacíos */}
          {placeholders.map((_, idx) => (
            <div key={`ph-${idx}`} className="placeholder"></div>
          ))}
        </div>

        {/* Flecha derecha */}
        <img
          src={arrowRight}
          alt="icon-arrow-right-alt"
          // 👈 Aplicación de la clase condicional
          className={`icon-arrow ${lessThanSixItems ? 'align-end' : ''}`}
          onClick={handleNext}
        />
      </div>
    </section>
  );
}

export default Bitacora;
