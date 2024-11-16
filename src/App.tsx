import './App.css';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <div className="interactive-box" onClick={() => window.location.href = "/about"}>About</div>
        <div className="interactive-box" onClick={() => window.location.href = "/services"}>Services</div>
        <div className="interactive-box" onClick={() => window.location.href = "/contact"}>Contact</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
