import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Pages/Log-in/LogIn";
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
