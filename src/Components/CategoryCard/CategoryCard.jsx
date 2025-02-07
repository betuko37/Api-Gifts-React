import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

export const CategoryCard = ({ category, imageUrl }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/category/${category}`);
    };

    return (
        <div className="category-card" onClick={handleClick}>
            <img src={imageUrl} alt={category} className="category-image" />
            <div className="category-overlay">
                <h2 className="category-title">{category}</h2>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};
