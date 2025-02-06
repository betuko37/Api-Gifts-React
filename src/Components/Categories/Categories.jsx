import "./Categories.css";
import { useState } from "react";
import { Searchh } from "../Search/Searchh";
import { GridGifts } from "../GridGifts/GridGifts";


export const Categories = () => {

  const [category, setCategory] = useState([
    "One Punch"
  ]);

  const onNewCategory = (newCategory) => {
    
    if (category.includes(newCategory)) return;
    setCategory([newCategory, ...category]);
  
  };

  return (
    <>

      {/* Titulo */}
      <h2>GifExpertApp</h2>

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
