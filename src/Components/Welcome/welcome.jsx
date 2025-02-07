import "./welcome.css";

export const Welcome = () => {
  return (
    <div className="home-container">
      <h1>🌟 Bienvenido a nuestra página de GIFs 🎉</h1>
      <p>
        Esta aplicación está construida con <strong>React</strong>, una de las
        librerías más populares para el desarrollo web moderno. Utiliza la{" "}
        <strong>API de Giphy</strong> para traer miles de GIFs en tiempo real y
        ofrecerte la mejor experiencia visual.
      </p>
      <p>🚀 Con esta aplicación podrás:</p>
      <ul>
        <li>🔍 Buscar GIFs en tiempo real.</li>
        <li>📌 Guardar tus GIFs favoritos.</li>
        <li>⚡ Compartir GIFs con tus amigos.</li>
      </ul>

      <p>
        React nos permite acrear componentes reutilizables y eficientes, lo que
        hace que esta aplicación sea rápida y dinámica. Además, usamos{" "}
        <strong>Framer Motion</strong> para añadir animaciones fluidas y mejorar
        la experiencia del usuario.
      </p>
      <p>
        🎨 Disfruta de una interfaz moderna y atractiva, donde podrás navegar de
        forma intuitiva y encontrar los mejores GIFs en segundos.
      </p>
    </div>
  );
}
