import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isProvidersOpen, setProvidersOpen] = useState(false);
  const [isCorporatesOpen, setCorporatesOpen] = useState(false);
  const [isSecurityOpen, setSecurityOpen] = useState(false);

  return (
    <div className="navbar">
      <span className="logo">practo</span>
      <nav className="nav-links">
        {/* Regular Links */}
        <a href="#">Find Doctors</a>
        <a href="#">Video Consult</a>
        <a href="#">Surgeries</a>

        {/* For Providers Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setProvidersOpen(true)}
          onMouseLeave={() => setProvidersOpen(false)}
        >
          <button className="dropdown-btn">For Providers ▾</button>
          {isProvidersOpen && (
            <div className="dropdown-menu">
              <a href="#">Practo Assured</a>
              <a href="#">Practo Prime</a>
              <a href="#">Software for providers</a>
              <a href="#">List your practice for free</a>
              <a href="#">ABDM</a>
            </div>
          )}
        </div>

        {/* For Corporates Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setCorporatesOpen(true)}
          onMouseLeave={() => setCorporatesOpen(false)}
        >
          <button className="dropdown-btn">For Corporates ▾</button>
          {isCorporatesOpen && (
            <div className="dropdown-menu">
              <a href="#">Health and wellness plans</a>
              <a href="#">Group insurance</a>
            </div>
          )}
        </div>

        {/* Security & Help Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setSecurityOpen(true)}
          onMouseLeave={() => setSecurityOpen(false)}
        >
          <button className="dropdown-btn">Security & Help ▾</button>
          {isSecurityOpen && (
            <div className="dropdown-menu">
              <a href="#">Data security</a>
              <a href="#">Help</a>
            </div>
          )}
        </div>

        {/* Auth Links */}
        <div className="auth-links">
          <a href="#">Login / Signup</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

