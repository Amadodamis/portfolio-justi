import { useGlobalContext } from "../../context/GlobalContext";

function ThemeButton() {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <button onClick={toggleTheme} style={{ border: '1px solid black' }}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeButton;