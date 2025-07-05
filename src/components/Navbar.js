import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access');
    onLogout();
    navigate('/login');
  };

  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        {isAuthenticated && (
          <>
            <li><Link to="/">Lista de Proyectos</Link></li>
            <li><Link to="/crear">Crear Proyecto</Link></li>
            <li><button onClick={handleLogout}>Cerrar sesión</button></li>
          </>
        )}
        {!isAuthenticated && (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;