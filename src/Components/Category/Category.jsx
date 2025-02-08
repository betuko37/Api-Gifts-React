import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategoryGifs } from "../../helpers/getGiftCategory";
import { GifItems } from "../GifItem/GifItem";
import "./Category.css";

const Categoryy = () => {
    const { category } = useParams(); // Obtener la categoría desde la URL
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getCategoryGifs(category)
            .then(setGifs)
            .finally(() => setLoading(false));
    }, [category]);

    return (
        <div className="category-container">
            <h1 className="category-title">{category}</h1>
            <p>Mostrando GIFs relacionados con {category}</p>

            {loading ? (
                <p>Cargando...</p>
            ) : gifs.length > 0 ? (
                <div className="gif-grid">
                    {gifs.map((gif) => (
                        <GifItems key={gif.id} id={gif.id} url={gif.url} title={gif.title} />
                    ))}
                </div>
            ) : (
                <p>No se encontraron GIFs para esta categoría.</p>
            )}
        </div>
    );
};

export default Categoryy;
