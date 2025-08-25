import LanguageButton from "../../components/LanguageButton/LanguageButton";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import { content } from "../../JS/textos";
import { useGlobalContext } from "../../context/GlobalContext";

function Home() {
  const { language } = useGlobalContext();
  const homeTexts = content[language].home;

  return (
    <div>
      <h1>{homeTexts.title}</h1>
      <p>{homeTexts.subtitle}</p>
      <LanguageButton />
      <ThemeButton />
    </div>
  );
}

export default Home;