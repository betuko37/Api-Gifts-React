import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./GifItem.css";

export const GifItems = ({ url, title, id }) => {
    const [liked, setLiked] = useState(false);

    // Cargar estado del like desde localStorage
    useEffect(() => {
        const savedLikes = JSON.parse(localStorage.getItem("likedGifs")) || {};
        setLiked(savedLikes[id] || false);
    }, [id]);

    // Manejar el like y actualizar localStorage
    const handleLike = () => {
        const updatedLikes = { 
            ...JSON.parse(localStorage.getItem("likedGifs")) || {}, 
            [id]: !liked 
        };
        
        setLiked(!liked);
        localStorage.setItem("likedGifs", JSON.stringify(updatedLikes));
    };

    return (
        <div className="gif-card">
            <img className="gif-image" src={url} alt={title} />
            <p className="gif-title">{title}</p>
            <button className="like-button" onClick={handleLike}>
                {liked ? "❤️" : "🖤"} {/* Negro cuando no está likeado, rojo cuando sí */}
            </button>
        </div>
    );
};

GifItems.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string
};
