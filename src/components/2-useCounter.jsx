import { useState } from 'react';
import '../css/2-useCounter.css';

export default function UseCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h3>useCounter</h3>
      <p className="counter-value">Contador: {count}</p>
      <div className="counter-buttons">
        <button 
          className="counter-btn decrement" 
          onClick={() => setCount(c => c - 1)}
        >
          -
        </button>
        <button 
          className="counter-btn increment" 
          onClick={() => setCount(c => c + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}