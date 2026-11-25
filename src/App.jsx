/*import { useState } from "react";*/
import { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Menu from "./pages/menu";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ReservePage from "./pages/ReservePage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Routes, Route, useLocation } from "react-router-dom";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    document.getElementById(hash.slice(1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [pathname, hash]);

  return null;
}

function App() {
  /*const [count, setCount] = useState(0);*/

  return (
    <>
       <ScrollToTop />
      <Header />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<ReservePage />} />
        <Route
          path="/booking-confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
