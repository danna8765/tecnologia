import { useState } from "react";
import logo from "./assets/logo.png";
import "./index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo + Nombre */}
      <div className="logo-container">
        <img src={logo} alt="TECNOROUTE Logo" className="logo" />
        <span className="logo-text">TECNOROUTE</span>
      </div>

      {/* Menú escritorio reorganizado */}
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
