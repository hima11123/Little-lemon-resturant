
import { Link } from "react-router-dom";
import "./Nav.css";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/booking" },
  { name: "Testimonials", path: "/testimonials" },
];

export default function Nav({ isOpen, onNavigate }) {
  return (
    <nav
      className={`navigation${isOpen ? " navigation-open" : ""}`}
      id="primary-navigation"
      aria-label="Main navigation"
    >
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} onClick={onNavigate}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
