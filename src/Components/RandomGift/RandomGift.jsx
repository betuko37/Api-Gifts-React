import { useState, useEffect } from "react";
import { getRandomGift } from "../../helpers/geGiftRandom";
import "./RandomGift.css";

export const RandomGiftComponent = () => {
    const [gift, setGift] = useState(null);

    const fetchGift = async () => {
        const newGift = await getRandomGift();
        setGift(newGift);
    };

    useEffect(() => {
        fetchGift();
    }, []);

    return (
        <div className="container ">
            {gift && (
                <div className="container-gift">
                    <h2 className="gift-title">{gift.title}</h2>
                    <img 
                        src={gift.url} 
                        alt={gift.title} 
                        className="gift-image"
                    />
                </div>
            )}
            <button onClick={fetchGift} className="random-button">Obtener otro GIF</button>
        </div>
    );
};