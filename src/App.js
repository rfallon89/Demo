import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import LogIn from "./Components/LogIn";
import "./Styles/App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <div id="view">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
