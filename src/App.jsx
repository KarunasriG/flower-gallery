import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
    <h1 className="text-5xl font-bold mb-4">Welcome to Flower Gallery</h1>
    <p className="text-lg">Explore our beautiful flower decorations for events.</p>
    <a
      href="/gallery"
      className="mt-6 px-6 py-3 bg-white text-green-600 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition"
    >
      View Gallery
    </a>
  </div>
);


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
