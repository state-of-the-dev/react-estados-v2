import { useState } from 'react';
import '../css/4-useArray.css';

export default function UseArray() {
  const [items, setItems] = useState(['React', 'JavaScript']);
  const [newItem, setNewItem] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditValue(items[index]);
  };

  const saveEdit = () => {
    if (editValue.trim()) {
      const newItems = [...items];
      newItems[editingIndex] = editValue;
      setItems(newItems);
      setEditingIndex(null);
    }
  };

  return (
    <div className="array-container card">
      <h3>useArray</h3>
      
      <ul className="array-list">
        {items.map((item, index) => (
          <li key={index} className="array-item">
            {editingIndex === index ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="array-input"
                  autoFocus
                />
                <div className="action-buttons">
                  <button onClick={saveEdit} className="btn save">
                    Guardar
                  </button>
                  <button onClick={() => setEditingIndex(null)} className="btn cancel">
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span>{item}</span>
                <div className="action-buttons">
                  <button onClick={() => startEditing(index)} className="btn edit">
                    Editar
                  </button>
                  <button onClick={() => removeItem(index)} className="btn remove">
                    Eliminar
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      
      <div className="add-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Nuevo elemento"
          className="array-input"
        />
        <button onClick={addItem} className="btn add">
          Agregar
        </button>
      </div>
    </div>
  );
}