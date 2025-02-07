import { useState, useEffect } from "react";
import { getTrendingGifs } from "../../helpers/getGiftTendecy";
import { GifItems } from "../GifItem/GifItem";
import "./TrendingGifs.css";

export const TrendingGifs = () => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const gifsPerPage = 12; // Definir cuántos GIFs por página

    useEffect(() => {
        setIsLoading(true);
        getTrendingGifs(gifsPerPage, "g", (page - 1) * gifsPerPage)
            .then(newGifs => {
                setGifs(newGifs);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [page]);

    const nextPage = () => setPage(prev => prev + 1);
    const prevPage = () => setPage(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="trending-container">

            {isLoading && <p>Cargando...</p>}

            <div className="gif-grid">
                {gifs.map(gif => (
                    <GifItems key={gif.id} {...gif} />
                ))}
            </div>

            <div className="pagination">
                <button onClick={prevPage} disabled={page === 1}>Anterior</button>
                <span>Página {page}</span>
                <button onClick={nextPage} disabled={gifs.length < gifsPerPage}>Siguiente</button>
            </div>
        </div>
    );
};
