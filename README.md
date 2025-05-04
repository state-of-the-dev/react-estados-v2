# Documentación de Hooks Personalizados

## Tabla de Contenidos
1. [useBoolean](#useboolean)
2. [useCounter](#usecounter)
3. [useInput](#useinput)
4. [useArray](#usearray)
5. [useObject](#useobject)
6. [useFetch](#usefetch)
7. [useForm](#useform)
8. [useTheme](#usetheme)
9. [useModal](#usemodal)
10. [SimuladorPagos](#simuladorpagos)

---

## useBoolean <a name="useboolean"></a>
Maneja un estado booleano con toggle.

```jsx
const [isOn, setIsOn] = useState(false);
```

**Ejemplo:**
```jsx
<button onClick={() => setIsOn(!isOn)}>
  {isOn ? 'Apagar' : 'Encender'}
</button>
<p>Estado: {isOn ? 'ON' : 'OFF'}</p>
```

## useCounter <a name="usecounter"></a>
Maneja un contador numérico.

```jsx
const [count, setCount] = useState(0);
```

**Ejemplo:**
```jsx
<button onClick={() => setCount(c => c - 1)}>-</button>
<button onClick={() => setCount(c => c + 1)}>+</button>
<p>Contador: {count}</p>
```

## useInput <a name="useinput"></a>
Maneja campos de formulario.

```jsx
const [text, setText] = useState('');
```

**Ejemplo:**
```jsx
<input 
  value={text}
  onChange={(e) => setText(e.target.value)} 
/>
<p>Texto actual: {text}</p>
```

## useArray <a name="usearray"></a>
Maneja operaciones CRUD en arrays.

```jsx
const [items, setItems] = useState(['React', 'JavaScript']);
const [newItem, setNewItem] = useState('');
```

**Ejemplo:**
```jsx
// Añadir
const addItem = () => {
  if (newItem.trim()) {
    setItems([...items, newItem]);
    setNewItem('');
  }
};

// Eliminar
const removeItem = (index) => {
  setItems(items.filter((_, i) => i !== index));
};

// Editar
const saveEdit = () => {
  const newItems = [...items];
  newItems[editingIndex] = editValue;
  setItems(newItems);
};
```

## useObject <a name="useobject"></a>
Maneja estados tipo objeto.

```jsx
const [user, setUser] = useState({
  name: 'Luis',
  age: 34,
  email: 'luis@example.com'
});
```

**Ejemplo:**
```jsx
const updateField = (field, value) => {
  setUser({
    ...user,
    [field]: value
  });
};

<input
  value={user.name}
  onChange={(e) => updateField('name', e.target.value)}
/>
```

## useFetch <a name="usefetch"></a>
Maneja peticiones a APIs y estados de carga.

```jsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
```

**Ejemplo:**
```jsx
const fetchData = () => {
  setLoading(true);
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
```

## useForm <a name="useform"></a>
Maneja formularios con validación.

```jsx
const [form, setForm] = useState({ username: '', password: '' });
const [errors, setErrors] = useState({});
```

**Ejemplo:**
```jsx
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
```

## useTheme <a name="usetheme"></a>
Maneja el tema de la aplicación con Context API.

```jsx
const { theme, toggleTheme } = useContext(ThemeContext);
```

**Ejemplo:**
```jsx
<div className={`theme-container ${theme}`}>
  <p>Tema actual: {theme}</p>
  <button onClick={toggleTheme}>
    Cambiar tema
  </button>
</div>
```

## useModal <a name="usemodal"></a>
Maneja modales con React Portal.

```jsx
const [isOpen, setIsOpen] = useState(false);
```

**Ejemplo:**
```jsx
<button onClick={() => setIsOpen(true)}>
  Abrir Modal
</button>

{isOpen && createPortal(
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>Este es un Modal</h2>
      <button onClick={() => setIsOpen(false)}>
        Cerrar
      </button>
    </div>
  </div>,
  document.body
)}
```

## SimuladorPagos <a name="simuladorpagos"></a>
Maneja estados de pago con animaciones Lottie.

```jsx
const [status, setStatus] = useState('idle'); // idle, processing, success, error
const [history, setHistory] = useState([]);
```

**Ejemplo:**
```jsx
const handlePayment = () => {
  setStatus('processing');
  
  setTimeout(() => {
    const newStatus = rejectAll ? 'error' : 'success';
    setStatus(newStatus);
    setHistory(prev => [...prev, {
      id: Date.now(),
      status: newStatus,
      time: new Date().toLocaleTimeString()
    }]);
    
    setTimeout(() => setStatus('idle'), 2000);
  }, 2000);
};

<DotLottieReact
  src={lotties[status]}
  autoplay
  loop={status === 'processing' || status === 'idle'}
/>

<button 
  onClick={handlePayment} 
  disabled={status === 'processing'}
>
  {status === 'processing' ? 'Procesando...' : 'Pagar $10'}
</button>
```

---
