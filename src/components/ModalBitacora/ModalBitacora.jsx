import { useEffect } from "react";
import "./ModalBitacora.css";

function ModalBitacora({ imageSrc, onClose }) {
    if (!imageSrc) return null;

    // 👇 Manejo de teclado (Solo Escape)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        // El overlay se cierra al hacer clic en él
        <div className="modal-overlay" onClick={onClose}>
            {/* Contenido del modal: evita que se cierre al hacer clic dentro */}
            <div className="modal-content-bitacora" onClick={(e) => e.stopPropagation()}>

                {/* Contenedor de la imagen */}
                <div className="modal-image-container-bitacora">
                    <img
                        src={imageSrc}
                        alt="Foto de Bitácora con zoom"
                        className="modal-main-image-bitacora"
                    />
                    {/* Botón de cierre (reutiliza el estilo del otro modal) */}
                    <button className="modal-close" onClick={onClose}>✖</button>
                </div>

            </div>
        </div>
    );
}

export default ModalBitacora;