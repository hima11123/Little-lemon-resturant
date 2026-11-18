import "./Mainn.css";
import restaurantImage from "./assets/icons_assets/restaurant.jpg";

export default function Main() {
  return (
    <main className="hero" id="home">
      <img
        src={restaurantImage}
        alt=""
        aria-hidden="true"
        className="hero-image"
      />
      <div className="hero-content">
        <h6>FRESH FLAVORS. WARM MOMENTS.</h6>
        <h1>A little taste of the Mediterranean.</h1>
        <p>
          At Little Lemon, every dish is made to bring people together. Seasonal
          ingredients, bright flavors, and a table waiting for you.
        </p>
        <button className="hero-button">
          reserve a table
        </button>
      </div>
    </main>
  );
}
