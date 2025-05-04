import { useState } from 'react';
import '../css/5-useObject.css';

export default function UseObject() {
  const [user, setUser] = useState({
    name: 'Luis',
    age: 34,
    email: 'luis@example.com'
  });

  const updateField = (field) => (e) => {
    const value = field === 'age' ? parseInt(e.target.value) || 0 : e.target.value;
    setUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="object-container card">
      <h3 className="object-title">useObject</h3>
      
      <form className="object-form">
        <div className="form-group">
          <label className="form-label">Nombre:</label>
          <input
            value={user.name}
            onChange={updateField('name')}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Edad:</label>
          <input
            type="number"
            value={user.age}
            onChange={updateField('age')}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={updateField('email')}
            className="form-input"
          />
        </div>
      </form>
      
      <div className="object-output">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}