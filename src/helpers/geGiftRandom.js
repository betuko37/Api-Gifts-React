import { API_KEY } from "../config/apikey";

export const getRandomGift = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    return {
        id: data.id,
        title: data.title,
        url: data.images?.downsized_medium.url
    };
};
