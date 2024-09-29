import SearchForm from "./SearchForm"; // Import SearchForm
import "./Header.css"; // Import CSS styles

const images = [
  {
    src: "/images/delicious-food-groups-arrangement-top-view_1_11zon.jpg",
    className: "image-class",
  },
  {
    src: "/images/flat-lay-batch-cooking-composition_2_11zon.jpg",
    className: "image-class",
  },
  {
    src: "/images/immunity-boosting-food-healthy-lifestyle_3_11zon.jpg",
    className: "image-class",
  },
  {
    src: "/images/overhead-view-organic-slices-vegetable-fruits-plate-with-measuring-tape_4_11zon.jpg",
    className: "image-class",
  },
  {
    src: "/images/real-food-pyramid-assortment-top-view_5_11zon.jpg",
    className: "image-class",
  },
  {
    src: "/images/set-pecan-pistachios-almond-peanut-cashew-pine-nuts-lined-up-assorted-nuts-dried-fruits-mini-different-bowls_11zon.jpg",
    className: "image-class",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="flex justify-between items-center">
        <h1>Meal Recommendation</h1>
        <SearchForm />
      </div>
      <p className="description">
        <span className="gradient-text">Find your favorite recipes</span> by
        city!
      </p>

      {/* Display all images statically */}
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            className={image.className} // Apply the class name here
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
