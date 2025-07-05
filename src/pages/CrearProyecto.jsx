import React from 'react';
import FormularioProyecto from '../components/FormularioProyecto';

function CrearProyecto() {
  return (
    <div>
      <h2>Crear Proyecto</h2>
      <FormularioProyecto onProyectoCreado={() => alert('Proyecto creado')} />
    </div>
  );
}

export default CrearProyecto;
