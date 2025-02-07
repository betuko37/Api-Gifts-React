import { API_KEY } from "../config/apiKey";

export const getGifts = async (category, page = 1) => {
    const limit = 12;
    const offset = (page - 1) * limit; 

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${limit}&offset=${offset}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
};
