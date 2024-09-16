import { useState } from 'react';
import './App.css';

function App() {
  // Estado para controlar la visibilidad del texto
  const [isVisible, setIsVisible] = useState(false);

  // Función para alternar la visibilidad del texto
  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <button onClick={toggleText}>
        {isVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
      </button>
      {isVisible && <p>¡Hola! Este es el texto que aparece y desaparece.</p>}
    </div>
  );
}

export default App;
