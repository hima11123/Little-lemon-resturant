export default function Testimonials({ rating, comment, name }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <article className="testimonial-card">
      <div
        className="testimonial-rating"
        role="img"
        aria-label={`${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }, (_, index) => {
          const isFull = index < fullStars;
          const isHalf = index === fullStars && hasHalfStar;

          return (
            <span
              className={`testimonial-star${isFull ? " testimonial-star-full" : ""}${isHalf ? " testimonial-star-half" : ""}`}
              aria-hidden="true"
              key={index}
            >
              ★
            </span>
          );
        })}
      </div>
      <blockquote className="testimonial-comment">{comment}</blockquote>
      <footer className="testimonial-author">{name}</footer>
    </article>
  );
}
