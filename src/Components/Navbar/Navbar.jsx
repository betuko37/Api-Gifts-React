import "./Navbar.css";
import { Link, useLocation } from "react-router-dom"; // Importa useLocation
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub, FaHome, FaStar, FaFontAwesome, FaSearch, FaRandom } from "react-icons/fa";
import PropTypes from "prop-types";

export const Navbar = ({ empresa, id_fb, user_insta, user_git, num_wha }) => {
  const location = useLocation(); // Obtiene la ruta actual

  // Función para verificar si el enlace está activo
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <h1 className="title">{empresa}</h1>
      <div className="links">
        <Link to="/" className={isActive("/")}> Inicio <FaHome /></Link>
        <Link to="/favorites" className={isActive("/favorites")}> Favoritos <FaStar /></Link>
        <Link to="/tendency" className={isActive("/tendency")}> Tendencia <FaFontAwesome /></Link>
        <Link to="/search" className={isActive("/search")}> Buscar <FaSearch /> </Link>
        <Link to="/category" className={isActive("/category")}> Categorías <BiSolidCategoryAlt /></Link>
        <Link to="/random" className={isActive("/random")}> Aleatorio <FaRandom /></Link>
      </div>
      <div className="socials">
        <a href={`https://www.facebook.com/profile.php?id=${id_fb}`} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href={`https://instagram.com/${user_insta}`} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href={`https://api.whatsapp.com/send?phone=521${num_wha}&text=Hola%20eh%20visto%20tu%20pagina%F0%9F%93%84%20con%20la%20Api%20de%20Gifts%2C%20es%20espectacular%F0%9F%A4%A9%F0%9F%91%8D`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href={`https://github.com/${user_git}`} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  empresa: PropTypes.string.isRequired,
  id_fb: PropTypes.number,
  user_insta: PropTypes.string,
  user_git: PropTypes.string,
  num_wha: PropTypes.number,
};
