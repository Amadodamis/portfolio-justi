import { useGlobalContext } from "../../context/GlobalContext";

function LanguageButton() {
  const { language, toggleLanguage } = useGlobalContext();

  return (
    <button onClick={toggleLanguage} style={{ border: '1px solid black' }}>
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
}

export default LanguageButton;