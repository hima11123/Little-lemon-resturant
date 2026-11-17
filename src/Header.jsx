import Nav from "./Nav";

export default function Header() {
  return (
    <header style={{ backgroundColor: "#f9fcfa", color: "#fff", padding: "0 8%" , display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px"}}>
      <img src="src/assets/icons_assets/Logo .svg" alt="Little Lemon Logo" />
        <Nav />
        <button style={{ backgroundColor: "#d0d02a", color: "#fff", border: "none", padding: "0.5rem 1rem", borderRadius: "4px" }}>
          reserve a table
        </button>
    </header>
  );
}