import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="f1">
        <img src="src/assets/icons_assets/Logo.svg" alt="Logo" className="logo" />
        <p>Fresh ingredients, bright flavors, and a warm welcome every time.</p>
      </div>
      <div className="f2">
        <h6>EXPLORE</h6>
        <p>Home Our Story Menu Reservations</p>
      </div>
      <div className="f3">
        <h6>FIND US</h6>
        <p>123 Main Street, City, State 12345</p>
      </div>
      <div className="f4">
        <h6>HOURS</h6>
        <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
      </div>
    </footer>
  );
}
