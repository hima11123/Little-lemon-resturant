import "./Card.css";

export default function Card({ title, description, price, image }) {
  return (
    <article className="dish-card">
      <img src={image} alt={title} className="dish-image" />
      <div className="dish-content">
        <h3 className="dish-title">{title}</h3>
        <p className="dish-description">{description}</p>
      </div>
      <div className="dish-footer">
        <p className="dish-price">${price.toFixed(2)}</p>
        <button className="order-button">Order Now</button>
      </div>
    </article>
  );
}
