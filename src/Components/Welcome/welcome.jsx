import "./welcome.css";
import { useNavigate } from "react-router-dom"; 


export const Welcome = () => {


  //cambio de ruta
  const navigate = useNavigate(); //hook para cambiar


  return (
    <div className="home-container">
      <div className="particles"></div> {/* Fondo animado */}
      <h1 className="title">🌟 Bienvenido a nuestra página de GIFs 🎉</h1>
      <p className="intro-text">
        Esta aplicación está construida con <strong>React</strong>, una de las librerías
        más populares para el desarrollo web moderno. Utiliza la{" "}
        <strong>API de Giphy</strong> para traerte miles de GIFs en tiempo real y ofrecerte
        la mejor experiencia visual.
      </p>

      <section className="features">
  <ul>
    <li>🔍 Búsqueda en tiempo real</li>
    <li>📌 Guarda tus GIFs favoritos</li>
    <li>⚡ Compartir GIFs fácilmente</li>
    <li>🌟 Interfaz moderna y fluida</li>
  </ul>
</section>


      <p className="description">
        React nos permite crear componentes reutilizables y eficientes. Además, usamos{" "}
        <strong>animaciones CSS</strong> para mejorar la experiencia del usuario.
      </p>

      <button className="explore-btn" onClick={() => navigate("/tendency")}>
        💥 Explorar GIFs 💣
      </button>    </div>
  );
};
