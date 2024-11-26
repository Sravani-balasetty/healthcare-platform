import React, { useState } from "react";
import "./herosection.css";

const HeroSection = () => {
  const [isProvidersOpen, setProvidersOpen] = useState(false);
  const [isCorporatesOpen, setCorporatesOpen] = useState(false);
  const [isSecurityOpen, setSecurityOpen] = useState(false);

  return (
    <header className="sticky-header">
      <div className="navbar">
        {/* Left Section: Logo and Navigation */}
        <div className="left-section">
          <div className="logo">practo</div>
          <nav className="nav-links">
            <a 
              href="https://www.practo.com/doctors" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Find Doctors
            </a>
            <a href="#video-consult">Video Consult</a>
            <a href="#surgeries">Surgeries</a>
          </nav>
        </div>

        {/* Right Section: Dropdowns and Auth */}
        <div className="right-section">
          {/* Dropdown for Providers */}
          <div
            className="dropdown"
            onMouseEnter={() => setProvidersOpen(true)}
            onMouseLeave={() => setProvidersOpen(false)}
          >
            <button className="dropdown-btn">For Providers ▾</button>
            {isProvidersOpen && (
              <div className="dropdown-menu">
                <a href="#practo-assured">Practo Assured</a>
                <a href="#practo-prime">Practo Prime</a>
                <a href="#software">Software for Providers</a>
                <a href="#list-practice">List Your Practice</a>
              </div>
            )}
          </div>

          {/* Dropdown for Corporates */}
          <div
            className="dropdown"
            onMouseEnter={() => setCorporatesOpen(true)}
            onMouseLeave={() => setCorporatesOpen(false)}
          >
            <button className="dropdown-btn">For Corporates ▾</button>
            {isCorporatesOpen && (
              <div className="dropdown-menu">
                <a href="#wellness-plans">Health and Wellness Plans</a>
                <a href="#group-insurance">Group Insurance</a>
              </div>
            )}
          </div>

          {/* Dropdown for Security & Help */}
          <div
            className="dropdown"
            onMouseEnter={() => setSecurityOpen(true)}
            onMouseLeave={() => setSecurityOpen(false)}
          >
            <button className="dropdown-btn">Security & Help ▾</button>
            {isSecurityOpen && (
              <div className="dropdown-menu">
                <a href="#data-security">Data Security</a>
                <a href="#help">Help</a>
              </div>
            )}
          </div>

          {/* Login/Signup */}
          <div className="auth-links">
            <a 
              href="https://accounts.practo.com/login?next=%2Fcheckid_request&intent=fabric" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Login / Signup
            </a>
          </div>
          <div className="auth-links">
            <a 
              href="http://localhost:3000/login" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Login / Signup
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
