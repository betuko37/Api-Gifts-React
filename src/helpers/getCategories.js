import { API_KEY } from "../config/apiKey";

export const getCategories = async () => {
    const url = `https://api.giphy.com/v1/gifs/categories?api_key=${API_KEY}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map(category => ({
        name: category.name,
        imageUrl: category.gif?.images?.downsized_medium.url || "https://via.placeholder.com/300x200?text=Sin+Imagen"
    }));
};
