import "./App.css";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProductsCarts from "./components/ProductsCarts";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Stats/>
        <ProductsCarts cart={cart} onAddToCart={handleAddToCart} />
        <Steps/>
        <Pricing/>
        <Cta/>
       <Footer/>
        
      </div>
    </>
  );
}

export default App;
