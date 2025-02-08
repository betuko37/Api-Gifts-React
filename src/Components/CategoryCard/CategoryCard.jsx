import PropTypes from "prop-types";
import "./CategoryCard.css";

export const CategoryCard = ({ category, imageUrl, onClick }) => {
    return (
        <div className="category-container-card">
            <div className="category-card" onClick={onClick}>
            <img src={imageUrl} alt={category} className="category-image" />
            <div className="category-overlay">
                <h2 className="category-title">{category}</h2>
            </div>
        </div>
        </div>
    );
};



CategoryCard.propTypes = {
    category: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
