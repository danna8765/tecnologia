import "./index.css";
import Navbar from "./navbar";

export default function App() {
  return (
    <div>
      <Navbar />

      {/* Inicio */}
      <section id="inicio" className="section inicio">
        <h1>Bienvenido a <span>T A</span></h1>
        <p>La mejor tienda online de tecnología avanzada.</p>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section servicios">
        <h2>¿Por qué elegirnos?</h2>
        <p>Ofrecemos productos originales, envíos rápidos y atención personalizada.</p>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="section catalogo">
        <h2>Catálogo Tecnológico</h2>
        <p>Descubre nuestras últimas novedades en tecnología.</p>
        <div className="productos">
          <div className="producto">💻 Laptops y PCs</div>
          <div className="producto">📱 Smartphones</div>
          <div className="producto">🎧 Audífonos y Audio</div>
          <div className="producto">🖥️ Monitores</div>
          <div className="producto">⌚ Smartwatches</div>
          <div className="producto">🎮 Consolas y Gaming</div>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="section clientes">
        <h2>Opiniones de nuestros clientes</h2>
        <p>Más de 5,000 clientes satisfechos con nuestra tienda tecnológica.</p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section contacto">
        <h2>Contáctanos</h2>
        <p>📍 Dirección: Av. Tecnología #456, Ciudad Digital</p>
        <p>📞 Teléfono: +57 310 456 7890</p>
        <p>✉️ Email: soporte@tecnoroute.com</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 TECNOROUTE - Tu tienda de tecnología confiable
      </footer>
    </div>
  );
}
