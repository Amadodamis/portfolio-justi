// Importa los estilos de tu Home.css (es una buena práctica)
import LanguageButton from "../../components/LanguageButton/LanguageButton";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import './header.css';

// El componente recibe un objeto 'texts' como prop
function Header({ texts }) {
    return (
        <header className="fixed-header">
            <h1 className="name-title">{texts.name}</h1>
            <nav className="main-nav">
                <ul>
                    <li><LanguageButton /></li>
                    <li><ThemeButton /></li>
                    <li><a href="#about">{texts.nav.about}</a></li>
                    {/* Aquí se usa el estilo para "Proyectos" */}
                    <li><a href="#projects" className="active-link">{texts.nav.projects}</a></li>
                    <li><a href="#drawings">{texts.nav.drawings}</a></li>
                    <li><a href="#contact">{texts.nav.contact}</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;