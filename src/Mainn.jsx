import "./Mainn.css";

export default function Main() {
  return (
    <main className="hero">
      <img
        src="src/assets/icons_assets/restaurant.jpg"
        alt="Little Lemon Logo"
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
