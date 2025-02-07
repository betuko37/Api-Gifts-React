import { API_KEY } from "../config/apikey";

export const getCategoryGifs = async (category, limit = 20, rating = "g", offset = 0) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(category)}&limit=${limit}&rating=${rating}&offset=${offset}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
    }));
};
