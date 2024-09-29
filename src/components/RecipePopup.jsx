import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./RecipePopup.css"; // Import the CSS for styling

const RecipePopup = ({ recipe, onClose }) => {
  if (!recipe) return null; // Don't render if there's no recipe

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="popup-title">{recipe.recipe.label}</h2>
        <img
          src={recipe.recipe.image}
          alt={recipe.recipe.label}
          className="popup-image"
        />
        <p className="popup-description">
          <strong>Source:</strong> {recipe.recipe.source}
        </p>
        <p className="popup-description">
          <strong>Yield:</strong> {recipe.recipe.yield}
        </p>
        <p className="popup-description">
          <strong>Health Labels:</strong>{" "}
          {recipe.recipe.healthLabels.slice(0, 4).join(", ")}
        </p>

        <p className="popup-description">
          <strong className="cautions">Cautions:</strong>{" "}
          {recipe.recipe.cautions.join(", ")}
        </p>
        <p className="popup-description">
          <strong>Cuisine Type:</strong> {recipe.recipe.cuisineType}
        </p>
        <p className="popup-description">
          <strong>Meal Type:</strong> {recipe.recipe.mealType}
        </p>
        <p className="popup-description">
          <strong>Diet Labels:</strong> {recipe.recipe.dietLabels.join(", ")}
        </p>
        <p className="popup-description">
          <strong>
            <i className="fa-solid fa-location-dot"></i> Restaurant:
          </strong>{" "}
          {recipe.restaurant}
        </p>
      </div>
    </div>
  );
};

// Define PropTypes for the component
RecipePopup.propTypes = {
  recipe: PropTypes.shape({
    recipe: PropTypes.shape({
      label: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      yield: PropTypes.number.isRequired,
      dietLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
      healthLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
      cautions: PropTypes.arrayOf(PropTypes.string).isRequired,
      cuisineType: PropTypes.string.isRequired,
      mealType: PropTypes.string.isRequired,
    }).isRequired,
    restaurant: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default RecipePopup;
