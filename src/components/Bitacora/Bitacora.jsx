import { useState } from 'react';
import './Bitacora.css';
import Cards from '../Cards/Cards';
import { bitacoraData } from '../../JS/database';
import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";
import ModalBitacora from '../ModalBitacora/ModalBitacora'; // 👈 Importamos el nuevo modal

function Bitacora({ texts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); // 👈 Nuevo estado
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
  const alignArrows = currentItems.length < 3;

  // 👇 Función para abrir el modal
  const handleCardClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // 👇 Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };


  return (
    <section id="bitacora" className="bitacora-section">
      <h2>{texts.nav.bitacora}</h2>

      <div className="bitacora-wrapper">
        {/* Flecha izquierda */}
        <img
          src={arrowLeft}
          alt="icon-arrow-left-alt"
          //  Aplicación de la clase condicional
          className={`icon-arrow ${alignArrows ? 'align-end' : ''}`}
          onClick={handlePrev}
        />

        {/* Contenedor de cards */}
        <div className="bitacora-container">
          {currentItems.map((item, index) => (
            // 👇 Agregamos el div con el evento onClick
            <div key={index} onClick={() => handleCardClick(item.image)}>
              <Cards
                image={item.image}
                title={item.title}
              />
            </div>
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
         className={`icon-arrow ${alignArrows ? 'align-end' : ''}`}
          onClick={handleNext}
        />
      </div>

      {/* 👇 Render del Modal de Bitácora */}
      {selectedImage && (
        <ModalBitacora imageSrc={selectedImage} onClose={handleCloseModal} />
      )}

    </section>
  );
}

export default Bitacora;