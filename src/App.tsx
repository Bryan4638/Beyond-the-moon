import Hero from "./components/Hero";
import About from "./components/About";
import NailServices from "./components/NailServices";
import Techniques from "./components/Techniques";
import MakeupServices from "./components/MakeupServices";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="min-h-screen bg-[#FFF8F0] [-ms-overflow-style:none] [scrollbar-width:none] 
            [&::-webkit-scrollbar]:hidden"
    >
      <Hero />
      <About />
      <NailServices />
      <Techniques />
      <MakeupServices />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
