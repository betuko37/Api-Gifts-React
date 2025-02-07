import { API_KEY } from "../config/apiKey";

export const getCategoryGifs = async (category, limit = 20, rating = "g") => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${limit}&rating=${rating}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
    }));
};
