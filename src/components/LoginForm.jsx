import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLoginSuccess }) {
  const [credenciales, setCredenciales] = useState({ username: '', password: '' });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', credenciales);
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      setMensaje('Sesión iniciada correctamente');
      if (onLoginSuccess) onLoginSuccess();
    } catch (error) {
      setMensaje('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar sesión</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={credenciales.username}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credenciales.password}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Iniciar Sesión
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
}

export default LoginForm;
