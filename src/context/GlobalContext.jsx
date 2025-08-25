import { createContext, useState, useContext } from 'react';

// 1. Crear el contexto
const GlobalContext = createContext();

// 2. Crear el proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' o 'en'
  const [theme, setTheme] = useState('light'); // 'light' o 'dark'

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // El valor que se comparte a todos los componentes
  const value = {
    language,
    theme,
    toggleLanguage,
    toggleTheme,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

// 3. Crear un hook personalizado para usar el contexto
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};