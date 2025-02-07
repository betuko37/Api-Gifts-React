import { API_KEY } from '../config/apiKey';

export const getTrendingGifs = async (limit = 10, rating = "r", offset = 0) => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=${rating}&offset=${offset}&country_code:MX`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
    }));
};
