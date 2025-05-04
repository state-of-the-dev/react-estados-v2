import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../css/10-SimuladorPagos.css';

export default function SimuladorPagos() {
  const [estado, setEstado] = useState('inactivo');
  const [historial, setHistorial] = useState([]);
  const [rechazarTodo, setRechazarTodo] = useState(false);

  const animaciones = {
    inactivo: 'https://lottie.host/973eacfc-abce-4fe1-bc91-cbbefbff1e8f/NDEDC1TGDx.json',
    procesando: 'https://assets1.lottiefiles.com/packages/lf20_x62chJ.json',
    exito: 'https://lottie.host/9d38ae30-7146-45a9-aa90-b3d317efad41/u7Yjm30fMf.json',
    error: 'https://assets9.lottiefiles.com/packages/lf20_ckcn4hvm.json'
  };

  const procesarPago = () => {
    setEstado('procesando');
    
    setTimeout(() => {
      const resultado = rechazarTodo ? 'error' : 'exito';
      setEstado(resultado);
      setHistorial(prev => [{
        id: Date.now(),
        estado: resultado,
        hora: new Date().toLocaleTimeString()
      }, ...prev]);
      
      setTimeout(() => setEstado('inactivo'), 2000);
    }, 2000);
  };

  return (
    <div className="simulador-pagos card">
      <h3>Simulador de Pagos</h3>
      
      <div className="contenedor-lottie">
        <DotLottieReact
          src={animaciones[estado]}
          autoplay
          loop={estado === 'procesando' || estado === 'inactivo'}
        />
      </div>

      <div className="controles-pago">
        <div className="fila-toggle">
          <input
            type="checkbox"
            id="rechazarToggle"
            checked={rechazarTodo}
            onChange={() => setRechazarTodo(!rechazarTodo)}
          />
          <label htmlFor="rechazarToggle">Rechazar todos los pagos</label>
        </div>
        
        <button 
          onClick={procesarPago}
          disabled={estado === 'procesando'}
          className="boton-pago"
        >
          {estado === 'procesando' ? 'Procesando...' : 'Pagar $10'}
        </button>
      </div>

      <div className="historial-pagos">
        {historial.map(item => (
          <div key={item.id} className={`item-historial ${item.estado}`}>
            [{item.hora}] - {item.estado.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}