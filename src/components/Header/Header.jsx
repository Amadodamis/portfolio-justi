import LanguageButton from "../../components/LanguageButton/LanguageButton";
import './header.css';


function Header({ texts }) {

    return (
        <nav className="main-nav ">
            <ul>
                <li><a className="nav-hover" href="#about">{texts.nav.about}</a></li>
                <li><a className="nav-hover proyectos-text" href="#projects" >{texts.nav.projects}</a></li>

                <li><a className="nav-hover" href="#drawings">{texts.nav.drawings}</a></li>
                <li><a className="nav-hover" href="#contact">{texts.nav.contact}</a></li>
               
               <li><a className="nav-hover" href="#Cv">CV</a></li>

                <li><LanguageButton /></li>
            </ul>

        </nav>
    );
}

export default Header;