import { Routes, Route } from "react-router-dom";
import Home from "../landing/Home";
import Category from "../landing/Category";
import Search from "../landing/Search";
import Random from "../landing/Random";
import Tendency from "../landing/Tendency";
import Favorites from "../landing/Favorites";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/tendency" element={<Tendency />} />
      <Route path="/search" element={<Search />} />
      <Route path="/category/:categoryName" element={<Category />} />  {/* Ruta dinámica */}
      <Route path="/random" element={<Random />} />
    </Routes>
  );
};

export default AppRouter;
