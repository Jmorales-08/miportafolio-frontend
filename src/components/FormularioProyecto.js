import React, { useState } from 'react';
import axios from 'axios';

const FormularioProyecto = ({ onProyectoCreado }) => {
  const [formulario, setFormulario] = useState({
    titulo: '',
    descripcion: '',
    link: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('access');

      await axios.post('http://127.0.0.1:8000/api/proyectos/', formulario, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      setMensaje('Proyecto creado con éxito.');
      setFormulario({ titulo: '', descripcion: '', link: '' });

      if (onProyectoCreado) onProyectoCreado();
    } catch (error) {
      setMensaje('Error al crear el proyecto.');
      console.error(error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Crear Nuevo Proyecto</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formulario.titulo}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={formulario.descripcion}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="link"
          placeholder="Link (opcional)"
          value={formulario.link}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Crear Proyecto
        </button>
      </form>

      {mensaje && (
        <p className={`mt-4 text-sm text-center ${
          mensaje.startsWith('✅') ? 'text-green-600' : 'text-red-600'
        }`}>
          {mensaje}
        </p>
      )}
    </div>
  );
};

export default FormularioProyecto;
