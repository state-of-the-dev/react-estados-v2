import { 
  UseBoolean,
  UseCounter,
  UseInput,
  UseArray,
  UseObject,
  UseFetch,
  UseForm,
  UseTheme,
  UseModal,
  SimuladorPagos
} from './components';

export default function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="navbar-logo">React Hooks</a>
        <div className="navbar-links">
          <a href="#basic-hooks" className="navbar-link">Hooks Básicos</a>
          <a href="#advanced-hooks" className="navbar-link">Patrones Avanzados</a>
        </div>
      </nav>

      <div className="main-content">
        <header className="app-header">
          <h1 style={{ textAlign: 'center' }}>Estados en React</h1>
          <p style={{ textAlign: 'center' }}>Ejemplos de hooks y patrones</p>
        </header>

        <main className="components-grid">
          <section id="basic-hooks" className="basic-hooks">
            <h2 style={{ textAlign: 'center' }}>Hooks Básicos</h2>
            <div className="components-container">
              <UseBoolean />
              <UseCounter />
              <UseInput />
              <UseArray />
              <UseObject />
            </div>
          </section>

          <section id="advanced-hooks" className="advanced-hooks">
            <h2 style={{ textAlign: 'center' }}>Patrones Avanzados</h2>
            <div className="components-container">
              <UseFetch />
              <UseForm />
              <UseTheme />
              <UseModal />  
              <SimuladorPagos />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}