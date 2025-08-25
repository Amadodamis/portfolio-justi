import LanguageButton from "../../components/LanguageButton/LanguageButton";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import { content } from "../../JS/textos";
import { useGlobalContext } from "../../context/GlobalContext";

function Login() {
  const { language } = useGlobalContext();
  const loginTexts = content[language].login;

  return (
    <div>
      <h1>{loginTexts.title}</h1>
      <p>{loginTexts.username}</p>
      <p>{loginTexts.password}</p>
      <button>{loginTexts.loginButton}</button>
      <LanguageButton />
      <ThemeButton />
    </div>
  );
}

export default Login;
