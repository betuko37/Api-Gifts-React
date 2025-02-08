import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import {getCategories} from '../../helpers/getCategories'
import "./CategoriesGrid.css";



export const CategoriesGrid = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
    };

    return (
        <div className="categories-grid">
            {categories.map((category) => (
                <div key={category.name} onClick={() => handleCategoryClick(category.name)}>
                    <CategoryCard 
                        category={category.name} 
                        imageUrl={category.imageUrl} 
                    />
                </div>
            ))}
        </div>
    );
};


