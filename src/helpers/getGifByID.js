import { API_KEY } from "../config/apiKey";


export const getGiftByID= async(gifId) => {

    const url = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    return {
        id: data.id,
        title: data.title,
        url: data.images?.downsized_medium.url
    };
    
}
