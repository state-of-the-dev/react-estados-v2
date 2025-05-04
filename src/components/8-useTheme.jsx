import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../css/8-useTheme.css';

export default function UseTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div className={`theme-container ${theme}`}>
      <h3>useTheme</h3>
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>
        Cambiar tema
      </button>
    </div>
  );
}