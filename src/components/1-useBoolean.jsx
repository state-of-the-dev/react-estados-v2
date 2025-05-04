import { useState } from 'react';
import '../css/1-useBoolean.css'; // Ruta corregida

export default function UseBoolean() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="boolean-container card">
      <h3>useBoolean</h3>
      <p className="boolean-state">Estado: {isOn ? 'ON' : 'OFF'}</p>
      <button 
        onClick={() => setIsOn(!isOn)}
        className={`boolean-toggle ${isOn ? 'on' : 'off'}`}>
        {isOn ? 'Apagar' : 'Encender'}
      </button>
    </div>
  );
}