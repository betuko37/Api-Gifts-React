import PropTypes from "prop-types";
import "./GridGifts.css";
import { getGifts } from "../../helpers/getGifs";
import { useState, useEffect } from "react";
import { GifItems } from "../GifItem/GifItem";




export const GridGifts = ({ category }) => {

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1); // Estado para la paginación
    const [isLoading, setIsLoading] = useState(false); // Estado para mostrar carga

    useEffect(() => {
        setIsLoading(true); 
        getGifts(category, page)
            .then(newImages => {
                setImages(newImages);
                setIsLoading(false); 
            })
            .catch(() => setIsLoading(false));
    }, [category, page]); // Se ejecuta cuando cambia la categoría o la página

    const nextPage = () => setPage(prev => prev + 1);
    const prevPage = () => setPage(prev => (prev > 1 ? prev - 1 : 1));




    return (
        <div className="grid-container">

            <h3 className="category-title">{category}</h3>
            {isLoading && <p>Cargando...</p>} {/* Mensaje de carga */}

            
            <div className="grid-gifts">
                {images.map((image) => (
                    <GifItems key={image.id} {...image} />
                ))}
            </div>

                 {/* Botones de paginación */}
            <div className="pagination">
                <button onClick={prevPage} disabled={page === 1}>Anterior</button>
                <span>Página {page}</span>
                <button onClick={nextPage} disabled={images.length < 10}>Siguiente</button>
            </div>

        </div>
    );
    


}



GridGifts.propTypes = {
    category: PropTypes.string
}