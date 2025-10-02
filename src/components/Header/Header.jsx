import { useState } from 'react'; // 👈 1. Importar useState
import LanguageButton from "../../components/LanguageButton/LanguageButton";
import './header.css';


function Header({ texts }) {
    // 2. Inicializar el estado del menú como cerrado
    const [isOpen, setIsOpen] = useState(false);

    // 3. Función para cambiar el estado (abrir/cerrar) al hacer click en el botón
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // 4. Función para cerrar el menú al hacer click en un enlace (Mejora la UX en móvil)
    const closeMenu = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="main-nav">

            {/* BOTÓN DE HAMBURGUESA */}
            <button
                className="hamburger-button"
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                onClick={toggleMenu} // 👈 5. Asignar la función para abrir/cerrar
            >
                {/* Cambia el ícono al abrir/cerrar */}
                {isOpen ? '✕' : '☰'}
            </button>

            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                
                <li><a className="nav-hover" href="#about" onClick={closeMenu}>{texts.nav.about}</a></li>
                <li><a className="nav-hover proyectos-text" href="#projects" onClick={closeMenu} >{texts.nav.projects}</a></li>

                <li><a className="nav-hover" href="#bitacora" onClick={closeMenu}>{texts.nav.bitacora}</a></li>

                <li><a className="nav-hover" href="#contact" onClick={closeMenu}>{texts.nav.contact}</a></li>

                <li>
                    <a
                        className="nav-hover"
                        href="/pdfs/CV_JustinaSpinoso.pdf"
                        download="CV_JustinaSpinoso.pdf"
                        onClick={closeMenu}
                    >
                        {texts.nav.cv}
                    </a>
                </li>

                <li><LanguageButton /></li>
            </ul>

        </nav>
    );
}

export default Header;