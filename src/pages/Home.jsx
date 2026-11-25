import Highlites from "../Highlites";
import TestimonialsSection from "../Testimonials-section";
import About from "../About";
import Main from "../Mainn";
export default function Home() {
  return (
    <div id="home">
      <Main />
      <About />
      <Highlites />
      <TestimonialsSection />
    </div>
  );
}
