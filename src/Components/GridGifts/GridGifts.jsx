import PropTypes from "prop-types";
import "./GridGifts.css";
import { getGifts } from "../../helpers/getGifs";
import { useEffect } from "react";




export const GridGifts = ({ category }) => {

    useEffect(() => {
        /* Enviar categorias a fetch */
        getGifts(category);
    },);




    return (
        <>
            <h3>{category}</h3>
        </>

    )


}



GridGifts.propTypes = {
    category: PropTypes.string
}