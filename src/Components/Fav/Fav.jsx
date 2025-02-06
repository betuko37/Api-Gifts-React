import { useState, useEffect } from "react";
import { GifItems } from "../GifItem/GifItem";
import { getGiftByID } from "../../helpers/getGifByID";
import "./Fav.css";

export const Fav = () => {
    const [likedGifs, setLikedGifs] = useState([]); // Estado para almacenar los datos completos de los GIFs
    const [isLoading, setIsLoading] = useState(true); // Para controlar el estado de carga

    // Obtener los GIFs favoritos desde localStorage cuando el componente se monte
    useEffect(() => {
        const savedLikes = JSON.parse(localStorage.getItem("likedGifs")) || {};

        // Filtrar los GIFs favoritos y guardar solo aquellos que estén "likeados"
        const likedGifIds = Object.keys(savedLikes).filter(id => savedLikes[id]);

        // Ahora, obtenemos los detalles de cada GIF favorito
        const fetchLikedGifs = async () => {
            const gifs = await Promise.all(
                likedGifIds.map(async (id) => {
                    const gifData = await getGiftByID(id);
                    return gifData;
                })
            );
            setLikedGifs(gifs); // Guardamos los datos de los GIFs favoritos
            setIsLoading(false); // Detenemos la carga una vez que los GIFs se han cargado
        };

        fetchLikedGifs();
    }, []); // Se ejecuta solo una vez cuando el componente se monta

    return (
        <div className="fav-container">
            <h2>GIFs Favoritos</h2>
            <div className="fav-gifs">
                {isLoading ? (
                    <p>Cargando GIFs favoritos...</p>
                ) : likedGifs.length > 0 ? (
                    likedGifs.map((gif) => (
                        <GifItems key={gif.id} {...gif} /> // Pasamos los datos completos del GIF a GifItems
                    ))
                ) : (
                    <p>No tienes GIFs favoritos.</p>
                )}
            </div>
        </div>
    );
};
