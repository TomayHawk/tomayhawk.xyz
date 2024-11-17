import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import MyManager from "./pages/projects-pages/MyManager.tsx";
import Contact from "./pages/Contact.tsx";
import './App.css';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/my-manager" element={<MyManager />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
