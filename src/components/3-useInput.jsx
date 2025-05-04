import { useState } from 'react';
import '../css/3-useInput.css';

export default function UseInput() {
  const [text, setText] = useState('');

  return (
    <div className="input-container">
      <h3>useInput</h3>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe algo..."
        className="input-field"
      />
      <p className="input-text">Texto actual: {text}</p>
    </div>
  );
}