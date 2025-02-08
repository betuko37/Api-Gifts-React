import { useEffect,useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true); 
        getGifts(category, page)
            .then(newImages => {
                setImages(newImages);
                setIsLoading(false); 
            })
            .catch(() => setIsLoading(false));
    }, [category, page]);
    
    


    return{
        images,
        isLoading,
        page,
        setPage,
    }

}
