/*import { useState } from "react";*/
import "./App.css";
import Header from "./Header";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import AboutPage from "./pages/About-page";
import { Routes, Route } from "react-router-dom";
function App() {
  /*const [count, setCount] = useState(0);*/

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
