import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GlobalProvider } from './context/GlobalContext.jsx';
import { useGlobalContext } from './context/GlobalContext.jsx';

// Este componente se encargará de aplicar la clase al body
const ThemeWrapper = () => {
  const { theme } = useGlobalContext();
  document.body.className = theme;
  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeWrapper />
    </GlobalProvider>
  </React.StrictMode>,
);