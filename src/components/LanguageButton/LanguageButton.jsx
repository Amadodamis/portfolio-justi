import { useGlobalContext } from "../../context/GlobalContext";

function LanguageButton() {
  const { language, toggleLanguage } = useGlobalContext();

  return (
    <button onClick={toggleLanguage}
      style={{
        fontFamily: 'var(--font-title)',
        fontWeight: 500,
        fontSize: '1.2rem',
        color: 'var(--color2)',
        transition: 'color 0.4s ease',
        textDecoration: 'none'
      }}
    >



      {language === 'es' ? 'eng' : 'esp'}
    </button >
  );
}

export default LanguageButton;