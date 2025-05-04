import { useState, useEffect } from 'react';
import '../css/6-useFetch.css';

export default function UseFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [endpoint, setEndpoint] = useState('todos/1');

  const endpoints = [
    { value: 'posts/1', label: 'Post' },
    { value: 'users/1', label: 'Usuario' },
    { value: 'todos/1', label: 'Tarea' }
  ];

  const fetchData = () => {
    setLoading(true);
    setError(null);
    
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then(res => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then(data => setData(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="fetch-container card">
      <h3 className="fetch-title">useFetch</h3>
      
      <div className="fetch-controls">
        <select
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          className="fetch-select"
          disabled={loading}
        >
          {endpoints.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        
        <button
          onClick={fetchData}
          className="fetch-button"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Obtener Datos'}
        </button>
      </div>

      <div className="fetch-results">
        {loading && <div className="fetch-loading">Cargando datos...</div>}
        {error && <div className="fetch-error">Error: {error}</div>}
        {data && (
          <pre className="fetch-data">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}