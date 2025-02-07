import { useState, useEffect } from "react";
import { GifItems } from "../GifItem/GifItem";
import { getGiftByID } from "../../helpers/getGifByID";
import "./Fav.css";

export const Fav = () => {
    const [likedGifs, setLikedGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedLikes = JSON.parse(localStorage.getItem("likedGifs")) || {};

        const likedGifIds = Object.keys(savedLikes).filter(id => savedLikes[id]);

        const fetchLikedGifs = async () => {
            const gifs = await Promise.all(
                likedGifIds.map(async (id) => {
                    const gifData = await getGiftByID(id);
                    return gifData;
                })
            );
            setLikedGifs(gifs);
            setIsLoading(false);
        };

        fetchLikedGifs();
    }, []); // Se ejecuta solo una vez cuando el componente se monta

    return (
        <div className="fav-container">
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
