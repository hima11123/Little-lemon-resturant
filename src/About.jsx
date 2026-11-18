import "./About.css";
import foundersImage from "./assets/icons_assets/Mario and Adrian b.jpg";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <p className="about-eyebrow">Our story</p>
        <h2>A neighborhood favorite with a Mediterranean soul.</h2>
        <p>
          Little Lemon is a family-owned restaurant focused on traditional
          recipes with a modern twist. Our chefs prepare every meal with fresh
          ingredients, bold herbs, and a generous serving of hospitality.
        </p>
        <p>
          From a quick lunch to a long dinner with friends, we make every visit
          feel like coming home.
        </p>
        <button className="about-button" type="button">
          Get to know us
        </button>
      </div>
      <img
        src={foundersImage}
        alt="Little Lemon co-founders Mario and Adrian"
        className="about-image"
      />
    </section>
  );
}
