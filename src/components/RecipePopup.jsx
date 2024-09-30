import React from "react";
import PropTypes from "prop-types";
import "./RecipePopup.css"; // Import the CSS for styling

const RecipeListPopup = ({ recipe, onClose }) => {
  if (!recipe) return null; // Don't render if there's no recipe

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-button" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Recipe Image and Title */}
        <div className="popup-header">
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            className="popup-image"
          />
          <h2 className="popup-title">{recipe.recipe.label}</h2>
        </div>

        {/* Health Labels and Serving Info */}
        <div className="popup-nutritional-info popup-nutrition">
          <p className="popup-nutritional-m">
            <strong>Health Labels:</strong>{" "}
            {recipe.recipe.healthLabels.slice(0, 5).join(", ")}
          </p>
          <div className="popup-servings">
            <i className="fa-solid fa-users"></i> {/* Servings Icon */}
            <p>{recipe.recipe.yield} servings</p>
            <p>
              <strong>Calories:</strong> {Math.round(recipe.recipe.calories)}{" "}
              kcal
            </p>
          </div>

          {/* Macronutrient Info */}
          <div className="popup-nutrition">
            <strong>Nutritions:</strong>
            <p>
              <i className="fa-solid fa-drumstick-bite"></i>{" "}
              {/* Protein Icon */}
              <strong>PROTEIN</strong>{" "}
              {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} g
            </p>
            <p>
              <i className="fa-solid fa-bacon"></i> {/* Fat Icon */}
              <strong>FAT</strong>{" "}
              {Math.round(recipe.recipe.totalNutrients.FAT.quantity)} g
            </p>
            <p>
              <i className="fa-solid fa-bread-slice"></i> {/* Carb Icon */}
              <strong>CARB</strong>{" "}
              {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)} g
            </p>
          </div>
        </div>

        {/* Nutritional Breakdown */}
        <div className="popup-nutrition-breakdown">
          <p>
            <i className="fa-solid fa-egg"></i> {/* Cholesterol Icon */}
            Cholesterol:{" "}
            {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)} mg
          </p>
          <p>
            <i className="fa-solid fa-salt-shaker"></i> {/* Sodium Icon */}
            Sodium: {Math.round(recipe.recipe.totalNutrients.NA.quantity)} mg
          </p>
          <p>
            <i className="fa-solid fa-bone"></i> {/* Calcium Icon */}
            Calcium: {Math.round(recipe.recipe.totalNutrients.CA.quantity)} mg
          </p>
          <p>
            <i className="fa-solid fa-cube"></i> {/* Magnesium Icon */}
            Magnesium: {Math.round(recipe.recipe.totalNutrients.MG.quantity)} mg
          </p>
          <p>
            <i className="fa-solid fa-heartbeat"></i> {/* Potassium Icon */}
            Potassium: {Math.round(recipe.recipe.totalNutrients.K.quantity)} mg
          </p>
          <p>
            <i className="fa-solid fa-weight-hanging"></i> {/* Iron Icon */}
            Iron: {Math.round(recipe.recipe.totalNutrients.FE.quantity)} mg
          </p>
        </div>

        {/* Additional Details: Ingredients, Diet Labels, and Cautions */}
        <div className="popup-additional-details">
          {/* Ingredients Section */}
          <div className="popup-ingredients">
            <h3 className="highlight">Ingredients</h3>
            <ul>
              {recipe.recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Diet Labels Section */}
          <div className="popup-diet-labels">
            <h3 className="highlight">Diet Labels</h3>
            {recipe.recipe.dietLabels.length > 0 ? (
              <ul>
                {recipe.recipe.dietLabels.map((label, index) => (
                  <li key={index}>{label}</li>
                ))}
              </ul>
            ) : (
              <p>No specific diet labels.</p>
            )}
          </div>

          {/* Cautions Section */}
{/*           <div className="popup-cautions">
            <h3 className=" caution">Cautions</h3>
            {recipe.recipe.cautions.length > 0 ? (
              <ul>
                {recipe.recipe.cautions.map((caution, index) => (
                  <li key={index} className="caution-item">
                    {caution}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No cautions listed for this recipe.</p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the component
RecipeListPopup.propTypes = {
  recipe: PropTypes.shape({
    recipe: PropTypes.shape({
      label: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      yield: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      totalNutrients: PropTypes.object.isRequired,
      ingredientLines: PropTypes.arrayOf(PropTypes.string).isRequired, // New prop
      cautions: PropTypes.arrayOf(PropTypes.string), // New prop
      healthLabels: PropTypes.arrayOf(PropTypes.string),
      dietLabels: PropTypes.arrayOf(PropTypes.string), // New prop
    }).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default RecipeListPopup;
