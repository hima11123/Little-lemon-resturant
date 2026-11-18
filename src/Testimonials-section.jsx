import "./Testimonials.css";
import Testimonials from "./Testimonials";

const testimonials = [
  {
    name: "Alex Morgan",
    rating: 4.5,
    comment:
      "The food was fresh and full of flavor, and the staff made us feel right at home. I can't wait to come back.",
  },
  {
    name: "Sam Rivera",
    rating: 4.5,
    comment:
      "A lovely neighborhood spot with warm service and wonderful Mediterranean dishes. The lemon dessert was a highlight.",
  },
  {
    name: "Jordan Lee",
    rating: 4.5,
    comment:
      "Everything was delicious, thoughtfully prepared, and served in a welcoming atmosphere. Perfect for dinner with friends.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-heading">
        <p className="testimonials-eyebrow">Kind words from our guests</p>
        <h2 id="testimonials-title">Testimonials</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <Testimonials key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
