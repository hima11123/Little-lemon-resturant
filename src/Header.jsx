import { useState } from "react";
import "./Header.css";
import Nav from "./Nav";
import logo from "./assets/icons_assets/Logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <a className="header-brand" href="#home" aria-label="Little Lemon home">
        <img className="logo" src={logo} alt="Little Lemon" />
      </a>
      <Nav
        isOpen={isMenuOpen}
        onNavigate={() => setIsMenuOpen(false)}
      />
      <button className="header-button" type="button" onClick={() => window.location.href = "/booking"}>
        Reserve a table
      </button>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
