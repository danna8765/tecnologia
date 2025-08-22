import Navbar from "./navbar";
import "./index.css";

export default function App() {
  return (
    <div>
      <Navbar />

      {/* Inicio */}
      <section id="inicio" className="section inicio">
        <h1>Bienvenido a <span>TECNOROUTE</span></h1>
        <p>Tu solución en transporte y tienda online.</p>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section servicios">
        <h2>Servicios</h2>
        <p>Envíos rápidos y seguros a nivel nacional + tienda virtual moderna.</p>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="section catalogo">
        <h2>Catálogo</h2>
        <p>Explora nuestra variedad de productos más recientes.</p>
        <div className="productos">
          <div className="producto">🚚 Transporte Premium</div>
          <div className="producto">📦 Paquetería Express</div>
          <div className="producto">🛒 Electrónica</div>
          <div className="producto">👕 Ropa y Moda</div>
          <div className="producto">🏠 Hogar</div>
          <div className="producto">💻 Tecnología</div>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="section clientes">
        <h2>Nuestros Clientes</h2>
        <p>Más de 1000 clientes confían en <span>TECNOROUTE</span>.</p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section contacto">
        <h2>Contáctanos</h2>
        <p>📍 Dirección: Calle Principal #123</p>
        <p>📞 Teléfono: +57 300 123 4567</p>
        <p>✉️ Email: contacto@tecnoroute.com</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 TECNOROUTE
      </footer>
    </div>
  );
}
