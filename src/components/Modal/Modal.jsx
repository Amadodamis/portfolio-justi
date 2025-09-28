import { useState, useEffect } from "react";
import "./modal.css";
import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";

function Modal({ project, onClose }) {
    if (!project) return null;

    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = () => {
        setCurrentImage((prev) =>
            prev === 0 ? project.galleryImages.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentImage((prev) =>
            prev === project.galleryImages.length - 1 ? 0 : prev + 1
        );
    };

    // 👇 Manejo de teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowLeft") {
                handlePrev();
            } else if (e.key === "ArrowRight") {
                handleNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                {/* Imagen principal */}
                <div className="modal-image-container">
                    <img
                        src={project.galleryImages[currentImage]}
                        alt={project.title}
                        className="modal-main-image"
                    />
                    <img src={arrowLeft} alt="prev" className="modal-arrow left" onClick={handlePrev} />
                    <img src={arrowRight} alt="next" className="modal-arrow right" onClick={handleNext} />
                    {/* Botón de cierre */}
                    <button className="modal-close" onClick={onClose}>✖</button>
                </div>

                {/* Miniaturas */}
                <div className="modal-thumbnails">
                    {project.galleryImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`thumb-${index}`}
                            className={`thumbnail ${currentImage === index ? "active" : ""}`}
                            onClick={() => setCurrentImage(index)}
                        />
                    ))}
                </div>

                {/* Descripción */}
                <p className="modal-description">{project.description}</p>
            </div>
        </div>
    );
}

export default Modal;
