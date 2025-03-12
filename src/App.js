import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LocationDropdown from "./components/LocationDropdown";
import Contact from "./components/Contact";
import "./App.css";
import "./footer.css";
import "./navbar.css"

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const listings = [
    { id: 1, location: "Bansi Nagar", price: "₹5000", description: "Room for rent in Bansi Nagar", imageUrl: "room1.jpg" },
    { id: 2, location: "Vasudev Nagar", price: "₹6500", description: "Room for rent in Vasudev Nagar", imageUrl: "room2.jpg" },
    { id: 3, location: "Vasudev Nagar", price: "₹7000", description: "Spacious 1BHK in Vasudev Nagar", imageUrl: "room1.jpg" },
    { id: 4, location: "Shivaji Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 5, location: "Vasudev Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 6, location: "Shivaji Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 7, location: "Vasudev Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 8, location: "Shivaji Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 9, location: "Shivaji Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 10, location: "Vasudev Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 11, location: "Shivaji Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 12, location: "Shivaji Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Rent<span className="btn-E">E</span>ase</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-toggle">
          ☰
        </button>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="header-btn">Home</Link>
          <Link to="/contact" className="header-btn">Contact</Link>
          <button className="header-btn">Buy</button>
          <button className="header-btn">Rent</button>
          <button className="header-btn">Sell</button>
        </nav>
      </header>

      <main className="app-main">
        <LocationDropdown />
        <h2 className="results-header">Available Listings</h2>
        <div className="listings-grid">
          {listings.map((listing) => (
            <div key={listing.id} className="listing-card">
              <img src={listing.imageUrl} alt={listing.description} className="listing-img" />
              <div className="listing-details">
                <h3 className="listing-title">{listing.description}</h3>
                <span className="listing-price">{listing.price}</span>
                <Link to="/contact" className="contact-btn">Contact Owner</Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-about">
            <p>&copy; 2025 RentEase. All Rights Reserved.</p>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
            </div>
          </div>

          <div className="footer-social">
            <p>Follow us on:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="facebook-icon.png" alt="Facebook" className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="twitter-icon.png" alt="Twitter" className="social-icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="instagram_icon.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <p>📧 Email: <strong> ayyansk1110@gmail.com</strong></p>
            <p>📞 Phone: <strong>+91  9022609868</strong></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
