import React from 'react';
import './SearchBar.css'; // Import the CSS file

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="location">
        <span className="location-icon">📍</span>
        <span className="location-text">Bangalore</span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search doctors, clinics, hospitals, etc." />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default SearchBar;