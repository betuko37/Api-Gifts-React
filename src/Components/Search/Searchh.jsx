import { useState } from "react";
import PropTypes from "prop-types";

export const Searchh = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {   
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        
        onNewCategory(inputValue.toLocaleLowerCase());
        setInputValue('');
    }


    return (
        <form onSubmit={onSubmit}>

            <input 
                type="text" 
                placeholder="Buscar..." 
                value={inputValue}
                onChange={onInputChange}
            />

        </form>
        
    );
}


Searchh.propTypes = {
    onNewCategory: PropTypes.func
}