import "./App.css";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Stats/>
        <Cta/>
       <Footer/>
        
      </div>
    </>
  );
}

export default App;
