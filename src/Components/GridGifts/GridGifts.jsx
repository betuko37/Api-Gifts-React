import PropTypes from "prop-types";
import "./GridGifts.css";
import { GifItems } from "../GifItem/GifItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";




export const GridGifts = ({ category }) => {

    //hook personalizado
    const { images, isLoading, page, setPage } = useFetchGifs(category);

    //cambios de pagina
    const nextPage = () => setPage(prev => prev + 1);
    const prevPage = () => setPage(prev => (prev > 1 ? prev - 1 : 1));


    return (
        <div className="grid-container">

            <h3 className="category-title">{category}</h3>
            {isLoading && <p>Cargando...</p>} 


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