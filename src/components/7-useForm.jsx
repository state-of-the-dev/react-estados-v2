import { useState } from 'react';
import '../css/7-useForm.css';

export default function UseForm() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = 'Usuario requerido';
    if (!form.password) newErrors.password = 'Contraseña requerida';
    else if (form.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert(`Formulario enviado: ${JSON.stringify(form)}`);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (field) => (e) => {
    setForm({...form, [field]: e.target.value});
    if (errors[field]) setErrors({...errors, [field]: ''});
  };

  return (
    <div className="form-container card">
      <h3 className="form-title">useForm</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">Usuario:</label>
          <input
            className="form-input"
            value={form.username}
            onChange={handleChange('username')}
          />
          {errors.username && <span className="form-error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            className="form-input"
            value={form.password}
            onChange={handleChange('password')}
          />
          {errors.password && <span className="form-error">{errors.password}</span>}
        </div>
        <button type="submit" className="form-submit">Enviar</button>
      </form>
    </div>
  );
}