import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormularioProyecto from './components/FormularioProyecto';
import LoginForm from './components/LoginForm';

function App() {
  const [proyectos, setProyectos] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      setIsAuthenticated(true);
      obtenerProyectos();
    }
  }, []);

  const obtenerProyectos = () => {
    axios.get('http://127.0.0.1:8000/api/proyectos/')
      .then(response => setProyectos(response.data))
      .catch(error => console.error('Error al obtener los proyectos:', error));
  };

  const cerrarSesion = () => {
    localStorage.removeItem('access');
    setIsAuthenticated(false);
    setProyectos([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white shadow-md rounded-md p-6 relative">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Mi Portafolio</h1>

        {isAuthenticated ? (
          <>
            <button
              onClick={cerrarSesion}
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Cerrar sesión
            </button>

            <FormularioProyecto onProyectoCreado={obtenerProyectos} />

            <hr className="my-6" />

            <ul className="space-y-4">
              {proyectos.map((proyecto) => (
                <li
                  key={proyecto.id}
                  className="border p-3 rounded shadow-sm bg-gray-50"
                >
                  <h3 className="font-semibold">{proyecto.titulo}</h3>
                  <p className="text-sm text-gray-600">{proyecto.descripcion}</p>
                  {proyecto.link && (
                    <a
                      href={proyecto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline text-sm"
                    >
                      Ver proyecto
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <LoginForm onLoginSuccess={() => {
            setIsAuthenticated(true);
            obtenerProyectos();
          }} />
        )}
      </div>
    </div>
  );
}

export default App;
