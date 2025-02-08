import { useState } from "react";
import Categoryy from "../Components/Category/Category";
import { CategoriesGrid } from "../Components/CategoriesGrid/CategoriesGrid";

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div>
            <CategoriesGrid onSelectCategory={setSelectedCategory} />
            {selectedCategory && <Categoryy category={selectedCategory} />}
        </div>
    );
};

export default Category;
