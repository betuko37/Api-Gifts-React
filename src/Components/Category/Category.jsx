import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategoryGifs } from "../../helpers/getGiftCategory";
import { GifItems } from "../GifItem/GifItem";
import "./Category.css";

const Category = () => {
    const { categoryName } = useParams();
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getCategoryGifs(categoryName)
            .then((newGifs) => {
                setGifs(newGifs);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [categoryName]);

    return (
        <div className="category-container">
            <h2 className="category-title">Categoría: {categoryName}</h2>
            {isLoading && <p>Cargando...</p>}
            <div className="gif-grid">
                {gifs.map((gif) => (
                    <GifItems key={gif.id} {...gif} />
                ))}
            </div>
        </div>
    );
};

export default Category;
