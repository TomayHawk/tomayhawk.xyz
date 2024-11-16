import '../App.css';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>We provide exceptional services and information. Follow us on our social media platforms.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="about">About</a></li>
                            <li><a href="services">Services</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123 456 789</p>
                    </div>
                </div>
            </footer>

            <div className="footer-bottom">&copy; 2024-present Tomayhawk</div>
        </>
    )
}

export default Footer;
