import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      axios.get('http://127.0.0.1:8000/api/proyectos/')
        .then(res => setProyectos(res.data))
        .catch(err => console.error('Error al obtener proyectos:', err));
    }
  }, []);

  return (
    <div>
      <h2>Mis Proyectos</h2>
      <ul>
        {proyectos.map(p => (
          <li key={p.id}>
            <strong>{p.titulo}</strong> - {p.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProyectos;
