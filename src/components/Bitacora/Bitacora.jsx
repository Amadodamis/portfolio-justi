import { useState, useEffect } from 'react'; // 👈 Importamos useEffect
import './Bitacora.css';
import Cards from '../Cards/Cards';
import { bitacoraData } from '../../JS/database';
import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";
import ModalBitacora from '../ModalBitacora/ModalBitacora';

function Bitacora({ texts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); 
  
  // 1. itemsPerPage ahora es un estado con valor inicial 6 (desktop)
  const [itemsPerPage, setItemsPerPage] = useState(6); 
  
  // 2. Lógica para detectar el tamaño de pantalla y ajustar itemsPerPage
  useEffect(() => {
    const handleResize = () => {
      // Si el ancho es <= 495px, mostramos 2 ítems por página
      if (window.innerWidth <= 495) {
        setItemsPerPage(2); 
      } else {
        // Para anchos > 495px (incluyendo tablets y escritorio), mostramos 6 ítems
        setItemsPerPage(6); 
      }
      // Resetea a la página 0 cuando el conteo de ítems cambia
      setCurrentPage(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Lógica para determinar si hay menos del total de ítems por página
  const alignArrows = currentItems.length < itemsPerPage && currentItems.length > 0;

  // Función para abrir el modal
  const handleCardClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Función para cerrar el modal
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
          // Aplicación de la clase condicional
          className={`icon-arrow ${alignArrows ? 'align-end' : ''}`}
          onClick={handlePrev}
        />

        {/* Contenedor de cards */}
        <div className="bitacora-container">
          {currentItems.map((item, index) => (
            // Agregamos el div con el evento onClick
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
          // Aplicación de la clase condicional
         className={`icon-arrow ${alignArrows ? 'align-end' : ''}`}
          onClick={handleNext}
        />
      </div>

      {/* Render del Modal de Bitácora */}
      {selectedImage && (
        <ModalBitacora imageSrc={selectedImage} onClose={handleCloseModal} />
      )}

    </section>
  );
}

export default Bitacora;