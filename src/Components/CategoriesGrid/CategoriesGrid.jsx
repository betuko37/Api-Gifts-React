import { CategoryCard } from "../CategoryCard/CategoryCard";
import "./CategoriesGrid.css";

const categories = [
    { name: "Animales", imageUrl: "https://via.placeholder.com/300x200?text=Animales" },
    { name: "Deportes", imageUrl: "https://via.placeholder.com/300x200?text=Deportes" },
    { name: "Música", imageUrl: "https://via.placeholder.com/300x200?text=Música" },
    { name: "Películas", imageUrl: "https://via.placeholder.com/300x200?text=Películas" },
    { name: "Memes", imageUrl: "https://via.placeholder.com/300x200?text=Memes" },
    { name: "Videojuegos", imageUrl: "https://via.placeholder.com/300x200?text=Videojuegos" },
];

export const CategoriesGrid = () => {
    return (
        <div className="categories-grid">
            {categories.map((category) => (
                <CategoryCard 
                    key={category.name} 
                    category={category.name} 
                    imageUrl={category.imageUrl} 
                />
            ))}
        </div>
    );
};
