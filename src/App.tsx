import { useState } from 'react';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <a href="" className="logo">tomayhawk</a>
        <input type="text" className="nav-search" placeholder="Search..." />
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="about">About</a></li>
          <li><a href="my-manager">MyManager</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>
      </nav>
      <div className="container">
        <div className="interactive-box" onClick={() => window.location.href = "/about"}>
          About
        </div>
        <div className="interactive-box" onClick={() => window.location.href = "/services"}>
          Services
        </div>
        <div className="interactive-box" onClick={() => window.location.href = "/contact"}>
          Contact
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We provide exceptional services and information. Follow us on our social media platforms.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 789</p>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        &copy; 2024 YourCompanyName | Designed by YourName
      </div>
    </>
  );
}

export default App;
