import { Fav } from '../components/Fav/Fav';
import '../Components/Fav/Fav.css';
const Favorites = () => {
  return (
    <div className="fav-welcome">
    <h1>🌟 Bienvenido a Favoritos 🌟</h1>
    <p>
        ¡Aquí están tus GIFs más queridos! 💖 Dale un vistazo a tus favoritos y revívelos una y otra vez. 😍✨
        Encuentra los que más te hacen sonreír, y si no ves el que buscas, ¡no dudes en añadirlo a tu colección! 🎉
    </p>
    <Fav />
</div>


  );
};

export default Favorites; 