import Highlites from "../Highlites";
import Card from "../Card";
export default function Menu() {
  return (
    <div>
      <Highlites />
      <section className="highlites-section">
        <section className="highlites-section-cards">
          <Card
            title="lemon Dessert"
            description="The famous lemon dessert of our menu, made with fresh ingredients and a hint of citrus."
            price={12.99}
            image="src/assets/icons_assets/lemon dessert.jpg"
          />
          <Card
            title="Bruchetta"
            description="The famous bruchetta of our menu, made with fresh vegetables and feta cheese."
            price={12.99}
            image="src/assets/icons_assets/bruchetta.svg"
          />
          <Card
            title="Greek Salad"
            description="The famous greek salad of our menu, made with fresh vegetables and feta cheese."
            price={12.99}
            image="src/assets/icons_assets/greek salad.jpg"
          />
        </section>
      </section>
    </div>
  );
}
