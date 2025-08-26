import { content } from "../../JS/textos";
import { useGlobalContext } from "../../context/GlobalContext";

import Header from "../../components/Header/Header";
import SobreMi from "../../components/SobreMi/SobreMi";
import Proyectos from "../../components/Proyectos/Proyectos";
import Dibujos from "../../components/Dibujos/Dibujos";

import "./Home.css";

function Home() {
  const { language } = useGlobalContext();
  const homeTexts = content[language].home;

  return (
    <div className="home-container">

      {/* 4. Título y Navbar fijos */}
      <Header texts={homeTexts} />
      <h1 className="name-title">Justina Spinoso</h1>

      {/* Contenido principal de la página */}
      <main className="main-content">
        {/* Sección de bienvenida */}
        <SobreMi />

        {/* Sección de proyectos con scroll horizontal */}
        <Proyectos texts={homeTexts} />

        {/* Sección de dibujos con scroll horizontal */}
        <Dibujos texts={homeTexts} />

      </main>

    </div>
  );
}

export default Home;