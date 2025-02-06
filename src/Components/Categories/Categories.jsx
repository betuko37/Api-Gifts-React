import "./Categories.css";
import { useState } from "react";
import { Searchh } from "../Search/Searchh";
import { GridGifts } from "../GridGifts/GridGifts";


export const Categories = () => {

  const [category, setCategory] = useState(['']);
  

  const onNewCategory = (newCategory) => {
    
    if (category.includes(newCategory)) return;
    setCategory([newCategory]);
  
  };

  return (
    <>

      {/* Input */}
      <Searchh onNewCategory={onNewCategory} />

      {/* Listado de gift */}
      {
        category.map((category) => (
          <GridGifts 
            key={category} 
            category={category} />
        ))
      }

    </>
  );
};
