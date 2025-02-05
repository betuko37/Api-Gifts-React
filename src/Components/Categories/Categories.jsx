import { Searchh } from "../Search/Searchh";
import "./Categories.css";
import { useState } from "react";

export const Categories = () => {
  const [category, setCategory] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
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
      <ol>
        {category.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
