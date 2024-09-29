import { useApi } from "../context/ApiContext";
import { useState } from "react"; // Import useState
import "./RecipeList.css";
import RecipePopup from "./RecipePopup"; // Import the popup component

const RecipeList = () => {
  const { recipes, loading } = useApi();
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to manage selected recipe
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  const openPopup = (recipe) => {
    setSelectedRecipe(recipe);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedRecipe(null);
    setIsPopupOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (!recipes.length) return <p>No recipes found.</p>;

  return (
    <div>
      <h1 className="rec">Recommended Meals</h1>
      <div id="recipe-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="card">
            <div className="card-image">
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                className="image"
              />
            </div>
            <div className="card-content">
              <div className="header">
                <p className="product-name">{recipe.recipe.label}</p>
              </div>
              <div className="detail">
                <p className="product-description source">
                  <span>Source: </span>
                  {recipe.recipe.source}
                </p>
                <p className="product-description">
                  <span>Yield: </span>
                  {recipe.recipe.yield}
                </p>
                <p className="product-description">
                  <span>Meal Type: </span>
                  {recipe.recipe.mealType}
                </p>
                <p className="product-description">
                  <span>Diet Labels: </span>
                  {recipe.recipe.dietLabels.join(", ")}
                </p>
                <p className="product-description">
                  <span>
                    <i className="fa-solid fa-location-dot"></i>{" "}
                  </span>
                  {recipe.restaurant}
                </p>
                {/* Read More Button */}
                <button
                  className="read-more-button"
                  onClick={() => openPopup(recipe)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}

        {isPopupOpen && (
          <RecipePopup recipe={selectedRecipe} onClose={closePopup} />
        )}
      </div>
    </div>
  );
};

export default RecipeList;
