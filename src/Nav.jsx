
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Nav.css";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/booking" },
  { name: "Testimonials", path: "/#testimonials" },
];

export default function Nav({ isOpen, onNavigate }) {
  const location = useLocation();

  function handleNavigation(event, path) {
    const target = new URL(path, window.location.origin);
    const sameLocation =
      location.pathname === target.pathname &&
      location.hash === target.hash;

    if (sameLocation) {
      event.preventDefault();

      if (target.hash) {
        document.querySelector(target.hash)?.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }

    onNavigate?.();
  }

  return (
    <nav
      className={`navigation${isOpen ? " navigation-open" : ""}`}
      id="primary-navigation"
      aria-label="Main navigation"
    >
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              onClick={(event) => handleNavigation(event, link.path)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
