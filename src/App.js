import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Buy from "./components/Buy";
import "./App.css";
import "./footer.css";
import "./navbar.css";
import "./filter.css";

const Home = () => {
  const [selectedArea, setSelectedArea] = useState("All");

  const listings = [
    { id: 1, location: "Bansi Nagar", price: "₹5000", description: "Room for rent in Bansi Nagar", imageUrl: "room1.jpg" },
    { id: 2, location: "Vasudev Nagar", price: "₹6500", description: "Room for rent in Vasudev Nagar", imageUrl: "room2.jpg" },
    { id: 3, location: "Vasudev Nagar", price: "₹7000", description: "Spacious 1BHK in Vasudev Nagar", imageUrl: "room1.jpg" },
    { id: 4, location: "Shivaji Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 5, location: "Vasudev Nagar", price: "₹8000", description: "Spacious 1BHK in Vasudev Nagar", imageUrl: "room2.jpg" },
    { id: 6, location: "Shivaji Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 7, location: "Vasudev Nagar", price: "₹8000", description: "Spacious 1BHK in Vasudev Nagar", imageUrl: "room2.jpg" },
    { id: 8, location: "Shivaji Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 9, location: "Shivaji Nagar", price: "₹8000", description: "Spacious 1BHK in Vasudev Nagar", imageUrl: "room2.jpg" },
    { id: 10, location: "Vasudev Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
    { id: 11, location: "Shivaji Nagar", price: "₹8000", description: "Spacious 1BHK in Vasudev Nagar", imageUrl: "room2.jpg" },
    { id: 12, location: "Shivaji Nagar", price: "₹8000", description: "Room for rent in Bansi Nagar", imageUrl: "room2.jpg" },
  ];
  // Unique locations for filtering
  const uniqueAreas = ["All", ...new Set(listings.map((listing) => listing.location))];

  // Filtered listings based on selection
  const filteredListings = selectedArea === "All" ? listings : listings.filter((listing) => listing.location === selectedArea);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">Rent<span className="btn-E">E</span>ase</h1>
        <nav className="nav-links">
          <Link to="/" className="header-btn">Home</Link>
          <Link to="/contact" className="header-btn">Contact</Link>
          <Link to="/Buy" className="header-btn">Buy</Link>
          <Link to="/" className="header-btn">Rent</Link>

         
        </nav>
      </header>

      {/* 🔹 Filter Section */}
      <div className="filter-container">
        <label className="filter-label">📍 Select Area:</label>
        <select className="filter-dropdown" value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
          {uniqueAreas.map((area, index) => (
            <option key={index} value={area}>{area}</option>
          ))}
        </select>
      </div>

      {/* Listings */}
      <main className="app-main">
        <h2 className="results-header">🏠 Available Listings</h2>
        <div className="listings-grid">
          {filteredListings.length > 0 ? (
            filteredListings.map((listing) => (
              <div key={listing.id} className="listing-card">
                <img src={listing.imageUrl} alt={listing.description} className="listing-img" />
                <div className="listing-details">
                  <h3 className="listing-title">{listing.description}</h3>
                  <span className="listing-price">{listing.price}</span>
                  <div className="button-container">
                    <Link to="/contact" className="contact-btn">Contact Owner</Link>
                    <Link to="/Buy" className="contact-btn">Buy</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No listings available for {selectedArea}</p>
          )}
        </div>
      </main>

      {/* 🔹 Footer Section */}
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
            <p>📧 Email: <strong>ayyansk1110@gmail.com</strong></p>
            <p>📞 Phone: <strong>+91 9022609868</strong></p>
           
            

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
      <Route path="/Buy" element={<Buy />} />
    </Routes>
  </Router>
);

export default App;
