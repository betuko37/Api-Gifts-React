import { useState } from "react";
import PropTypes from "prop-types";
import "./Searchh.css"; // Importamos los estilos

export const Searchh = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.toLowerCase());
        setInputValue("");
    };

    return (
        <>
        <h1 className="title-search">🔍 Explora y Encuentra los Mejores GIFs 🎉</h1>

              <form className="search-form" onSubmit={onSubmit}>
            <input
                className="search-input"
                type="text"
                placeholder="Buscar gifs..."
                value={inputValue}
                onChange={onInputChange}
            />
            <button className="search-button" type="submit">🔍</button>
        </form>
        
        </>
        
    );
};

Searchh.propTypes = {
    onNewCategory: PropTypes.func,
};
