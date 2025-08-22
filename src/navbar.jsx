import { useState } from "react";
import logo from "./assets/tecnologia.webp";
import "./index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="TECNOROUTE tecnologia" className="logo" />
        <span className="logo-text">T A</span>
      </div>

      <div className="menu">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#clientes">Clientes</a>
        <a href="#contacto">Contacto</a>
      </div>

      {/* Botón menú móvil */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#clientes">Clientes</a>
          <a href="#contacto">Contacto</a>
        </div>
      )}
    </nav>
  );
}
