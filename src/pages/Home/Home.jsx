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
      <Header texts={homeTexts} />
      <main className="main-content">   
        <SobreMi />
        <Proyectos texts={homeTexts} />
        <Dibujos texts={homeTexts} />
      </main>

    </div>
  );
}

export default Home;

/*
<Proyectos texts={homeTexts} />
        <Dibujos texts={homeTexts} />

*/