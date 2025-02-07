import { TrendingGifs } from "../Components/Trending/TrendingGift";
import '../Components/Trending/TrendingGifs.css';

const Tendency = () => {
  return (
    <>
      <h1 className="trending-header">🔥 GIFs en Tendencia 🔥</h1>
      <p className="trending-description">
        Descubre los GIFs más populares del momento. ¡Lo mejor de la web en un solo lugar! 🚀
      </p>
      <TrendingGifs />
    </>
  );
};

export default Tendency; 