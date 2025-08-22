import { useState } from "react";
<<<<<<< HEAD
import logo from "./assets/tecnologia.webp";
=======
import logo from "./assets/logo.png";
>>>>>>> 0b06ec089975fa16d6897c88b77c005d7bcfbb8d
import "./index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="TECNOROUTE tecnologia" className="logo" />
        <span className="logo-text">T A</span>
      </div>

<<<<<<< HEAD
=======
      {/* Menú escritorio reorganizado */}
>>>>>>> 0b06ec089975fa16d6897c88b77c005d7bcfbb8d
      <div className="menu">
        <div className="menu-group">
          <a href="#inicio">🏠 Inicio</a>
          <a href="#servicios">🛠 Servicios</a>
        </div>
        <div className="menu-group">
          <a href="#catalogo">📦 Catálogo</a>
          <a href="#clientes">👥 Clientes</a>
          <a href="#contacto">📞 Contacto</a>
        </div>
      </div>

      {/* Botón menú móvil */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#inicio">🏠 Inicio</a>
          <a href="#servicios">🛠 Servicios</a>
          <a href="#catalogo">📦 Catálogo</a>
          <a href="#clientes">👥 Clientes</a>
          <a href="#contacto">📞 Contacto</a>
        </div>
      )}
    </nav>
  );
}
