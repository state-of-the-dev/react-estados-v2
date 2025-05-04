import { useState } from 'react';
import '../css/9-useModal.css';

export default function UseModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modal-container card">
      <h3>useModal</h3>
      <button onClick={() => setIsOpen(true)}>
        Abrir Modal
      </button>
      
      {isOpen && (
        <div className="overlay">
          <div className="modal-content">
            <h2>Este es un Modal</h2>
            <p>Renderizado usando Portal</p>
            <button onClick={() => setIsOpen(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}