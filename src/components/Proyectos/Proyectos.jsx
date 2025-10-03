import { useState, useEffect } from 'react'; // 👈 Importamos useEffect
import './Proyectos.css';
import Cards from '../Cards/Cards';
import { projectsData } from '../../JS/database';
import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";
import Modal from "../Modal/Modal";

function Proyectos({ texts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // 1. itemsPerPage ahora es un estado con valor inicial 6 (desktop)
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // 2. Lógica para detectar el tamaño de pantalla y ajustar itemsPerPage
  useEffect(() => {
    const handleResize = () => {
      // Si el ancho es <= 495px, mostramos 2 ítems por página (rango móvil pequeño)
      if (window.innerWidth <= 495) {
        setItemsPerPage(2);
      } else {
        // Para anchos > 495px (incluyendo tablets y escritorio), mostramos 6 ítems
        setItemsPerPage(6);
      }
      // Resetea a la página 0 cuando el conteo de ítems cambia (IMPORTANTE)
      setCurrentPage(0);
    };

    // Llamada inicial
    handleResize();

    // Listener para redimensionamiento de ventana
    window.addEventListener('resize', handleResize);

    // Función de limpieza al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Se ejecuta solo al montar y desmontar

  // Estas variables usan el itemsPerPage que ahora es dinámico
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = projectsData.slice(startIndex, endIndex);

  // El número de placeholders ahora es dinámico
  const placeholders = Array(itemsPerPage - currentItems.length).fill(null);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Ajustamos 'alignArrows' para usar la variable itemsPerPage
  // (La lógica de alineación puede ser más simple, la mantenemos por si la usas)
  const alignArrows = currentItems.length < itemsPerPage;

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

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

export default Proyectos;