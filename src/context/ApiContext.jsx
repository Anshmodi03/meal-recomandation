import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Define an array of restaurant names
  const restaurantNames = [
    "Savor Kitchen",
    "Flavor Town",
    "Gourmet Haven",
    "Delicious Bites",
    "Taste Buds",
    "Epicurean Delight",
    "Culinary Corner",
    "Dine Divine",
    "Palate Pleasers",
    "Foodie Paradise",
    "Heath Foody",
    "Diner Palace",
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const searchRecipes = async (query = "coffee", city = "") => {
    // Default query set to "coffee"
    setLoading(true);
    const appId = "167efe2a"; // Hardcoded App ID
    const appKey = "a7c28fd3969d5570dc1824758b6d05ed"; // Hardcoded App Key

    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

    // Log the full API URL
    console.log("API URL:", apiUrl);

    try {
      const response = await axios.get(apiUrl);
      const shuffledResults = shuffleArray(response.data.hits); // Shuffle results

      // Limit the number of recipes to 10 and assign unique restaurant names
      const limitedRecipes = shuffledResults
        .slice(0, 12)
        .map((recipe, index) => ({
          ...recipe,
          restaurant: restaurantNames[index % restaurantNames.length], // Assign restaurant name
        }));

      setRecipes(limitedRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchRecipes(); // Call searchRecipes with default query on mount
  }, []); // Empty dependency array to run only once on mount

  return (
    <ApiContext.Provider value={{ recipes, searchRecipes, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
