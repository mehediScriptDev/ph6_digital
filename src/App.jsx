import "./App.css";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Steps from "./components/Steps";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Stats/>
        <Steps/>
        <Pricing/>
        <Cta/>
       <Footer/>
        
      </div>
    </>
  );
}

export default App;
