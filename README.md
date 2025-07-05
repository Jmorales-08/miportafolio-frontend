# 🧑‍💻 Mi Portafolio – Frontend

Este proyecto es la interfaz de usuario de un portafolio personal desarrollado en **React** con **TailwindCSS**. Permite autenticación con JWT contra un backend en Django y la gestión de proyectos personales mediante un formulario dinámico.

---

## 🚀 Funcionalidades

- Inicio de sesión con JWT
- Creación de nuevos proyectos
- Visualización de proyectos creados
- Estilizado profesional con TailwindCSS
- Arquitectura modular con componentes reutilizables

---

## 🖥️ Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Django REST Framework (backend)](https://www.djangoproject.com/)

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/miportafolio-frontend.git
cd miportafolio-frontend
Instala las dependencias:

bash
Copiar
Editar
npm install
Inicia la aplicación:

bash
Copiar
Editar
npm start
Por defecto se ejecuta en http://localhost:3000.

✅ Asegúrate de que el backend (Django) esté corriendo en http://127.0.0.1:8000.

📁 Estructura del proyecto
arduino
Copiar
Editar
miportafolio-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── LoginForm.js
│   │   └── FormularioProyecto.js
│   ├── App.js
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
🔐 Autenticación
Se utiliza el endpoint POST /api/token/ del backend en Django para obtener los tokens access y refresh.

Los tokens se almacenan en localStorage.

El token de acceso se incluye automáticamente en los headers como Authorization: Bearer <token> para consumir rutas protegidas.

📝 Notas
Este proyecto es parte de un sistema fullstack, junto con el backend en Django: miportafolio-backend.

Puedes adaptar este frontend fácilmente para mostrar otras entidades, como artículos, experiencias laborales o habilidades técnicas.

👨‍💻 Autor
Desarrollado por Jesús Alejandro Morales