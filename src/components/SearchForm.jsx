import { useState } from "react";
import { useApi } from "../context/ApiContext";
import "./SearchForm.css"; // Assuming you have custom styles defined here

const cities = ["Tokyo", "Mumbai", "New York", "London", "Paris"]; // Sample cities

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); // State for selected city
  const { searchRecipes } = useApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes(query, selectedCity); // Pass the city to searchRecipes
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-flex">
        {/* Smaller search input */}
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search for recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            className="search-input"
          />
        </div>

        {/* City select dropdown */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          required
          className="select" // Updated class name for the dropdown
        >
          <option className="dropdown" value="" disabled>
            Select a city
          </option>
          {cities.map((city, index) => (
            <option className="dropdown-button" key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Button in a separate box */}
      <div className="button-container">
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
